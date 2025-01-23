import { type Row } from "@rocicorp/zero";
export declare const schema: {
    readonly version: 1;
    readonly tables: {
        readonly user: Readonly<{
            readonly tableName: "user";
            readonly primaryKey: readonly ["id"];
            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                name: "user";
                schema: undefined;
                columns: {
                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "createdAt";
                        tableName: "user";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "updatedAt";
                        tableName: "user";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    id: import("drizzle-orm/pg-core").PgColumn<{
                        name: "id";
                        tableName: "user";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: true;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    name: import("drizzle-orm/pg-core").PgColumn<{
                        name: "name";
                        tableName: "user";
                        dataType: "string";
                        columnType: "PgText";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: [string, ...string[]];
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    age: import("drizzle-orm/pg-core").PgColumn<{
                        name: "age";
                        tableName: "user";
                        dataType: "number";
                        columnType: "PgInteger";
                        data: number;
                        driverParam: string | number;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                };
                dialect: "pg";
            }>, Record<"createdAt" | "updatedAt" | "name" | "id" | "age", true>>;
        } & {
            readonly relationships: Readonly<{
                readonly messages: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "message";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "message";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                content: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "content";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgText";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: [string, ...string[]];
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                userId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "userId";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly user: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "user";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "user";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            age: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "age";
                                                tableName: "user";
                                                dataType: "number";
                                                columnType: "PgInteger";
                                                data: number;
                                                driverParam: string | number;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id" | "age", true>>;
                                } & /*elided*/ any>;
                            };
                            readonly messagesToTags: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly message: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "message";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "message";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        content: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "content";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        userId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "userId";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                        readonly tag: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "tag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "tag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        name: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "name";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                            } & {
                                                readonly relationships: Readonly<{
                                                    readonly messagesToTags: {
                                                        readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                                        readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                                        readonly destSchema: () => Readonly<{
                                                            readonly tableName: "messageTag";
                                                            readonly primaryKey: readonly ["id"];
                                                            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                                name: "messageTag";
                                                                schema: undefined;
                                                                columns: {
                                                                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "createdAt";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "updatedAt";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    id: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "id";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: true;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "messageId";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "tagId";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                };
                                                                dialect: "pg";
                                                            }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                                        } & /*elided*/ any>;
                                                    };
                                                }>;
                                            }>;
                                        };
                                    }>;
                                }>;
                            };
                        } & {
                            readonly tags: readonly [{
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly message: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "message";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "message";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        content: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "content";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        userId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "userId";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                        readonly tag: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "tag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "tag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        name: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "name";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                            } & {
                                                readonly relationships: Readonly<{
                                                    readonly messagesToTags: {
                                                        readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                                        readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                                        readonly destSchema: () => Readonly<{
                                                            readonly tableName: "messageTag";
                                                            readonly primaryKey: readonly ["id"];
                                                            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                                name: "messageTag";
                                                                schema: undefined;
                                                                columns: {
                                                                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "createdAt";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "updatedAt";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    id: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "id";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: true;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "messageId";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "tagId";
                                                                        tableName: "messageTag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                };
                                                                dialect: "pg";
                                                            }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                                        } & /*elided*/ any>;
                                                    };
                                                }>;
                                            }>;
                                        };
                                    }>;
                                }>;
                            }, {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "tag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "tag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly messagesToTags: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & {
                                                readonly relationships: Readonly<{
                                                    readonly message: {
                                                        readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                                        readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                                        readonly destSchema: () => Readonly<{
                                                            readonly tableName: "message";
                                                            readonly primaryKey: readonly ["id"];
                                                            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                                name: "message";
                                                                schema: undefined;
                                                                columns: {
                                                                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "createdAt";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "updatedAt";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    id: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "id";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: true;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    content: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "content";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgText";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: [string, ...string[]];
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    userId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "userId";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                };
                                                                dialect: "pg";
                                                            }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                                        } & /*elided*/ any>;
                                                    };
                                                    readonly tag: {
                                                        readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                                        readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                                        readonly destSchema: () => Readonly<{
                                                            readonly tableName: "tag";
                                                            readonly primaryKey: readonly ["id"];
                                                            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                                name: "tag";
                                                                schema: undefined;
                                                                columns: {
                                                                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "createdAt";
                                                                        tableName: "tag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "updatedAt";
                                                                        tableName: "tag";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    id: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "id";
                                                                        tableName: "tag";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: true;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    name: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "name";
                                                                        tableName: "tag";
                                                                        dataType: "string";
                                                                        columnType: "PgText";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: [string, ...string[]];
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                };
                                                                dialect: "pg";
                                                            }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                                        } & /*elided*/ any>;
                                                    };
                                                }>;
                                            }>;
                                        };
                                    }>;
                                }>;
                            }];
                        }>;
                    }>;
                };
            }>;
        }>;
        readonly message: Readonly<{
            readonly tableName: "message";
            readonly primaryKey: readonly ["id"];
            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                name: "message";
                schema: undefined;
                columns: {
                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "createdAt";
                        tableName: "message";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "updatedAt";
                        tableName: "message";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    id: import("drizzle-orm/pg-core").PgColumn<{
                        name: "id";
                        tableName: "message";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: true;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    content: import("drizzle-orm/pg-core").PgColumn<{
                        name: "content";
                        tableName: "message";
                        dataType: "string";
                        columnType: "PgText";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: [string, ...string[]];
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    userId: import("drizzle-orm/pg-core").PgColumn<{
                        name: "userId";
                        tableName: "message";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: false;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                };
                dialect: "pg";
            }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
        } & {
            readonly relationships: Readonly<{
                readonly user: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "user";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "user";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "user";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "user";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "user";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                name: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "name";
                                    tableName: "user";
                                    dataType: "string";
                                    columnType: "PgText";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: [string, ...string[]];
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                age: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "age";
                                    tableName: "user";
                                    dataType: "number";
                                    columnType: "PgInteger";
                                    data: number;
                                    driverParam: string | number;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "name" | "id" | "age", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly messages: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "message";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "message";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            content: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "content";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            userId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "userId";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                } & /*elided*/ any>;
                            };
                        }>;
                    }>;
                };
                readonly messagesToTags: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "messageTag";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "messageTag";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                messageId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "messageId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                tagId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "tagId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly message: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "message";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "message";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            content: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "content";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            userId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "userId";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                } & /*elided*/ any>;
                            };
                            readonly tag: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "tag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "tag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly messagesToTags: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    }>;
                                }>;
                            };
                        }>;
                    }>;
                };
            } & {
                readonly tags: readonly [{
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "messageTag";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "messageTag";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                messageId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "messageId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                tagId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "tagId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly message: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "message";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "message";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            content: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "content";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            userId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "userId";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                } & /*elided*/ any>;
                            };
                            readonly tag: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "tag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "tag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly messagesToTags: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    }>;
                                }>;
                            };
                        }>;
                    }>;
                }, {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "tag";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "tag";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                name: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "name";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgText";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: [string, ...string[]];
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly messagesToTags: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly message: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "message";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "message";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        content: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "content";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        userId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "userId";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                        readonly tag: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "tag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "tag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        name: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "name";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    }>;
                                }>;
                            };
                        }>;
                    }>;
                }];
            }>;
        }>;
        readonly tag: Readonly<{
            readonly tableName: "tag";
            readonly primaryKey: readonly ["id"];
            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                name: "tag";
                schema: undefined;
                columns: {
                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "createdAt";
                        tableName: "tag";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "updatedAt";
                        tableName: "tag";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    id: import("drizzle-orm/pg-core").PgColumn<{
                        name: "id";
                        tableName: "tag";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: true;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    name: import("drizzle-orm/pg-core").PgColumn<{
                        name: "name";
                        tableName: "tag";
                        dataType: "string";
                        columnType: "PgText";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: [string, ...string[]];
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                };
                dialect: "pg";
            }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
        } & {
            readonly relationships: Readonly<{
                readonly messagesToTags: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "messageTag";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "messageTag";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                messageId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "messageId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                tagId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "tagId";
                                    tableName: "messageTag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly message: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "message";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "message";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            content: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "content";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            userId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "userId";
                                                tableName: "message";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly user: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "user";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "user";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "user";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "user";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "user";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        name: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "name";
                                                            tableName: "user";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        age: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "age";
                                                            tableName: "user";
                                                            dataType: "number";
                                                            columnType: "PgInteger";
                                                            data: number;
                                                            driverParam: string | number;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "name" | "id" | "age", true>>;
                                            } & {
                                                readonly relationships: Readonly<{
                                                    readonly messages: {
                                                        readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                                        readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                                        readonly destSchema: () => Readonly<{
                                                            readonly tableName: "message";
                                                            readonly primaryKey: readonly ["id"];
                                                            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                                name: "message";
                                                                schema: undefined;
                                                                columns: {
                                                                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "createdAt";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "updatedAt";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgTimestampString";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: true;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    id: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "id";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: true;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    content: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "content";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgText";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: true;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: [string, ...string[]];
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                    userId: import("drizzle-orm/pg-core").PgColumn<{
                                                                        name: "userId";
                                                                        tableName: "message";
                                                                        dataType: "string";
                                                                        columnType: "PgUUID";
                                                                        data: string;
                                                                        driverParam: string;
                                                                        notNull: false;
                                                                        hasDefault: false;
                                                                        isPrimaryKey: false;
                                                                        isAutoincrement: false;
                                                                        hasRuntimeDefault: false;
                                                                        enumValues: undefined;
                                                                        baseColumn: never;
                                                                        identity: undefined;
                                                                        generated: undefined;
                                                                    }, {}, {}>;
                                                                };
                                                                dialect: "pg";
                                                            }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                                        } & /*elided*/ any>;
                                                    };
                                                }>;
                                            }>;
                                        };
                                        readonly messagesToTags: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    } & {
                                        readonly tags: readonly [{
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & /*elided*/ any>;
                                        }, {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "tag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "tag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        name: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "name";
                                                            tableName: "tag";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                            } & /*elided*/ any>;
                                        }];
                                    }>;
                                }>;
                            };
                            readonly tag: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "tag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "tag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                } & /*elided*/ any>;
                            };
                        }>;
                    }>;
                };
            }>;
        }>;
        readonly messageTag: Readonly<{
            readonly tableName: "messageTag";
            readonly primaryKey: readonly ["id"];
            readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                name: "messageTag";
                schema: undefined;
                columns: {
                    createdAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "createdAt";
                        tableName: "messageTag";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                        name: "updatedAt";
                        tableName: "messageTag";
                        dataType: "string";
                        columnType: "PgTimestampString";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: true;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    id: import("drizzle-orm/pg-core").PgColumn<{
                        name: "id";
                        tableName: "messageTag";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: true;
                        hasDefault: false;
                        isPrimaryKey: true;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    messageId: import("drizzle-orm/pg-core").PgColumn<{
                        name: "messageId";
                        tableName: "messageTag";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: false;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                    tagId: import("drizzle-orm/pg-core").PgColumn<{
                        name: "tagId";
                        tableName: "messageTag";
                        dataType: "string";
                        columnType: "PgUUID";
                        data: string;
                        driverParam: string;
                        notNull: false;
                        hasDefault: false;
                        isPrimaryKey: false;
                        isAutoincrement: false;
                        hasRuntimeDefault: false;
                        enumValues: undefined;
                        baseColumn: never;
                        identity: undefined;
                        generated: undefined;
                    }, {}, {}>;
                };
                dialect: "pg";
            }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
        } & {
            readonly relationships: Readonly<{
                readonly message: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "message";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "message";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                content: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "content";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgText";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: [string, ...string[]];
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                userId: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "userId";
                                    tableName: "message";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: false;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly user: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "user";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "user";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "user";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            age: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "age";
                                                tableName: "user";
                                                dataType: "number";
                                                columnType: "PgInteger";
                                                data: number;
                                                driverParam: string | number;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id" | "age", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly messages: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id" | "age">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "message";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "message";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        content: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "content";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgText";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: [string, ...string[]];
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        userId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "userId";
                                                            tableName: "message";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "content" | "userId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    }>;
                                }>;
                            };
                            readonly messagesToTags: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & /*elided*/ any>;
                            };
                        } & {
                            readonly tags: readonly [{
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "content" | "userId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & /*elided*/ any>;
                            }, {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "tag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "tag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            name: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "name";
                                                tableName: "tag";
                                                dataType: "string";
                                                columnType: "PgText";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: [string, ...string[]];
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                                } & {
                                    readonly relationships: Readonly<{
                                        readonly messagesToTags: {
                                            readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                            readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                            readonly destSchema: () => Readonly<{
                                                readonly tableName: "messageTag";
                                                readonly primaryKey: readonly ["id"];
                                                readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                                    name: "messageTag";
                                                    schema: undefined;
                                                    columns: {
                                                        createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "createdAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "updatedAt";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgTimestampString";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: true;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        id: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "id";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: true;
                                                            hasDefault: false;
                                                            isPrimaryKey: true;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "messageId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                        tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                            name: "tagId";
                                                            tableName: "messageTag";
                                                            dataType: "string";
                                                            columnType: "PgUUID";
                                                            data: string;
                                                            driverParam: string;
                                                            notNull: false;
                                                            hasDefault: false;
                                                            isPrimaryKey: false;
                                                            isAutoincrement: false;
                                                            hasRuntimeDefault: false;
                                                            enumValues: undefined;
                                                            baseColumn: never;
                                                            identity: undefined;
                                                            generated: undefined;
                                                        }, {}, {}>;
                                                    };
                                                    dialect: "pg";
                                                }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                            } & /*elided*/ any>;
                                        };
                                    }>;
                                }>;
                            }];
                        }>;
                    }>;
                };
                readonly tag: {
                    readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                    readonly destField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                    readonly destSchema: () => Readonly<{
                        readonly tableName: "tag";
                        readonly primaryKey: readonly ["id"];
                        readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                            name: "tag";
                            schema: undefined;
                            columns: {
                                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "createdAt";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "updatedAt";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgTimestampString";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: true;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                id: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "id";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgUUID";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: true;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: undefined;
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                                name: import("drizzle-orm/pg-core").PgColumn<{
                                    name: "name";
                                    tableName: "tag";
                                    dataType: "string";
                                    columnType: "PgText";
                                    data: string;
                                    driverParam: string;
                                    notNull: true;
                                    hasDefault: false;
                                    isPrimaryKey: false;
                                    isAutoincrement: false;
                                    hasRuntimeDefault: false;
                                    enumValues: [string, ...string[]];
                                    baseColumn: never;
                                    identity: undefined;
                                    generated: undefined;
                                }, {}, {}>;
                            };
                            dialect: "pg";
                        }>, Record<"createdAt" | "updatedAt" | "name" | "id", true>>;
                    } & {
                        readonly relationships: Readonly<{
                            readonly messagesToTags: {
                                readonly sourceField: [Readonly<"createdAt" | "updatedAt" | "name" | "id">, ...Readonly<"createdAt" | "updatedAt" | "name" | "id">[]];
                                readonly destField: [Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">, ...Readonly<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId">[]];
                                readonly destSchema: () => Readonly<{
                                    readonly tableName: "messageTag";
                                    readonly primaryKey: readonly ["id"];
                                    readonly columns: import("drizzle-zero").ZeroColumns<import("drizzle-orm/pg-core").PgTableWithColumns<{
                                        name: "messageTag";
                                        schema: undefined;
                                        columns: {
                                            createdAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "createdAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            updatedAt: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "updatedAt";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgTimestampString";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: true;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            id: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "id";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: true;
                                                hasDefault: false;
                                                isPrimaryKey: true;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            messageId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "messageId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                            tagId: import("drizzle-orm/pg-core").PgColumn<{
                                                name: "tagId";
                                                tableName: "messageTag";
                                                dataType: "string";
                                                columnType: "PgUUID";
                                                data: string;
                                                driverParam: string;
                                                notNull: false;
                                                hasDefault: false;
                                                isPrimaryKey: false;
                                                isAutoincrement: false;
                                                hasRuntimeDefault: false;
                                                enumValues: undefined;
                                                baseColumn: never;
                                                identity: undefined;
                                                generated: undefined;
                                            }, {}, {}>;
                                        };
                                        dialect: "pg";
                                    }>, Record<"createdAt" | "updatedAt" | "id" | "messageId" | "tagId", true>>;
                                } & /*elided*/ any>;
                            };
                        }>;
                    }>;
                };
            }>;
        }>;
    };
};
export type Schema = typeof schema;
export type UserZero = Row<typeof schema.tables.user>;
export type MessageZero = Row<typeof schema.tables.message>;
export type TagZero = Row<typeof schema.tables.tag>;
export type MessageTagZero = Row<typeof schema.tables.messageTag>;
export declare const permissions: Promise<Record<string, {
    row?: {
        select?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        insert?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        update?: {
            preMutation?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
            postMutation?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        } | undefined;
        delete?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
    } | undefined;
    cell?: Record<string, {
        select?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        insert?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        update?: {
            preMutation?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
            postMutation?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
        } | undefined;
        delete?: ["allow", import("@rocicorp/zero/out/zero-protocol/src/ast").Condition][] | undefined;
    }> | undefined;
}> | undefined>;
