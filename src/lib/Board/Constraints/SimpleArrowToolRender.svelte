<script lang="ts">
	import type { ArrowToolI } from '$lib/Puzzle/Constraints/ArrowConstraints';
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { cellsBoundingBox, cellsLineToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import ArrowMarker from './ArrowMarker.svelte';

	export let tool: ArrowToolI;
	export let c_id: string;
	export let shape: ShapeI;

	$: bulbRadius = shape?.r ?? 0.4;
	$: stroke = shape?.stroke ?? 'gray';
	$: strokeWidth = shape?.strokeWidth ?? 0.1;
	$: strokeDasharray = shape?.strokeDasharray ?? 0;
	$: linePathOptions = {
		shortenHead: bulbRadius,
		shortenTail: shape?.linePathOptions?.shortenTail ?? 0.2,
		bezierRounding: shape?.linePathOptions?.bezierRounding ?? 0.4
	};

	const strokeLinejoin = 'round';
	const strokeLinecap = 'round';

	$: bulbPath = cellsLineToPathStr(tool.cells);
	$: bbox = cellsBoundingBox(tool.cells);

	const uid = crypto.randomUUID();
	const arrowMaskId = `arrow-mask-${c_id}-${uid}`;
	const arrowMarkerId = `arrow-marker-${c_id}-${uid}`;
</script>

<mask
	id={arrowMaskId}
	maskUnits="userSpaceOnUse"
	maskContentUnits="userSpaceOnUse"
	x={bbox.x}
	y={bbox.y}
	width={bbox.width}
	height={bbox.height}
>
	<path
		class="arrow-bulb"
		stroke-width={2 * bulbRadius + strokeWidth}
		d={bulbPath}
		stroke="white"
		fill="none"
	/>
	<path
		class="arrow-bulb"
		stroke-width={2 * bulbRadius - strokeWidth}
		d={bulbPath}
		stroke="black"
		fill="none"
	/>
</mask>
<ArrowMarker id={arrowMarkerId} l={0.2} {strokeWidth} {stroke} />

<path
	class="arrow-bulb"
	d={bulbPath}
	stroke-width={2 * bulbRadius + strokeWidth}
	{stroke}
	mask="url(#{arrowMaskId})"
/>
{#each tool.lines as line}
	{#if line.length > 1}
		<path
			class="arrow-line"
			d={cellsLineToPathStr(line, linePathOptions)}
			{stroke}
			stroke-width={strokeWidth}
			fill="none"
			stroke-dasharray={strokeDasharray}
			stroke-linejoin={strokeLinejoin}
			stroke-linecap={strokeLinecap}
			marker-end="url(#{arrowMarkerId})"
		/>
	{/if}
{/each}

<style>
	.arrow-bulb {
		stroke-linejoin: round;
		stroke-linecap: round;
	}
</style>
