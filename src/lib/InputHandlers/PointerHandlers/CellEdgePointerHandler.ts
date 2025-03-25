import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { getClosestEdge, pointerEventToVector2D } from '$src/lib/InputHandlers/PointerEventUtils';

export interface CellEdgeTapEvent {
	event: PointerEvent;
	coord: GridCoordI;
}

export class CellEdgePointerHandler {
	onDragStart: null | ((event: CellEdgeTapEvent) => void) = null;
	onDrag: null | ((event: CellEdgeTapEvent) => void) = null;
	onDragEnd: null | ((event: CellEdgeTapEvent) => void) = null;

	private _prevCellEdge: GridCoordI | null = null;

	private _isDown = false;

	private _margin: number | undefined = 0.35;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;

		this._prevCellEdge = edgeInfo.edge;

		const dragTapEvent: CellEdgeTapEvent = { event, coord: edgeInfo.edge };
		if (this.onDragStart) this.onDragStart(dragTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (!this._isDown) return;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;

		if (this._prevCellEdge && areCoordsEqual(edgeInfo.edge, this._prevCellEdge)) {
			return;
		}

		const dragTapEvent: CellEdgeTapEvent = { event, coord: edgeInfo.edge };
		this._prevCellEdge = edgeInfo.edge;

		if (this.onDrag) this.onDrag(dragTapEvent);
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (this._isDown) {
			this._prevCellEdge = null;
			this._isDown = false;
		}

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, this._margin);
		if (!edgeInfo) return;
	}
}
