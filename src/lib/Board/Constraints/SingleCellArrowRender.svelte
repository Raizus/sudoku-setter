<script lang="ts">
	import type { CellArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { cellToCellCenterVector, linePointsToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$lib/utils/Vector2D';
	import type { DIRECTION } from '$lib/utils/directions';
	import ArrowMarker from './ArrowMarker.svelte';

	export let singleCellArrowTool: CellArrowToolI;
	export let id: string;

	const cell = singleCellArrowTool.cell;
	$: direction = singleCellArrowTool.direction;

	const defaultShape =
		getDefaultShape(singleCellArrowTool.toolId, squareCellElementHandlers) ??
		defaultSingleCellArrowShape;
	$: shape = singleCellArrowTool.shape ?? defaultShape;

	$: strokeWidth = shape.strokeWidth ?? 0.1;
	$: stroke = shape.stroke ?? 'black';

	const scale = 0.3;
	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction)
		const vec = (new Vector2D(delta.c, delta.r)).normalise().scale(scale)
		const cellCenter = cellToCellCenterVector(_cell);
		
		const p1 = cellCenter.subtract(vec);
		const p2 = cellCenter.add(vec);
		const line = [p1, p2];
		return line;
	}

	$: pathStr = linePointsToPathStr(getLine(cell, direction))

	const uid = crypto.randomUUID();
	const markerId = `single-cell-arrow-marker-${id}-${uid}`;
</script>

<ArrowMarker id={markerId} l={0.15} {stroke} {strokeWidth} />
<path d={pathStr} fill="none" {stroke} stroke-width={strokeWidth} marker-end="url(#{markerId})" />
