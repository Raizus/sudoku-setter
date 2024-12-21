<script lang="ts">
	import { defaultSingleCellMultiArrowShape } from '$lib/Puzzle/Shape/Shape';

	import ArrowMarker from './ArrowMarker.svelte';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { Vector2D } from '$lib/utils/Vector2D';
	import {
		cellToCellCenterVector,
		linePointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import type { CellMultiArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import type { DIRECTION } from '$lib/utils/directions';

	export let singleCellMultiArrowTool: CellMultiArrowToolI;
	export let id: string;

	const cell = singleCellMultiArrowTool.cell;

	const defaultShape =
		getDefaultShape(singleCellMultiArrowTool.toolId, squareCellElementHandlers) ??
		defaultSingleCellMultiArrowShape;
	$: shape = singleCellMultiArrowTool.shape ?? defaultShape;

	$: strokeWidth = shape.strokeWidth ?? 0.08;
	$: stroke = shape.stroke ?? 'black';

	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction)
		const vec = (new Vector2D(delta.c, delta.r)).normalise()
		const cellCenter = cellToCellCenterVector(_cell);

		const p1 = cellCenter.add(vec.scale(0.1));
		const p2 = cellCenter.add(vec.scale(0.4));
		const line = [p1, p2];
		return line;
	}

	function getPath(direction: DIRECTION) {
		return linePointsToPathStr(getLine(cell, direction));
	}

	const uid = crypto.randomUUID();
	const markerId = `single-cell-multi-arrow-marker-${id}-${uid}`;
</script>

<ArrowMarker id={markerId} l={0.1} {stroke} {strokeWidth} />
{#each singleCellMultiArrowTool.directions as direction}
	<path
		d={getPath(direction)}
		fill="none"
		{stroke}
		stroke-width={strokeWidth}
		marker-end="url(#{markerId})"
	/>
{/each}
