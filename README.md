
[![NPM Version](https://img.shields.io/npm/v/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)
[![NPM Downloads](https://img.shields.io/npm/dt/zero-svelte-query)](https://www.npmjs.com/package/zero-svelte-query)

# zero-svelte-query

A Svelte library for integrating [@rocicorp/zero](https://github.com/rocicorp/zero) with Svelte applications. Provides reactive query bindings and store integration for real-time data synchronization.

## Features
- ✨ Reactive query subscriptions
- 🔄 Lightweight and minimalistic
- ⚡️ Nice dev tools

### Zero Svelte Options

#### [stolinski/zero-svelte](https://github.com/stolinski/zero-svelte)

This should be your go-to option. It appears to have functionality for optimal query fetching and other advanced features.

#### [robertosnap/zero-svelte-query](https://github.com/robertosnap/zero-svelte-query)

This is a naively simple implementation, making it good for learning purposes or something to build upon. It's currently a `createSubscriber` wrapper around `zero.query`. The repository has some nice examples for Svelte and developer tools when creating Svelte applications.


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

### Basic Query Example
```svelte
<script lang="ts">
	import { useQuery } from 'zero-svelte-query';
	import { getZero } from '$lib/zero'; // Update to standard SvelteKit path

	const zero = getZero();
	const tags = useQuery(zero.query.tag); // Use const instead of let
</script>

{#if $tags?.current}
	{#each $tags.current as tag (tag.id)}
		<p>{tag.name}</p>
	{/each}
{/if}
```

## Zero Store Configuration
Initialize Zero in your application setup. Here's a basic implementation example:

`zero.state.svelte.ts`
// ... rest of existing code ...
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

# Learning
This library is a lightweight createSubscriber wrapper around the zero instance. You could basically just copy this file [useQuery.svelte.ts](https://github.com/RobertoSnap/zero-svelte-query/blob/main/src/lib/useQuery.svelte.ts) and use it in your project.

## Alternatives
[zero-svelte](https://github.com/stolinski/zero-svelte) ([npm](https://www.npmjs.com/package/zero-svelte)) offers additional caching features and more advanced query management.

# Versions
| @rocicorp/zero | drizzle-zero-svelte | @rocicorp/zero spesific |
|----------------|---------------------|------|
| ^0.11.0 | ^ 0.1.0 | 0.11.2025011402 |
| ^0.12.0 | ^ 0.2.0 | 0.12.2025012501 |
| ^0.13.0 | ^ 0.3.0 | 0.13.2025013101 |
| ^0.14.0 | ^ 0.4.0 | 0.14.2025020701 |
| ^0.16.0 | ^ 0.5.0 | 0.16.2025022800 |
| ^0.17.0 | ^ 0.6.0 | 0.17.2025031400 |
| ^0.18.0 | ^ 0.7.0 | 0.18.2025042300 |
| ^0.19.0 | ^ 0.8.0 | 0.19.2025050203 |
| ^0.20.0 | ^ 0.9.0 | 0.20.2025052100|

# Credits
- [stolinski/zero-svelte](https://github.com/stolinski/zero-svelte)
- [BriefHQ/drizzle-zero](https://github.com/BriefHQ/drizzle-zero/)
- [danielroe/zero-vue](https://github.com/danielroe/zero-vue)
- [@rocicorp/zero](https://github.com/rocicorp/zero)
