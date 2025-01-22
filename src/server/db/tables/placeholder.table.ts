import { relations } from 'drizzle-orm';
import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from './utils';


export const userTable = pgTable('user', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
    ...timestamps
})
export const userRelations = relations(userTable, ({ many }) => ({
    messages: many(messageTable),
}));


export const messageTable = pgTable('message', {
    id: uuid('id').primaryKey(),
    content: text('content').notNull(),
    userId: uuid('userId').references(() => userTable.id),
    ...timestamps
})

export const messageRelations = relations(messageTable, ({ one, many }) => ({
    user: one(userTable, {
        fields: [messageTable.userId],
        references: [userTable.id]
    }),
    messagesToTags: many(messageTagTable),
}));

export const tagTable = pgTable('tag', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    ...timestamps
})

export const tagRelations = relations(tagTable, ({ many }) => ({
    messagesToTags: many(messageTagTable),
}));

export const messageTagTable = pgTable('messageTag', {
    id: uuid('id').primaryKey(),
    messageId: uuid('messageId').references(() => messageTable.id),
    tagId: uuid('tagId').references(() => tagTable.id),
    ...timestamps
})
export const messageTagRelations = relations(messageTagTable, ({ one }) => ({
    message: one(messageTable, {
        fields: [messageTagTable.messageId],
        references: [messageTable.id]
    }),
    tag: one(tagTable, {
        fields: [messageTagTable.tagId],
        references: [tagTable.id]
    }),
}));
