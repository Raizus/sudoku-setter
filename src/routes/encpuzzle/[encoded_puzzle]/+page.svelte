<script lang="ts">
	import { browser } from '$app/environment';
	import { puzzleFromJson, type PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import Game from '$src/routes/Game.svelte';
	import { resetUserState, setPuzzle } from '$stores/BoardStore';
	import { onMount } from 'svelte';

	export let data: { puzzle: PuzzleI };

	let initialized = false;

	onMount(() => {
		if (browser && !initialized) {
			try {
				const puzzle = data.puzzle;
				// Delay store updates to ensure proper initialization
				requestAnimationFrame(() => {
					setPuzzle(puzzle);
					resetUserState();
					initialized = true;
				});
			} catch (e) {
				console.error('Puzzle initialization failed:', e);
			}
		}
	});
</script>

{#if browser && initialized}
	<Game />
{:else}
	<div>Loading puzzle...</div>
{/if}
