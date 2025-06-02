import { DATABASE_URL } from '$env/static/private';
import { createMutators } from '$utils/server-mutators';
import { schema } from '$zero/schema';
import { PostgresJSConnection, PushProcessor, ZQLDatabase } from '@rocicorp/zero/pg';
import { json } from '@sveltejs/kit';
import postgres from 'postgres';
import type { RequestHandler } from '../$types';


// PushProcessor is provided by Zero to encapsulate a standard
// implementation of the push protocol.
const processor = new PushProcessor(
    new ZQLDatabase(
        new PostgresJSConnection(
            postgres(DATABASE_URL)
        ),
        schema
    )
);

export const POST: RequestHandler = async ({ request }) => {
    const authData = {
        userId: '123',
    }
    const result = await processor.process(
        createMutators(authData),
        request,
    );
    return json(result)
};