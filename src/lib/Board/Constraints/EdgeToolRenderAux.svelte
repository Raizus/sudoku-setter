<script lang="ts">
	import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
	import { SHAPE_TYPES, defaultEdgeCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
		import type { EdgeToolI } from "$src/lib/Puzzle/puzzle_schema";
	import CircleRender from '$src/lib/Board/SvgComponents/CircleRender.svelte';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import {
		cellToCellCenterVector,
		cellsToVector2DPoints
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import BorderLineRender from './BorderLineRender.svelte';
	import RenderShape from '$src/lib/Board/SvgComponents/RenderShape.svelte';
	import { currentConstraintStore } from '$stores/BoardStore';
	import DirectedAdjacentCellsRender from './DirectedAdjacentCellsRender.svelte';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultEdgeCircleShape;
	$: shape = tool.shape ?? defaultShape;

	// maybe adjust fontSize to shape size?
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	$: coords = tool.cells;
	$: center = vectorAverage(cellsToVector2DPoints(coords));

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

{#if coords.length === 2}
	{#if tool.toolId === TOOLS.EDGE_INEQUALITY || tool.toolId === TOOLS.ONE_WAY_DOOR}
		{#if c_id && c_id === currentConstraintId}
			<CircleRender x={center.x} y={center.y} shape={selectedOutlineShape} />
		{/if}
		<CircleRender x={center.x} y={center.y} {shape} />
	{:else if type === SHAPE_TYPES.ARROW}
		<DirectedAdjacentCellsRender {tool} {c_id} />
	{:else if type === SHAPE_TYPES.TEXT_ONLY}
		{#if c_id && c_id === currentConstraintId}
			<CircleRender x={center.x} y={center.y} shape={selectedOutlineShape} />
		{/if}
		<CircleRender x={center.x} y={center.y} {shape} />
	{:else if type === SHAPE_TYPES.BORDER_LINE}
		{#if c_id && c_id === currentConstraintId}
			<BorderLineRender {coords} shape={selectedOutlineShape} />
		{/if}
		<BorderLineRender {coords} {shape} />
	{:else}
		{#if c_id && c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
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
{/if}
