import {
	getClosestCell,
	getClosestCellCenter,
	getClosestCorner,
	getClosestEdge,
	pointerEventToVector2D
} from '$src/lib/InputHandlers/PointerEventUtils';
import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';

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

export enum CornerOrEdge {
	EDGE,
	CORNER,
	CELL_CENTER,
	CORNER_OR_EDGE,
	CORNER_OR_CENTER,
	EDGE_OR_CENTER,
	CLOSEST,
	BOTH
}

export class CellEdgeCornerPointerHandler {
	onDragStart: null | ((event: CellEdgeCornerEvent) => void) = null;
	target: CornerOrEdge;

	constructor(cornerOrEdge: CornerOrEdge) {
		this.target = cornerOrEdge;
	}

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement): void {
		const point = pointerEventToVector2D(event, svgRef);
		if (!point) return;

		const edgeInfo = getClosestEdge(point, undefined);
		if (!edgeInfo) return;

		const cornerInfo = getClosestCorner(point, false);
		if (!cornerInfo) return;

		const cellInfo = getClosestCell(point, false);
		if (!cellInfo) return;

		const cellCenterInfo = getClosestCellCenter(point, false);
		if (!cellCenterInfo) return;

		let closestCoord: GridCoordI;
		if (this.target === CornerOrEdge.CORNER) {
			closestCoord = cornerInfo.corner;
		} else if (this.target === CornerOrEdge.EDGE) {
			closestCoord = edgeInfo.edge;
		} else if (this.target === CornerOrEdge.CELL_CENTER) {
			closestCoord = cellCenterInfo.cellCenter;
		} else if (this.target === CornerOrEdge.CORNER_OR_EDGE) {
			if (cornerInfo.dist < edgeInfo.dist) closestCoord = cornerInfo.corner;
			else closestCoord = edgeInfo.edge;
		} else if (this.target === CornerOrEdge.CORNER_OR_CENTER) {
			if (cornerInfo.dist < cellCenterInfo.dist) closestCoord = cornerInfo.corner;
			else closestCoord = cellCenterInfo.cellCenter;
		} else if (this.target === CornerOrEdge.EDGE_OR_CENTER) {
			if (edgeInfo.dist < cellCenterInfo.dist) closestCoord = edgeInfo.edge;
			else closestCoord = cellCenterInfo.cellCenter;
		} else {
			// closest
			if (edgeInfo.dist < cornerInfo.dist && edgeInfo.dist < cellCenterInfo.dist)
				closestCoord = edgeInfo.edge;
			else if (cornerInfo.dist < edgeInfo.dist && cornerInfo.dist < cellCenterInfo.dist)
				closestCoord = cornerInfo.corner;
			else closestCoord = cellCenterInfo.cellCenter;
		}

		let edgeOrCorner: 'edge' | 'corner' =
			this.target === CornerOrEdge.CORNER || this.target === CornerOrEdge.CORNER_OR_CENTER
				? 'corner'
				: 'edge';
		if (
			(this.target === CornerOrEdge.CORNER_OR_EDGE || this.target === CornerOrEdge.CLOSEST) &&
			cornerInfo.dist < edgeInfo.dist
		)
			edgeOrCorner = 'corner';

		const dirIdx = edgeOrCorner === 'edge' ? 2 * edgeInfo.idx : 2 * cornerInfo.idx + 1;

		const hexEdgeCornerEvent: CellEdgeCornerEvent = {
			event,
			cell: cellInfo.cell,
			edge: edgeInfo.edge,
			corner: cornerInfo.corner,
			closest: closestCoord,
			edgeIdx: edgeInfo.idx,
			cornerIdx: cornerInfo.idx,
			direction: dirIdx
		};

		if (this.onDragStart) this.onDragStart(hexEdgeCornerEvent);
	}
}
