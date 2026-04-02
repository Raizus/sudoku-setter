<script lang="ts">
	import { defaultSingleCellMultiArrowShape, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { getSingleCellMultiArrowPath } from '$lib/utils/SquareCellGridRenderUtils';
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/puzzle_schema';

	export let tool: CellMultiArrowToolI;
	export let shape: ShapeI = defaultSingleCellMultiArrowShape;
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
