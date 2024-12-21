import { type GridCoordI, areCoordsEqual } from '$lib/utils/SquareCellGridCoords';
import { getClosestCorner, pointerEventToVector2D } from '../PointerEventUtils';

export interface CellCornerTapEvent {
	event: PointerEvent;
	cellCorner: GridCoordI;
}

export class CellCornerPointerHandler {
	onDragStart: null | ((event: CellCornerTapEvent) => void) = null;
	onDrag: null | ((event: CellCornerTapEvent) => void) = null;
	onDragEnd: null | ((event: CellCornerTapEvent) => void) = null;

	private _prevCellCorner: GridCoordI | null = null;
	private _isDown = false;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point);
		if (!cornerInfo) return;

		this._prevCellCorner = cornerInfo.corner;

		const dragTapEvent: CellCornerTapEvent = {
			event,
			cellCorner: cornerInfo.corner
		};
		this.onDragStart && this.onDragStart(dragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (!this._isDown) return;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point);
		if (!cornerInfo) return;

		if (this._prevCellCorner && areCoordsEqual(cornerInfo.corner, this._prevCellCorner)) {
			return;
		}

		const dragTapEvent: CellCornerTapEvent = {
			event,
			cellCorner: cornerInfo.corner
		};
		this._prevCellCorner = cornerInfo.corner;
		this.onDrag && this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (this._isDown) {
			this._prevCellCorner = null;
			this._isDown = false;
		}

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point);
		if (!cornerInfo) return;
	}
}
