import { createMutators, type CustomMutators } from '$utils/client-mutators';
import { schema, type Schema } from '$zero/schema';
import { Zero, type ZeroOptions } from '@rocicorp/zero';
import { get, writable } from 'svelte/store';

export const zeroStore = writable<Zero<Schema, CustomMutators> | null>(null);
export const zeroReady = writable<boolean>(false);

export const setZeroStore = (_options: Partial<ZeroOptions<Schema, CustomMutators>>) => {
	const options = {
		schema,
		kvStore: "mem",
		logLevel: "debug",
		mutators: createMutators({
			userId: _options.userID,
		}),
		server: "http://localhost:3000/api/zero",
		..._options,
	} as unknown as ZeroOptions<Schema, CustomMutators>;
	const zero = new Zero(options)
	zero.query.users.limit(100).preload()
	zero.query.messages.limit(100).preload()
	zero.query.tags.limit(100).preload()
	zero.query.messageTags.limit(100).preload()
	zeroStore.set(zero);
	zeroReady.set(true);
}

export const getZero = () => {
	const z = get(zeroStore);
	if (!z) {
		throw new Error('Zero not initialized');
	}
	return z;
}
