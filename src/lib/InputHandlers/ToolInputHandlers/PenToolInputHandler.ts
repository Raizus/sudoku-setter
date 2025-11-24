import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import {
	PenToolPointerHandler,
	type PenToolDragEvent,
	type PenToolTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/PenToolPointerHandler';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	lineMarkersOverlap,
	type CellMarker,
	type EdgeMarker,
	type LineMarker
} from '$lib/Puzzle/PenTool';
import type { GridShape } from '$lib/Types/types';
import {
	addCellMarkerAction,
	addEdgeMarkerAction,
	addLineMarkersAction,
	dragAction,
	removeCellMarkerAction,
	removeEdgeMarkerAction,
	removeLineMarkersAction
} from '$lib/reducers/PenToolReducer';
import { addCommand } from '$stores/CommandHistoryStore';
import { getPenToolCommand, penColorStore } from '$stores/PenToolStore';
import { updatePenTool } from '$stores/PenToolStore';
import { penToolStore } from '$stores/PenToolStore';
import { get } from 'svelte/store';
import { areCoordsOnGrid } from '$src/lib/utils/SquareCellGridCoords';

export function getPenToolInputHandler(svgRef: SVGSVGElement, grid: Grid): InputHandler {
	// console.log('getPenToolInputHandler');
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };
	const penToolPointerHandler = new PenToolPointerHandler();

	penToolPointerHandler.onTap = (event: PenToolTapEvent) => {
		const coord = event.coords;
		const colorId = get(penColorStore);

		const penTool = get(penToolStore);

		if (event.type === 'cell center') {
			const onGrid = areCoordsOnGrid(coord, gridShape);
			if (!onGrid) return;
			
			// create PenTapAction
			const oldMarker = penTool.getCellMarker(coord);
			if (!oldMarker) {
				const cellMarker: CellMarker = {
					...coord,
					colorId,
					marker: 'X'
				};
				const action = addCellMarkerAction(cellMarker);
				const reverse_action = removeCellMarkerAction(coord);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			} else if (oldMarker.marker === 'X') {
				const cellMarker: CellMarker = {
					...coord,
					colorId,
					marker: 'O'
				};
				const action = addCellMarkerAction(cellMarker);
				const reverse_action = addCellMarkerAction(oldMarker);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			} else {
				const action = removeCellMarkerAction(coord);
				const reverse_action = addCellMarkerAction(oldMarker);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			}

		} else if (event.type === 'edge') {
			// create PenTapAction
			const marker = penTool.getEdgeMarker(coord);
			if (marker) {
				// remove edge
				const action = removeEdgeMarkerAction(coord);
				const reverse_action = addEdgeMarkerAction(marker);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			} else {
				const edgeMarker: EdgeMarker = {
					...coord,
					colorId
				};
				const action = addEdgeMarkerAction(edgeMarker);
				const reverse_action = removeEdgeMarkerAction(coord);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			}
		}
	};

	penToolPointerHandler.onDrag = (event: PenToolDragEvent) => {
		const coord = event.coords;
		const colorId = get(penColorStore);

		// const onGrid = areCoordsOnGrid(coord, gridShape);
		// if (!onGrid) return;

		if (event.type === 'cell center' || event.type === 'corner') {
			const lineMarker: LineMarker = {
				p1: event.prevCoords,
				p2: coord,
				colorId
			};
			// create PenDragAction
			const action = dragAction(lineMarker);
			updatePenTool(action);
		}
	};

	penToolPointerHandler.onDragEnd = () => {
		const penTool = get(penToolStore);
		if (penTool.mode === 'add') {
			// only add line markers if they don't overlap with existing markers
			const markers = penTool.draftLine.filter(
				(lm1) => !penTool.lineMarkers.some((lm2) => lineMarkersOverlap(lm1, lm2))
			);
			if (markers.length) {
				const action = addLineMarkersAction(markers);
				const reverse_action = removeLineMarkersAction(markers);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			}
		} else {
			// only remove line markers if the markers in the draft
			// they overlap with existing markers
			const markers = penTool.lineMarkers.filter((lm1) =>
				penTool.draftLine.some((lm2) => lineMarkersOverlap(lm1, lm2))
			);
			if (markers.length) {
				const action = removeLineMarkersAction(markers);
				const reverse_action = addLineMarkersAction(markers);
				const command = getPenToolCommand(action, reverse_action);
				addCommand(command);
			}
		}
	};

	const handler: InputHandler = {
		blur(): void {},
		pointerDown(event: PointerEvent): void {
			penToolPointerHandler.pointerDown(event, svgRef);
		},
		pointerMove(event: PointerEvent): void {
			penToolPointerHandler.pointerMove(event, svgRef);
		},
		pointerUp(event: PointerEvent): void {
			penToolPointerHandler.pointerUp(event, svgRef);
		},
		keyDown(): void {},
		keyUp(): void {}
	};

	return handler;
}
