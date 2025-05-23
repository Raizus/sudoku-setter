import type { GridCoordI } from "$lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCells, parseValue } from "../utils";
import type { EdgeToolI } from "../puzzle_schema";

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