<script lang="ts">
	import type { EdgeMarker } from '$lib/Puzzle/PenTool';
	import { getXPathStr, getHighlightColor } from '$lib/utils/SquareCellGridRenderUtils';

	export let marker: EdgeMarker;

	const a = 0.08;
	const strokeWidth = 0.04;

	$: pathStr = getXPathStr(marker, a);
	$: stroke = getHighlightColor(marker.colorId, 'black');
</script>

<path
	d={pathStr}
	class="edge-marker color-{marker.colorId}"
	{stroke}
	stroke-width={strokeWidth}
	fill="none"
	opacity=0.9
/>
