<script lang="ts">
	import type { CellMarker } from '$lib/Puzzle/PenTool';
	import CellMarkRender from './CellMarkRender.svelte';

	export let markers: CellMarker[];
</script>

<g class="cell-markers">
	{#each markers as marker (`${marker.r}, ${marker.c}, ${marker.marker}`)}
		<CellMarkRender {marker} />
	{/each}
</g>
