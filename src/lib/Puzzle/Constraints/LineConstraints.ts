import { areCoordsEqual, areCoordsNeighbours, type GridCoordI } from "$lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCells, parseValue } from "../utils";
import type { LineToolI } from "../puzzle_schema";

export function lineConstraint(toolId: TOOLID, coords: GridCoordI[], value?: string): LineToolI {
	return {
		toolId,
		cells: coords,
		value
	};
}

export function lineConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): LineToolI {
	const cells = parseCells(data, 'cells');
	const value = parseValue(data);
	
	const constraint = lineConstraint(toolId, cells, value);

	return constraint;
}

export function addToLineSelfHit(
	line: GridCoordI[],
	newCell: GridCoordI,
	allowSelfIntersetion: boolean
): number {
	const fromIdx = allowSelfIntersetion ? line.length - 2 : 0;
	const selfHit = line.findIndex((coord, idx) => {
		const coordMatch = areCoordsEqual(coord, newCell);
		return coordMatch && idx >= fromIdx;
	});
	return selfHit;
}

export function updateLineConstraintCells(
	line: LineToolI,
	cell: GridCoordI,
	allowSelfIntersetion: boolean
): LineToolI {
	const lineCells = [...line.cells];
	const l = lineCells.length;

	const adjToLast = l === 0 ? true : areCoordsNeighbours(lineCells[l - 1], cell);
	if (!adjToLast) return line;

	const selfHit = addToLineSelfHit(line.cells, cell, allowSelfIntersetion);
	if (selfHit >= 0) {
		lineCells.length = selfHit + 1;
	} else {
		lineCells.push(cell);
	}

	return { ...line, cells: lineCells };
}

