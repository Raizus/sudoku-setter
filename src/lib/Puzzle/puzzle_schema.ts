import type { DIRECTION } from '../utils/directions';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import type { ShapeI } from './Shape/Shape';
import type { OTHER_CONSTRAINTS, TOOLID } from './Tools';

export interface ConstraintI {
	toolId: TOOLID;
	shape?: ShapeI;
}

export interface ArrowToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	lines: GridCoordI[][];
	cells: GridCoordI[];
}

export interface CageToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cells: GridCoordI[];
}

export interface CenterCornerOrEdgeToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cell: GridCoordI;
}

export interface CloneToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cells: GridCoordI[];
	cells2: GridCoordI[];
}

export interface CornerToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	cells: GridCoordI[];
}

export interface CornerLineToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	coords: GridCoordI[];
}

export interface EdgeToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	cells: GridCoordI[];
}

export interface LineToolI extends ConstraintI {
	toolId: TOOLID;
	value?: string;
	cells: GridCoordI[];
}

export interface OutsideDirectionToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	cell: GridCoordI;
	direction: DIRECTION;
}

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

export interface ValuedGlobalToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
}

export interface VariableConstraintI extends ConstraintI {
	toolId: OTHER_CONSTRAINTS.VARIABLE_CONSTRAINT;
	name: string;
	value: string;
}

export type ConstraintType =
	| CellToolI
	| CellArrowToolI
	| CellMultiArrowToolI
	| CornerToolI
	| LineToolI
	| ArrowToolI
	| CageToolI
	| CloneToolI
	| OutsideDirectionToolI
	| CenterCornerOrEdgeToolI
	| ValuedGlobalToolI
	| VariableConstraintI;

export interface ConstraintsElement {
	tool_id: TOOLID;
	name?: string;
	constraints?: Record<string, ConstraintType>;
	negative_constraints?: Record<string, boolean>;
	disabled?: boolean;
}
