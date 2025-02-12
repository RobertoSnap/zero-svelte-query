import { relations } from 'drizzle-orm';
import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from './utils';


export const users = pgTable('user', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
    ...timestamps
})
export const userRelations = relations(users, ({ many }) => ({
    messages: many(messages),
}));


export const messages = pgTable('message', {
    id: uuid('id').primaryKey(),
    content: text('content').notNull(),
    userId: uuid('userId').references(() => users.id),
    ...timestamps
})

export const messageRelations = relations(messages, ({ one, many }) => ({
    user: one(users, {
        fields: [messages.userId],
        references: [users.id]
    }),
    messagesToTags: many(messageTags),
}));

export const tags = pgTable('tag', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    ...timestamps
})

export const tagRelations = relations(tags, ({ many }) => ({
    messagesToTags: many(messageTags),
}));

export const messageTags = pgTable('messageTag', {
    id: uuid('id').primaryKey(),
    messageId: uuid('messageId').references(() => messages.id),
    tagId: uuid('tagId').references(() => tags.id),
    ...timestamps
})
export const messageTagRelations = relations(messageTags, ({ one }) => ({
    message: one(messages, {
        fields: [messageTags.messageId],
        references: [messages.id]
    }),
    tag: one(tags, {
        fields: [messageTags.tagId],
        references: [tags.id]
    }),
}));
