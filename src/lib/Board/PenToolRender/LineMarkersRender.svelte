<script lang="ts">
	import type { LineMarker } from '$lib/Puzzle/PenTool';
	import { getHighlightColor } from '$lib/utils/SquareCellGridRenderUtils';

	export let lineMarkers: LineMarker[];

	const strokeWidth = 0.09;

	function lineMarkerId(marker: LineMarker): string {
		return JSON.stringify(marker);
	}

	function getMarkerColor(colorId: number) {
		return getHighlightColor(colorId, 'black');
	}
</script>

<g class="line-markers">
	{#each lineMarkers as marker (lineMarkerId(marker))}
		<line
            x1={marker.p1.c}
            y1={marker.p1.r}
            x2={marker.p2.c}
            y2={marker.p2.r}
            class="line-marker color-{marker.colorId}"
			stroke-width={strokeWidth}
			stroke={getMarkerColor(marker.colorId)}
			fill="none"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
	{/each}
</g>

<style>
	.line-markers {
		opacity: 0.6;
	}
</style>