import type { Cell } from '../Puzzle/Grid/Cell';
import { type TOOLID } from '../Puzzle/Tools';

export enum UPDATE_CELLS_ACTIONS {
	SET_CELLS_VALUE = 'SET_CELLS_VALUE',
	RESTORE_CELLS_VALUES = 'RESTORE_CELL_VALUES',
	SET_GIVENS = 'SET_GIVENS',
	RESTORE_GIVENS = 'RESTORE_GIVENS',
	SET_REGIONS = 'SET_REGIONS',
	RESTORE_REGIONS = 'RESTORE_REGIONS',
	SET_FOG = 'SET_FOG',
	RESTORE_FOG = 'RESTORE_FOG',
	SET_PENCILMARKS = 'SET_PENCILMARKS',
	RESTORE_PENCILMARKS = 'RESTORE_PENCILMARKS',
	SET_HIGHLIGHTS = 'SET_HIGHLIGHTS',
	RESTORE_HIGHLIGHTS = 'RESTORE_HIGHLIGHTS'
}

type SetCellsValueAction = {
	type: UPDATE_CELLS_ACTIONS.SET_CELLS_VALUE;
	payload: {
		cells: Cell[];
		value: number | null;
	};
};

type RestoreCellsValueAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_CELLS_VALUES;
	payload: {
		cells: Cell[];
		values: Array<number | null>;
	};
};

type SetCellsGivenAction = {
	type: UPDATE_CELLS_ACTIONS.SET_GIVENS;
	payload: {
		cells: Cell[];
		value: number | null;
	};
};

type RestoreCellsGivenAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_GIVENS;
	payload: {
		cells: Cell[];
		values: (number | null)[];
		givens: boolean[];
	};
};

type SetCellsRegionAction = {
	type: UPDATE_CELLS_ACTIONS.SET_REGIONS;
	payload: {
		cells: Cell[];
		value: number | null;
	};
};

type RestoreCellsRegionsAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_REGIONS;
	payload: {
		cells: Cell[];
		values: Array<number | null>;
	};
};

type SetCellsFogAction = {
	type: UPDATE_CELLS_ACTIONS.SET_FOG;
	payload: {
		cells: Cell[];
		value: boolean;
	};
};

type RestoreCellsFogAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_FOG;
	payload: {
		cells: Cell[];
		values: boolean[];
	};
};

type SetCellsPencilmarksAction = {
	type: UPDATE_CELLS_ACTIONS.SET_PENCILMARKS;
	payload: {
		cells: Cell[];
		tool: TOOLID;
		value: number | null;
	};
};

type RestoreCellsPencilmarksAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_PENCILMARKS;
	payload: {
		cells: Cell[];
		tool: TOOLID;
		values: number[][];
	};
};

type SetCellsHighlightAction = {
	type: UPDATE_CELLS_ACTIONS.SET_HIGHLIGHTS;
	payload: {
		cells: Cell[];
		value: number | null;
	};
};

type RestoreCellsHighlightsAction = {
	type: UPDATE_CELLS_ACTIONS.RESTORE_HIGHLIGHTS;
	payload: {
		cells: Cell[];
		values: number[][];
	};
};

export const setCellsValueAction = (cells: Cell[], value: number | null): SetCellsValueAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_CELLS_VALUE,
		payload: {
			cells,
			value
		}
	};
};

export const restoreCellsValueAction = (
	cells: Cell[],
	values: Array<number | null>
): RestoreCellsValueAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_CELLS_VALUES,
		payload: {
			cells,
			values
		}
	};
};

export const setCellsGivenAction = (cells: Cell[], value: number | null): SetCellsGivenAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_GIVENS,
		payload: {
			cells,
			value
		}
	};
};

export const restoreCellsGivenAction = (
	cells: Cell[],
	values: Array<number | null>,
	givens: boolean[]
): RestoreCellsGivenAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_GIVENS,
		payload: {
			cells,
			values,
			givens
		}
	};
};

export const setCellsRegionAction = (cells: Cell[], value: number | null): SetCellsRegionAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_REGIONS,
		payload: {
			cells,
			value
		}
	};
};

export const restoreCellsRegionsAction = (
	cells: Cell[],
	values: Array<number | null>
): RestoreCellsRegionsAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_REGIONS,
		payload: {
			cells,
			values
		}
	};
};

export const setCellsFogAction = (cells: Cell[], value: boolean): SetCellsFogAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_FOG,
		payload: {
			cells,
			value
		}
	};
};

export const restoreCellsFogAction = (
	cells: Cell[],
	values: boolean[]
): RestoreCellsFogAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_FOG,
		payload: {
			cells,
			values
		}
	};
};

export const setCellsPencilmarksAction = (
	cells: Cell[],
	value: number | null,
	tool: TOOLID
): SetCellsPencilmarksAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_PENCILMARKS,
		payload: {
			cells,
			tool,
			value
		}
	};
};

export const restoreCellsPencilmarksAction = (
	cells: Cell[],
	values: number[][],
	tool: TOOLID
): RestoreCellsPencilmarksAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_PENCILMARKS,
		payload: {
			cells,
			tool,
			values
		}
	};
};

export const setCellsHighlightAction = (
	cells: Cell[],
	value: number | null
): SetCellsHighlightAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.SET_HIGHLIGHTS,
		payload: {
			cells,
			value
		}
	};
};

export const restoreCellsHighlightsAction = (
	cells: Cell[],
	values: number[][]
): RestoreCellsHighlightsAction => {
	return {
		type: UPDATE_CELLS_ACTIONS.RESTORE_HIGHLIGHTS,
		payload: {
			cells,
			values
		}
	};
};

export type UpdateCellsAction =
	| SetCellsValueAction
	| RestoreCellsValueAction
	| SetCellsGivenAction
	| RestoreCellsGivenAction
	| SetCellsRegionAction
	| RestoreCellsRegionsAction
	| SetCellsFogAction
	| RestoreCellsFogAction
	| SetCellsHighlightAction
	| RestoreCellsHighlightsAction
	| SetCellsPencilmarksAction
	| RestoreCellsPencilmarksAction;
