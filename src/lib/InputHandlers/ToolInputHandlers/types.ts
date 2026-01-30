import {
	isArrowTool,
	isCageTool,
	isCenterEdgeCornerTool,
	isCloneTool,
	isCornerTool,
	isEdgeTool,
	isLineTool,
	isOutsideDirectionTool,
	isSimpleSingleCellTool,
	isSingleCellArrowTool,
	isSingleCellMultiArrowTool,
	isValuedGlobalConstraint,
	TOOLS,
	type TOOLID
} from '$src/lib/Puzzle/Tools';

export enum HANDLER_TOOL_TYPE {
	SELECTION,
	SINGLE_CELL,
	SINGLE_CELL_ARROW,
	SINGLE_CELL_MULTI_ARROW,
	EDGE,
	DIRECTED_ADJACENT_CELLS,
	CORNER,
	LINE,
	ARROW,
	CAGE,
	CLONE,
	CORNER_LINE,
	CENTER_CORNER_OR_EDGE,
	OUTSIDE_DIRECTION,
	VALUE_TOOL,
	PEN
}

export interface ToolOptionsI {
	type: HANDLER_TOOL_TYPE;
	valueUpdater?: ValueUpdaterI;
}

export type ValueUpdaterI = (value: string | undefined, key: string) => string | undefined;
// If a constraint has a value field and it can be modified by keyboard input,
// this interface validates the values

export interface ValueToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.VALUE_TOOL;
	defaultValue?: string;
}

export interface SelectionInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.SELECTION;
};

export interface SingleCellToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL;
	defaultValue?: string;
	oppositeConstraintId?: TOOLID;
};

export interface SingleCellArrowToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW;
	cornerOrEdge: CornerOrEdge;
	defaultValue?: string;
};

export interface SingleCellMultiArrowToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW;
	cornerOrEdge: CornerOrEdge;
	defaultValue?: string;
};

export interface EdgeToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.EDGE;
	defaultValue?: string;
};

export interface DirectedAdjacentCellsToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS;
	defaultValue?: string;
};

export interface CornerToolOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.CORNER;
	defaultValue?: string;
};

export interface ArrowToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.ARROW;
	allowSelfIntersection?: boolean; // allow arrow to intersect bulb
	defaultValue?: string;
};

export interface CageToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.CAGE;
	defaultValue?: string;
	allowDiagonallyAdjacent?: boolean;
};

export interface CloneToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.CLONE;
};

export interface CenterCornerOrEdgeToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE;
	defaultValue?: string;
	targets: CornerOrEdge;
};

export interface CornerLineToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.CORNER_LINE;
	defaultValue?: string;
};

export interface LineToolInputOptions extends ToolOptionsI {
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

export interface OutsideDirectionToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION;
	defaultValue?: string;
	cornerOrEdge: CornerOrEdge;
};

export interface PenToolInputOptions extends ToolOptionsI {
	type: HANDLER_TOOL_TYPE.PEN;
};

export interface ToolOptionsRegistry {
	[HANDLER_TOOL_TYPE.SELECTION]: SelectionInputOptions;
	[HANDLER_TOOL_TYPE.SINGLE_CELL]: SingleCellToolOptions;
	[HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW]: SingleCellArrowToolOptions;
	[HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW]: SingleCellMultiArrowToolOptions;
	[HANDLER_TOOL_TYPE.EDGE]: EdgeToolOptions;
	[HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS]: DirectedAdjacentCellsToolOptions;
	[HANDLER_TOOL_TYPE.CORNER]: CornerToolOptions;
	[HANDLER_TOOL_TYPE.CAGE]: CageToolInputOptions;
	[HANDLER_TOOL_TYPE.CLONE]: CloneToolInputOptions;
	[HANDLER_TOOL_TYPE.LINE]: LineToolInputOptions;
	[HANDLER_TOOL_TYPE.ARROW]: ArrowToolInputOptions;
	// [HANDLER_TOOL_TYPE.CORNER_LINE]: CornerLineToolInputOptions;
	[HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE]: CenterCornerOrEdgeToolInputOptions;
	[HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION]: OutsideDirectionToolInputOptions;
	[HANDLER_TOOL_TYPE.PEN]: PenToolInputOptions;
	[HANDLER_TOOL_TYPE.VALUE_TOOL]: ValueToolInputOptions;
}

// Automatically derived union type
export type ToolHandlerOptions = ToolOptionsRegistry[keyof ToolOptionsRegistry];

export enum ARROW_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	EDIT_BULB = 'Edit Bulb',
	EDIT_ARROWS = 'Edit Arrows',
	DELETE = 'Delete'
}

export enum BASIC_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	ADD_EDIT = 'Add/Edit',
	DELETE = 'Delete'
}

export enum CLONE_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	SELECT = 'Select',
	MOVE = 'Move',
	DELETE = 'Delete'
}

export enum CORNER_LINE_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	ADD_EDIT = 'Add/Edit',
	DELETE = 'Delete'
}

export enum CELL_MULTI_ARROW_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	ADD_EDIT = 'Add/Edit',
	DELETE = 'Delete'
}

export enum VALUE_TOOL_MODE {
	CREATE = 'Create'
}

export type ToolModeT =
	| CLONE_TOOL_MODE
	| BASIC_TOOL_MODE
	| ARROW_TOOL_MODE
	| VALUE_TOOL_MODE
	| undefined;

function isBasicTool(tool: TOOLID): boolean {
	return (
		isSimpleSingleCellTool(tool) ||
		isSingleCellArrowTool(tool) ||
		isSingleCellMultiArrowTool(tool) ||
		isLineTool(tool) ||
		isEdgeTool(tool) ||
		isCornerTool(tool) ||
		isCageTool(tool) ||
		isOutsideDirectionTool(tool) ||
		isCenterEdgeCornerTool(tool)
	);
}

export function getToolModes(tool: TOOLID) {
	if (isBasicTool(tool)) return BASIC_TOOL_MODE;
	if (isArrowTool(tool)) return ARROW_TOOL_MODE;
	if (isCloneTool(tool)) return CLONE_TOOL_MODE;
	if (isValuedGlobalConstraint(tool) || tool === TOOLS.VARIABLE_CONSTRAINT) return VALUE_TOOL_MODE;
	return undefined;
}

export function getDefaultToolMode(tool: TOOLID): ToolModeT {
	if (isBasicTool(tool)) return BASIC_TOOL_MODE.DYNAMIC;
	if (isArrowTool(tool)) return ARROW_TOOL_MODE.DYNAMIC;
	if (isCloneTool(tool)) return CLONE_TOOL_MODE.DYNAMIC;
	return undefined;
}
