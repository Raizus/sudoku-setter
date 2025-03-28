<script>
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import { blankPuzzle } from '$src/lib/Puzzle/Puzzle';
	import { resetUserState, setPuzzle } from '$stores/BoardStore';

	onMount(() => {
		const newPuzzle = blankPuzzle();
		try {
			// Delay store updates to ensure proper initialization
			requestAnimationFrame(() => {
				setPuzzle(newPuzzle);
				resetUserState();
			});
		} catch (e) {
			console.error('Puzzle initialization failed:', e);
		}
	});
</script>

<Game></Game>
