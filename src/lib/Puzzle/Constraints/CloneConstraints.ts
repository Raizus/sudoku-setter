import { type GridCoordI, addToCellGroup } from "$lib/utils/SquareCellGridCoords";
import type { CloneToolI } from "../puzzle_schema";
import type { TOOLID } from "../Tools";

export function cloneConstraint(
	toolId: TOOLID,
	coords: GridCoordI[],
	label: string
): CloneToolI {
	return {
		toolId,
		cells: coords,
		cells2: coords,
		value: label
	};
}

export function updateCloneConstraintCells(clone: CloneToolI, cell: GridCoordI): CloneToolI {
    const newGroup = addToCellGroup(clone.cells, cell, true);

    if (newGroup !== clone.cells) {
		const newClone: CloneToolI = {
			...clone,
			cells: newGroup,
			cells2: newGroup
		};
		return newClone;
    }
	return clone;
}
