import { type GridCoordI, areCoordsEqual } from '$lib/utils/SquareCellGridCoords';
import { getClosestCorner, pointerEventToVector2D } from '../PointerEventUtils';

export interface CellCornerTapEvent {
	event: PointerEvent;
	cellCorner: GridCoordI;
}

export class CellCornerPointerHandler {
	onTap: null | ((event: CellCornerTapEvent) => void) = null;
	onDragStart: null | ((event: CellCornerTapEvent) => void) = null;
	onDrag: null | ((event: CellCornerTapEvent) => void) = null;
	onDragEnd: null | ((event: CellCornerTapEvent) => void) = null;
	onMove: null | ((event: CellCornerTapEvent) => void) = null;

	private _prevCoord: GridCoordI | null = null;
	private _isDown = false;
	private _isTap = false;

	private _margin: number | undefined = undefined;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;
		this._isTap = true;

		const isFirstClick = null === this._prevCoord;
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point, !isFirstClick);
		if (!cornerInfo) return;

		this._prevCoord = cornerInfo.corner;

		const dragTapEvent: CellCornerTapEvent = {
			event,
			cellCorner: cornerInfo.corner
		};
		if (this.onDragStart) this.onDragStart(dragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (!this._isDown) return;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point);
		if (!cornerInfo) return;

		// if the new coord is the same as the old one don't to anything
		if (this._prevCoord && areCoordsEqual(cornerInfo.corner, this._prevCoord)) {
			return;
		}

		const dragTapEvent: CellCornerTapEvent = {
			event,
			cellCorner: cornerInfo.corner
		};
		this._prevCoord = cornerInfo.corner;
		this._isTap = false;

		if (this.onDrag) this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cornerInfo = getClosestCorner(point);
		if (!cornerInfo) return;

		const dragTapEvent: CellCornerTapEvent = {
			event,
			cellCorner: cornerInfo.corner
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
