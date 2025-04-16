<script lang="ts">
	import CircleRender from '$components/SvgRender/CircleRender.svelte';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';
	import type { EdgeToolI } from '$src/lib/Puzzle/Constraints/EdgeConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultEdgeCircleShape, SHAPE_TYPES } from '$src/lib/Puzzle/Shape/Shape';
	import { TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { cellsToVector2DPoints, cellToCellCenterVector } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$src/lib/utils/Vector2D';
	import BorderLineRender from './BorderLineRender.svelte';

	export let tool: EdgeToolI;

	$: coords = tool.cells;
	$: center = vectorAverage(cellsToVector2DPoints(coords));

	$: defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultEdgeCircleShape;
	$: shape = tool.shape ?? defaultShape;

	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	function getText(tool: EdgeToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}

	function getEdgeTextAngle(tool_id: TOOLID): number {
		if (tool_id !== TOOLS.EDGE_INEQUALITY && tool_id !== TOOLS.ONE_WAY_DOOR) return 0;

		const p1 = cellToCellCenterVector(coords[0]);
		const p2 = cellToCellCenterVector(coords[1]);

		const theta = p2.subtract(p1).angle() / (2 * Math.PI);
		const angle = theta * 360;
		return angle;
	}
</script>

<g class="edge-tool-preview" opacity={0.5}>
	{#if tool.toolId === TOOLS.EDGE_INEQUALITY || tool.toolId === TOOLS.ONE_WAY_DOOR}
		<CircleRender x={center.x} y={center.y} {shape} />
	{:else if type === SHAPE_TYPES.TEXT_ONLY}
		<CircleRender x={center.x} y={center.y} {shape} />
	{:else if type === SHAPE_TYPES.BORDER_LINE}
		<BorderLineRender {coords} {shape} />
	{:else}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	<text
		x={center.x}
		y={center.y}
		text-anchor="middle"
		dominant-baseline="central"
		font-size={fontSize}
		fill={fontColor}
		transform={`rotate(${getEdgeTextAngle(tool.toolId)}, ${center.x}, ${center.y} )`}
	>
		{getText(tool, type)}
	</text>
</g>
