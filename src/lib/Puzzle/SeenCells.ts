import { type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { CageToolI } from "./puzzle_schema";
import type { LineToolI } from "./puzzle_schema";
import type { ElementsDict } from './Constraints/ElementsDict';
import type { ConstraintsElement } from './puzzle_schema';
import type { Cell } from './Grid/Cell';
import type { Grid } from './Grid/Grid';
import type { PuzzleI } from './Puzzle';
import { TOOLS, type TOOLID } from './Tools';

function seenByRow(grid: Grid, cell: GridCoordI) {
	const row_cells = grid.getRow(cell.r);
	const seen: Set<Cell> = new Set(row_cells);

	return seen;
}

function seenByCol(grid: Grid, cell: GridCoordI) {
	const col_cells = grid.getCol(cell.c);
	const seen: Set<Cell> = new Set(col_cells);
	return seen;
}

function seenByRegion(grid: Grid, cell: GridCoordI) {
	const cell2 = grid.getCell(cell.r, cell.c);
	const region = cell2?.region ?? null;

	const region_cells = grid.getRegion(region);
	const seen: Set<Cell> = new Set(region_cells);
	return seen;
}

function seenByKnightsMove(grid: Grid, cell: Cell) {
	const knight_cells = grid.getCellsByKnightMove(cell);
	const seen: Set<Cell> = new Set(knight_cells);
	return seen;
}

function seenByKingsMove(grid: Grid, cell: Cell) {
	const king_cells = grid.getNeighboorCells(cell);
	const seen: Set<Cell> = new Set(king_cells);
	return seen;
}

function seenByDisjointGroup(grid: Grid, cell: Cell) {
	const group_idx = grid.getDisjointGroupIdx(cell);
	const disjoint_group = grid.getDisjointGroup(group_idx);
	const seen: Set<Cell> = new Set(disjoint_group);
	seen.delete(cell);
	return seen;
}

function seenByPositiveDiagonal(grid: Grid, cell: Cell) {
	const seen: Set<Cell> = new Set();
	const diag_cells = grid.getPositiveDiagonal();
	if (diag_cells.find((cell2) => cell2 === cell)) {
		return new Set(diag_cells);
	}

	return seen;
}

function seenByNegativeDiagonal(grid: Grid, cell: Cell) {
	const seen: Set<Cell> = new Set();

	const diag_cells = grid.getNegativeDiagonal();
	if (diag_cells.find((cell2) => cell2 === cell)) {
		return new Set(diag_cells);
	}

	return seen;
}

function seenByBetweenLines(grid: Grid, cell: Cell, constraint: LineToolI) {
	// the cells seen by a clone are the cells seen by the cell itself
	// plus the cells seen by it's clone
	let seen: Set<Cell> = new Set();

	const line_coords = constraint.cells;
	const line_cells = line_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((_cell) => _cell !== undefined);
	const l = line_cells.length;
	const line_ends = [line_cells[0], line_cells[l - 1]];
	const line_mids = line_cells.slice(1, l - 1);

	// match on line ends?
	const match_ends = line_ends.findIndex((_cell) => _cell === cell);
	if (match_ends !== -1) {
		// if cell is on the end of a between line, then the cells in the middle and on the other end are different
		seen = new Set([...seen, ...line_mids]);
		if (line_mids.length > 0) {
			const other_ends = line_ends.filter((_, idx) => idx !== match_ends);
			seen = new Set([...seen, ...other_ends]);
		}
		return seen;
	}
	// match on line mids?
	const match_mids = line_mids.findIndex((_cell) => _cell === cell);
	if (match_mids !== -1) {
		// if cell is on the between the ends of a between line,
		// then the cells in the ends are different
		seen = new Set([...seen, ...line_ends]);
		return seen;
	}

	return seen;
}

function seenByRenban(grid: Grid, cell: Cell, constraint: LineToolI) {
	let seen: Set<Cell> = new Set();

	const line_coords = constraint.cells;
	const line_cells = line_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((_cell) => _cell !== undefined);

	// is cell in the renban?
	const match = line_cells.find((_cell) => _cell === cell);
	if (!match) return seen;

	// cell sees all other cells in the renban
	const other_cells = line_cells.filter((_cell) => _cell !== cell);
	if (other_cells.length) {
		seen = new Set([...seen, ...other_cells]);
		return seen;
	}

	return seen;
}

function seenByKillerCage(grid: Grid, cell: Cell, constraint: CageToolI) {
	let seen: Set<Cell> = new Set();

	const cage_coords = constraint.cells;
	const cage_cells = cage_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((_cell) => _cell !== undefined);

	// is cell in the cage?
	const match = cage_cells.find((_cell) => _cell === cell);
	if (!match) return seen;

	// cell sees all other cells in the cage
	const other_cells = cage_cells.filter((_cell) => _cell !== cell);
	if (other_cells.length) {
		seen = new Set([...seen, ...other_cells]);
		return seen;
	}

	return seen;
}

// function seenByClones(grid: Grid, cell: Cell, constraint: CloneToolI) {
// 	// the cells seen by a clone are the cells seen by the cell itself
// 	// plus the cells seen by it's clone
// 	const seen: Set<Cell> = new Set();

// 	const cell_coord = cell.toCoords();

// 	const match1 = constraint.cells.find((coord) => areCoordsEqual(coord, cell_coord));
// 	const match2 = constraint.cells2.find((coord) => areCoordsEqual(coord, cell_coord));

// 	if (match1) {
// 		const idx1 = constraint.cells.findIndex((coord) => areCoordsEqual(coord, cell_coord));
// 		const matching_coord = constraint.cells2[idx1];
// 	}

// 	return seen;
// }

export function cellsSeenByGlobalConstraints(
	grid: Grid,
	element_dict: ElementsDict,
	coords: GridCoordI
) {
	let seen: Set<Cell> = new Set();

	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) {
		return seen;
	}

	const antiknight = !!element_dict.get(TOOLS.ANTIKNIGHT);
	if (antiknight) {
		seen = seen.union(seenByKnightsMove(grid, cell));
	}
	const antiking = !!element_dict.get(TOOLS.ANTIKING);
	if (antiking) {
		seen = seen.union(seenByKingsMove(grid, cell));
	}
	const disjoint_groups = !!element_dict.get(TOOLS.DISJOINT_GROUPS);
	if (disjoint_groups) {
		seen = seen.union(seenByDisjointGroup(grid, cell));
	}
	const negative_diag = !!element_dict.get(TOOLS.NEGATIVE_DIAGONAL);
	if (negative_diag) {
		seen = seen.union(seenByNegativeDiagonal(grid, cell));
	}
	const positive_diag = !!element_dict.get(TOOLS.POSITIVE_DIAGONAL);
	if (positive_diag) {
		seen = seen.union(seenByPositiveDiagonal(grid, cell));
	}

	return seen;
}

function seenByCage(
	grid: Grid,
	element: ConstraintsElement,
	cell: Cell,
	tool: TOOLID,
	seen: Set<Cell>
) {
	if (element.tool_id !== tool) return seen;
	if (!element.constraints) return seen;

	for (const constraint of Object.values(element.constraints)) {
		const seen_by_c = seenByKillerCage(grid, cell, constraint as CageToolI);
		seen = new Set([...seen, ...seen_by_c]);
	}

	return seen;
}

export function cellsSeenByLocalConstraints(
	grid: Grid,
	elements_dict: ElementsDict,
	coords: GridCoordI
) {
	let seen: Set<Cell> = new Set();

	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) {
		return seen;
	}

	for (const element of elements_dict.values()) {
		const tool_id = element.tool_id;
		if (!element.constraints) continue;

		if (tool_id === TOOLS.BETWEEN_LINE) {
			for (const constraint of Object.values(element.constraints)) {
				const seen_by_c = seenByBetweenLines(grid, cell, constraint as LineToolI);
				seen = new Set([...seen, ...seen_by_c]);
			}
		} else if (tool_id === TOOLS.RENBAN_LINE) {
			for (const constraint of Object.values(element.constraints)) {
				const seen_by_c = seenByRenban(grid, cell, constraint as LineToolI);
				seen = new Set([...seen, ...seen_by_c]);
			}
		}
		seen = seenByCage(grid, element, cell, TOOLS.KILLER_CAGE, seen);
		seen = seenByCage(grid, element, cell, TOOLS.PARITY_BALANCE_CAGE, seen);
		seen = seenByCage(grid, element, cell, TOOLS.SPOTLIGHT_CAGE, seen);
	}

	return seen;
}

export function cellsSeenByCell(puzzle: PuzzleI, coords: GridCoordI) {
	let seen: Set<Cell> = new Set();

	const grid = puzzle.grid;
	const elements_dict = puzzle.elementsDict;

	const sudoku = !elements_dict.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY);
	if (sudoku) {
		seen = new Set<Cell>([
			...seenByRow(grid, coords),
			...seenByCol(grid, coords),
			...seenByRegion(grid, coords)
		]);
	}

	seen = new Set<Cell>([...seen, ...cellsSeenByGlobalConstraints(grid, elements_dict, coords)]);

	seen = new Set<Cell>([...seen, ...cellsSeenByLocalConstraints(grid, elements_dict, coords)]);

	const cell2 = grid.getCell(coords.r, coords.c);
	if (cell2) seen.delete(cell2);

	return seen;
}

export function cellsSeenByCells(puzzle: PuzzleI, cells: GridCoordI[]): GridCoordI[] {
	const seenCells: Set<Cell>[] = [];
	if (cells.length == 0) {
		const coords: GridCoordI[] = [];
		return coords;
	}

	for (const cell of cells) {
		seenCells.push(cellsSeenByCell(puzzle, cell));
	}

	const seenByAll = seenCells.reduce((prev, curr) => prev.intersection(curr));
	const coords: GridCoordI[] = [];
	for (const cell of seenByAll) {
		coords.push(cell.toCoords());
	}
	return coords;
}
