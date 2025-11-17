import {
	cellsFromCoords,
	cellsToGridVarsName,
	PuzzleModel,
	VAR_2D_NAMES
} from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import { combinations } from '$src/lib/utils/functionUtils';
import type { Cell } from '../../Grid/Cell';
import type { Grid } from '../../Grid/Grid';
import type { CageToolI, ConstraintsElement } from '../../puzzle_schema';
import { TOOLS } from '../../Tools';

export function getCageNeighbours(cells: Cell[], grid: Grid) {
	const cage_neighbours: Cell[] = [];
	for (const cell of cells) {
		const neighbours = grid.getOrthogonallyAdjacentCells(cell);
		neighbours.forEach((cell2) => {
			if (!cells.includes(cell2) && !cage_neighbours.includes(cell2)) cage_neighbours.push(cell2);
		});
	}
	return cage_neighbours;
}

export function getAdjacentCages(grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints;
	const adj_list: Map<string, Set<string>> = new Map();
	if (!constraints) return adj_list;
	const clist = [...Object.entries(constraints)];

	for (const [cage1, cage2] of combinations(clist, 2)) {
		const c_id1 = cage1[0];
		const c_id2 = cage2[0];

		const cells1 = cellsFromCoords(grid, (cage1[1] as CageToolI).cells);
		const cells2 = new Set(cellsFromCoords(grid, (cage2[1] as CageToolI).cells));
		const cage1_neighbours = getCageNeighbours(cells1, grid);

		const is_adj = cage1_neighbours.some((cell1) => cells2.has(cell1));
		if (!is_adj) continue;

		const set1 = adj_list.get(c_id1);
		if (set1) set1.add(c_id2);
		else adj_list.set(c_id1, new Set([c_id2]));

		const set2 = adj_list.get(c_id2);
		if (set2) set2.add(c_id1);
		else adj_list.set(c_id2, new Set([c_id1]));
	}

	return adj_list;
}

export function getCageVars(
	grid: Grid,
	constraint: CageToolI,
	use_values: boolean = false
): string[] {
	const cells = cellsFromCoords(grid, constraint.cells);
	const grid_name = use_values ? VAR_2D_NAMES.VALUES_GRID : VAR_2D_NAMES.BOARD;
	const vars = cellsToGridVarsName(cells, grid_name);
	return vars;
}

function simpleCageConstraint(grid: Grid, constraint: CageToolI, predicate: string) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str: string = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

export function simpleCageElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleCageConstraint(grid, constraint as CageToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

export function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: true,
		allow_var_list: true
	};
	const default_name = `cage_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

export function valuedCageConstraint(
	model: PuzzleModel,
	c_id: string,
	constraint: CageToolI,
	predicate: string,
	use_values: boolean = false
): [out_str: string, var_name: string] {
	const grid = model.puzzle.grid;
	const vars = getCageVars(grid, constraint, use_values);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return ['', ''];

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return [out_str, var_name];
}

export function valuedCageElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
): [out_str: string, var_names: string[]] {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return [out_str, []];

	const mod_constraints = element.negative_constraints;
	const use_values = mod_constraints ? !!mod_constraints[TOOLS.USE_CELL_VALUES] : false;

	const var_names: string[] = [];
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const result = valuedCageConstraint(model, c_id, constraint as CageToolI, predicate, use_values);
		out_str += result[0];
		var_names.push(result[1]);
	}
	return [out_str, var_names];
}
