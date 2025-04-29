import { type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { CageToolI } from './Constraints/CageConstraints';
import type { GlobalConstraintsDict } from './Constraints/GlobalConstraints';
import type { LineToolI } from './Constraints/LineConstraints';
import type { ElementsDict } from './Constraints/LocalConstraints';
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
	global_constraints: GlobalConstraintsDict,
	coords: GridCoordI
) {
	let seen: Set<Cell> = new Set();

	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) {
		return seen;
	}

	if (global_constraints.get(TOOLS.ANTIKNIGHT)) {
		seen = seen.union(seenByKnightsMove(grid, cell));
	}
	if (global_constraints.get(TOOLS.ANTIKING)) {
		seen = seen.union(seenByKingsMove(grid, cell));
	}
	if (global_constraints.get(TOOLS.DISJOINT_GROUPS)) {
		seen = seen.union(seenByDisjointGroup(grid, cell));
	}
	if (global_constraints.get(TOOLS.NEGATIVE_DIAGONAL)) {
		seen = seen.union(seenByNegativeDiagonal(grid, cell));
	}
	if (global_constraints.get(TOOLS.POSITIVE_DIAGONAL)) {
		seen = seen.union(seenByPositiveDiagonal(grid, cell));
	}

	return seen;
}

function seenByCage(
	grid: Grid,
	elements_dict: ElementsDict,
	cell: Cell,
	tool: TOOLID,
	seen: Set<Cell>
) {
	const killer_cage_cs = elements_dict.get(tool);
	if (killer_cage_cs) {
		for (const entry of Object.entries(killer_cage_cs)) {
			const constraint = entry[1] as CageToolI;
			const seen_by_c = seenByKillerCage(grid, cell, constraint);
			seen = new Set([...seen, ...seen_by_c]);
		}
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

	const between_line_cs = elements_dict.get(TOOLS.BETWEEN_LINE);
	if (between_line_cs) {
		for (const entry of Object.entries(between_line_cs)) {
			const constraint = entry[1] as LineToolI;
			const seen_by_c = seenByBetweenLines(grid, cell, constraint);
			seen = new Set([...seen, ...seen_by_c]);
		}
	}

	const renban_cs = elements_dict.get(TOOLS.RENBAN_LINE);
	if (renban_cs) {
		for (const entry of Object.entries(renban_cs)) {
			const constraint = entry[1] as LineToolI;
			const seen_by_c = seenByRenban(grid, cell, constraint);
			seen = new Set([...seen, ...seen_by_c]);
		}
	}

	seen = seenByCage(grid, elements_dict, cell, TOOLS.KILLER_CAGE, seen);
	seen = seenByCage(grid, elements_dict, cell, TOOLS.PARITY_BALANCE_CAGE, seen);
	seen = seenByCage(grid, elements_dict, cell, TOOLS.SPOTLIGHT_CAGE, seen);

	return seen;
}

export function cellsSeenByCell(puzzle: PuzzleI, coords: GridCoordI) {
	let seen: Set<Cell> = new Set();

	const global_constraints = puzzle.globalConstraints;
	const grid = puzzle.grid;
	const elements_dict = puzzle.elementsDict;

	if (!global_constraints) return seen;
	if (!global_constraints.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY)) {
		seen = new Set<Cell>([
			...seenByRow(grid, coords),
			...seenByCol(grid, coords),
			...seenByRegion(grid, coords)
		]);
	}

	seen = new Set<Cell>([
		...seen,
		...cellsSeenByGlobalConstraints(grid, global_constraints, coords)
	]);

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
