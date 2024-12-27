<script lang="ts">
	import type { CellMarker } from '$lib/Puzzle/PenTool';
	import { getXPathStr, getHighlightColor } from '$lib/utils/SquareCellGridRenderUtils';

	export let marker: CellMarker;

	const a = 0.3;
	const strokeWidth = 0.08;

	$: pathStr = getXPathStr(marker, a);
	$: stroke = getHighlightColor(marker.colorId, 'black');
</script>

{#if marker.marker === 'X'}
	<path d={pathStr} class="cell-marker" {stroke} stroke-width={strokeWidth} fill="none" />
{:else}
	<circle
		class="cell-marker color-{marker.colorId}"
		cx={marker.c}
		cy={marker.r}
		r={a}
		{stroke}
		stroke-width={strokeWidth}
		fill="none"
		opacity=0.9
	/>
{/if}
