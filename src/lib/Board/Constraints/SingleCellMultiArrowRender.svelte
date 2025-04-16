<script lang="ts">
	import { defaultSingleCellMultiArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import {
		getSingleCellMultiArrowPath,
	} from '$lib/utils/SquareCellGridRenderUtils';
	import type { CellMultiArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CellMultiArrowToolI;
	export let c_id: string;

	$: currentConstraintId = $currentConstraintStore?.id;

	const cell = tool.cell;
	const outline = true;

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ??
		defaultSingleCellMultiArrowShape;
	$: shape = tool.shape ?? defaultShape;
	$: strokeWidth = shape.strokeWidth ?? 0.08;
	$: stroke = shape.stroke ?? 'black';

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.03 : 0.03
	};

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

</script>

{#if outline}
	{#each tool.directions as direction}
		<path
			d={getSingleCellMultiArrowPath(cell, direction)}
			fill="none"
			stroke={outlineShape.stroke}
			stroke-width={outlineShape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
{/if}
{#if c_id === currentConstraintId}
	{#each tool.directions as direction}
		<path
			d={getSingleCellMultiArrowPath(cell, direction)}
			fill="none"
			stroke={selectedOutlineShape.stroke}
			stroke-width={selectedOutlineShape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
{/if}
{#each tool.directions as direction}
	<path
		d={getSingleCellMultiArrowPath(cell, direction)}
		fill="none"
		{stroke}
		stroke-width={strokeWidth}
		stroke-linecap="round"
	/>
{/each}

