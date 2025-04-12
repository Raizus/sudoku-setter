import type { PathOptions } from '$lib/Puzzle/Shape/Shape';
import { DIRECTION } from './directions';
// import { cloneDeep } from 'lodash';
import type { GridCoordI } from './SquareCellGridCoords';
import { Vector2D, type Point } from './Vector2D';

function cellCoordToCornerCoords(cell: GridCoordI): GridCoordI[] {
	const corners: GridCoordI[] = [];

	corners.push({ r: cell.r, c: cell.c });
	corners.push({ r: cell.r, c: cell.c + 1 });
	corners.push({ r: cell.r + 1, c: cell.c + 1 });
	corners.push({ r: cell.r + 1, c: cell.c });

	return corners;
}

function getCornerAdjList(cellsCoords: GridCoordI[]): Map<string, Set<string>> {
	const adjList: Map<string, Set<string>> = new Map();

	// A --> B
	// ^     |
	// |     V
	// D <-- C
	// For each cell.
	// Consider each each clockwise edge A->B
	// If the inverse edge B->A already exists, delete that.
	// Otherwise create the edge A->B.

	function addOrRemove(a: string, b: string) {
		const adjBack = adjList.get(b);
		if (adjBack?.has(a)) {
			adjBack.delete(a);
			if (adjBack.size <= 0) adjList.delete(b);
			return;
		}
		let adj2a = adjList.get(a);
		if (adj2a === undefined) {
			adj2a = new Set<string>();
			adjList.set(a, adj2a);
		}
		adj2a.add(b);
	}

	for (const cellCoord of cellsCoords) {
		const corners = cellCoordToCornerCoords(cellCoord);
		const l = corners.length;
		for (let i = 0; i < l; i++) {
			const corner1 = corners[i % l];
			const corner2 = corners[(i + 1) % l];
			const id1Str = JSON.stringify(corner1);
			const id2Str = JSON.stringify(corner2);
			addOrRemove(id1Str, id2Str);
		}
	}
	return adjList;
}

export function getCagePoints(
	cells: GridCoordI[],
	inset: number = 0,
	connectDiag: boolean = false
) {
	const cageShape: Vector2D[][] = [];
	const adjList = getCornerAdjList(cells);
	if (adjList.size <= 0) return cageShape;

	const connectDiags = new Set<string>();

	while (adjList.size > 0) {
		const found = Array.from(adjList.entries()).find((entry) => entry[1].size === 1);
		// shouldn't happen if everything is ok.
		if (found === undefined) throw new Error('No corner with single adjacency found');

		const [corner1Id, firstAdj] = found;
		let corner1 = JSON.parse(corner1Id) as GridCoordI;

		const corner2Id = Array.from(firstAdj)[0];
		let corner2 = JSON.parse(corner2Id) as GridCoordI;

		let currentCornerId = corner2Id;
		const points: Vector2D[] = [];
		do {
			const adj = adjList.get(currentCornerId);
			if (adj === undefined) throw new Error(`Corner with no adjacencies found ${currentCornerId}`);

			const p1 = new Vector2D(corner1.c, corner1.r);
			const p2 = new Vector2D(corner2.c, corner2.r);

			// if a corner has more than 1 adjacent corner (i.e. it's a touching corner)
			// determine which corner to connect to next depending on wheather connectDiag is true
			// when not connecting diagonals we always traverse the corners clockwise so the cross product is either 0 or 1
			// when connecting diagonals we traverse the corners clockwise except at touching corners.
			let crossProd = connectDiag ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
			let corner3Id: string | null = null;
			let corner3: GridCoordI | null = null;
			for (const adjCornerId of adj) {
				const adjCorner = JSON.parse(adjCornerId) as GridCoordI;
				const p3 = new Vector2D(adjCorner.c, adjCorner.r);
				const v1 = p2.subtract(p1);
				const v2 = p3.subtract(p2);
				const perpDotProd = v1.perpDotProduct(v2);

				if (crossProd < perpDotProd != connectDiag) {
					crossProd = perpDotProd;
					corner3 = adjCorner;
					corner3Id = adjCornerId;
				}
			}
			if (connectDiag && adj.size > 1) connectDiags.add(currentCornerId);
			if (corner3 === null || corner3Id === null)
				throw new Error('Corner with no adjacencies found');
			adj.delete(corner3Id);
			if (adj.size <= 0) adjList.delete(currentCornerId);

			const ax = inset * (corner2.c - corner1.c);
			const ay = inset * (corner3.c - corner2.c);
			const bx = inset * (corner1.r - corner2.r);
			const by = inset * (corner2.r - corner3.r);

			const dx = by + crossProd * ay;
			const dy = ax + crossProd * bx;

			const res = new Vector2D(corner2.c + dx, corner2.r + dy);

			const a = 4;
			if (connectDiags.has(currentCornerId)) {
				points.push(new Vector2D(res.x - a * ax, res.y - a * ay));
				points.push(new Vector2D(res.x - a * bx, res.y - a * by));
			} else {
				points.push(res);
			}
			// if crossProd === 0 then it's a straight line and there's no need to add the corner to the list of points
			// if (crossProd !== 0) {
			// }

			corner1 = corner2;
			corner2 = corner3;
			currentCornerId = corner3Id;
		} while (currentCornerId !== corner2Id);
		cageShape.push(points);
	}

	return cageShape;
}

export function getCagePathStr(
	cells: GridCoordI[],
	inset: number = 0,
	connectDiag: boolean = false
): string {
	const cageShape = getCagePoints(cells, inset, connectDiag);
	const cagePathStr = cageShape.map((shape) => pointsToPathStr(shape, true)).join('');
	return cagePathStr;
}

const squareCorners = [
	new Vector2D(-0.5, -0.5),
	new Vector2D(0.5, -0.5),
	new Vector2D(0.5, 0.5),
	new Vector2D(-0.5, 0.5)
];

export function getSingleWedge(
	idx: number,
	numWedges: number,
	corners: Vector2D[] = squareCorners
) {
	if (numWedges === 1) {
		return corners;
	}

	const wedge: Vector2D[] = [];
	const numCorners = corners.length;
	const angleOffset = 0;
	const wedgeArc = 360 / numWedges;
	const startAngle = idx * wedgeArc + angleOffset;
	const endAngle = (idx + 1) * wedgeArc + angleOffset;

	const startIdx = startAngle / (360 / numCorners);
	const endIdx = endAngle / (360 / numCorners);

	const a = Math.floor(startIdx) % numCorners;
	const b = Math.ceil(startIdx) % numCorners;
	const startCoord = corners[a].lerp(corners[b], startIdx % 1);

	const c = Math.floor(endIdx) % numCorners;
	const d = Math.ceil(endIdx) % numCorners;
	const endCoord = corners[c].lerp(corners[d], endIdx % 1);

	wedge.push(startCoord);
	for (let i = Math.ceil(startIdx); i <= Math.floor(endIdx); i++) {
		wedge.push(corners[i % numCorners]);
	}
	wedge.push(endCoord);
	const origin = new Vector2D(0, 0);
	wedge.push(origin);

	return wedge;
}

/**
 * Creates the points of a polygon centered on center and with radius r, if outside,
 * or r / cos(PI/n) otherwise (with an apothem of r)
 * @param r radius
 * @param n number of sides
 * @param center the center of the polygon. Defaults to Vector2D(0, 0)
 * @param circumcircle if true r refers to the circumcircle, otherwise to the incircle
 * @param fracOffset fraction of angle to rotate the polygon (should be between 0 and 1 (2*PI))
 */
export function getRegularPolygonPoints(
	r: number,
	n: number,
	center: Vector2D = new Vector2D(0, 0),
	circumcircle = true,
	fracOffset = 0
): Vector2D[] {
	if (r < 0) throw Error(`r = ${r} must be greater or equal than 0`);
	if (n < 3) throw Error(`n = ${n} must be greater or equal to 3`);
	const cos = Math.cos(Math.PI / n);
	const r1 = circumcircle ? r : r / cos;

	const points: Vector2D[] = [];
	for (let i = 0; i < n; i++) {
		const x = r1 * Math.cos((i / n) * 2 * Math.PI + fracOffset * 2 * Math.PI);
		const y = r1 * Math.sin((i / n) * 2 * Math.PI + fracOffset * 2 * Math.PI);
		const point: Vector2D = center.add(new Vector2D(x, y));
		points.push(point);
	}
	return points;
}

export function pointsToPathStr(points: Point[], closed = false): string {
	const close = closed ? 'Z' : '';
	const res = 'M' + points.map(({ x, y }) => `${x},${y}`).join('L') + close;
	return res;
}

export function linePointsToPathStr(
	linePoints: Vector2D[],
	{ shortenHead, shortenTail, closeLoops, bezierRounding }: PathOptions = {}
): string {
	const linePoints2: Vector2D[] = linePoints.map((point) => new Vector2D(point.x, point.y));
	if (closeLoops && linePoints2.length > 1) {
		const lastCoord = linePoints2[linePoints2.length - 1];
		for (let i = 0; i < linePoints2.length - 1; i++) {
			if (lastCoord.equals(linePoints2[i])) {
				linePoints2.push(linePoints2[i + 1]);
				break;
			}
		}

		const firstCoord = linePoints2[0];
		for (let i = 1; i < linePoints2.length; i++) {
			if (firstCoord.equals(linePoints2[i])) {
				linePoints2.unshift(linePoints2[i - 1]);
				break;
			}
		}
	}

	if (linePoints2.length === 1) {
		linePoints2.push(linePoints2[0]);
	} else {
		if (shortenHead) {
			let dv = linePoints2[1].subtract(linePoints2[0]);
			dv = dv.normalise();
			dv = dv.scale(shortenHead);
			linePoints2[0] = linePoints2[0].add(dv);
		}

		if (shortenTail) {
			const l = linePoints2.length;
			let dv = linePoints2[l - 2].subtract(linePoints2[l - 1]);
			dv = dv.normalise();
			dv = dv.scale(shortenTail);
			linePoints2[l - 1] = linePoints2[l - 1].add(dv);
		}
	}

	if (!bezierRounding) return pointsToPathStr(linePoints2);

	const point = linePoints2[0];
	const out: string[] = ['M', `${point.x},${point.y}`];
	const len = linePoints2.length;
	for (let i = 2; i < len; i++) {
		const a = linePoints2[i - 2];
		const b = linePoints2[i - 1];
		const c = linePoints2[i];

		let ba = a.subtract(b).normalise();
		ba = ba.scale(bezierRounding);
		ba = ba.add(b);

		let bc = c.subtract(b).normalise();
		bc = bc.scale(bezierRounding);
		bc = bc.add(b);

		out.push('L' + `${ba.x},${ba.y}` + ' Q ' + `${b.x},${b.y}` + ' ' + `${bc.x},${bc.y}`);
	}

	const lastPoint = linePoints2[len - 1];
	out.push('L' + `${lastPoint.x},${lastPoint.y}`);
	return out.join(' ');
}

export function cellsLineToPathStr(cells: GridCoordI[], pathOptions: PathOptions = {}): string {
	const linePoints = cellsToVector2DPoints(cells);
	const pathStr = linePointsToPathStr(linePoints, pathOptions);
	return pathStr;
}

export function cellToCellCenterVector(cell: GridCoordI): Vector2D {
	return new Vector2D(cell.c + 0.5, cell.r + 0.5);
}

export function cellsToVector2DPoints(cells: GridCoordI[]): Vector2D[] {
	const points = cells.map((coord) => cellToCellCenterVector(coord));
	return points;
}

// offsets relative to center
const cornerMarksOffsets = [
	new Vector2D(-0.5, -0.5),
	new Vector2D(0.5, -0.5),
	new Vector2D(0.5, 0.5),
	new Vector2D(-0.5, 0.5),
	new Vector2D(0, -0.5),
	new Vector2D(0, 0.5),
	new Vector2D(-0.5, 0),
	new Vector2D(0.5, 0)
];

export function getCornerMarksOffset(idx: number, inset: number) {
	const corner = cornerMarksOffsets[idx];
	const res = corner.subtract(corner.scale(inset));
	return res;
}

/**
 * Builds a svg path string to draw a X (drawn like X)
 * @param cc The X center coordinates
 * @param a The "radius" of the cross
 * @returns Path string
 */
export function getXPathStr(cc: GridCoordI, a: number): string {
	const line1: Vector2D[] = [new Vector2D(cc.c - a, cc.r - a), new Vector2D(cc.c + a, cc.r + a)];
	const line2: Vector2D[] = [new Vector2D(cc.c - a, cc.r + a), new Vector2D(cc.c + a, cc.r - a)];
	const pathStr: string = [line1, line2].map((line) => pointsToPathStr(line, false)).join('');
	return pathStr;
}

const COLOR_MAP: Map<number, string> = new Map([
	[1, 'hsl(0, 0%, 70%)'], //light gray
	[2, 'hsl(0, 0%, 45%)'], //dark gray
	[3, 'hsl(0, 0%, 12%)'], //black(ish)
	[4, 'hsl(109, 70%, 45%)'], //green
	[5, 'hsl(295, 70%, 45%)'], //purple
	[6, 'hsl(22, 70%, 45%)'], //dark orange
	[7, 'hsl(2, 70%, 45%)'], //red
	[8, 'hsl(60, 70%, 45%)'], //light green
	[9, 'hsl(210, 70%, 45%)'] //blue
]);

export function getHighlightColor(id: number, _default: string = 'none'): string {
	const color: string = COLOR_MAP.get(id) || _default;
	return color;
}

export function minMaxShape(minMax: 'min' | 'max', r: number, c: number): Vector2D[][] {
	let shape: Vector2D[][] = [];
	const width = 0.12; // marker width
	const height = 0.08; // marker height
	const dist = 0.32; // marker distance to cell center

	function rotate_marker(marker: Vector2D[], angleDeg: number) {
		return marker.map((point) => point.rotate((angleDeg * Math.PI) / 180));
	}

	let top_marker: Vector2D[] = [];
	if (minMax === 'max') {
		// marker at top of the cell, for maximum constraint, in relation to cell center
		top_marker = [
			new Vector2D(-width, -dist),
			new Vector2D(0, -(dist + height)),
			new Vector2D(width, -dist)
		];
	} else {
		// marker at top of the cell, for maximum constraint, in relation to cell center
		top_marker = [
			new Vector2D(-width, -(dist + height)),
			new Vector2D(0, -dist),
			new Vector2D(width, -(dist + height))
		];
	}

	shape = [
		top_marker,
		rotate_marker(top_marker, 90),
		rotate_marker(top_marker, 180),
		rotate_marker(top_marker, 270)
	];

	// translate marker to the cell position
	shape = shape.map((symbol) =>
		symbol.map((point) => {
			const offset = new Vector2D(c + 0.5, r + 0.5);
			return point.add(offset);
		})
	);
	return shape;
}

export function getArrowHead(l: number, _direction: DIRECTION) {
	const head = [new Vector2D(-l, 0), new Vector2D(0, 0), new Vector2D(0, l)];

	// Define rotation angles (in radians) for each direction
	// Starting from East (default) and rotating counterclockwise
	const rotationAngles = {
		[DIRECTION.NE]: 0, // 0 degrees (default)
		[DIRECTION.E]: Math.PI / 4, // 45 degrees
		[DIRECTION.SE]: Math.PI / 2, // 90 degrees
		[DIRECTION.S]: (3 * Math.PI) / 4, // 135 degrees
		[DIRECTION.SW]: Math.PI, // 180 degrees
		[DIRECTION.W]: (5 * Math.PI) / 4, // 225 degrees
		[DIRECTION.NW]: (3 * Math.PI) / 2, // 270 degrees
		[DIRECTION.N]: (7 * Math.PI) / 4 // 315 degrees
	};

	// Get the rotation angle for the target direction
	const angle = rotationAngles[_direction];
	// Rotate each point in the head array
	const rotatedHead = head.map((p) => p.rotate(angle));
	return rotatedHead;
}