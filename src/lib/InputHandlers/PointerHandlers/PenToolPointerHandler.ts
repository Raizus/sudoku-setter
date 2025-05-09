import { getClosestCellFeature, pointerEventToVector2D } from '$src/lib/InputHandlers/PointerEventUtils';
import { isValidLinemarker } from '$lib/Puzzle/PenTool';
import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { CornerOrEdge } from '$input/ToolInputHandlers/types';

type CellFeature = 'corner' | 'edge' | 'cell center';

export interface PenToolTapEvent {
	coords: GridCoordI;
	type: CellFeature;
}

export interface PenToolDragEvent {
    coords: GridCoordI;
    prevCoords: GridCoordI;
	type: CellFeature;
}

export class PenToolPointerHandler {
	onDragStart: null | ((event: PenToolTapEvent) => void) = null;
	onDrag: null | ((event: PenToolDragEvent) => void) = null;
	onDragEnd: null | (() => void) = null;
	onTap: null | ((event: PenToolTapEvent) => void) = null;

	private _prevType: CellFeature | null = null;
	private _isDown: boolean = false;
	private _isTap: boolean = false;
	private _prevCoords: GridCoordI | null = null;

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		this._isDown = true;
		this._isTap = true;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cellFeatureInfo = getClosestCellFeature(point, CornerOrEdge.CLOSEST);
		if (!cellFeatureInfo) return;

		const penToolTapEvent: PenToolTapEvent = {
			coords: cellFeatureInfo.closest,
			type: cellFeatureInfo.type
		};

		this._prevType = cellFeatureInfo.type;
		this._prevCoords = cellFeatureInfo.closest;

		if (this.onDragStart) this.onDragStart(penToolTapEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (!this._isDown) return;

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cellFeatureInfo = getClosestCellFeature(point, CornerOrEdge.CLOSEST);
		if (!cellFeatureInfo) return;

		if (this._prevCoords && areCoordsEqual(this._prevCoords, cellFeatureInfo.closest)) return;
		this._isTap = false;

		const penToolDragEvent: PenToolDragEvent = {
            coords: cellFeatureInfo.closest,
            prevCoords: this._prevCoords as GridCoordI,
			type: cellFeatureInfo.type
		};

		// drag between the centers of two adjacent cells
		// drag between the corners of the same cell
		if (
			this._prevCoords &&
			isValidLinemarker(this._prevCoords, cellFeatureInfo.closest) &&
			(cellFeatureInfo.type === 'cell center' || cellFeatureInfo.type === 'corner')
		) {
			if (this.onDrag) this.onDrag(penToolDragEvent);
		} else {
			return;
		}

		this._prevType = cellFeatureInfo.type;
		this._prevCoords = cellFeatureInfo.closest;
	}

	pointerUp(event: PointerEvent, svgRef: SVGSVGElement): void {
		if (this._isDown) {
			if (this.onDragEnd) this.onDragEnd();
			this._isDown = false;
		}

		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cellFeatureInfo = getClosestCellFeature(point, CornerOrEdge.CLOSEST);
		if (!cellFeatureInfo) return;

		const penToolTapEvent: PenToolTapEvent = {
			coords: cellFeatureInfo.closest,
			type: cellFeatureInfo.type
		};

		if (
			this._isTap &&
			this._prevCoords &&
			areCoordsEqual(this._prevCoords, cellFeatureInfo.closest)
		) {
			if(this.onTap) this.onTap(penToolTapEvent);
			this._isTap = false;
		}

		this._prevType = null;
		this._prevCoords = null;
	}
}
