import { PgTable } from "drizzle-orm/pg-core";
import { drizzleZeroConfig } from "drizzle-zero";
import * as drizzleSchemas from "./src/server/db/tables/index";

// Define your configuration file for the CLI
export default drizzleZeroConfig(drizzleSchemas, {
    // Specify which tables and columns to include in the Zero schema.
    // This allows for the "expand/migrate/contract" pattern recommended in the Zero docs.
    // When a column is first added, it should be set to false, and then changed to true
    // once the migration has been run.

    // All tables/columns must be defined, but can be set to false to exclude them from the Zero schema.
    // Column names match your Drizzle schema definitions
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

    // Specify the casing style to use for the schema.
    // This is useful for when you want to use a different casing style than the default.
    // This works in the same way as the `casing` option in the Drizzle ORM.
    //
    // @example
    // casing: "snake_case",
});

function allColumns<T extends PgTable>(table: T): Record<keyof T['_']['columns'], true> {
    return Object.keys(table).reduce((acc, key) => {
        // @ts-expect-error - We know the column names are valid
        acc[key] = true
        return acc
    }, {} as Record<keyof T['_']['columns'], true>)
}
