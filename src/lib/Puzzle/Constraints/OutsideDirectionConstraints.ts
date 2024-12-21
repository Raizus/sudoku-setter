import type { GridCoordI } from "$lib/utils/SquareCellGridCoords";
import type { DIRECTION } from "$lib/utils/directions";
import type { TOOLID } from "../Tools";
import { parseCell, parseDirection, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

export interface OutsideDirectionToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cell: GridCoordI;
	direction: DIRECTION;
}

export function outsideDirectionConstraint(
	toolId: TOOLID,
	cell: GridCoordI,
	direction: DIRECTION,
	value = ''
): OutsideDirectionToolI {
	return {
		toolId,
		cell,
		direction: direction,
		value
	};
}

export function outsideDirectionConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): OutsideDirectionToolI {
	const cell = parseCell(data);
	const direction = parseDirection(data);
	const value = parseValue(data);

	const constraint = outsideDirectionConstraint(toolId, cell, direction, value);
	return constraint;
}