import { PenTool, type CellMarker, type EdgeMarker, type LineMarker } from '$lib/Puzzle/PenTool';
import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';

export enum PEN_TOOL_ACTIONS {
	RESET = 'RESET',
	ADD_EDGE_MARKER = 'ADD_EDGE_MARKER',
	REMOVE_EDGE_MARKER = 'REMOVE_EDGE_MARKER',
	ADD_CELL_MARKER = 'ADD_CELL_MARKER',
	SET_CELL_MARKERS = 'SET_CELL_MARKERS',
	REMOVE_CELL_MARKER = 'REMOVE_CELL_MARKER',
	DRAG = 'DRAG',
	ADD_LINE_MARKERS = 'ADD_LINE_MARKERS',
	REMOVE_LINE_MARKERS = 'REMOVE_LINE_MARKERS'
}

type ResetAction = {
	type: PEN_TOOL_ACTIONS.RESET;
};

export type AddEdgeMarkerAction = {
	type: PEN_TOOL_ACTIONS.ADD_EDGE_MARKER;
	payload: EdgeMarker;
};

export type RemoveEdgeMarkerAction = {
	type: PEN_TOOL_ACTIONS.REMOVE_EDGE_MARKER;
	payload: GridCoordI;
};

type AddCellMarkerAction = {
	type: PEN_TOOL_ACTIONS.ADD_CELL_MARKER;
	payload: CellMarker;
};

type SetCellMarkersAction = {
	type: PEN_TOOL_ACTIONS.SET_CELL_MARKERS;
	payload: CellMarker[];
};

type RemoveCellMarkerAction = {
	type: PEN_TOOL_ACTIONS.REMOVE_CELL_MARKER;
	payload: GridCoordI;
};

type DragAction = {
	type: PEN_TOOL_ACTIONS.DRAG;
	payload: LineMarker;
};

type AddLineMarkersAction = {
	type: PEN_TOOL_ACTIONS.ADD_LINE_MARKERS;
	payload: LineMarker[];
};

type RemoveLineMarkersAction = {
	type: PEN_TOOL_ACTIONS.REMOVE_LINE_MARKERS;
	payload: LineMarker[];
};

export type PenToolAction =
	| ResetAction
	| AddEdgeMarkerAction
	| RemoveEdgeMarkerAction
	| AddCellMarkerAction
	| SetCellMarkersAction
	| RemoveCellMarkerAction
	| DragAction
	| AddLineMarkersAction
	| RemoveLineMarkersAction;

export const addEdgeMarkerAction = (edgeMarker: EdgeMarker): AddEdgeMarkerAction => {
	return {
		type: PEN_TOOL_ACTIONS.ADD_EDGE_MARKER,
		payload: edgeMarker
	};
};

export const removeEdgeMarkerAction = (coords: GridCoordI): RemoveEdgeMarkerAction => {
	return {
		type: PEN_TOOL_ACTIONS.REMOVE_EDGE_MARKER,
		payload: coords
	};
};

export const addCellMarkerAction = (cellMarker: CellMarker): AddCellMarkerAction => {
	return {
		type: PEN_TOOL_ACTIONS.ADD_CELL_MARKER,
		payload: cellMarker
	};
};

export const setCellMarkersAction = (cellMarkers: CellMarker[]): SetCellMarkersAction => {
	return {
		type: PEN_TOOL_ACTIONS.SET_CELL_MARKERS,
		payload: cellMarkers
	};
};

export const removeCellMarkerAction = (coords: GridCoordI): RemoveCellMarkerAction => {
	return {
		type: PEN_TOOL_ACTIONS.REMOVE_CELL_MARKER,
		payload: coords
	};
};

export const dragAction = (lineMarker: LineMarker): DragAction => {
	return {
		type: PEN_TOOL_ACTIONS.DRAG,
		payload: lineMarker
	};
};

export const addLineMarkersAction = (lineMarkers: LineMarker[]): AddLineMarkersAction => {
	return {
		type: PEN_TOOL_ACTIONS.ADD_LINE_MARKERS,
		payload: lineMarkers
	};
};

export const removeLineMarkersAction = (lineMarkers: LineMarker[]): RemoveLineMarkersAction => {
	return {
		type: PEN_TOOL_ACTIONS.REMOVE_LINE_MARKERS,
		payload: lineMarkers
	};
};

export const resetAction = (): ResetAction => {
	return {
		type: PEN_TOOL_ACTIONS.RESET
	}
}

export function reducerPenTool(state: PenTool, action: PenToolAction): PenTool {
	switch (action.type) {
		case PEN_TOOL_ACTIONS.RESET: {
			const newState = new PenTool();
			return newState;
		}
		case PEN_TOOL_ACTIONS.ADD_EDGE_MARKER: {
			const newState = state.copy();
			newState.addEdgeMarker(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.REMOVE_EDGE_MARKER: {
			const newState = state.copy();
			newState.removeEdgeMarker(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.ADD_CELL_MARKER: {
			const newState = state.copy();
			newState.addCellMarker(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.SET_CELL_MARKERS: {
			const newState = state.copy();
			newState.setCellMarkers(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.REMOVE_CELL_MARKER: {
			const newState = state.copy();
			newState.removeCellMarker(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.DRAG: {
			const newState = state.copy();
			newState.onDrag(action.payload);
			return newState;
		}
		case PEN_TOOL_ACTIONS.ADD_LINE_MARKERS: {
			const newState = state.copy();
			newState.addToLineMarkers(action.payload);
			newState.draftLine = [];
			return newState;
		}
		case PEN_TOOL_ACTIONS.REMOVE_LINE_MARKERS: {
			const newState = state.copy();
			newState.removeFromLineMarkers(action.payload);
			newState.draftLine = [];
			return newState;
		}
	}
	return state;
}
