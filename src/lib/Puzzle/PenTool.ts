import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';

export interface EdgeMarker extends GridCoordI {
	colorId: number;
}

export interface CellMarker extends GridCoordI {
	marker: 'X' | 'O';
	colorId: number;
}

export interface LineMarker {
	p1: GridCoordI;
	p2: GridCoordI;
	colorId: number;
}

export function lineMarkersOverlap(lm1: LineMarker, lm2: LineMarker): boolean {
	const match =
		(areCoordsEqual(lm1.p1, lm2.p1) && areCoordsEqual(lm1.p2, lm2.p2)) ||
		(areCoordsEqual(lm1.p1, lm2.p2) && areCoordsEqual(lm1.p2, lm2.p1));
	return match;
}

function lineMarkersOverlapOppositeDir(lm1: LineMarker, lm2: LineMarker): boolean {
	const match = areCoordsEqual(lm1.p1, lm2.p2) && areCoordsEqual(lm1.p2, lm2.p1);
	return match;
}

export function isValidLinemarker(p1: GridCoordI, p2: GridCoordI): boolean {
	const dr = Math.abs(p1.r - p2.r);
	const dc = Math.abs(p1.c - p2.c);

	return [0, 1].includes(dr) && [0, 1].includes(dc) && !areCoordsEqual(p1, p2);
}

interface PenToolI {
	edgeMarkers: EdgeMarker[];
	cellMarkers: CellMarker[];
	lineMarkers: LineMarker[];

	draftLine: LineMarker[];
	mode: 'add' | 'remove';
}

export class PenTool implements PenToolI {
	edgeMarkers: EdgeMarker[] = [];
	cellMarkers: CellMarker[] = [];
	lineMarkers: LineMarker[] = [];

	draftLine: LineMarker[] = [];
	mode: 'add' | 'remove' = 'add';

	hasEdgeMarker(coords: GridCoordI): boolean {
		const match = this.edgeMarkers.findIndex((_marker) => areCoordsEqual(_marker, coords));
		if (match === -1) return false;
		return true;
	}

	getEdgeMarker(coords: GridCoordI) {
		const match = this.edgeMarkers.find((_marker) => areCoordsEqual(_marker, coords));
		return match;
	}

	getCellMarker(coords: GridCoordI) {
		const match = this.cellMarkers.find((_marker) => areCoordsEqual(_marker, coords));
		return match;
	}

	hasCellMarker(coords: GridCoordI): boolean {
		const match = this.cellMarkers.findIndex((_marker) => areCoordsEqual(_marker, coords));
		if (match === -1) return false;
		return true;
	}

	removeEdgeMarker(coords: GridCoordI) {
		const match = this.edgeMarkers.findIndex((_marker) => areCoordsEqual(_marker, coords));

		if (match === -1) return null;

		const removed = this.edgeMarkers.splice(match, 1);
		return removed[0];
	}

	addEdgeMarker(marker: EdgeMarker) {
		const match = this.edgeMarkers.findIndex((_marker) => areCoordsEqual(_marker, marker));

		if (match === -1) {
			this.edgeMarkers.push(marker);
			return null;
		}

		const previous = this.edgeMarkers[match];
		this.edgeMarkers[match] = marker;
		return previous;
	}

	removeCellMarker(coords: GridCoordI) {
		const match = this.cellMarkers.findIndex((_marker) => areCoordsEqual(_marker, coords));

		if (match === -1) return null;

		const removed = this.cellMarkers.splice(match, 1);
		return removed[0];
	}

	addCellMarker(marker: CellMarker) {
		const match = this.cellMarkers.findIndex((_marker) => areCoordsEqual(_marker, marker));

		if (match === -1) {
			this.cellMarkers.push(marker);
			return null;
		}

		const previous = this.cellMarkers[match];
		this.cellMarkers[match] = marker;
		return previous;
	}

	setCellMarkers(markers: CellMarker[]) {
		this.cellMarkers = markers;
	}

	onEdgeClick(marker: EdgeMarker) {
		const match = this.edgeMarkers.findIndex((_marker) => areCoordsEqual(_marker, marker));

		if (match === -1) {
			// add to markers
			this.edgeMarkers.push(marker);
		} else {
			this.edgeMarkers.splice(match, 1);
		}
	}

	onCenterClick(coord: GridCoordI, colorId: number) {
		const match = this.cellMarkers.findIndex((_marker) => areCoordsEqual(_marker, coord));

		if (match === -1) {
			// add to markers
			const marker: CellMarker = { ...coord, colorId, marker: 'X' };
			this.edgeMarkers.push(marker);
		} else {
			const marker = this.cellMarkers[match];
			if (marker.marker === 'X') {
				const newMarker: CellMarker = { ...coord, colorId, marker: 'O' };
				this.cellMarkers[match] = newMarker;
			} else {
				this.edgeMarkers.splice(match, 1);
			}
		}
	}

	lineMarkerExists(line: LineMarker): boolean {
		const idx = this.lineMarkers.findIndex((_line) => lineMarkersOverlap(_line, line));
		return idx === -1 ? false : true;
	}

	addToDraftLine(line: LineMarker) {
		const idx = this.draftLine.findIndex((_line) => lineMarkersOverlap(line, _line));
		const lastLine = this.draftLine[this.draftLine.length - 1];

		// add marker to draft line if not in draft line
		if (idx === -1) {
			this.draftLine = [...this.draftLine, line];
		}
		if (idx !== -1 && lineMarkersOverlapOppositeDir(lastLine, line)) {
			// if marker is the same as the last marker in the draft (but in opposite direction) then remove it
			this.draftLine.splice(idx, 1);
		}
	}

	onDrag(lm: LineMarker) {
		if (!isValidLinemarker(lm.p1, lm.p2)) return;

		if (this.lineMarkerExists(lm) && this.draftLine.length === 0) {
			this.mode = 'remove';
		} else if (this.draftLine.length === 0) {
			this.mode = 'add';
		}

		this.addToDraftLine(lm);
	}

	addToLineMarkers(lms: LineMarker[]) {
		const added: LineMarker[] = [];

		for (const line of lms) {
			const idx = this.lineMarkers.findIndex((_line) => lineMarkersOverlap(_line, line));
			if (idx === -1) {
				this.lineMarkers.push(line);
				added.push(line);
			}
		}
		return added;
	}

	removeFromLineMarkers(lms: LineMarker[]) {
		const removed: LineMarker[] = [];

		for (const line of lms) {
			const idx = this.lineMarkers.findIndex((_line) => lineMarkersOverlap(_line, line));
			if (idx !== -1) {
				const removed_line = this.lineMarkers.splice(idx, 1);
				removed.push(removed_line[0]);
			}
		}
		return removed;
	}

	onDragEnd() {
		this.draftLine = [];

		if (this.mode === 'add') {
			const added = this.removeFromLineMarkers(this.draftLine);
			return added;
		} else {
			const removed = this.removeFromLineMarkers(this.draftLine);
			return removed;
		}
	}

	copy(): PenTool {
		const newPen = new PenTool();
		Object.assign(newPen, this);
		return newPen;
	}
}
