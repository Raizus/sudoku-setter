<script lang="ts">
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellMultiArrowShape } from '$src/lib/Puzzle/Shape/Shape';
	import { getSingleCellMultiArrowPath } from '$src/lib/utils/SquareCellGridRenderUtils';

	export let tool: CellMultiArrowToolI;

    $: cell = tool.cell;
	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ??
		defaultSingleCellMultiArrowShape;
	$: shape = tool.shape ?? defaultShape;

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

</script>

<g class="single-cell-multi-arrow-tool-preview" opacity={0.5}>
	{#each tool.directions as direction}
		<path
			d={getSingleCellMultiArrowPath(cell, direction)}
			fill="none"
			stroke={outlineShape.stroke}
			stroke-width={outlineShape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
	{#each tool.directions as direction}
		<path
			d={getSingleCellMultiArrowPath(cell, direction)}
			fill="none"
            stroke={shape.stroke}
            stroke-width={shape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
</g>
