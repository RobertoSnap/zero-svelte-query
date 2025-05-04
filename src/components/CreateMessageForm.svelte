<script lang="ts">
	import { getZero } from '$utils/zero.state.svelte';

	const zero = getZero();

	const { userId } = $props();

	let content = $state('');
	let tagName = $state('');

	function handleSubmit() {
		if (!content.trim()) return;

		// Generate UUIDs for the required entities
		const messageId = crypto.randomUUID();
		const tagId = crypto.randomUUID();
		const messageTagId = crypto.randomUUID();

		// Use the custom mutation
		zero.mutate.messageTag.insert({
			messageId,
			tagId,
			messageTagId,
			content,
			tagName: tagName.trim() || 'general',
			userId
		});

		// Reset form
		content = '';
		tagName = '';
	}
</script>

<form class="message-form" onsubmit={handleSubmit}>
	<div class="inputs">
		<input type="text" bind:value={content} placeholder="Type a message..." />
		<input type="text" bind:value={tagName} placeholder="Add a tag (optional)" />
	</div>
	<button type="submit">Send</button>
</form>

<style>
	.message-form {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	input {
		flex: 1;
		padding: 0.5rem;
		border: 1px solid #dee2e6;
		border-radius: 4px;
		font-size: 0.9rem;
	}

	input:focus {
		outline: none;
		border-color: #3498db;
		box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
	}

	button {
		background: #3498db;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background 0.2s ease;
		align-self: flex-end;
		height: 38px;
	}

	button:hover {
		background: #2980b9;
	}
</style>
