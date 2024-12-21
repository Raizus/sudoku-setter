<script lang="ts">
	import { isCellInputTool } from "$lib/Puzzle/Tools";
	import type { Rectangle } from "$lib/Types/types";
	import { getCagePathStr } from "$lib/utils/SquareCellGridRenderUtils";
	import { toolStore } from "$stores/BoardStore";
	import { selectionStore } from '$stores/SelectionStore';

	export let boundingBox: Rectangle;

    $: x = boundingBox.x;
    $: y = boundingBox.y;
	const inset = 0.06;
	const innerRadius = 0.05;
	const innerOpacity = '#080808';
	const outlineOpacity = '#b2b2b2';

	$: selection = $selectionStore.cells;
	$: fillPathStr = getCagePathStr(selection, 0);
	$: maskPathStr = getCagePathStr(selection, inset);
	
	$: showSelection = isCellInputTool($toolStore);
</script>

<g class="selection-layer" visibility={showSelection ? "visible" : "hidden"}>
	<filter id="selection-blur">
		<feGaussianBlur in="SourceGraphic" stdDeviation={innerRadius} />
		<feComponentTransfer>
			<feFuncR type="identity" />
			<feFuncG type="identity" />
			<feFuncB type="identity" />
			<feFuncA type="linear" slope="20" intercept="-9.5" />
		</feComponentTransfer>
	</filter>
	<mask
		id="selection-mask"
		maskUnits="userSpaceOnUse"
		x={x}
		y={y}
		width="100%"
		height="100%"
	>
		<rect x={x} y={y} width="100%" height="100%" fill={outlineOpacity} />
		<path d={maskPathStr} fill={innerOpacity} stroke="none" filter="url(#selection-blur)" />
	</mask>
	<path class="selection" d={fillPathStr} mask="url(#selection-mask)" />
</g>

<style>
	.selection {
		stroke: none;
		fill: #4ca4ff;
	}
</style>
