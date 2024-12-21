import type { GridCoordI } from "$lib/utils/SquareCellGridCoords";
import { DIRECTION } from "$lib/utils/directions";
import type { TOOLID } from "../Tools";
import { parseCell, parseDirection, parseDirections, parseValue } from "../utils";
import type { ConstraintI } from "./ConstraintType";

export interface CellToolI extends ConstraintI {
	type: 'SIMPLE';
	toolId: TOOLID;
	value?: string;
	cell: GridCoordI;
}

export interface CellArrowToolI extends ConstraintI {
	type: 'ARROW';
	toolId: TOOLID;
	value?: string;
	cell: GridCoordI;
	direction: DIRECTION;
}

export interface CellMultiArrowToolI extends ConstraintI {
	type: 'MULTIARROW';
	toolId: TOOLID;
	value?: string;
	cell: GridCoordI;
	directions: DIRECTION[];
}

export type SingleCellTool = CellToolI | CellArrowToolI | CellMultiArrowToolI;


export function singleCellConstraint(toolId: TOOLID, coords: GridCoordI, value?: string): CellToolI {
	return {
		type: 'SIMPLE',
		toolId,
		cell: coords,
		value
	};
}

export function singleCellConstraintFromJson(toolId: TOOLID, data: Record<string, unknown>): SingleCellTool {
	const cell = parseCell(data)
	const value = parseValue(data)

	const constraint = singleCellConstraint(toolId, cell, value)
	return constraint
}
	

export function singleCellArrowConstraint(
	toolId: TOOLID,
	coords: GridCoordI,
	direction: DIRECTION
): CellArrowToolI {
	return {
		type: 'ARROW',
		toolId,
		cell: coords,
		direction
	};
}

export function singleCellArrowConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): CellArrowToolI {
	const cell = parseCell(data);
	const direction = parseDirection(data);

	const constraint = singleCellArrowConstraint(toolId, cell, direction);
	return constraint;
}

export function singleCellMultiArrowConstraint(
	toolId: TOOLID,
	coords: GridCoordI,
	direction: DIRECTION
): CellMultiArrowToolI {
	return {
		type: 'MULTIARROW',
		toolId,
		cell: coords,
		directions: [direction]
	};
}

export function singleCellMultiArrowConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): CellMultiArrowToolI {
	const cell = parseCell(data);
	const directions = parseDirections(data);

	const constraint = singleCellMultiArrowConstraint(toolId, cell, DIRECTION.N);
	constraint.directions = directions
	return constraint;
}