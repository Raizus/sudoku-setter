<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import CircleRender from '$lib/Components/SvgRender/CircleRender.svelte';
	import PolygonRender from '$lib/Components/SvgRender/PolygonRender.svelte';
	import SquareRender from '$lib/Components/SvgRender/SquareRender.svelte';
	import EllipseRender from '$lib/Components/SvgRender/EllipseRender.svelte';
	import RectangleRender from '$lib/Components/SvgRender/RectangleRender.svelte';
	import type { CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
	import { SHAPE_TYPES, defaultCornerCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { gridCoordsAverage } from '$lib/utils/SquareCellGridCoords';
	import { Vector2D } from '$lib/utils/Vector2D';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import QuadrupleTextRender from './QuadrupleTextRender.svelte';

	export let cornerTool: CornerToolI;

	const coords = cornerTool.cells;
	const defaultShape =
		getDefaultShape(cornerTool.toolId, squareCellElementHandlers) ?? defaultCornerCircleShape;
	$: shape = cornerTool.shape ?? defaultShape;

	$: type = shape?.type ?? SHAPE_TYPES.CIRCLE;
	const center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);

	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	function getText(tool: CornerToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

{#if coords.length === 4}
	<g class="corner-tool">
		{#if type === SHAPE_TYPES.CIRCLE}
			<CircleRender x={center.x} y={center.y} {shape} />
		{:else if type === SHAPE_TYPES.ELLIPSE}
			<EllipseRender cx={center.x} cy={center.y} {shape} />
		{:else if type === SHAPE_TYPES.SQUARE}
			<SquareRender cx={center.x} cy={center.y} {shape} />
		{:else if type === SHAPE_TYPES.RECTANGLE}
			<RectangleRender cx={center.x} cy={center.y} {shape} />
		{:else if type === SHAPE_TYPES.POLYGON}
			<PolygonRender cx={center.x} cy={center.y} {shape} />
		{:else}
			<CircleRender x={center.x} y={center.y} {shape} />
		{/if}
		{#if cornerTool.toolId === TOOLS.QUADRUPLE}
			<QuadrupleTextRender {cornerTool} />
		{:else}
			<text
				x={center.x}
				y={center.y}
				text-anchor="middle"
				dominant-baseline="central"
				font-size={fontSize}
				fill={fontColor}
			>
				{getText(cornerTool, type)}
			</text>
		{/if}
	</g>
{/if}
