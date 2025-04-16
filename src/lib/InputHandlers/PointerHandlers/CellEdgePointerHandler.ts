import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { getClosestEdge, pointerEventToVector2D } from '$src/lib/InputHandlers/PointerEventUtils';

export interface CellEdgeTapEvent {
	event: PointerEvent;
	coord: GridCoordI;
}

export class CellEdgePointerHandler {
	onDragStart: null | ((event: CellEdgeTapEvent) => void) = null;
	onMove: null | ((event: CellEdgeTapEvent) => void) = null;
	onDrag: null | ((event: CellEdgeTapEvent) => void) = null;
	onDragEnd: null | ((event: CellEdgeTapEvent) => void) = null;
	onTap: null | ((event: CellEdgeTapEvent) => void) = null;

	private _prevCoord: GridCoordI | null = null;
	private _isDown = false;
	private _isTap = false;
	private _margin: number | undefined = 0.35;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;
		this._isTap = true;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;

		this._prevCoord = edgeInfo.edge;

		const dragTapEvent: CellEdgeTapEvent = { event, coord: edgeInfo.edge };
		if (this.onDragStart) this.onDragStart(dragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;

		// if the new coord is the same as the old one don't to anything
		if (this._prevCoord && areCoordsEqual(edgeInfo.edge, this._prevCoord)) {
			return;
		}

		const dragTapEvent: CellEdgeTapEvent = { event, coord: edgeInfo.edge };
		this._prevCoord = edgeInfo.edge;

		if (this.onMove) this.onMove(dragTapEvent);

		if (this._isDown) this._isTap = false;
		if (this._isDown && this.onDrag) this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;

		const dragTapEvent: CellEdgeTapEvent = {
			event,
			coord: edgeInfo.edge
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
