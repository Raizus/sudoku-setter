<script lang="ts">
	import { TOOLS } from '$lib/Puzzle/Tools';
	import { SHAPE_TYPES, defaultEdgeCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import type { EdgeToolI } from '$lib/Puzzle/Constraints/EdgeConstraints';
	import CircleRender from '$lib/Components/SvgRender/CircleRender.svelte';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import {
		cellToCellCenterVector,
		cellsToVector2DPoints
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import BorderLineRender from './BorderLineRender.svelte';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';

	export let edgeTool: EdgeToolI;

	const coords = edgeTool.cells;
	const defaultShape =
		getDefaultShape(edgeTool.toolId, squareCellElementHandlers) ?? defaultEdgeCircleShape;
	$: shape = edgeTool.shape ?? defaultShape;

	$: center = vectorAverage(cellsToVector2DPoints(coords));

	// maybe adjust fontSize to shape size?
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	function getText(tool: EdgeToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}

	function getTextAngle(): number {
		if (edgeTool.toolId !== TOOLS.EDGE_INEQUALITY) return 0;

		const p1 = cellToCellCenterVector(coords[0]);
		const p2 = cellToCellCenterVector(coords[1]);

		const theta = p2.subtract(p1).angle() / (2 * Math.PI);
		const angle = theta * 360;
		return angle;
	}
</script>

{#if coords.length === 2}
	<g class="edge-tool">
		{#if edgeTool.toolId === TOOLS.EDGE_INEQUALITY}
			<CircleRender x={center.x} y={center.y} {shape} />
		{:else if type === SHAPE_TYPES.TEXT_ONLY}
			<CircleRender x={center.x} y={center.y} {shape} />
		{:else if type === SHAPE_TYPES.BORDER_LINE}
			<BorderLineRender {coords} {shape} />
		{:else}
			<RenderShape cx={center.x} cy={center.y} {shape}/>
		{/if}
		<text
			x={center.x}
			y={center.y}
			text-anchor="middle"
			dominant-baseline="central"
			font-size={fontSize}
			fill={fontColor}
			transform={`rotate(${getTextAngle()}, ${center.x}, ${center.y} )`}
		>
			{getText(edgeTool, type)}
		</text>
	</g>
{/if}
