import {
    ANYONE_CAN,
    definePermissions,
    type Row
} from "@rocicorp/zero";
import { schema, type Schema } from "./zero-schema.gen";


type AuthData = {
    sub: string;
    org_id: string;
    org_role: string;
};


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