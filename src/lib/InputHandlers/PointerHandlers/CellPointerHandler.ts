import { getClosestCell, pointerEventToVector2D } from '$src/lib/InputHandlers/PointerEventUtils';
import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { Vector2D } from '$lib/utils/Vector2D';

export interface CellDragTapEvent {
	event: PointerEvent;
	cell: GridCoordI;
	tapCount: number;
}

export class CellPointerHandler {
	onTap: null | ((event: CellDragTapEvent) => void) = null;
	onDragStart: null | ((event: CellDragTapEvent) => void) = null;
	onDrag: null | ((event: CellDragTapEvent) => void) = null;
	onDragEnd: null | (() => void) = null;
	onMove: null | ((event: CellDragTapEvent) => void) = null;

	private _prevPoint: Vector2D | null = null;
	private _prevCell: GridCoordI | null = null;
	private _lastPointerDownTime = 0;

	private _isDown = false;
	private _isTap = false;
	private _tapCount = 0;

	private _lastTapPosition: Vector2D | null = null;
	private _lastTapTime = 0;
	private _drag_margin: number | undefined = undefined;

	constructor(drag_margin: number = 0.4) {
		this._drag_margin = drag_margin;
	}

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;
		this._isTap = true;

		const isFirstClick = null === this._prevCell;
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		this._prevPoint = point;
		const margin = isFirstClick ? undefined : this._drag_margin;
		const cellInfo = getClosestCell(point, margin);
		if (!cellInfo) return;

		const cell = cellInfo.cell;
		this._prevCell = cell;
		this._lastPointerDownTime = event.timeStamp;

		const cellDragTapEvent: CellDragTapEvent = { event, cell, tapCount: this._tapCount };
		if (this.onDragStart) this.onDragStart(cellDragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		let margin: number | undefined = undefined;
		if (this._isDown) margin = this._drag_margin;

		const cellInfo = getClosestCell(point, margin);
		if (!cellInfo) return;

		const cell = cellInfo.cell;
		if (this._prevCell && areCoordsEqual(this._prevCell, cell)) return;

		this._prevCell = cell;
		this._prevPoint = point;
		this._isTap = false;

		const dragTapEvent: CellDragTapEvent = { event, cell, tapCount: this._tapCount };

		if (this.onMove) this.onMove(dragTapEvent);

		if (this._isDown) this._isTap = false;
		if (this._isDown && this.onDrag) this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (this._isDown) {
			this._prevCell = null;
			this._prevPoint = null;
			this._isDown = false;
			if (this.onDragEnd) this.onDragEnd();
		}

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cellInfo = getClosestCell(point, undefined);
		if (!cellInfo) return;

		const cell = cellInfo.cell;
		let distanceToLastTap = 0;
		if (this._lastTapPosition) {
			distanceToLastTap = point.distance(this._lastTapPosition);
		}
		this._lastTapPosition = point;

		const timeSinceLastTap = event.timeStamp - this._lastTapTime;
		this._lastTapTime = event.timeStamp;

		if (timeSinceLastTap > 0 && timeSinceLastTap < 300 && distanceToLastTap < 0.25) {
			this._tapCount += 1;
		} else {
			this._tapCount = 1;
		}

		// on tap
		if (this._isTap && this._tapCount === 1) {
			// console.log('Tap');
			const dragTapEvent: CellDragTapEvent = { event, cell, tapCount: this._tapCount };
			if (this.onTap) this.onTap(dragTapEvent);
		} else if (this._isTap && this._tapCount === 2) {
			// console.log("Double Tap")
			const dragTapEvent: CellDragTapEvent = { event, cell, tapCount: this._tapCount };
			if (this.onTap) this.onTap(dragTapEvent);
		}
	}
}
