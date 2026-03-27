<script lang="ts">
	import { defaultArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import { coordsToDirection, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
	import CenteredArrowRender from '../SvgComponents/CenteredArrowRender.svelte';
	import { DIRECTION } from '$src/lib/utils/directions';

	export let tool: EdgeToolI;

	$: defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	$: shape = tool.shape ?? defaultShape;

	function getDirection(_cells: GridCoordI[]) {
		if (_cells.length < 2) return DIRECTION.N;
		const delta: GridCoordI = { r: _cells[1].r - _cells[0].r, c: _cells[1].c - _cells[0].c };
		const direction = coordsToDirection(delta);
		return direction;
	}

	const arrow_l = 0.6;
	$: center = vectorAverage(cellsToVector2DPoints(tool.cells));
	$: direction = getDirection(tool.cells);
</script>

{#if tool.cells.length === 2}
	<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} {shape} {direction} />
{/if}
