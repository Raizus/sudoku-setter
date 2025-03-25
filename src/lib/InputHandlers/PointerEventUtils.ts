import {
	pointToCell,
	type GridCoordI,
	cellCoordToEdgeCoords,
	cellCoordToCornerCoords
} from '$lib/utils/SquareCellGridCoords';
import { Vector2D } from '$lib/utils/Vector2D';

export const pointerEventToVector2D = (
	event: PointerEvent,
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
	conservative: boolean = true,
	marginRadius: number = 0.5
): { cell: GridCoordI; dist: number } | null {
	const cellCoord = pointToCell(point);
	const cellCenter: Vector2D = new Vector2D(cellCoord.c + 0.5, cellCoord.r + 0.5);
	const dist = point.distance(cellCenter);

	if (!conservative || dist < marginRadius) return { cell: cellCoord, dist };
	return null;
}

export function getClosestCellCenter(
	point: Vector2D,
	conservative: boolean = true,
	marginRadius: number = 0.5
): { cellCenter: GridCoordI; dist: number } | null {
	const cellCoord = pointToCell(point);
	const cellCenter: Vector2D = new Vector2D(cellCoord.c + 0.5, cellCoord.r + 0.5);
	const dist = point.distance(cellCenter);

	const cellCenterCoords: GridCoordI = { r: cellCenter.y, c: cellCenter.x };

	if (!conservative || dist < marginRadius) return { cellCenter: cellCenterCoords, dist };
	return null;
}

export function getClosestCorner(
	point: Vector2D,
	marginRadius: number | undefined = 0.5
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
	marginRadius: number | undefined = 0.5
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
	target: GridCoordI;
	cellCenter: GridCoordI;
	edge: GridCoordI;
	corner: GridCoordI;
	dist: number;
}

export function getClosestCellFeature(
	point: Vector2D,
	conservative: boolean = true,
	marginRadius: number = 0.5
): EventGeometry | null {
	const edgeInfo = getClosestEdge(point, undefined);
	if (!edgeInfo) return null;

	const cornerInfo = getClosestCorner(point, undefined);
	if (!cornerInfo) return null;

	const cellCenterInfo = getClosestCellCenter(point, false);
	if (!cellCenterInfo) return null;

	const featureCoords = [cellCenterInfo.cellCenter, edgeInfo.edge, cornerInfo.corner];
	const featurePoints = featureCoords.map((coord) => new Vector2D(coord.c, coord.r));
	const dists = featurePoints.map((feat) => feat.distance(point));
	const minDist = Math.min(...dists);
	const idx = dists.findIndex((val) => val === minDist);
	const target = featureCoords[idx];
	const types = ['cell center', 'edge', 'corner'] as const;
	const ftype = types[idx];

	const eventGeometry: EventGeometry = {
		cellCenter: cellCenterInfo.cellCenter,
		edge: edgeInfo.edge,
		corner: cornerInfo.corner,
		dist: minDist,
		target,
		type: ftype
	};

	if (!conservative || minDist < marginRadius) return eventGeometry;
	return null;
}
