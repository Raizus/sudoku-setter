import type { GridCoordI } from "$lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCells, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

// for corner constraints
export interface CornerToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	cells: GridCoordI[];
}

export function cornerConstraint(toolId: TOOLID, coords: GridCoordI[], value?: string): CornerToolI {
	return {
		toolId,
		cells: coords,
		value
	};
}

export function cornerConstraintFromJson(toolId: TOOLID, data: Record<string, unknown>): CornerToolI {
	const cells = parseCells(data, 'cells');
	const value = parseValue(data);

	const constraint = cornerConstraint(toolId, cells, value);
	return constraint;
}