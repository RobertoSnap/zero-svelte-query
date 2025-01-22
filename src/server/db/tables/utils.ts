import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
    createdAt: timestamp("createdAt", {
        mode: 'string',
        withTimezone: true,
        precision: 3
    })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updatedAt", {
        mode: 'string',
        withTimezone: true,
        precision: 3
    })
        .defaultNow()
        .notNull()
        .$onUpdate(() => sql`now()`),
};
