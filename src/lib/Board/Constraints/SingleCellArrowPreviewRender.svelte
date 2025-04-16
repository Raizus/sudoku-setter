<script lang="ts">
	import type { CellArrowToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellArrowShape } from '$src/lib/Puzzle/Shape/Shape';
	import { getSingleCellArrowPath } from '$src/lib/utils/SquareCellGridRenderUtils';

	export let tool: CellArrowToolI;

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultSingleCellArrowShape;
	$: shape = tool.shape ?? defaultShape;

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

	$: arrowPathStr = getSingleCellArrowPath(tool.cell, tool.direction);
</script>

<g class="single-cell-arrow-tool-preview" opacity={0.5}>
	<path
		d={arrowPathStr}
		fill="none"
		stroke={outlineShape.stroke}
		stroke-width={outlineShape.strokeWidth}
		stroke-linecap="round"
	/>
	<path
		d={arrowPathStr}
		fill="none"
		stroke={shape.stroke}
		stroke-width={shape.strokeWidth}
		stroke-linecap="round"
	/>
</g>
