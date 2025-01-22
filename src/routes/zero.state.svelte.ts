import { schema, type Schema } from '$server/zero/schema';
import { Zero, type ZeroOptions } from '@rocicorp/zero';
import { get, writable } from 'svelte/store';

export const zeroStore = writable<Zero<Schema> | null>(null);
export const zeroReady = writable<boolean>(false);

export const setZeroStore = (_options: Partial<ZeroOptions<Schema>>) => {
	console.log('Init ZERO with ', _options);
	const options = {
		..._options,
		server: `${"http://localhost:4848"}`,
		schema,
		kvStore: true ? 'mem' : 'idb'
	} as ZeroOptions<Schema>;
	zeroStore.set(new Zero(options));
	zeroReady.set(true);
}

export const getZero = () => {
	const z = get(zeroStore);
	if (!z) {
		throw new Error('Zero not initialized');
	}
	return z;
}
