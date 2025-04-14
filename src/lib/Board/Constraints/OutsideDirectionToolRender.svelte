<script lang="ts">
	import { cellToCellCenterVector, getArrowHead, linePointsToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import type { OutsideDirectionToolI } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultOutsideShape } from '$lib/Puzzle/Shape/Shape';
	import { directionToCoords, gridCoordsNextInDirection, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import type { DIRECTION } from '$src/lib/utils/directions';
	import { Vector2D } from '$src/lib/utils/Vector2D';

	export let tool: OutsideDirectionToolI;

	const coords = tool.cell;
	const direction = tool.direction;
	const coords2 = gridCoordsNextInDirection(coords, direction);
	const center = cellToCellCenterVector(coords);

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultOutsideShape;
	$: shape = tool.shape ?? defaultShape;

	// maybe adjust fontSize to shape size?
	const fontSize = shape?.fontSize ?? 0.5;
	$: fontColor = shape?.fontColor ?? 'var(--text-primary-color)';
	$: stroke = shape?.stroke ?? 'var(--text-primary-color)';
	const arrowStrokeWidth = 0.03;

	function getText(tool: OutsideDirectionToolI): string {
		return tool.value ? (tool.value.length ? tool.value : '-') : '-';
	}

	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction);
		const vec = new Vector2D(delta.c, delta.r).normalise();
		const cellCenter = cellToCellCenterVector(_cell);

		const p1 = cellCenter.add(vec.scale(0.35));
		const p2 = cellCenter.add(vec.scale(0.58));
		const line = [p1, p2];
		return line;
	}

	function getArrowPath(_cell: GridCoordI, _direction: DIRECTION) {
		const l = 0.12;
		const line = getLine(_cell, _direction);
		let head = getArrowHead(l, _direction);
		head = head.map((p) => p.add(line[1]));

		const linePathStr = linePointsToPathStr(line);
		const headPathStr = linePointsToPathStr(head);
		const arrowPathStr = linePathStr + headPathStr;
		return arrowPathStr;
	}

	$: arrowPathStr = getArrowPath(coords, direction);
</script>

<g class="outside-direction-tool">
	<path d={arrowPathStr} fill="none" {stroke} stroke-width={arrowStrokeWidth} stroke-linecap="round"/>
	<text
		x={center.x}
		y={center.y}
		text-anchor="middle"
		dominant-baseline="central"
		font-size={fontSize}
		fill={fontColor}
	>
		{getText(tool)}
	</text>
</g>
