<script lang="ts">
	import type { CellArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getSingleCellArrowPath } from '$lib/utils/SquareCellGridRenderUtils';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	const outline = true;

	$: defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultSingleCellArrowShape;
	$: shape = tool.shape ?? defaultShape;
	$: strokeWidth = shape.strokeWidth ?? 0.1;
	$: stroke = shape.stroke ?? 'black';

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	$: arrowPathStr = getSingleCellArrowPath(tool.cell, tool.direction);
</script>

{#if outline}
	<path
		d={arrowPathStr}
		fill="none"
		stroke={outlineShape.stroke}
		stroke-width={outlineShape.strokeWidth}
		stroke-linecap="round"
	/>
{/if}
{#if c_id && c_id === currentConstraintId}
	<path
		d={arrowPathStr}
		fill="none"
		stroke={selectedOutlineShape.stroke}
		stroke-width={selectedOutlineShape.strokeWidth}
		stroke-linecap="round"
	/>
{/if}
<path d={arrowPathStr} fill="none" {stroke} stroke-width={strokeWidth} stroke-linecap="round" />
