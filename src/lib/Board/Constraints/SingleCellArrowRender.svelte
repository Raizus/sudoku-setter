<script lang="ts">
	import type { CellArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import {
		cellToCellCenterVector,
		linePointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$lib/utils/Vector2D';
	import { DIRECTION } from '$lib/utils/directions';

	export let tool: CellArrowToolI;
	export let id: string;

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

	function getArrowHead(l: number, _direction: DIRECTION) {
		const head = [new Vector2D(-l, 0), new Vector2D(0, 0), new Vector2D(0, l)];

		// Define rotation angles (in radians) for each direction
		// Starting from East (default) and rotating counterclockwise
		const rotationAngles = {
			[DIRECTION.NE]: 0, // 0 degrees (default)
			[DIRECTION.E]: Math.PI / 4, // 45 degrees
			[DIRECTION.SE]: Math.PI / 2, // 90 degrees
			[DIRECTION.S]: (3 * Math.PI) / 4, // 135 degrees
			[DIRECTION.SW]: Math.PI, // 180 degrees
			[DIRECTION.W]: (5 * Math.PI) / 4, // 225 degrees
			[DIRECTION.NW]: (3 * Math.PI) / 2, // 270 degrees
			[DIRECTION.N]: (7 * Math.PI) / 4 // 315 degrees
		};

		// Get the rotation angle for the target direction
		const angle = rotationAngles[_direction];
		// Rotate each point in the head array
		const rotatedHead = head.map((p) => p.rotate(angle));
		return rotatedHead;
	}

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
