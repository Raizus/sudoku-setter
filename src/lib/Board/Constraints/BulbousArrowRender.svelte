<script lang="ts">
		import type { ArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultArrowShape } from '$lib/Puzzle/Shape/Shape';
	import type { Rectangle } from '$lib/Types/types';
	import {
		cellsBoundingBox,
		cellsLineToPathStr,
		getCagePoints,
		linePointsToPathStr,
		pointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import ArrowMarker from './ArrowMarker.svelte';
	import CageRender from './CageRender.svelte';

	export let tool: ArrowToolI;
	export let arrowId: string;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	$: shape = tool.shape ?? defaultShape;

	$: bulbRadius = shape?.r ?? 0.4;
	$: stroke = shape?.stroke ?? 'gray';
	$: strokeWidth = shape?.strokeWidth ?? 0.1;
	$: strokeDasharray = shape?.strokeDasharray ?? 0;
	$: opacity = shape?.opacity ?? 0.8;
	$: linePathOptions = {
		shortenHead: bulbRadius,
		shortenTail: shape?.linePathOptions?.shortenTail ?? 0.2,
		bezierRounding: shape?.linePathOptions?.bezierRounding ?? 0.4
	};
	$: fill = shape?.fill ?? 'none';
	$: inset = shape?.inset ?? 0.2;

	const strokeLinejoin = 'round';
	const strokeLinecap = 'round';

	$: cageShape = {
		...defaultShape,
		strokeDasharray: 0,
		strokeLinejoin: 'round',
		inset
	};

	$: bulbPath = cellsLineToPathStr(tool.cells);

	const uid = crypto.randomUUID();
	const arrowMarkerId = `arrow-marker-${arrowId}-${uid}`;
</script>

<ArrowMarker id={arrowMarkerId} l={0.2} {strokeWidth} {stroke} />
<CageRender cells={tool.cells} shape={cageShape} />

{#each tool.lines as line}
	{#if line.length > 1}
		<path
			class="arrow-line"
			d={cellsLineToPathStr(line, linePathOptions)}
			{stroke}
			stroke-width={strokeWidth}
			fill="none"
			{opacity}
			stroke-dasharray={strokeDasharray}
			stroke-linejoin={strokeLinejoin}
			stroke-linecap={strokeLinecap}
			marker-end="url(#{arrowMarkerId})"
		/>
	{/if}
{/each}

<style>
</style>
