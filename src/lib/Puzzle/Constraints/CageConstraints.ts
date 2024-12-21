import { type GridCoordI, addToCellGroup } from "$lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCells, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

export interface CageToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cells: GridCoordI[];
}

export function cageConstraint(toolId: TOOLID, coords: GridCoordI[], value = ''): CageToolI {
	return {
		toolId,
		cells: coords,
		value
	};
}

export function updateCageConstraintCells(cage: CageToolI, cell: GridCoordI, allowDiagonallyAdjacent: boolean = false): CageToolI {    
    const newGroup = addToCellGroup(cage.cells, cell, allowDiagonallyAdjacent);

	if (newGroup !== cage.cells) {
		const newCage: CageToolI = {
			...cage,
			cells: newGroup
		};
		return newCage;
	}
	return cage;
}

export function updateCageValue(cage: CageToolI, value: string): CageToolI {
	return {
		...cage,
		value
	};
}

export function cageConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): CageToolI {
	const cells = parseCells(data, 'cells');
	const value = parseValue(data);

	const constraint = cageConstraint(toolId, cells, value);
	return constraint;
}