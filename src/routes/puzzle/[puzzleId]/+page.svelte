<script lang="ts">
	import { browser } from '$app/environment';
	import { puzzleFromJson } from '$src/lib/Puzzle/Puzzle';
	import Game from '$src/routes/Game.svelte';
	import { resetUserState, setPuzzle, updateCreationTimestamp } from '$stores/BoardStore';
	import { resetZoom } from '$stores/BoundingBoxStore';
	import { onMount } from 'svelte';

	export let data: { puzzle: { id: string; data: any } };

	let initialized = false;

	onMount(() => {
		if (browser && !initialized) {
			try {
				const newPuzzle = puzzleFromJson(data.puzzle.data);
				// Delay store updates to ensure proper initialization
				requestAnimationFrame(() => {
					setPuzzle(newPuzzle);
					updateCreationTimestamp();
					resetZoom();
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
