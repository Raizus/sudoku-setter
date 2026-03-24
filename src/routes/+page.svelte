<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import { blankPuzzle } from '$src/lib/Puzzle/Puzzle';
	import { stateStore } from '$stores/StateStore';

	let initialized = false;

	onMount(() => {
		if (browser && !initialized) {
			try {
				// Delay store updates to ensure proper initialization
				const newPuzzle = blankPuzzle();
				requestAnimationFrame(() => {
					stateStore.setPuzzle(newPuzzle);
					stateStore.resetUserState();
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
