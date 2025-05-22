<script lang="ts">
	import DiagonalElementRender from './DiagonalElementRender.svelte';
	import { diagonalElementsStore } from '$stores/ElementsStore';

	$: diagonal_elements = $diagonalElementsStore;
</script>

{#each diagonal_elements as element}
	{#if !element.disabled}
		<DiagonalElementRender {element} />	
	{/if}
{/each}
