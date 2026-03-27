<script lang="ts">
	import type { CellArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { cellToCellCenterVector } from '$lib/utils/SquareCellGridRenderUtils';
	import CenteredArrowRender from '../SvgComponents/CenteredArrowRender.svelte';

	export let tool: CellArrowToolI;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultSingleCellArrowShape;
	$: shape = tool.shape ?? defaultShape;

	const arrow_l = 0.6;
	$: center = cellToCellCenterVector(tool.cell);
</script>

<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} {shape} direction={tool.direction} />
