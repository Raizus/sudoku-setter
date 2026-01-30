import type { Grid } from './Grid/Grid';
import type { Cell } from './Grid/Cell';
import { counter } from '$lib/utils/functionUtils';
import { TOOLS } from './Tools';
import type { ElementsDict } from './Constraints/ElementsDict';


/**
 * Finds all cells that contain values which appear more than once in the provided array.
 * @param cells - Array of cells to analyze for repeated values
 * @returns Array of cells that contain values appearing multiple times, excluding null values
 */
function findCellsWithRepeatedValues(cells: Cell[]): Cell[] {	
	const values = cells.map((cell) => cell.value).filter((val) => val !== null);
	const values_count = counter(values);
	
	const repeated_values = [...values_count.entries()]
	.filter(([, count]) => count > 1)
	.map(([val]) => val);
	
	const result: Cell[] = [];
	if (repeated_values.length > 0) {		
		result.push(
			...cells.filter((cell) => cell.value !== null && repeated_values.includes(cell.value))
		);
	}
	return result;
}

export function rowConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	for (let r = 0; r < grid.nRows; r++) {
		const row = grid.getRow(r);
		cells.push(...findCellsWithRepeatedValues(row));
	}

	return new Set(cells);
}

export function colConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	for (let c = 0; c < grid.nCols; c++) {
		const col = grid.getCol(c);
		cells.push(...findCellsWithRepeatedValues(col));
	}

	return new Set(cells);
}

export function regionConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	for (const region of grid.getUsedRegions()) {
		const region_cells = grid.getRegion(region);
		cells.push(...findCellsWithRepeatedValues(region_cells));
	}

	return new Set(cells);
}

export function knightsMoveConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	const filled_cells = grid.getFilledCells();
	for (const cell of filled_cells) {
		const seen = grid.getCellsByKnightMove(cell);
		const conflict = seen.filter((cell2) => cell2.value === cell.value);
		if (conflict.length) {
			cells.push(cell);
			cells.push(...conflict);
		}
	}

	return new Set(cells);
}

export function kingsMoveConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	const filled_cells = grid.getFilledCells();
	for (const cell of filled_cells) {
		const seen = grid.getNeighboorCells(cell);
		const conflict = seen.filter((cell2) => cell2.value === cell.value);
		if (conflict.length) {
			cells.push(cell);
			cells.push(...conflict);
		}
	}

	return new Set(cells);
}

export function nonconsecutiveConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	const filled_cells = grid.getFilledCells();
	for (const cell of filled_cells) {
		const seen = grid.getOrthogonallyAdjacentCells(cell).filter((cell2) => cell2.value !== null);
		const conflict = seen.filter(
			(cell2) =>
				cell2.value !== null && cell.value !== null && Math.abs(cell.value - cell2.value) === 1
		);
		if (conflict.length) {
			cells.push(cell);
			cells.push(...conflict);
		}
	}

	return new Set(cells);
}

export function disjointGroupsConflicts(grid: Grid): Set<Cell> {
	const cells: Cell[] = [];

	const num_regions = [...grid.getUsedRegions()].length;
	for (let group_idx = 0; group_idx < num_regions; group_idx++) {
		const disjoint_group = grid.getDisjointGroup(group_idx);
		const conflicts = findCellsWithRepeatedValues(disjoint_group);
		if (conflicts.length) {
			cells.push(...conflicts);
		}
	}

	return new Set(cells);
}

export function globalConstraintsConflicts(grid: Grid, elements_dict: ElementsDict): Set<Cell> {
	let conflicts: Set<Cell> = new Set();

	const not_sudoku_ele = elements_dict.values()
		.find((element) => element.tool_id === TOOLS.SUDOKU_RULES_DO_NOT_APPLY);

	if (!not_sudoku_ele || not_sudoku_ele.disabled) {
		const aux = new Set<Cell>([
			...rowConflicts(grid),
			...colConflicts(grid),
			...regionConflicts(grid)
		]);
		conflicts = conflicts.union(aux);
	}

	const tool_function_map: Record<string, (grid: Grid) => Set<Cell>> = {
		[TOOLS.ANTIKNIGHT]: knightsMoveConflicts,
		[TOOLS.ANTIKING]: kingsMoveConflicts,
		[TOOLS.NONCONSECUTIVE]: nonconsecutiveConflicts,
		[TOOLS.DISJOINT_GROUPS]: disjointGroupsConflicts
	}

	for (const element of elements_dict.values()) {
			const tool_id = element.tool_id;
			if (!(tool_id in tool_function_map)) continue;

			const func = tool_function_map[tool_id];
			conflicts = conflicts.union(func(grid));
	}

	return conflicts;
}

export function findConflicts(grid: Grid, element_dict: ElementsDict): Cell[] {
	const conflicts = globalConstraintsConflicts(grid, element_dict);
	const cells = [...conflicts];
	return cells;
}
