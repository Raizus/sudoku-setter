<script lang="ts">
	import type { EdgeMarker } from '$lib/Puzzle/PenTool';
	import EdgeMarkRender from './EdgeMarkRender.svelte';

	export let markers: EdgeMarker[];
</script>

<g class="edge-markers">
	{#each markers as marker (`${marker.r}, ${marker.c}`)}
		<EdgeMarkRender {marker} />
	{/each}
</g>
