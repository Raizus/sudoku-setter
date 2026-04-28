import type { DIRECTION } from '../utils/directions';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import type { ShapeI } from './Shape/Shape';
import type { OTHER_CONSTRAINTS, TOOLID } from './Tools';

export interface ConstraintI {
	toolId: TOOLID;
	shape?: ShapeI;
	disabled?: boolean;
}

export interface ArrowToolI extends ConstraintI {
	value?: string;
	lines: GridCoordI[][];
	cells: GridCoordI[];
}

export interface CageToolI extends ConstraintI {
	value: string;
	cells: GridCoordI[];
}

export interface CenterCornerOrEdgeToolI extends ConstraintI {
	value: string;
	cell: GridCoordI;
}

export interface CloneToolI extends ConstraintI {
	value: string;
	cells: GridCoordI[];
	cells2: GridCoordI[];
}

export interface CornerToolI extends ConstraintI {
	value?: string;
	cells: GridCoordI[];
}

export interface CornerLineToolI extends ConstraintI {
	value: string;
	coords: GridCoordI[];
}

export interface EdgeToolI extends ConstraintI {
	value?: string;
	cells: GridCoordI[];
}

export interface LineToolI extends ConstraintI {
	value?: string;
	cells: GridCoordI[];
}

export interface OutsideDirectionToolI extends ConstraintI {
	value: string;
	cell: GridCoordI;
	direction: DIRECTION;
}

export interface CellToolI extends ConstraintI {
	type: 'SIMPLE';
	value?: string;
	cell: GridCoordI;
}

export interface CellArrowToolI extends ConstraintI {
	type: 'ARROW';
	value?: string;
	cell: GridCoordI;
	direction: DIRECTION;
}

export interface CellMultiArrowToolI extends ConstraintI {
	type: 'MULTIARROW';
	value?: string;
	cell: GridCoordI;
	directions: DIRECTION[];
}

export type SingleCellTool = CellToolI | CellArrowToolI | CellMultiArrowToolI;

export interface ValuedGlobalToolI extends ConstraintI {
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
	| EdgeToolI
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

export type Solution = undefined | (null | number)[][];

export interface PuzzleMetaI {
	title?: string;
	authors?: string[];
	ruleset?: string;
	ctcUrl?: string;
	ctcYoutubeUrl?: string;
}

export interface CellRecord {
	outside?: boolean;
	value?: number;
	given?: boolean;
	centerMarks?: number[];
	cornerMarks?: number[];
	highlights?: number[];
	region?: number | null;
}

export interface PuzzleJson {
	valid_digits: number[];
	puzzleInfo: PuzzleMetaI;
	nRows: number;
	nCols: number;
	grid: CellRecord[][];
	solution?: Solution;
	// elements: ConstraintsElement;
}

export interface ConstraintAndId {
	id: string;
	constraint: ConstraintType;
}
// export const lineToolsStore = getToolsStore<LineToolI>(isLineTool);

export interface ToolPreview<T extends ConstraintType> {
	tool: T;
	match_id?: string;
	mode: 'add' | 'remove';
}

export interface ElementsDictI extends Map<string, ConstraintsElement> {
	addElementToDict(element: ConstraintsElement): string;
	orderedEntries(): Generator<[string, ConstraintsElement], void, unknown>;
	findElementsByTool(toolId: TOOLID): ConstraintsElement[];
	hasTool(toolId: TOOLID): boolean;
	removeFromDict(element_id: string): [string, ConstraintsElement] | undefined;
	getConstraint<T extends ConstraintType>(element_id: string, constraintId: string): T | null;
	addConstraint<T extends ConstraintType>(
		element_id: string,
		constraintId: string,
		constraint: T
	): void;
	setElement(element_id: string, element: ConstraintsElement): void;
	moveElementUp(element_id: string): void;
	moveElementDown(element_id: string): void;
	enableDisableElement(element_id: string, value: boolean): void;
	removeConstraint(element_id: string, constraintId: string): void;
	updateConstraint<T extends ConstraintType>(
		element_id: string,
		constraintId: string,
		constraint: T
	): void;
	
}