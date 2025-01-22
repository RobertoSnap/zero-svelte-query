import * as drizzleSchemas from "$server/db/tables/index.js";
import {
    ANYONE_CAN,
    createSchema,
    definePermissions,
    type Row
} from "@rocicorp/zero";
import type { PgTable } from "drizzle-orm/pg-core";
import { createZeroSchema } from "drizzle-zero";

type AuthData = {
    sub: string;
    org_id: string;
    org_role: string;
};

export const schema = createSchema(
    createZeroSchema(drizzleSchemas, {
        version: 1,
        tables: {
            user: allColumns(drizzleSchemas.userTable),
            message: allColumns(drizzleSchemas.messageTable),
            tag: allColumns(drizzleSchemas.tagTable),
            messageTag: allColumns(drizzleSchemas.messageTagTable),
        },
        manyToMany: {
            message: {
                tags: ["messageTag", "tag"]
            }
        },
    })
);

export type Schema = typeof schema;
export type UserZero = Row<typeof schema.tables.user>;
export type MessageZero = Row<typeof schema.tables.message>;
export type TagZero = Row<typeof schema.tables.tag>;
export type MessageTagZero = Row<typeof schema.tables.messageTag>;



export const permissions = definePermissions<AuthData, Schema>(schema, () => {
    return {
        user: {
            row: {
                select: ANYONE_CAN
            }
        }
    };
})

function allColumns<T extends PgTable>(table: T): Record<keyof T['_']['columns'], true> {
    return Object.keys(table).reduce((acc, key) => {
        // @ts-expect-error - We know the column names are valid
        acc[key] = true
        return acc
    }, {} as Record<keyof T['_']['columns'], true>)
}
