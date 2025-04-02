<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import { blankPuzzle } from '$src/lib/Puzzle/Puzzle';
	import { resetUserState, setPuzzle } from '$stores/BoardStore';

	let initialized = false;

	onMount(() => {
		if (browser && !initialized) {
			try {
				// Delay store updates to ensure proper initialization
				const newPuzzle = blankPuzzle();
				requestAnimationFrame(() => {
					setPuzzle(newPuzzle);
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
