<script lang="ts">
	import { useQuery } from '$lib/useQuery.svelte';
	import { getZero } from '$lib/zero.state.svelte';
	import CreateMessageForm from '$utils/CreateMessageForm.svelte';
	import CreateUserForm from '$utils/CreateUserForm.svelte';

	const zero = getZero();
	const users = useQuery(
		zero.query.user
			.limit(30)
			.orderBy('age', 'asc')
			.related('messages', (m) => m.related('tags'))
	);

	// $inspect(users);
</script>

<div class="container">
	{#if users.resultType}
		<p class="result-type">Result type: {users.resultType}</p>
	{/if}

	<h2>Users</h2>

	{#if users.current}
		<div class="users-grid">
			{#each users.current as user}
				<div class="user-card">
					<h4>{user.name}</h4>
					<p class="age">Age: {user.age}</p>
					<div class="messages">
						{#each user.messages as message}
							<div class="message">
								{message.content}
							</div>
							<div class="tags">
								{#each message.tags as tag}
									<span class="tag">{tag.name}</span>
								{/each}
							</div>
						{/each}
						<CreateMessageForm userId={user.id} />
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<CreateUserForm />
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h2 {
		color: #2c3e50;
		margin-bottom: 2rem;
	}

	.result-type {
		color: #666;
		font-size: 0.9rem;
	}

	.users-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.user-card {
		background: white;
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease;
	}

	.user-card:hover {
		transform: translateY(-2px);
	}

	.user-card h3 {
		color: #2c3e50;
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}

	.messages {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		padding-top: 0.5rem;
		border-top: 1px solid #eee;
	}

	.message {
		background: #f8f9fa;
		padding: 0.8rem;
		border-radius: 6px;
		font-size: 0.9rem;
		color: #495057;
	}

	.tag {
		display: inline-block;
		background: #e9ecef;
		color: #495057;
		padding: 0.2rem 0.6rem;
		border-radius: 12px;
		font-size: 0.6rem;
		margin: 0.2rem;
		font-weight: 200;
	}

	.age {
		color: #666;
		font-size: 0.9rem;
		margin: -0.5rem 0 1rem 0;
	}
</style>
