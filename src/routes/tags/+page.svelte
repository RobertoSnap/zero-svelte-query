<script lang="ts">
	import { useQuery } from '$lib/useQuery.svelte';
	import { getZero } from '$utils/zero.state.svelte';

	const zero = getZero();
	let tags = useQuery(zero.query.tags);
</script>

{#if tags.current}
	{#each tags.current as tag}
		<p>{tag.name}</p>
	{/each}
{/if}
