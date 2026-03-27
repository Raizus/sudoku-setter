<script lang="ts">
	import { defaultSingleCellMultiArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { getSingleCellMultiArrowPath } from '$lib/utils/SquareCellGridRenderUtils';
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/puzzle_schema';

	export let tool: CellMultiArrowToolI;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultSingleCellMultiArrowShape;
	$: shape = tool.shape ?? defaultShape;
</script>

{#each tool.directions as direction}
	<path
		d={getSingleCellMultiArrowPath(tool.cell, direction)}
		fill="none"
		stroke={shape.stroke}
		stroke-width={shape.strokeWidth}
		stroke-linecap="round"
	/>
{/each}
