import { counter } from '$lib/utils/functionUtils';
import type { DIRECTION } from '$src/lib/utils/directions';
import { directionToCoords } from '$src/lib/utils/SquareCellGridCoords';
import { Cell, type CellRecord } from './Cell';
import { getRegionIndex } from './gridSizes';

interface GridI {
	grid: Cell[][];
	nRows: number;
	nCols: number;
}

export class Grid implements GridI {
	nCols: number;
	nRows: number;
	grid: Cell[][];

	constructor(nRows: number, nCols: number) {
		this.nRows = nRows;
		this.nCols = nCols;
		this.grid = [];

		const isSquare = nRows == nCols;

		for (let i = 0; i < nRows; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < nCols; j++) {
				const cell = new Cell(i, j);
				if (isSquare) {
					const region = getRegionIndex(i, j, nRows);
					cell.region = region;
				}
				row.push(cell);
			}
			this.grid.push(row);
		}
	}

	getCell(r: number, c: number): Cell | undefined {
		if (r < 0 || r >= this.nRows || c < 0 || c >= this.nCols) {
			return undefined;
		}

		return this.grid[r][c];
	}

	getAllCells(): Cell[] {
		return this.grid.flat();
	}

	getRow(r: number): Cell[] {
		const row_cells: Cell[] = [];

		for (const cell of this.grid[r]) {
			if (!cell.outside) row_cells.push(cell);
		}

		return row_cells;
	}

	getCol(c: number): Cell[] {
		const col_cells: Cell[] = [];

		for (const row of this.grid) {
			const cell = row[c];
			if (!cell.outside) col_cells.push(cell);
		}

		return col_cells;
	}

	getRegion(region: number | null): Cell[] {
		const region_cells: Cell[] = [];

		if (region === null) return region_cells;

		for (const cell of this.getAllCells()) {
			if (cell.region === region && !cell.outside) region_cells.push(cell);
		}

		return region_cells;
	}

	getCellsByKnightMove(cell: Cell): Cell[] {
		const cells: Array<Cell> = [];
		const moves = [
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		];

		for (const move of moves) {
			const [nr, nc] = [cell.r + move[0], cell.c + move[1]];
			const seen = this.getCell(nr, nc);
			if (seen && !seen.outside) {
				cells.push(seen);
			}
		}

		return cells;
	}

	getOrthogonallyAdjacentCells(cell: Cell): Cell[] {
		const adjacent: Array<Cell> = [];
		if (!cell) return adjacent;

		const moves = [
			[1, 0],
			[0, -1],
			[0, 1],
			[-1, 0]
		];
		for (const move of moves) {
			const r = cell.r + move[0];
			const c = cell.c + move[1];
			const cell2 = this.getCell(r, c);

			if (cell2 && !cell2.outside) adjacent.push(cell2);
		}

		return adjacent;
	}

	getDiagonallyAdjacentCells(cell: Cell): Cell[] {
		const adjacent: Array<Cell> = [];
		if (!cell) return adjacent;

		const moves = [
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, -1]
		];
		for (const move of moves) {
			const r = cell.r + move[0];
			const c = cell.c + move[1];
			const cell2 = this.getCell(r, c);

			if (cell2 && !cell2.outside) adjacent.push(cell2);
		}

		return adjacent;
	}

	getNeighboorCells(cell: Cell): Cell[] {
		/** Returns a list of cells orthogonally and diagonally adjacent to the given cell
		 */
		const neighboors: Array<Cell> = [];
		if (!cell) return neighboors;
		neighboors.push(...this.getOrthogonallyAdjacentCells(cell));
		neighboors.push(...this.getDiagonallyAdjacentCells(cell));
		return neighboors;
	}

	getFilledCells(): Cell[] {
		const cells = this.getAllCells().filter((cell) => cell.value !== null);
		return cells;
	}

	getUsedRegions(): Set<number> {
		const usedRegions: Set<number> = new Set();
		for (const cell of this.getAllCells()) {
			if (cell.region !== null) usedRegions.add(cell.region);
		}
		return usedRegions;
	}

	getRegionCounts() {
		const region_vals = this.getAllCells()
			.filter((cell) => cell.region !== null)
			.map((cell) => cell.region);

		const values_count = counter(region_vals);
		return values_count;
	}

	getDisjointGroupIdx(cell: Cell) {
		if (cell.region === null) return -1;
		return this.getRegion(cell.region).findIndex((_cell) => _cell === cell);
	}

	getDisjointGroup(group_idx: number): Cell[] {
		const cells: Cell[] = [];

		const region_counts = this.getRegionCounts();
		const region_vals = [...region_counts.keys()].sort();
		const num_regions = region_vals.length;

		if (group_idx < 0 || group_idx >= num_regions) return cells;

		const all_counts_same = [...region_counts.values()].every((count) => count === num_regions);
		if (!all_counts_same) return cells;

		for (const region_idx of region_vals) {
			const region_cells = this.getRegion(region_idx);
			cells.push(region_cells[group_idx]);
		}

		return cells;
	}

	getPositiveDiagonal(): Cell[] {
		const diag_cells: Cell[] = [];
		if (this.nCols !== this.nRows) return diag_cells;

		for (let row = 0; row < this.nRows; row++) {
			const cell = this.getCell(row, this.nCols - row - 1);
			if (cell) diag_cells.push(cell);
		}

		return diag_cells;
	}

	getNegativeDiagonal(): Cell[] {
		const diag_cells: Cell[] = [];
		if (this.nCols !== this.nRows) return diag_cells;

		for (let row = 0; row < this.nRows; row++) {
			const cell = this.getCell(row, row);
			if (cell) diag_cells.push(cell);
		}

		return diag_cells;
	}

	getCellsInDirection(r: number, c: number, direction: DIRECTION): Cell[] {
		const cells: Cell[] = [];
		const { r: dr, c: dc } = directionToCoords(direction);

		let [cr, cc] = [r + dr, c + dc];
		while (0 <= cr && cr < this.nRows && 0 <= cc && cc < this.nCols) {
			const cell = this.grid[cr][cc];
			cells.push(cell);
			[cr, cc] = [cr + dr, cc + dc];
		}

		return cells;
	}

	resetValues() {
		for (const cell of this.getAllCells()) {
			cell.centerMarks = [];
			cell.cornerMarks = [];
			cell.highlights = [];
			if (!cell.given) cell.value = null;
		}
	}

	toJSON() {
		const gridRecord: CellRecord[][] = [];

		const g_size = this.nCols === this.nRows ? this.nRows : null;

		for (let i = 0; i < this.nRows; i++) {
			const row: CellRecord[] = [];
			for (let j = 0; j < this.nCols; j++) {
				const cell = this.getCell(i, j);
				if (!cell) continue;
				const cellRecord = cell?.toJson(g_size);
				row.push(cellRecord);
			}
			gridRecord.push(row);
		}
		return gridRecord;
	}

	static fromJSON(nRows: number, nCols: number, gridRecord: CellRecord[][]): Grid {
		const grid = new Grid(nRows, nCols);

		for (let i = 0; i < nRows; i++) {
			for (let j = 0; j < nCols; j++) {
				const cellRecord = gridRecord[i][j];
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				Object.assign(cell, cellRecord);
			}
		}

		return grid;
	}
}
