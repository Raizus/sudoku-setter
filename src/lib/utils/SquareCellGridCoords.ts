import type { GridShape } from '$lib/Types/types';
import type { Point } from './Vector2D';
import { DIRECTION } from './directions';

export interface GridCoordI {
	r: number;
	c: number;
}

export interface CellCoordI extends GridCoordI {
	_tag: 'CELL';
}

export function areCoordsEqual(coords1: GridCoordI, coords2: GridCoordI): boolean {
	return coords1.r === coords2.r && coords1.c === coords2.c;
}

export function coordsAdd(coords1: GridCoordI, coords2: GridCoordI): GridCoordI {
	return {
		r: coords1.r + coords2.r,
		c: coords1.c + coords2.c
	};
}

export function coordsScale(coords: GridCoordI, scalar: number): GridCoordI {
	return {
		r: coords.r * scalar,
		c: coords.c * scalar
	};
}

export function areCoordsOnGrid(coords: GridCoordI, gridShape: GridShape): boolean {
	return coords.c >= 0 && coords.c <= gridShape.nCols && coords.r >= 0 && coords.r <= gridShape.nRows;
}

export function areCoordsNeighbours(c1: GridCoordI, c2: GridCoordI): boolean {
	return Math.abs(c1.c - c2.c) <= 1 && Math.abs(c1.r - c2.r) <= 1 && !areCoordsEqual(c1, c2);
}

export function areCoordsOrthogonallyAdjacent(c1: GridCoordI, c2: GridCoordI): boolean {
	const dr = Math.abs(c1.r - c2.r);
	const dc = Math.abs(c1.c - c2.c);
	return dc <= 1 && dr <= 1 && dr !== dc;
}

export function gridCoordsAverage(coords: GridCoordI[]): GridCoordI {
	const coordsSum = coords.reduce((prev, curr) => coordsAdd(prev, curr));
	const coordsAvg = coordsScale(coordsSum, 1.0 / coords.length);
	return coordsAvg;
}

export function sortGridCoords(coords: GridCoordI[]) {
	coords.sort((a, b) => a.c - b.c).sort((a, b) => a.r - b.r);
}

export function isCellOnGrid(coords: GridCoordI, gridShape: GridShape): boolean {
	return coords.c >= 0 && coords.c < gridShape.nCols && coords.r >= 0 && coords.r < gridShape.nRows;
}

export function pointToCell(point: Point): GridCoordI {
	const r = Math.floor(point.y);
	const c = Math.floor(point.x);

	return { r, c };
}

export function pointToCellCorner(point: Point): GridCoordI {
	const r = Math.round(point.y);
	const c = Math.round(point.x);

	return { r, c };
}

export function pointToCellEdge(point: Point): GridCoordI {
	const r = Math.round(point.y);
	const c = Math.round(point.x);

	return { r, c };
}

export function cellCoordToCellIdx(coords: GridCoordI, gridShape: GridShape): number {
	const cellIdx = coords.r * gridShape.nCols + coords.c;
	return cellIdx;
}

export function cellIdxToCellCoord(idx: number, { nCols }: GridShape): GridCoordI {
	const c = idx % nCols;
	const r = Math.floor(idx / nCols);
	return { r, c };
}

export function cornerCoordToCornerIdx({ r, c }: GridCoordI, { nCols }: GridShape): number {
	return r * (nCols + 1) + c;
}

export function cornerIdx2cornerCoord(idx: number, { nCols }: GridShape): GridCoordI {
	const c = idx % (nCols + 1);
	const r = Math.floor(idx / (nCols + 1));
	return { r, c };
}

export function cellCoordToCornerCoords(cell: GridCoordI): GridCoordI[] {
	const corners: GridCoordI[] = [];

	corners.push({ r: cell.r + 1, c: cell.c + 1 });
	corners.push({ r: cell.r + 1, c: cell.c });
	corners.push({ r: cell.r, c: cell.c });
	corners.push({ r: cell.r, c: cell.c + 1 });

	return corners;
}

export function cornerCoordToAdjCellCoords(corner: GridCoordI): GridCoordI[] {
	const adj: GridCoordI[] = [];
	adj.push({ r: corner.r - 1, c: corner.c - 1 });
	adj.push({ r: corner.r - 1, c: corner.c });
	adj.push({ r: corner.r, c: corner.c - 1 });
	adj.push({ r: corner.r, c: corner.c });

	return adj;
}

export function cellCoordToEdgeCoords(cell: GridCoordI): GridCoordI[] {
	const edges: GridCoordI[] = [];

	edges.push({ r: cell.r + 0.5, c: cell.c + 1 });
	edges.push({ r: cell.r + 1, c: cell.c + 0.5 });
	edges.push({ r: cell.r + 0.5, c: cell.c });
	edges.push({ r: cell.r, c: cell.c + 0.5 });

	return edges;
}

export function directionIdxToFracAngle(direction: number): number {
	const totalDirections = 8;

	// E, S, W, N = 0, 2, 4, 6
	// SE, SW, NW, NE = 1, 3, 5, 7

	const fracAngle = direction / totalDirections;
	return fracAngle;
}

const gridDirectionCoords: GridCoordI[] = [
	{ r: 0, c: 1 },
	{ r: 1, c: 1 },
	{ r: 1, c: 0 },
	{ r: 1, c: -1 },
	{ r: 0, c: -1 },
	{ r: -1, c: -1 },
	{ r: -1, c: 0 },
	{ r: -1, c: 1 }
];


const idxToDirectionMap: Map<number, DIRECTION> = new Map([
	[6, DIRECTION.N],
	[2, DIRECTION.S],
	[0, DIRECTION.E],
	[4, DIRECTION.W],
	[7, DIRECTION.NE],
	[5, DIRECTION.NW],
	[1, DIRECTION.SE],
	[3, DIRECTION.SW]
]);


export function idxToDirection(idx: number): DIRECTION {
	idx = idx % 8
	const direction = idxToDirectionMap.get(idx);
	if (direction === undefined) {
		throw Error('Direction is not valid');
	}
	return direction;
}

const directionToCoordsMap: Map<DIRECTION, GridCoordI> = new Map([
	[DIRECTION.N, { r: -1, c: 0 }],
	[DIRECTION.S, { r: 1, c: 0 }],
	[DIRECTION.E, { r: 0, c: 1 }],
	[DIRECTION.W, { r: 0, c: -1 }],
	[DIRECTION.NE, { r: -1, c: 1 }],
	[DIRECTION.NW, { r: -1, c: -1 }],
	[DIRECTION.SE, { r: 1, c: 1 }],
	[DIRECTION.SW, { r: 1, c: -1 }]
]);


export function directionToCoords(direction: DIRECTION): GridCoordI {
	const delta = directionToCoordsMap.get(direction);
	if (delta === undefined) {
		throw Error('Direction is not valid');
	}
	return delta;
}

export function gridCoordsNextInDirection(cell: GridCoordI, direction: DIRECTION): GridCoordI {
	const delta = directionToCoords(direction)
	const cell2 = coordsAdd(cell, delta)
	return cell2
}

export function gridCoordsNeighbour(cell: GridCoordI, idx: number): GridCoordI {
	const l = gridDirectionCoords.length;
	idx = (l + (idx % l)) % l;
	const vector = gridDirectionCoords[idx];
	const neighbour: GridCoordI = { r: cell.r + vector.r, c: cell.c + vector.c };
	return neighbour;
}

export function getGridCoordsOrthogonalNeighbours(cell: GridCoordI): GridCoordI[] {
	const idxs = [0, 2, 4, 6]
	const neighbours: GridCoordI[] = [];
	for (const idx of idxs) {
		const neighbour = gridCoordsNeighbour(cell, idx)
		neighbours.push(neighbour)
	}
	return neighbours;
}

export function cellEdgeToCellCoords(edge: GridCoordI): GridCoordI[] {
	const cells: GridCoordI[] = [];

	if (edge.r % 1 === 0 && edge.c % 1 === 0.5) {
		cells.push({ r: edge.r - 1, c: Math.floor(edge.c) });
		cells.push({ r: edge.r, c: Math.floor(edge.c) });
	} else if (edge.r % 1 === 0.5 && edge.c % 1 === 0) {
		cells.push({ r: Math.floor(edge.r), c: edge.c - 1 });
		cells.push({ r: Math.floor(edge.r), c: edge.c });
	}

	return cells;
}

export function addToCellGroup(
	group: GridCoordI[],
	cell: GridCoordI,
	allowDiagonallyAdjacent: boolean = false
): GridCoordI[] {
	const inGroup = group.some((_cell) => areCoordsEqual(_cell, cell));
	const adjacent = allowDiagonallyAdjacent
		? group.some((_cell) => areCoordsNeighbours(_cell, cell))
		: group.some((_cell) => areCoordsOrthogonallyAdjacent(_cell, cell));

	if (!inGroup && adjacent) {
		const newGroup = [...group, cell];
		sortGridCoords(newGroup);
		return newGroup;
	}
	return group;
}

export function gridCoordToStr(gridCoord: GridCoordI): string {
	const coordStr = `R${gridCoord.r + 1}C${gridCoord.c + 1}`;
	return coordStr;
}

export function strToCellCoord(coordStr: string): GridCoordI {
	const res = coordStr.split('R')[1].split('C');
	const row = parseInt(res[0]) - 1;
	const col = parseInt(res[1]) - 1;

	return { r: row, c: col };
}

export function strToGridCoord(coordStr: string): GridCoordI {
	const res = coordStr.split('R')[1].split('C');
	const row = parseFloat(res[0]) - 1;
	const col = parseFloat(res[1]) - 1;

	return { r: row, c: col };
}
