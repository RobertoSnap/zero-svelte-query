<script lang="ts">
	import { useQuery } from '$lib/useQuery.svelte';
	import { getZero } from '$lib/zero.state.svelte';

	const zero = getZero();
	let tags = useQuery(zero.query.tag);

	// $inspect(users);
</script>

{#if tags.current}
	{#each tags.current as tag}
		<p>{tag.name}</p>
	{/each}
{/if}

<button
	onclick={() => {
		zero.mutate.user.insert({
			age: 10,
			id: crypto.randomUUID(),
			name: 'John Doe'
		});
	}}>Add User</button
>
