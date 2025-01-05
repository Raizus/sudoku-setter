import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import type { LineMarker } from '$src/lib/Puzzle/PenTool';
import { addLineMarkersAction, resetAction } from '$src/lib/reducers/PenToolReducer';
import {
	restoreCellsHighlightsAction,
	restoreCellsValueAction
} from '$src/lib/reducers/UpdateCellsActions';
import { executeUpdateCellsAction } from '$stores/CellsStore';
import { updatePenTool } from '$stores/PenToolStore';

type JsonT = { [variable: string]: unknown } | undefined;

type Point = [number, number];
type Region = Point[];

function solve_coloring(grid: number[][]): number[][] {
	if (grid.length === 0 || grid[0].length === 0) return [];

	const rows = grid.length;
	const cols = grid[0].length;
	const visited = Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(false));
	const regions: Region[] = [];
	const result = Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(0));

	// Find all regions using flood fill
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (!visited[i][j]) {
				const region: Region = [];
				regions.push(region);
				floodFill(i, j, grid[i][j]);
			}
		}
	}

	// Flood fill helper function
	function floodFill(row: number, col: number, value: number) {
		if (row < 0 || row >= rows || col < 0 || col >= cols) return;
		if (visited[row][col] || grid[row][col] !== value) return;

		visited[row][col] = true;
		regions[regions.length - 1].push([row, col]);

		// Check all 4 directions
		floodFill(row + 1, col, value);
		floodFill(row - 1, col, value);
		floodFill(row, col + 1, value);
		floodFill(row, col - 1, value);
	}

	// Build adjacency graph of regions
	const adjacencyList: Set<number>[] = Array(regions.length)
		.fill(0)
		.map(() => new Set());

	// Helper to check if two regions are adjacent
	function areRegionsAdjacent(region1: Region, region2: Region): boolean {
		for (const [r1, c1] of region1) {
			for (const [dr, dc] of [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1]
			]) {
				const newR = r1 + dr;
				const newC = c1 + dc;
				if (region2.some(([r2, c2]) => r2 === newR && c2 === newC)) {
					return true;
				}
			}
		}
		return false;
	}

	// Build adjacency list
	for (let i = 0; i < regions.length; i++) {
		for (let j = i + 1; j < regions.length; j++) {
			if (areRegionsAdjacent(regions[i], regions[j])) {
				adjacencyList[i].add(j);
				adjacencyList[j].add(i);
			}
		}
	}

	// Color the regions
	const colors = [1, 4, 7, 9];
	const regionColors = new Array(regions.length).fill(0);

	// Helper to check if color is valid for region
	function isColorValid(regionIndex: number, color: number): boolean {
		for (const adjacent of adjacencyList[regionIndex]) {
			if (regionColors[adjacent] === color) {
				return false;
			}
		}
		return true;
	}

	// Assign colors to regions
	for (let i = 0; i < regions.length; i++) {
		for (const color of colors) {
			if (isColorValid(i, color)) {
				regionColors[i] = color;
				break;
			}
		}
	}

	// Fill result grid with colors
	for (let i = 0; i < regions.length; i++) {
		for (const [row, col] of regions[i]) {
			result[row][col] = regionColors[i];
		}
	}

	return result;
}

function setSolutionValues(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const board = json['board'] as number[][] | undefined;
	if (board === undefined) return;

	const cells: Cell[] = [];
	const values: number[] = [];
	for (let r = 0; r < board.length; r++) {
		const row = board[r];
		for (let c = 0; c < row.length; c++) {
			const cell = grid.getCell(r, c);
			if (!cell || cell.given) continue;
			const value = row[c];
			cells.push(cell);
			values.push(value);
		}
	}
	const action = restoreCellsValueAction(cells, values);
	executeUpdateCellsAction(action);
}

function setBinaryHighlights(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = [
		'yin_yang',
		'two_contiguous_regions',
		'nurimisaki',
		'even_odd_grid',
		'cave_shading'
	];
	for (const name of grid_vars_names) {
		const binary_grid = json[name] as number[][] | undefined;
		if (binary_grid === undefined) continue;

		const cells: Cell[] = [];
		const values: number[][] = [];
		for (let i = 0; i < binary_grid.length; i++) {
			const row = binary_grid[i];
			for (let j = 0; j < row.length; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				cells.push(cell);
				const val = row[j];
				if (val === 0) values.push([3]);
				else values.push([1]);
			}
		}
		const action = restoreCellsHighlightsAction(cells, values);
		executeUpdateCellsAction(action);
		return;
	}
}

function setOtherHighlights(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = ['doublers_grid', 'negators_grid', 'cell_center_loop', 'nexus'];

	for (const name of grid_vars_names) {
		const binary_grid = json[name] as boolean[][] | undefined;
		if (binary_grid === undefined) continue;

		const cells: Cell[] = [];
		const values: number[][] = [];
		for (let i = 0; i < binary_grid.length; i++) {
			const row = binary_grid[i];
			for (let j = 0; j < row.length; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				cells.push(cell);
				const val = Boolean(row[j]);
				if (val === true) values.push([4]);
				else values.push([1]);
			}
		}
		const action = restoreCellsHighlightsAction(cells, values);
		executeUpdateCellsAction(action);
		return;
	}
}

function setUnknownRegionsHighlights(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const unknown_regions = json['unknown_regions'] as number[][] | undefined;

	if (unknown_regions === undefined) return;

	const cells: Cell[] = [];
	const values: number[][] = [];
	for (let i = 0; i < unknown_regions.length; i++) {
		const row = unknown_regions[i];
		for (let j = 0; j < row.length; j++) {
			const cell = grid.getCell(i, j);
			if (!cell) continue;
			cells.push(cell);
			const val = row[j];
			values.push([val + 1]);
		}
	}
	const action = restoreCellsHighlightsAction(cells, values);
	executeUpdateCellsAction(action);
}

function setUnknownRegionsBorders(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = ['unknown_regions', 'sashigane', 'fillomino_area'];

	for (const name of grid_vars_names) {
		const regions_grid = json[name] as number[][] | undefined;
		if (regions_grid === undefined) continue;

		const [n_rows, n_cols] = [grid.nRows, grid.nCols];

		const line_markers: LineMarker[] = [];
		// vertical markers
		for (let i = 0; i < regions_grid.length; i++) {
			const row = regions_grid[i];
			for (let j = 0; j < row.length - 1; j++) {
				const cell1 = grid.getCell(i, j);
				const cell2 = grid.getCell(i, j + 1);
				if (!cell1 || !cell2) continue;

				const val1 = row[j];
				const val2 = row[j + 1];
				if (val1 === val2) continue;

				const marker: LineMarker = {
					colorId: 3,
					p1: { r: i, c: j + 1 },
					p2: { r: i + 1, c: j + 1 }
				};
				line_markers.push(marker);
			}
		}

		// horizontal markers
		for (let j = 0; j < n_cols; j++) {
			for (let i = 0; i < n_rows - 1; i++) {
				const cell1 = grid.getCell(i, j);
				const cell2 = grid.getCell(i + 1, j);
				if (!cell1 || !cell2) continue;

				const val1 = regions_grid[i][j];
				const val2 = regions_grid[i + 1][j];
				if (val1 === val2) continue;

				const marker: LineMarker = {
					colorId: 3,
					p1: { r: i + 1, c: j },
					p2: { r: i + 1, c: j + 1 }
				};
				line_markers.push(marker);
			}
		}
		const action = addLineMarkersAction(line_markers);
		updatePenTool(action);
		return;
	}
}

function setOrthogonalPathOrLoopLines(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = ['cell_center_loop'];

	for (const name of grid_vars_names) {
		const regions_grid = json[name] as number[][] | undefined;
		if (regions_grid === undefined) continue;

		const line_markers: LineMarker[] = [];
		for (let i = 0; i < regions_grid.length; i++) {
			const row = regions_grid[i];
			for (let j = 0; j < row.length; j++) {
				const cell1 = grid.getCell(i, j);
				if (!cell1) continue;

				for (const cell2 of grid.getOrthogonallyAdjacentCells(cell1)) {
					if (!cell2 || !(cell2.r > cell1.r || cell2.c > cell1.c)) continue;
					const val1 = regions_grid[cell1.r][cell1.c];
					const val2 = regions_grid[cell2.r][cell2.c];
					if (!(val1 === 1 && val2 === 1)) continue;

					const marker: LineMarker = {
						colorId: 4,
						p1: { r: cell1.r + 0.5, c: cell1.c + 0.5 },
						p2: { r: cell2.r + 0.5, c: cell2.c + 0.5 }
					};
					line_markers.push(marker);
				}
			}
		}

		const action = addLineMarkersAction(line_markers);
		updatePenTool(action);
		return;
	}
}

function setColoring(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = ['sashigane', 'cave_regions', 'fillomino_area'];

	for (const name of grid_vars_names) {
		const regions_grid = json[name] as number[][] | undefined;
		if (regions_grid === undefined) continue;

		const coloring_grid = solve_coloring(regions_grid);
		if (!coloring_grid) return;

		const cells: Cell[] = [];
		const values: number[][] = [];
		for (let i = 0; i < coloring_grid.length; i++) {
			const row = coloring_grid[i];
			for (let j = 0; j < row.length; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				cells.push(cell);
				const val = row[j];
				values.push([val]);
			}
		}
		const action = restoreCellsHighlightsAction(cells, values);
		executeUpdateCellsAction(action);
		return;
	}
}

export function setBoardOnSolution(json: JsonT, grid: Grid) {
	updatePenTool(resetAction());
	setSolutionValues(json, grid);
	setUnknownRegionsHighlights(json, grid);
	setUnknownRegionsBorders(json, grid);
	setOrthogonalPathOrLoopLines(json, grid);
	setOtherHighlights(json, grid);
	setColoring(json, grid);
	setBinaryHighlights(json, grid);
}
