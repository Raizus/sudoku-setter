import { type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { CageToolI, ConstraintsElement, ConstraintType } from './puzzle_schema';
import type { LineToolI } from './puzzle_schema';
import type { ElementsDict } from './Constraints/ElementsDict';
import type { Cell } from './Grid/Cell';
import type { Grid } from './Grid/Grid';
import type { PuzzleI } from './Puzzle';
import { TOOLS } from './Tools';

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

/**
 * Gets all cells that can be "seen" by a knight's move from the given cell.
 * A knight's move is an L-shaped move: 2 squares in one direction and 1 square perpendicular,
 * or 1 square in one direction and 2 squares perpendicular.
 *
 * @param grid - The puzzle grid containing the cell structure
 * @param cell - The cell from which to calculate knight's move visibility
 * @returns A Set of cells that are reachable by a knight's move from the given cell
 */
function seenByKnightsMove(grid: Grid, cell: Cell): Set<Cell> {
	const knight_cells = grid.getCellsByKnightMove(cell);
	const seen: Set<Cell> = new Set(knight_cells);
	return seen;
}

function seenByKingsMove(grid: Grid, cell: Cell): Set<Cell> {
	const king_cells = grid.getNeighboorCells(cell);
	const seen: Set<Cell> = new Set(king_cells);
	return seen;
}

function seenByDisjointGroup(grid: Grid, cell: Cell): Set<Cell> {
	const group_idx = grid.getDisjointGroupIdx(cell);
	const disjoint_group = grid.getDisjointGroup(group_idx);
	const seen: Set<Cell> = new Set(disjoint_group);
	seen.delete(cell);
	return seen;
}

function seenByPositiveDiagonal(grid: Grid, cell: Cell): Set<Cell> {
	const seen: Set<Cell> = new Set();
	const diag_cells = grid.getPositiveDiagonal();
	if (diag_cells.find((cell2) => cell2 === cell)) {
		return new Set(diag_cells);
	}

	return seen;
}

function seenByNegativeDiagonal(grid: Grid, cell: Cell): Set<Cell> {
	const seen: Set<Cell> = new Set();

	const diag_cells = grid.getNegativeDiagonal();
	if (diag_cells.find((cell2) => cell2 === cell)) {
		return new Set(diag_cells);
	}

	return seen;
}

/**
 * Returns a set of cells that are "seen" by global constraints applied to a specific cell in the grid.
 *
 * This function iterates over all elements in the provided `element_dict` and, for each element whose
 * `tool_id` matches a known global constraint, applies the corresponding function to determine which
 * cells are affected by that constraint from the perspective of the given cell.
 *
 * @param grid - The Sudoku grid containing all cells.
 * @param element_dict - A dictionary of puzzle elements.
 * @param coords - The coordinates of the cell to check for seen cells.
 * @returns A set of cells that are seen by the global constraints for the specified cell.
 */
export function cellsSeenByGlobalConstraints(
	grid: Grid,
	element_dict: ElementsDict,
	coords: GridCoordI
): Set<Cell> {
	let seen: Set<Cell> = new Set();

	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) {
		return seen;
	}

	const tool_function_map: Record<string, (grid: Grid, cell: Cell) => Set<Cell>> = {
		[TOOLS.ANTIKNIGHT]: seenByKnightsMove,
		[TOOLS.ANTIKING]: seenByKingsMove,
		[TOOLS.DISJOINT_GROUPS]: seenByDisjointGroup,
		[TOOLS.NEGATIVE_DIAGONAL]: seenByNegativeDiagonal,
		[TOOLS.POSITIVE_DIAGONAL]: seenByPositiveDiagonal
	};

	for (const element of element_dict.values()) {
		const tool_id = element.tool_id;

		if (!(tool_id in tool_function_map)) continue;

		const func = tool_function_map[tool_id];
		seen = seen.union(func(grid, cell));
	}

	return seen;
}

function seenByBetweenLines(grid: Grid, cell: Cell, constraint: LineToolI): Set<Cell> {
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
		seen = seen.union(new Set(line_mids));

		if (line_mids.length > 0) {
			const other_ends = line_ends.filter((_, idx) => idx !== match_ends);
			seen = seen.union(new Set(other_ends));
		}
		return seen;
	}

	// match on line mids?
	const match_mids = line_mids.findIndex((_cell) => _cell === cell);
	if (match_mids !== -1) {
		// if cell is not at the ends of a between line, then the cells in the ends are different from it
		seen = seen.union(new Set(line_ends));
		return seen;
	}

	return seen;
}

function seenByRenban(grid: Grid, cell: Cell, constraint: LineToolI): Set<Cell> {
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
		seen = seen.union(new Set(other_cells));
		return seen;
	}

	return seen;
}

function seenByKillerCage(grid: Grid, cell: Cell, constraint: CageToolI): Set<Cell> {
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
		seen = seen.union(new Set(other_cells));
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

function seenByLocalElement<T extends ConstraintType>(
	grid: Grid,
	cell: Cell,
	element: ConstraintsElement,
	func: ((grid: Grid, cell: Cell, constraint: T) => Set<Cell>)
): Set<Cell> {
	let seen: Set<Cell> = new Set();

	if (!element.constraints) return seen;

	for (const constraint of Object.values(element.constraints)) {
		const seen_by_c = func(grid, cell, constraint as T);
		seen = seen.union(new Set(seen_by_c));
	}

	return seen;
}

export function cellsSeenByLocalConstraints(
	grid: Grid,
	elements_dict: ElementsDict,
	coords: GridCoordI
): Set<Cell> {
	let seen: Set<Cell> = new Set();

	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) {
		return seen;
	}

	const line_tool_function_map: Record<
		string,
		(grid: Grid, cell: Cell, constraint: LineToolI) => Set<Cell>
	> = {
		[TOOLS.BETWEEN_LINE]: seenByBetweenLines,
		[TOOLS.RENBAN_LINE]: seenByRenban
	};

	const cage_tool_function_map: Record<
		string,
		(grid: Grid, cell: Cell, constraint: CageToolI) => Set<Cell>
	> = {
		[TOOLS.KILLER_CAGE]: seenByKillerCage,
		[TOOLS.PARITY_BALANCE_CAGE]: seenByKillerCage,
		[TOOLS.SPOTLIGHT_CAGE]: seenByKillerCage
	};

	for (const element of elements_dict.values()) {
		const tool_id = element.tool_id;
		if (!element.constraints) continue;

		if (tool_id in line_tool_function_map) {
			const func = line_tool_function_map[tool_id];
			seen = seen.union(seenByLocalElement<LineToolI>(grid, cell, element, func));
			continue;
		}

		if (tool_id in cage_tool_function_map) {
			const func = cage_tool_function_map[tool_id];
			seen = seen.union(seenByLocalElement<CageToolI>(grid, cell, element, func));
			continue;
		}
	}

	return seen;
}

export function cellsSeenByCell(puzzle: PuzzleI, coords: GridCoordI): Set<Cell> {
	let seen: Set<Cell> = new Set();

	const grid = puzzle.grid;
	const elements_dict = puzzle.elementsDict;

	const not_sudoku_ele = elements_dict.values().find(
		(element) => element.tool_id === TOOLS.SUDOKU_RULES_DO_NOT_APPLY
	);

	if (not_sudoku_ele && !not_sudoku_ele.disabled) {
		seen = seen.union(seenByRow(grid, coords));
		seen = seen.union(seenByCol(grid, coords));
		seen = seen.union(seenByRegion(grid, coords));
	}

	seen = seen.union(cellsSeenByGlobalConstraints(grid, elements_dict, coords));
	seen = seen.union(cellsSeenByLocalConstraints(grid, elements_dict, coords));

	const cell2 = grid.getCell(coords.r, coords.c);
	if (cell2 && seen.has(cell2)) seen.delete(cell2);

	return seen;
}

export function cellsSeenByCells(puzzle: PuzzleI, cells: GridCoordI[]): GridCoordI[] {
	const seenCells: Set<Cell>[] = [];
	if (cells.length == 0) return [];

	for (const cell of cells) {
		seenCells.push(cellsSeenByCell(puzzle, cell));
	}

	const seenByAll = seenCells.reduce((prev, curr) => prev.intersection(curr));
	
	const coords: GridCoordI[] = [...seenByAll].map((cell) => cell.toCoords());
	return coords;
}
