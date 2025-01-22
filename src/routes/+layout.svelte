<script lang="ts">
	import { page } from '$app/state';
	import { setZeroStore, zeroReady } from './zero.state.svelte.js';

	let paths = $derived(page.route.id?.slice(1).split('/').slice(1) ?? []);

	let token = $state<string | undefined>(undefined);
	let userId = $state<string | undefined>(undefined);

	// Simulate async token and userID
	$effect(() => {
		setTimeout(() => {
			token = '123';
			userId = 'anon';
		}, 1000);
	});

	$effect(() => {
		if (token && userId) {
			if (!$zeroReady) {
				console.log('Setting ZERO store');
				setZeroStore({
					auth: token,
					userID: userId
				});
			}
		}
	});
</script>

<div class="input-container">
	<div>
		<label for="token">Token:</label>
		<input id="token" type="text" bind:value={token} placeholder="Enter token" />
	</div>

	<div>
		<label for="userId">User ID:</label>
		<input id="userId" type="text" bind:value={userId} placeholder="Enter user ID" />
	</div>
</div>

<style>
	.input-container {
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}

	.input-container div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	input {
		padding: 0.25rem 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	label {
		font-weight: bold;
	}
</style>
