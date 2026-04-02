<script lang="ts">
	import { defaultArrowShape, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import { coordsToDirection, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
	import CenteredArrowRender from '../SvgComponents/CenteredArrowRender.svelte';
	import { DIRECTION } from '$src/lib/utils/directions';

	export let cells: GridCoordI[];
	export let shape: ShapeI = defaultArrowShape;

	function getDirection(_cells: GridCoordI[]) {
		if (_cells.length < 2) return DIRECTION.N;
		const delta: GridCoordI = { r: _cells[1].r - _cells[0].r, c: _cells[1].c - _cells[0].c };
		const direction = coordsToDirection(delta);
		return direction;
	}

	const arrow_l = 0.6;
	$: center = vectorAverage(cellsToVector2DPoints(cells));
	$: direction = getDirection(cells);
</script>

{#if cells.length === 2}
	<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} {shape} {direction} />
{/if}
