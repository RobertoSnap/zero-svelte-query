import * as drizzleSchemas from "$server/db/tables/index.js";
import {
    ANYONE_CAN,
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

export const schema =
    createZeroSchema(drizzleSchemas, {
        tables: {
            users: allColumns(drizzleSchemas.users),
            messages: allColumns(drizzleSchemas.messages),
            tags: allColumns(drizzleSchemas.tags),
            messageTags: allColumns(drizzleSchemas.messageTags),
        },
        manyToMany: {
            messages: {
                tags: ["messageTags", "tags"]
            }
        },
    })


export type Schema = typeof schema;
export type UserZero = Row<typeof schema.tables.users>;
export type MessageZero = Row<typeof schema.tables.messages>;
export type TagZero = Row<typeof schema.tables.tags>;
export type MessageTagZero = Row<typeof schema.tables.messageTags>;



export const permissions = definePermissions<AuthData, Schema>(schema, () => {
    return {
        messageTags: {
            row: {
                select: ANYONE_CAN,
                insert: ANYONE_CAN,
                update: {
                    postMutation: ANYONE_CAN,
                    preMutation: ANYONE_CAN
                },
                delete: ANYONE_CAN
            }
        },
        users: {
            row: {
                select: ANYONE_CAN,
                insert: ANYONE_CAN,
                update: {
                    postMutation: ANYONE_CAN,
                    preMutation: ANYONE_CAN
                },
                delete: ANYONE_CAN
            },

        },
        messages: {
            row: {
                select: ANYONE_CAN,
                insert: ANYONE_CAN,
                update: {
                    postMutation: ANYONE_CAN,
                    preMutation: ANYONE_CAN
                },
                delete: ANYONE_CAN
            }
        },
        tags: {
            row: {
                select: ANYONE_CAN,
                insert: ANYONE_CAN,
                update: {
                    postMutation: ANYONE_CAN,
                    preMutation: ANYONE_CAN
                },
                delete: ANYONE_CAN
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
