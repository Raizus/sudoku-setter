<script lang="ts">
	import type { ArrowToolI } from '$lib/Puzzle/Constraints/ArrowConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultArrowShape } from '$lib/Puzzle/Shape/Shape';
	import type { Rectangle } from '$lib/Types/types';
	import { cellsLineToPathStr, cellsToVector2DPoints, linePointsToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import ArrowMarker from './ArrowMarker.svelte';

	export let arrowTool: ArrowToolI;
	export let arrowId: string;
	export let boundingBox: Rectangle;

	const defaultShape = getDefaultShape(arrowTool.toolId, squareCellElementHandlers) ?? defaultArrowShape;
	$: shape = arrowTool.shape ?? defaultShape;

	$: bbx = boundingBox.x;
	$: bby = boundingBox.y;

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

	const strokeLinejoin = 'round';
	const strokeLinecap = 'round';

	$: bulbPath = cellsLineToPathStr(arrowTool.cells);

	const uid = crypto.randomUUID()
	const arrowMaskId = `arrow-mask-${arrowId}-${uid}`
	const arrowMarkerId = `arrow-marker-${arrowId}-${uid}`
</script>

<g>
	<mask
		id={arrowMaskId}
		maskUnits="userSpaceOnUse"
		x={bbx}
		y={bby}
		width="100%"
		height="100%"
	>
		<rect x={bbx} y={bby} width="100%" height="100%" fill="white" />
		<path
			class="arrow-bulb"
			stroke-width={2 * bulbRadius - strokeWidth}
			d={bulbPath}
			stroke="black"
		/>
	</mask>
	<ArrowMarker id={arrowMarkerId} l={0.2} {strokeWidth} {stroke}/>

	<path
		class="arrow-bulb"
		d={bulbPath}
		stroke-width={2 * bulbRadius + strokeWidth}
		{stroke}
		mask="url(#{arrowMaskId})"
	/>
	{#each arrowTool.lines as line}
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
</g>

<style>
	.arrow-bulb {
		stroke-linejoin: round;
		stroke-linecap: round;
		fill: none;
	}
</style>
