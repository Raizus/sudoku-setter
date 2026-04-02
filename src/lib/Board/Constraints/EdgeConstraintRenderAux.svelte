<script lang="ts">
	import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
	import { SHAPE_TYPES, defaultEdgeCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import {
		cellToCellCenterVector,
		cellsToVector2DPoints
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import BorderLineRender from './BorderLineRender.svelte';
	import RenderShape from '$src/lib/Board/SvgComponents/RenderShape.svelte';
	import DirectedAdjacentCellsRender from './DirectedAdjacentCellsRender.svelte';
	import { getCurrentConstraintStore } from './utils';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();
	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;

	$: defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultEdgeCircleShape;
	$: shape = tool.shape ?? defaultShape;

	// maybe adjust fontSize to shape size?
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: coords = tool.cells;
	$: center = vectorAverage(cellsToVector2DPoints(coords));

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.06 : 0.06
	};
	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

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
	{#if type === SHAPE_TYPES.ARROW}
		{#if outline}
			<DirectedAdjacentCellsRender cells={coords} shape={outlineShape} />
		{/if}
		{#if is_selected}
			<DirectedAdjacentCellsRender cells={coords} shape={selectedOutlineShape} />
		{/if}
		<DirectedAdjacentCellsRender cells={coords} {shape} />
	{:else if type === SHAPE_TYPES.BORDER_LINE}
		<BorderLineRender {coords} {shape} />
	{:else}
		{#if outline}
			<RenderShape cx={center.x} cy={center.y} shape={outlineShape} />
		{/if}
		{#if is_selected}
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
