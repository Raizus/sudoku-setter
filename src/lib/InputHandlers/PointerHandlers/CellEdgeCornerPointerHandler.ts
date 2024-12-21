import {
	getClosestCell,
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
	edgeIdx: number;
	cornerIdx: number;
	direction: number;
}

export enum CornerOrEdge {
	EDGE = 'Edge',
	CORNER = 'Corner',
	BOTH = 'Both'
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

		const edgeInfo = getClosestEdge(point, false);
		if (!edgeInfo) return;

		const cornerInfo = getClosestCorner(point, false);
		if (!cornerInfo) return;

		const cellInfo = getClosestCell(point, false);
		if (!cellInfo) return;

		let edgeOrCorner: 'edge' | 'corner' = this.target === CornerOrEdge.CORNER ? 'corner' : 'edge';
		if (this.target === CornerOrEdge.BOTH && cornerInfo.dist < edgeInfo.dist)
			edgeOrCorner = 'corner';

		const dirIdx = edgeOrCorner === 'edge' ? 2 * edgeInfo.idx : 2 * cornerInfo.idx + 1;

		const hexEdgeCornerEvent: CellEdgeCornerEvent = {
			event,
			cell: cellInfo.cell,
			edge: edgeInfo.edge,
			corner: cornerInfo.corner,
			edgeIdx: edgeInfo.idx,
			cornerIdx: cornerInfo.idx,
			direction: dirIdx
		};

		this.onDragStart && this.onDragStart(hexEdgeCornerEvent);
	}
}
