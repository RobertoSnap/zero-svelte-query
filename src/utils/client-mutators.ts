// mutators.ts
import { schema } from '$zero/schema';
import { type CustomMutatorDefs } from '@rocicorp/zero';

export type AuthData = {
    userId?: string;
};

export function createMutators(authData: AuthData | undefined) {
    return {
        messageTag: {
            insert: async (tx, { userId, messageId, tagId, content, tagName, messageTagId }: { userId: string, messageId: string, tagId: string, messageTagId: string, content: string, tagName: string }) => {

                await tx.mutate.messages.insert({
                    id: messageId,
                    content,
                    userId,
                });
                await tx.mutate.tags.insert({
                    id: tagId,
                    name: tagName,

                });
                await tx.mutate.messageTags.insert({
                    id: messageTagId,
                    messageId,
                    tagId,
                });
            },
        },
    } as const satisfies CustomMutatorDefs<typeof schema>;
}

export type CustomMutators = ReturnType<typeof createMutators>;