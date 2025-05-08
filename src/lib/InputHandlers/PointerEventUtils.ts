import {
	pointToCell,
	type GridCoordI,
	cellCoordToEdgeCoords,
	cellCoordToCornerCoords
} from '$lib/utils/SquareCellGridCoords';
import { Vector2D } from '$lib/utils/Vector2D';
import { CornerOrEdge } from './ToolInputHandlers/types';

export const pointerEventToVector2D = (
	event: PointerEvent | WheelEvent,
	svgRef: SVGSVGElement
): Vector2D | null => {
	if (!event || !svgRef) return null;
	const pt = svgRef.createSVGPoint();
	pt.x = event.clientX;
	pt.y = event.clientY;

	const screenCTM = svgRef.getScreenCTM();
	if (!screenCTM) return null;
	const cursorpt = pt.matrixTransform(screenCTM.inverse());
	return new Vector2D(cursorpt.x, cursorpt.y);
};

export function getClosestCell(
	point: Vector2D,
	marginRadius?: number
): { cell: GridCoordI; dist: number } | null {
	const cellCoord = pointToCell(point);
	const cellCenter: Vector2D = new Vector2D(cellCoord.c + 0.5, cellCoord.r + 0.5);
	const dist = point.distance(cellCenter);

	if (marginRadius === undefined || dist < marginRadius) return { cell: cellCoord, dist };
	return null;
}

export function getClosestCellCenter(
	point: Vector2D,
	marginRadius?: number
): { cellCenter: GridCoordI; dist: number } | null {
	const cellCoord = pointToCell(point);
	const cellCenter: Vector2D = new Vector2D(cellCoord.c + 0.5, cellCoord.r + 0.5);
	const dist = point.distance(cellCenter);

	const cellCenterCoords: GridCoordI = { r: cellCenter.y, c: cellCenter.x };
	if (marginRadius === undefined || dist < marginRadius) {
		return { cellCenter: cellCenterCoords, dist };
	}
	return null;
}

export function getClosestCorner(
	point: Vector2D,
	marginRadius?: number
): { corner: GridCoordI; dist: number; idx: number } | null {
	const cellCoord = pointToCell(point);

	const corners = cellCoordToCornerCoords(cellCoord);
	const cornerPoints = corners.map((corner) => new Vector2D(corner.c, corner.r));
	const cornersDist = cornerPoints.map((corner) => corner.distance(point));
	const cornerIdx = cornersDist.indexOf(Math.min(...cornersDist));
	const closestCorner = corners[cornerIdx];
	const minDist = cornersDist[cornerIdx];

	if (marginRadius === undefined || minDist < marginRadius)
		return { corner: closestCorner, dist: minDist, idx: cornerIdx };

	return null;
}

export function getClosestEdge(
	point: Vector2D,
	marginRadius?: number
): { edge: GridCoordI; dist: number; idx: number } | null {
	const cellCoord = pointToCell(point);

	const edges = cellCoordToEdgeCoords(cellCoord);
	const edgesPoints = edges.map((edge) => new Vector2D(edge.c, edge.r));
	const edgesDist = edgesPoints.map((edge) => edge.distance(point));
	const edgeIdx = edgesDist.indexOf(Math.min(...edgesDist));
	const closestEdge = edges[edgeIdx];
	const minDist = edgesDist[edgeIdx];

	if (marginRadius === undefined || minDist < marginRadius)
		return { edge: closestEdge, dist: minDist, idx: edgeIdx };
	return null;
}

interface EventGeometry {
	type: 'corner' | 'edge' | 'cell center';
	cell: GridCoordI;
	closest: GridCoordI;
	cellCenter: GridCoordI;
	edge: GridCoordI;
	corner: GridCoordI;
	dist: number;
	edgeIdx: number;
	cornerIdx: number;
	direction: number;
}

export function getClosestCellFeature(
	point: Vector2D,
	feature: CornerOrEdge,
	marginRadius?: number
): EventGeometry | null {
	const cellInfo = getClosestCell(point);
	if (!cellInfo) return null;

	const edgeInfo = getClosestEdge(point);
	if (!edgeInfo) return null;

	const cornerInfo = getClosestCorner(point);
	if (!cornerInfo) return null;

	const cellCenterInfo = getClosestCellCenter(point);
	if (!cellCenterInfo) return null;

	let closestCoord: GridCoordI;
	let ftype: 'edge' | 'corner' | 'cell center';
	if (feature === CornerOrEdge.CORNER) {
		closestCoord = cornerInfo.corner;
		ftype = 'corner';
	} else if (feature === CornerOrEdge.EDGE) {
		closestCoord = edgeInfo.edge;
		ftype = 'edge';
	} else if (feature === CornerOrEdge.CELL_CENTER) {
		closestCoord = cellCenterInfo.cellCenter;
		ftype = 'cell center';
	} else if (feature === CornerOrEdge.CORNER_OR_EDGE) {
		if (cornerInfo.dist < edgeInfo.dist) {
			closestCoord = cornerInfo.corner;
			ftype = 'corner';
		} else {
			closestCoord = edgeInfo.edge;
			ftype = 'edge';
		}
	} else if (feature === CornerOrEdge.CORNER_OR_CENTER) {
		if (cornerInfo.dist < cellCenterInfo.dist) {
			closestCoord = cornerInfo.corner;
			ftype = 'corner';
		} else {
			closestCoord = cellCenterInfo.cellCenter;
			ftype = 'cell center';
		}
	} else if (feature === CornerOrEdge.EDGE_OR_CENTER) {
		if (edgeInfo.dist < cellCenterInfo.dist) {
			closestCoord = edgeInfo.edge;
			ftype = 'edge';
		} else {
			closestCoord = cellCenterInfo.cellCenter;
			ftype = 'cell center';
		}
	} else {
		// closest
		if (edgeInfo.dist < cornerInfo.dist && edgeInfo.dist < cellCenterInfo.dist) {
			closestCoord = edgeInfo.edge;
			ftype = 'edge';
		} else if (cornerInfo.dist < edgeInfo.dist && cornerInfo.dist < cellCenterInfo.dist) {
			closestCoord = cornerInfo.corner;
			ftype = 'corner';
		} else {
			closestCoord = cellCenterInfo.cellCenter;
			ftype = 'cell center';
		}
	}

	const closest_point = new Vector2D(closestCoord.c, closestCoord.r);
	const minDist = closest_point.subtract(point).length();
	const dirIdx = ftype === 'edge' ? 2 * edgeInfo.idx : 2 * cornerInfo.idx + 1;

	const eventGeometry: EventGeometry = {
		cell: cellInfo.cell,
		cellCenter: cellCenterInfo.cellCenter,
		edge: edgeInfo.edge,
		corner: cornerInfo.corner,
		dist: minDist,
		closest: closestCoord,
		type: ftype,
		edgeIdx: edgeInfo.idx,
		cornerIdx: cornerInfo.idx,
		direction: dirIdx
	};

	if (marginRadius === undefined || minDist < marginRadius) return eventGeometry;
	return null;
}
