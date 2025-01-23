
[![NPM Version](https://img.shields.io/npm/v/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)
[![NPM Downloads](https://img.shields.io/npm/dt/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)

# zero-svelte-query

A Svelte library for integrating [@rocicorp/zero](https://github.com/rocicorp/zero) with Svelte applications.

## Installation
From [NPM](https://www.npmjs.com/package/zero-svelte-query)
```bash
npm install zero-svelte-query
# or
pnpm add zero-svelte-query
# or
yarn add zero-svelte-query
```

## Usage
See real examples in [src/routes](https://github.com/RobertoSnap/zero-svelte-query/tree/main/src/routes)

### Zero store 

Initate zero somewhere in your app, here is just an example
`zero.state.svelte.ts`
```ts
import { schema, type Schema } from '$zero/schema';
import { Zero, type ZeroOptions } from '@rocicorp/zero';
import { get, writable } from 'svelte/store';

export const zeroStore = writable<Zero<Schema> | null>(null);

export const setZeroStore = (_options: Partial<ZeroOptions<Schema>>) => {
	const options = {
		schema,
		kvStore: "mem",
		logLevel: "debug",
		..._options,
	} as ZeroOptions<Schema>;
	zeroStore.set(new Zero(options));
}

export const getZero = () => {
	const z = get(zeroStore);
	if (!z) {
		throw new Error('Zero not initialized');
	}
	return z;
}
```
Then use it in for example a +layout.svelte file
```typescript
setZeroStore({
    server: 'http://localhost:5949',
    auth: token || undefined,
    userID: userId || 'anon'
});
```

### Zero Query

Use in a +page.svelte file

```ts
<script lang="ts">
	import { useQuery } from 'zero-svelte-query';
	import { getZero } from 'YOUR/IMPLEMENTATION/zero.state.svelte.ts';

	const zero = getZero();
	let tags = useQuery(zero.query.tag);
</script>

{#if tags.current}
	{#each tags.current as tag}
		<p>{tag.name}</p>
	{/each}
{/if}

```


## Development

### Setup

```bash
# Install dependencies
pnpm install

# This will start a testcontainer with zero-cache, postgres and a vite svelte-kit application.
pnpm dev

# Run tests
pnpm test

# Run only unit tests
pnpm test:unit

# Run only e2e tests
pnpm test:e2e
```

### Scripts

- `pnpm dev` - Starts both backend and frontend development servers
- `pnpm build` - Builds the package for production
- `pnpm schema` - Builds the Zero schema
- `pnpm db:generate` - Generates database files using Drizzle Kit

## License

Apache 2.0

## Contributing

Dont know yet

# Credits
- [stolinski/zero-svelte](https://github.com/stolinski/zero-svelte/blob/main/src/lib/query.svelte.ts)
- [BriefHQ/drizzle-zero](https://github.com/BriefHQ/drizzle-zero/tree/canary)
- [danielroe/zero-vue](https://github.com/danielroe/zero-vue/blob/main/src/query.ts)
- [@rocicorp/zero](https://github.com/rocicorp/zero)