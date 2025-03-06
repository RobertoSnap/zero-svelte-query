import * as drizzleSchema from "$server/db/tables/index.js";
import { messages, messageTags, tags, users } from "$server/db/tables/placeholder.table.js";
import { Zero } from "@rocicorp/zero";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { drizzle } from "drizzle-orm/node-postgres";
import path from "path";
import { Pool } from "pg";
import { GenericContainer, Network, PullPolicy } from "testcontainers";

import { exec } from "child_process";
import { randomUUID } from "crypto";
import { schema } from "../zero/schema.js";

const PG_PORT = 5732
const ZERO_PORT = 5949

export const getNewZero = async () => {
  return new Zero({
    server: `http://localhost:${ZERO_PORT}`,
    userID: "1",
    schema: schema,
    kvStore: "mem",
  });
};

const pool = new Pool({
  host: "localhost",
  port: PG_PORT,
  user: "user",
  password: "password",
  database: "drizzle_zero",
});

export const db = drizzle(pool, {
  schema: drizzleSchema,
});

export const seed = async () => {
  const [user] = await db.insert(users).values({ age: 20, id: randomUUID(), name: "John Doe", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }).returning()
  const [tag] = await db.insert(tags).values({ id: randomUUID(), name: "Hello World" }).returning()
  const [message] = await db.insert(messages).values({
    content: "Hello, Doe!",
    createdAt: new Date().toISOString(),
    id: randomUUID(),
    updatedAt: new Date().toISOString(),
    userId: user.id,
  }).returning()
  await db.insert(messageTags).values({ id: randomUUID(), messageId: message.id, tagId: tag.id })


  // Create additional users
  const [user2] = await db.insert(users).values({
    age: 18,
    id: randomUUID(),
    name: "Jane Smith",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }).returning();

  const [user3] = await db.insert(users).values({
    age: 32,
    id: randomUUID(),
    name: "Bob Wilson",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }).returning();

  // Create more tags
  const [tag2] = await db.insert(tags).values({
    id: randomUUID(),
    name: "Important"
  }).returning();

  const [tag3] = await db.insert(tags).values({
    id: randomUUID(),
    name: "Question"
  }).returning();

  // Create additional messages
  const [message2] = await db.insert(messages).values({
    content: "How is everyone doing?",
    createdAt: new Date().toISOString(),
    id: randomUUID(),
    updatedAt: new Date().toISOString(),
    userId: user2.id,
  }).returning();

  const [message3] = await db.insert(messages).values({
    content: "Great weather today!",
    createdAt: new Date().toISOString(),
    id: randomUUID(),
    updatedAt: new Date().toISOString(),
    userId: user3.id,
  }).returning();

  const [message4] = await db.insert(messages).values({
    content: "Anyone up for lunch?",
    createdAt: new Date().toISOString(),
    id: randomUUID(),
    updatedAt: new Date().toISOString(),
    userId: user2.id,
  }).returning();

  // Add tag relationships
  await db.insert(messageTags).values([
    { id: randomUUID(), messageId: message2.id, tagId: tag2.id },
    { id: randomUUID(), messageId: message2.id, tagId: tag3.id },
    { id: randomUUID(), messageId: message3.id, tagId: tag.id },
    { id: randomUUID(), messageId: message4.id, tagId: tag2.id }
  ]);

};



export const shutdown = async () => {
  await pool.end();
};

export const startPostgresAndZero = async () => {
  const network = await new Network().start();

  // Start PostgreSQL container
  const postgresContainer = await new PostgreSqlContainer(
    `postgres:${process.env.PG_VERSION ?? "16"}`,
  )
    .withDatabase("postgres")
    .withUsername("user")
    .withPassword("password")
    .withNetwork(network)
    .withNetworkAliases("postgres-db")
    .withExposedPorts({
      container: 5432,
      host: PG_PORT,
    })
    .withCommand([
      "postgres",
      "-c",
      "wal_level=logical",
      "-c",
      "max_wal_senders=10",
      "-c",
      "max_replication_slots=5",
      "-c",
      "hot_standby=on",
      "-c",
      "hot_standby_feedback=on",
    ])
    .withCopyDirectoriesToContainer([
      {
        source: path.join(__dirname, "../../drizzle"),
        target: "/docker-entrypoint-initdb.d",
      },
    ])
    .withPullPolicy(PullPolicy.alwaysPull())
    // .withLogConsumer((stream) => {
    //   stream.on('data', (line) => {
    //     // console.log(`[Postgres] ${line}`);
    //   });
    // })
    .start();

  await seed();
  const basePgUrl = `postgresql://${postgresContainer.getUsername()}:${postgresContainer.getPassword()}`;
  const basePgUrlWithInternalPort = `${basePgUrl}@postgres-db:5432`;
  const basePgUrlWithExternalPort = `${basePgUrl}@127.0.0.1:${PG_PORT}`;


  // Start Zero container
  const zeroContainer = await new GenericContainer(`rocicorp/zero:0.16.2025022800`)
    .withExposedPorts({
      container: 4848,
      host: ZERO_PORT,
    })
    .withNetwork(network)
    .withEnvironment({
      ZERO_UPSTREAM_DB: `${basePgUrlWithInternalPort}/drizzle_zero`,
      ZERO_CVR_DB: `${basePgUrlWithInternalPort}/drizzle_zero_cvr`,
      ZERO_CHANGE_DB: `${basePgUrlWithInternalPort}/drizzle_zero_cdb`,
      ZERO_AUTH_SECRET: "secretkey",
      ZERO_REPLICA_FILE: "/zero.db",
      ZERO_NUM_SYNC_WORKERS: "1",
      ZERO_LOG_LEVEL: "debug",
    })
    .withCopyFilesToContainer([
      {
        source: path.join(__dirname, "./../../zero-schema.json"),
        target: "/opt/app/zero-schema.json",
      },
    ])
    .withStartupTimeout(60000)
    .withPullPolicy(PullPolicy.alwaysPull())
    .withLogConsumer((stream) => {
      stream.on('data', (line) => {
        console.log(`[Zero] ${line}`);
      });
    })
    .start()

  await new Promise((resolve, reject) => {
    exec(
      `npx zero-deploy-permissions --schema-path ${path.join(__dirname, "../zero/schema.ts")} --upstream-db ${basePgUrlWithExternalPort}/drizzle_zero`,
      (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      },
    );
  });

  return {
    postgresContainer,
    zeroContainer,
  };
};
