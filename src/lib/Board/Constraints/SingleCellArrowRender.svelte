<script lang="ts">
	import type { CellArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import {
		cellToCellCenterVector,
		getArrowHead,
		linePointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$lib/utils/Vector2D';
	import { DIRECTION } from '$lib/utils/directions';

	export let tool: CellArrowToolI;

	const outline = true;
	const cell = tool.cell;
	$: direction = tool.direction;

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultSingleCellArrowShape;
	$: shape = tool.shape ?? defaultShape;

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

	$: strokeWidth = shape.strokeWidth ?? 0.1;
	$: stroke = shape.stroke ?? 'black';

	const scale = 0.3;
	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction);
		const vec = new Vector2D(delta.c, delta.r).normalise().scale(scale);
		const cellCenter = cellToCellCenterVector(_cell);

		const p1 = cellCenter.subtract(vec);
		const p2 = cellCenter.add(vec);
		const line = [p1, p2];
		return line;
	}

	function getArrowPath(_cell: GridCoordI, _direction: DIRECTION) {
		const l = 0.2;
		const line = getLine(_cell, _direction);
		let head = getArrowHead(l, _direction);
		head = head.map((p) => p.add(line[1]));

		const linePathStr = linePointsToPathStr(line);
		const headPathStr = linePointsToPathStr(head);
		const arrowPathStr = linePathStr + headPathStr;
		return arrowPathStr;
	}

	$: arrowPathStr = getArrowPath(cell, direction);
</script>

{#if outline}
	<path
		d={arrowPathStr}
		fill="none"
		stroke={outlineShape.stroke}
		stroke-width={outlineShape.strokeWidth}
		stroke-linecap="round"
	/>
{/if}
<path d={arrowPathStr} fill="none" {stroke} stroke-width={strokeWidth} stroke-linecap="round"/>
