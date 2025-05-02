import type { GridCoordI } from "$src/lib/utils/SquareCellGridCoords";
import type { TOOLID } from "../Tools";
import { parseCell2, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

export interface CenterCornerOrEdgeToolI extends ConstraintI {
    toolId: TOOLID;
    value: string;
    cell: GridCoordI;
}

export function centerCornerOrEdgeConstraint(
	toolId: TOOLID,
	cell: GridCoordI,
	value = ''
): CenterCornerOrEdgeToolI {
	return {
		toolId,
		cell,
		value
	};
}

export function centerCornerOrEdgeConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): CenterCornerOrEdgeToolI {
	const cell = parseCell2(data);
	const value = parseValue(data);

	const constraint = centerCornerOrEdgeConstraint(toolId, cell, value);
	return constraint;
}