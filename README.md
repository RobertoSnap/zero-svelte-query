# zero-svelte-query

A Svelte library for integrating [@rocicorp/zero](https://github.com/rocicorp/zero) with Svelte applications.

## Installation

```bash
npm install zero-svelte-query
# or
pnpm add zero-svelte-query
# or
yarn add zero-svelte-query
```

## Usage

Initate 
```typescript
setZeroStore({
    server: 'http://localhost:5949',
    auth: token || undefined,
    userID: userId || 'anon'
});
```


Use in a +page.svelte file

```ts
<script lang="ts">
	import { useQuery } from 'zero-svelte-query';
	import { getZero } from 'zero-svelte-query';

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