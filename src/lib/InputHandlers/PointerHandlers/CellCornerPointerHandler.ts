import { type GridCoordI, areCoordsEqual } from '$lib/utils/SquareCellGridCoords';
import { getClosestCorner, pointerEventToVector2D } from '../PointerEventUtils';

export interface CellCornerTapEvent {
	event: PointerEvent;
	coord: GridCoordI;
}

export class CellCornerPointerHandler {
	onDragStart: null | ((event: CellCornerTapEvent) => void) = null;
	onDrag: null | ((event: CellCornerTapEvent) => void) = null;
	onDragEnd: null | ((event: CellCornerTapEvent) => void) = null;
	onTap: null | ((event: CellCornerTapEvent) => void) = null;
	onMove: null | ((event: CellCornerTapEvent) => void) = null;

	private _prevCoord: GridCoordI | null = null;
	private _isDown = false;
	private _isTap = false;
	private _margin: number | undefined = 0.5;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;
		this._isTap = true;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;
		
		const isFirstClick = null === this._prevCoord;
		const margin = isFirstClick ? undefined : this._margin;
		const cornerInfo = getClosestCorner(point, margin);
		if (!cornerInfo) return;

		this._prevCoord = cornerInfo.corner;

		const dragTapEvent: CellCornerTapEvent = {
			event,
			coord: cornerInfo.corner
		};
		if (this.onDragStart) this.onDragStart(dragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point, this._margin);
		if (!cornerInfo) return;

		// if the new coord is the same as the old one don't to anything
		if (this._prevCoord && areCoordsEqual(cornerInfo.corner, this._prevCoord)) {
			return;
		}

		const dragTapEvent: CellCornerTapEvent = {
			event,
			coord: cornerInfo.corner
		};
		this._prevCoord = cornerInfo.corner;

		if (this.onMove) this.onMove(dragTapEvent);
		
		if (this._isDown) this._isTap = false;
		if (this._isDown && this.onDrag) this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {		
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point, this._margin);
		if (!cornerInfo) return;

		const dragTapEvent: CellCornerTapEvent = {
			event,
			coord: cornerInfo.corner
		};

		if (this._isDown) {
			this._prevCoord = null;
			this._isDown = false;
			if (this.onDrag) this.onDrag(dragTapEvent);
		}

		if (this._isTap) {
			if (this.onTap) this.onTap(dragTapEvent);
		}
	}
}
