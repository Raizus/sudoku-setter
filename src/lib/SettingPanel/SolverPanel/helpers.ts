import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import type { LineMarker } from '$src/lib/Puzzle/PenTool';
import { addLineMarkersAction } from '$src/lib/reducers/PenToolReducer';
import {
	restoreCellsHighlightsAction,
	restoreCellsValueAction
} from '$src/lib/reducers/UpdateCellsActions';
import { executeUpdateCellsAction } from '$stores/CellsStore';
import { updatePenTool } from '$stores/PenToolStore';

type JsonT = { [variable: string]: unknown } | undefined;

function create_coloring_model(grid: number[][]) {
	let out_str = '';
	const nrows = grid.length;
	const ncols = grid[0].length;
	out_str += `set of int: ROW_IDXS = 0..${nrows - 1};\n`;
	out_str += `set of int: COL_IDXS = 0..${ncols - 1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var {1,4,7,9}: colors_grid;\n`;

	for (let i = 0; i < nrows; i++) {
		const row = grid[i];
		for (let j = 0; j < row.length - 1; j++) {
			const cell = row[j];
			const right = row[j + 1];
			if (cell === right) {
				out_str += `constraint colors_grid[${i},${j}] == colors_grid[${i},${j + 1}];\n`;
			} else {
				out_str += `constraint colors_grid[${i},${j}] != colors_grid[${i},${j + 1}];\n`;
			}
			if (i >= nrows - 1) continue;
			const down = grid[i + 1][j];
			if (cell === down) {
				out_str += `constraint colors_grid[${i},${j}] == colors_grid[${i + 1},${j}];\n`;
			} else {
				out_str += `constraint colors_grid[${i},${j}] != colors_grid[${i + 1},${j}];\n`;
			}
		}
	}
	out_str += '\nsolve satisfy;\n';
	return out_str;
}

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
	const grid_vars_names = ['yin_yang', 'two_contiguous_regions', 'nurimisaki', 'even_odd_grid'];
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
	const grid_vars_names = ['doublers_grid', 'negators_grid'];
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
				const val = row[j];
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
	const grid_vars_names = ['unknown_regions', 'sashigane'];

	for (const name of grid_vars_names) {
		const regions_grid = json[name] as number[][] | undefined;
		if (regions_grid === undefined) continue;

		if (name === 'sashigane') create_coloring_model(regions_grid);

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

function setColoring(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const sashigane_regions = json['sashigane'] as number[][] | undefined;
	if (sashigane_regions === undefined) return;

	const coloring_grid = solve_coloring(sashigane_regions);
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
}

export function setBoardOnSolution(json: JsonT, grid: Grid) {
	setSolutionValues(json, grid);
	setUnknownRegionsHighlights(json, grid);
	setUnknownRegionsBorders(json, grid);
	setBinaryHighlights(json, grid);
	setOtherHighlights(json, grid);
	setColoring(json, grid);
}
