import type { GridCoordI } from "$lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCells, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

export interface EdgeToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	cells: GridCoordI[];
}

export function edgeConstraint(toolId: TOOLID, coords: GridCoordI[], value?: string): EdgeToolI {
	return {
		toolId,
		cells: coords,
		value
	};
}

export function edgeConstraintFromJson(toolId: TOOLID, data: Record<string, unknown>): EdgeToolI {
	const cells = parseCells(data, 'cells');
	const value = parseValue(data);

	const constraint = edgeConstraint(toolId, cells, value);
	return constraint;
}