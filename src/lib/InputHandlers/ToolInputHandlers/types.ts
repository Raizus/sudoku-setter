import type { TOOLID } from '$src/lib/Puzzle/Tools';

export enum HANDLER_TOOL_TYPE {
	SELECTION,
	SINGLE_CELL,
	SINGLE_CELL_ARROW,
	SINGLE_CELL_MULTI_ARROW,
	EDGE,
	CORNER,
	LINE,
	ARROW,
	CAGE,
	CLONE,
	CORNER_LINE,
	CENTER_CORNER_OR_EDGE,
    OUTSIDE_DIRECTION,
    PEN
}

export interface ToolOptionsI {
	type: HANDLER_TOOL_TYPE;
}

export type ValueUpdaterI = (value: string | undefined, key: string) => string | undefined;
// If a constraint has a value field and it can be modified by keyboard input,
// this interface validates the values

export interface ValueToolInputOptions extends ToolOptionsI {
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
}

export type SelectionInputOptions = {
    type: HANDLER_TOOL_TYPE.SELECTION
}

export type SingleCellToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
	oppositeConstraintId?: TOOLID;
};

export type SingleCellArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW;
	cornerOrEdge: CornerOrEdge;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
};

export type SingleCellMultiArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW;
	cornerOrEdge: CornerOrEdge;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
};

export type EdgeToolOptions = {
	type: HANDLER_TOOL_TYPE.EDGE;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
};

export type CornerToolOptions = {
	type: HANDLER_TOOL_TYPE.CORNER;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
};

export type ArrowToolInputOptions = {
	type: HANDLER_TOOL_TYPE.ARROW;
	allowSelfIntersection?: boolean; // allow arrow to intersect bulb
	defaultValue?: string;
}

export type CageToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CAGE;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
	allowDiagonallyAdjacent?: boolean;
};

export type CloneToolInputOptions = {
    type: HANDLER_TOOL_TYPE.CLONE;
}

export type CenterCornerOrEdgeToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
	targets: CornerOrEdge;
};

export type CornerLineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CORNER_LINE;
	defaultValue?: string;
};

export type LineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.LINE;
	// deletePrioritizeHead: boolean,
	// deletePrioritizeTail: boolean,
	allowSelfIntersection: boolean;
	defaultValue?: string;
};

export enum CornerOrEdge {
	EDGE,
	CORNER,
	CELL_CENTER,
	CORNER_OR_EDGE,
	CORNER_OR_CENTER,
	EDGE_OR_CENTER,
	CLOSEST
}

export type OutsideDirectionToolInputOptions = {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION;
	valueUpdater?: ValueUpdaterI;
	defaultValue?: string;
	cornerOrEdge: CornerOrEdge;
};

export type PenToolInputOptions = {
	type: HANDLER_TOOL_TYPE.PEN;
};

export type ToolHandlerOptions =
	| SelectionInputOptions
	| SingleCellToolOptions
	| SingleCellArrowToolOptions
	| SingleCellMultiArrowToolOptions
	| EdgeToolOptions
	| CornerToolOptions
	| CageToolInputOptions
	| CloneToolInputOptions
	| LineToolInputOptions
    | ArrowToolInputOptions
    | CornerLineToolInputOptions
	| CenterCornerOrEdgeToolInputOptions
    | OutsideDirectionToolInputOptions
    | PenToolInputOptions;
