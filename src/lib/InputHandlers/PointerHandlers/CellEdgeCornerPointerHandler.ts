import {
	getClosestCellFeature,
	pointerEventToVector2D
} from '$src/lib/InputHandlers/PointerEventUtils';
import { areCoordsEqual, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { CornerOrEdge } from '$input/ToolInputHandlers/types';

export interface CellEdgeCornerEvent {
	event: PointerEvent;
	edge: GridCoordI;
	corner: GridCoordI;
	cell: GridCoordI;
	closest: GridCoordI;
	edgeIdx: number;
	cornerIdx: number;
	direction: number;
}

export class CellFeaturePointerHandler {
	onDragStart: null | ((event: CellEdgeCornerEvent) => void) = null;
	onMove: null | ((event: CellEdgeCornerEvent) => void) = null;

	feature: CornerOrEdge;
	private _prevCoord: GridCoordI | null = null;
	private _prevCellCoord: GridCoordI | null = null;

	constructor(cornerOrEdge: CornerOrEdge) {
		this.feature = cornerOrEdge;
	}

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cell_feature = getClosestCellFeature(point, this.feature);
		if (!cell_feature) return;

		const cellEdgeCornerEvent: CellEdgeCornerEvent = {
			event,
			...cell_feature
		};

		this._prevCoord = cell_feature.closest;
		this._prevCellCoord = cell_feature.cell;

		if (this.onDragStart) this.onDragStart(cellEdgeCornerEvent);
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const cell_feature = getClosestCellFeature(point, this.feature);
		if (!cell_feature) return;

		// if the new coord is the same as the old one don't to anything
		if (
			this._prevCoord &&
			areCoordsEqual(cell_feature.closest, this._prevCoord) &&
			this._prevCellCoord &&
			areCoordsEqual(this._prevCellCoord, cell_feature.cell)
		) {
			return;
		}

		const cellEdgeCornerEvent: CellEdgeCornerEvent = {
			event,
			...cell_feature
		};
		this._prevCoord = cell_feature.closest;
		this._prevCellCoord = cell_feature.cell;

		if (this.onMove) this.onMove(cellEdgeCornerEvent);
	}
}
