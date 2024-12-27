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

export function setSolutionValues(json: JsonT, grid: Grid) {
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

export function setBinaryHighlights(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const grid_vars_names = ['yin_yang', 'two_contiguous_regions', 'nurimisaki'];
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

export function setUnknownRegionsHighlights(json: JsonT, grid: Grid) {
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

export function setUnknownRegionsBorders(json: JsonT, grid: Grid) {
	if (json === undefined) return;
	const unknown_regions = json['unknown_regions'] as number[][] | undefined;
	if (unknown_regions === undefined) return;

    const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	const line_markers: LineMarker[] = [];
	// vertical markers
	for (let i = 0; i < unknown_regions.length; i++) {
		const row = unknown_regions[i];
		for (let j = 0; j < row.length - 1; j++) {
			const cell1 = grid.getCell(i, j);
			const cell2 = grid.getCell(i, j + 1);
			if (!cell1 || !cell2) continue;

			const val1 = row[j];
			const val2 = row[j+1];
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
		for (let i = 0; i < n_rows-1; i++) {
			const cell1 = grid.getCell(i, j);
			const cell2 = grid.getCell(i+1, j);
			if (!cell1 || !cell2) continue;

			const val1 = unknown_regions[i][j];
			const val2 = unknown_regions[i+1][j];
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
}

export function setBoardOnSolution(json: JsonT, grid: Grid) {
	setSolutionValues(json, grid);
    setUnknownRegionsHighlights(json, grid);
    setUnknownRegionsBorders(json, grid);
	setBinaryHighlights(json, grid);
}
