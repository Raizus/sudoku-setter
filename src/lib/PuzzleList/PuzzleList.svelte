<script lang="ts">
	import { onMount } from 'svelte';
	import type { PuzzleInfo } from '../Types/types';
	import PuzzleCard from '$src/lib/PuzzleList/PuzzleCard.svelte';

	let puzzles: PuzzleInfo[];
	let loading: boolean = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			const response = await fetch('/puzzles.json');
			if (!response.ok) throw new Error('Failed to fetch puzzles');
			puzzles = await response.json();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error occurred';
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="loading">Loading puzzles...</div>
{:else if error}
	<div class="error">{error}</div>
{:else}
	<div class="list-container">
		<div class="puzzle-list">
			{#each puzzles as puzzle}
				<PuzzleCard {puzzle} />
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	@use '$src/vars' as vars;

	.list-container {
		overflow-y: scroll;
		max-height: calc(100vh - vars.$header-height);
	}

	.puzzle-list {
		display: flex;
		flex-direction: column;
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem;
	}

	.loading,
	.error {
		text-align: center;
		padding: 2rem;
		color: #666;
	}

	.error {
		color: #ff4444;
	}
</style>
