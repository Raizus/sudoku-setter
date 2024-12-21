import { areCoordsEqual, sortGridCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';

export enum SELECTION_MODE {
	// Mode when starting a *NEW* selection.
	RESETTING = 'RESETTING',
	// Mode when we are either selecting or deselecting based on the opposite of the first cell hit.
	DYNAMIC = 'DYNAMIC',
	// Mode when user is selecting.
	SELECTING = 'SELECTING',
	// Mode when user is deselecting.
	DESELECTING = 'DESELECTING'
}

export enum SELECTION_ACTIONS {
	CLICK = 'CLICK',
	DRAG = 'DRAG',
	ARROW_KEY = 'ARROW_KEY',
	CLEAR = 'CLEAR',
	SET = 'SET',
	NONE = 'NONE'
}

type NoneAction = { type: SELECTION_ACTIONS.NONE };
type ClearAction = { type: SELECTION_ACTIONS.CLEAR };
type ClickAction = {
	type: SELECTION_ACTIONS.CLICK;
	payload: {
		cell: GridCoordI | null;
		selectionMode: SELECTION_MODE;
	};
};

type DragAction = {
	type: SELECTION_ACTIONS.DRAG;
	payload: GridCoordI | null;
};

type SetCellsAction = {
	type: SELECTION_ACTIONS.SET;
	payload: GridCoordI[];
};

type ArrowAction = {
	type: SELECTION_ACTIONS.ARROW_KEY;
	payload: {
		cell: GridCoordI | null;
		selectionMode: SELECTION_MODE;
	};
};

export type SelectionAction =
	| ClickAction
	| ClearAction
	| DragAction
	| SetCellsAction
	| NoneAction
	| ArrowAction;

export const selectionClickAction = (
	cell: GridCoordI | null,
	selectionMode: SELECTION_MODE
): ClickAction => ({
	type: SELECTION_ACTIONS.CLICK,
	payload: {
		cell,
		selectionMode
	}
});

export const selectionClearAction = (): ClearAction => ({
	type: SELECTION_ACTIONS.CLEAR
});

export const selectionNoneAction = (): NoneAction => ({
	type: SELECTION_ACTIONS.NONE
});

export const selectionDragAction = (cell: GridCoordI | null): DragAction => ({
	type: SELECTION_ACTIONS.DRAG,
	payload: cell
});

export const selectionSetCellsAction = (cells: GridCoordI[]): SetCellsAction => ({
	type: SELECTION_ACTIONS.SET,
	payload: cells
});

export const selectionArrowKeyAction = (
	cell: GridCoordI | null,
	selectionMode: SELECTION_MODE
): ArrowAction => ({
	type: SELECTION_ACTIONS.ARROW_KEY,
	payload: {
		cell,
		selectionMode
	}
});

export interface SelectionState {
	cells: GridCoordI[];
	lastCell: GridCoordI | null;
	mode: SELECTION_MODE;
}

export const initSelection = (): SelectionState => {
	return {
		cells: [],
		lastCell: null,
		mode: SELECTION_MODE.DYNAMIC
	};
};

export const generateSelection = (
	cells: GridCoordI[],
	lastCell: GridCoordI | null,
	mode: SELECTION_MODE
): SelectionState => {
	const newCells = [...cells];
	sortGridCoords(newCells);
	return {
		cells: newCells,
		lastCell,
		mode
	};
};

function selectionClick(
	state: SelectionState,
	cell: GridCoordI | null,
	mode: SELECTION_MODE
): SelectionState {
	if (cell === null) return initSelection();

	if (mode === SELECTION_MODE.RESETTING)
		return generateSelection([cell], cell, SELECTION_MODE.SELECTING);

	const matchIdx = state.cells.findIndex((coord) => areCoordsEqual(cell, coord));
	if (mode === SELECTION_MODE.SELECTING) {
		if (matchIdx !== -1) return state;
		return generateSelection([...state.cells, cell], cell, mode);
	} else if (mode === SELECTION_MODE.DESELECTING) {
		if (matchIdx === -1) return state;
		const newCells = [...state.cells];
		newCells.splice(matchIdx, 1);
		return generateSelection(newCells, null, mode);
	} else if (mode === SELECTION_MODE.DYNAMIC) {
		// select
		if (matchIdx === -1) {
			return generateSelection([...state.cells, cell], cell, SELECTION_MODE.SELECTING);
		}
		// deselect
		const newCells = [...state.cells];
		newCells.splice(matchIdx, 1);
		return generateSelection(newCells, null, SELECTION_MODE.DESELECTING);
	}
	return state;
}

function selectionDrag(state: SelectionState, cell: GridCoordI | null): SelectionState {
	if (cell === null) return state;

	const matchIdx = state.cells.findIndex((coord) => areCoordsEqual(cell, coord));
	if (state.mode === SELECTION_MODE.SELECTING) {
		if (matchIdx !== -1) return state;
		return generateSelection([...state.cells, cell], null, state.mode);
	}
	if (state.mode === SELECTION_MODE.DESELECTING) {
		if (matchIdx === -1) return state;
		const newCells = [...state.cells];
		newCells.splice(matchIdx, 1);
		return generateSelection(newCells, null, state.mode);
	}
	return state;
}

function selectionSetCells(state: SelectionState, cells: GridCoordI[]): SelectionState {
	return {
		...state,
		// lastCell: null,
		cells: cells
	};
};

function selectionArrowKey(state: SelectionState, cell: GridCoordI | null, mode: SELECTION_MODE): SelectionState {
    if (cell === null) return state;

    if (mode === SELECTION_MODE.SELECTING) {
        const matchIdx = state.cells.findIndex((coord) => areCoordsEqual(cell, coord));
		if (matchIdx !== -1) return generateSelection([...state.cells], cell, SELECTION_MODE.SELECTING);
        return generateSelection([...state.cells, cell], cell, SELECTION_MODE.SELECTING);
    }

    return generateSelection([cell], cell, state.mode);
}

export function reducerSelection(state: SelectionState, action: SelectionAction): SelectionState {
	switch (action?.type) {
		case SELECTION_ACTIONS.CLEAR:
			return initSelection();
		case SELECTION_ACTIONS.SET:
			return selectionSetCells(state, action.payload);
		case SELECTION_ACTIONS.CLICK:
			return selectionClick(state, action.payload.cell, action.payload.selectionMode);
		case SELECTION_ACTIONS.DRAG:
            return selectionDrag(state, action.payload);
        case SELECTION_ACTIONS.ARROW_KEY:
            return selectionArrowKey(state, action.payload.cell, action.payload.selectionMode);
		default:
			return state;
	}
}
