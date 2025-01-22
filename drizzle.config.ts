import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined.");
}

export default {
  schema: "./src/server/db/tables/**/*.table.ts",
  out: "./drizzle",
  dialect: "postgresql",
} satisfies Config;

