import {
	areCoordsEqual,
	areCoordsNeighbours,
	sortGridCoords,
	type GridCoordI
} from '$lib/utils/SquareCellGridCoords';
import type { TOOLID } from '../Tools';
import { parseCells, parseLines } from '../utils';
import type { ConstraintI } from './ConstraintType';
import { addToLineSelfHit } from './LineConstraints';

export interface ArrowToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	lines: GridCoordI[][];
	cells: GridCoordI[];
}

export function arrowConstraint(toolId: TOOLID, coords: GridCoordI[]): ArrowToolI {
	return {
		toolId,
		cells: coords,
		lines: []
	};
}

export function arrowAddToBulb(arrow: ArrowToolI, cell: GridCoordI): ArrowToolI {
	const cells = [...arrow.cells];

	if (cells.length === 0) {
		cells.push(cell);
		sortGridCoords(cells);
		return {
			...arrow,
			cells
		};
	}

	// can add to bulb if not in bulb yet and adjacent to existing one
	const inBulb = cells.some((_cell) => areCoordsEqual(_cell, cell));
	const isNeighbour = cells.some((_cell) => areCoordsNeighbours(_cell, cell));

	if (cells.length > 0 && !inBulb && isNeighbour) {
		cells.push(cell);
		sortGridCoords(cells);
		return {
			...arrow,
			cells
		};
	}

	return arrow;
}

export function arrowAddToLast(
	arrow: ArrowToolI,
	cell: GridCoordI,
	allowSelfIntersection?: boolean
): ArrowToolI {
	const cellInBulb = arrow.cells.some((_cell) => areCoordsEqual(_cell, cell));
	const nlines = arrow.lines.length;

	// add new line
	if (nlines === 0 && !cellInBulb) return arrow;
	if (nlines === 0 && cellInBulb) {
		return arrowAddToLines(arrow, cell);
	}

	const lastLine = arrow.lines[nlines - 1];
	const lineLen = lastLine.length;
	// add to last line and it's empty
	if (lineLen === 0 && !cellInBulb) return arrow;
	if (lineLen === 0 && cellInBulb) {
		return arrowAddToLines(arrow, cell);
	}

	const selfHit = addToLineSelfHit(lastLine, cell, false);
	const adjToLast = lastLine.length === 0 ? true : areCoordsNeighbours(lastLine[lineLen - 1], cell);
	if (!adjToLast) return arrow;

	if (selfHit >= 0) {
		lastLine.length = selfHit + 1;
		return {
			...arrow,
			lines: [...arrow.lines.slice(0, nlines - 1), lastLine]
		};
	} else if (!cellInBulb || allowSelfIntersection) {
		lastLine.push(cell);
		return {
			...arrow,
			lines: [...arrow.lines.slice(0, nlines - 1), lastLine]
		};
	}

	return arrow;
}

export function arrowAddToLines(arrow: ArrowToolI, cell: GridCoordI): ArrowToolI {
	const cellInBulb = arrow.cells.some((_cell) => areCoordsEqual(_cell, cell));

	if (cellInBulb) {
		return {
			...arrow,
			lines: [...arrow.lines, [cell]]
		};
	}

	return arrow;
}

export function arrowShouldRemoveLastLine(arrow: ArrowToolI): boolean {
	const l = arrow.lines.length;
	if (l < 1) return false;
	if (arrow.lines[l - 1].length <= 1) return true;
	return false;
}

export function arrowRemoveLastLine(arrow: ArrowToolI): ArrowToolI {
	const lines = arrow.lines.slice(0, -1);
	return {
		...arrow,
		lines
	};
}

export function removeLineFromArrow(arrow: ArrowToolI, idx: number): ArrowToolI {
	const lines = [...arrow.lines];
	lines.splice(idx, 1);
	return {
		...arrow,
		lines
	};
}

export function arrowConstraintFromJson(toolId: TOOLID, data: Record<string, unknown>): ArrowToolI {
	const cells = parseCells(data, 'cells');
	const lines = parseLines(data);
	// const value = parseValue(data);

	const constraint = arrowConstraint(toolId, cells);
	constraint.lines = lines;
	return constraint;
}
