<script lang="ts">
	import { getZero } from '$lib/zero.state.svelte';

	const zero = getZero();

	let name = $state('');
	let age = $state(18);

	function handleSubmit() {
		zero.mutate.user.insert({
			age: age,
			id: crypto.randomUUID(),
			name: name || 'Anonymous'
		});

		// Reset form
		name = '';
		age = 18;
	}
</script>

<div class="add-user-form">
	<h3>Add New User</h3>
	<div class="form-group">
		<label for="name">Name:</label>
		<input type="text" id="name" bind:value={name} placeholder="Enter name" />
	</div>
	<div class="form-group">
		<label for="age">Age:</label>
		<input type="number" id="age" bind:value={age} min="0" max="150" />
	</div>
	<button class="add-button" onclick={handleSubmit}>Add User</button>
</div>

<style>
	.add-user-form {
		background: #f0f0f0;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}

	.add-user-form h3 {
		margin: 0 0 1.5rem 0;
		color: #2c3e50;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		color: #495057;
		font-size: 0.9rem;
	}

	.form-group input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #dee2e6;
		border-radius: 4px;
		font-size: 1rem;
	}

	.form-group input:focus {
		outline: none;
		border-color: #3498db;
		box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
	}

	.add-button {
		background: #3498db;
		color: white;
		border: none;
		padding: 0.8rem 1.5rem;
		border-radius: 6px;
		cursor: pointer;
		font-size: 1rem;
		transition: background 0.2s ease;
	}

	.add-button:hover {
		background: #2980b9;
	}
</style>
