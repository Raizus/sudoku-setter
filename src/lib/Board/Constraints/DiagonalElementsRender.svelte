<script lang="ts">
	import DiagonalElementRender from './DiagonalElementRender.svelte';
	import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';

	export let diagonal_elements: ConstraintsElement[];
</script>

{#each diagonal_elements as element}
	{#if !element.disabled}
		<DiagonalElementRender {element} />	
	{/if}
{/each}
