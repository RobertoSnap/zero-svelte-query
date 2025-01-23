<script lang="ts">
	import { page } from '$app/state';
	import { setZeroStore, zeroReady } from '$utils/zero.state.svelte.js';

	let { children } = $props();

	let token = $state<string | undefined>(undefined);
	let userId = $state<string | undefined>(undefined);

	// Simulate async token and userID
	$effect(() => {
		setTimeout(() => {
			userId = 'anon';
		}, 1000);
	});

	$effect(() => {
		if (userId) {
			if (!$zeroReady) {
				console.log('Setting ZERO store');
				setZeroStore({
					server: 'http://localhost:5949',
					auth: token,
					userID: userId
				});
			}
		}
	});
	// $effect(() => {
	// 	if ($zeroStore) {
	// 		$zeroStore.query.user.preload();
	// 	}
	// });
</script>

<nav style="padding: 1rem; background-color: #f0f0f0;">
	<a
		href="/"
		style="margin-right: 1rem; text-decoration: none; color: {page.url.pathname === '/'
			? '#000'
			: '#333'}; font-weight: {page.url.pathname === '/' ? 'bold' : 'normal'};"
	>
		Home
	</a>
	<a
		href="/users"
		style="margin-right: 1rem; text-decoration: none; color: {page.url.pathname === '/users'
			? '#000'
			: '#333'}; font-weight: {page.url.pathname === '/users' ? 'bold' : 'normal'};"
	>
		Users
	</a>
	<a
		href="/tags"
		style="margin-right: 1rem; text-decoration: none; color: {page.url.pathname === '/tags'
			? '#000'
			: '#333'}; font-weight: {page.url.pathname === '/tags' ? 'bold' : 'normal'};"
	>
		Tags
	</a>
</nav>

<main style="padding: 2rem;">
	{#if !$zeroReady}
		<p style="color: #666;">Loading zero...</p>
	{:else}
		{@render children()}
	{/if}
</main>

<div
	style="position: fixed; bottom: 0; left: 0; right: 0; padding: 1rem; background-color: #f0f0f0;"
>
	<div style="display: flex; gap: 1rem; max-width: 400px; margin: 0 auto;">
		<div style="flex: 1;">
			<label for="token" style="display: block; margin-bottom: 0.5rem;">Token:</label>
			<input
				id="token"
				type="text"
				bind:value={token}
				placeholder="Enter token"
				style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
			/>
		</div>
		<div style="flex: 1;">
			<label for="userId" style="display: block; margin-bottom: 0.5rem;">User ID:</label>
			<input
				id="userId"
				type="text"
				bind:value={userId}
				placeholder="Enter user ID"
				style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
			/>
		</div>
	</div>
</div>
