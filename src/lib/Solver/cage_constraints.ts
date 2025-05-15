import type { CageToolI } from '../Puzzle/Constraints/CageConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	allDifferentConstraint,
	PuzzleModel,
	cellsToGridVarsStr,
	VAR_2D_NAMES,
	groupConstraintsByValue,
	cellsFromCoords,
	simpleElementFunction,
	constraintsBuilder,
	type ElementF
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function getCageVars(grid: Grid, constraint: CageToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleCageConstraint(grid: Grid, constraint: CageToolI, predicate: string) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str: string = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function simpleCageElement(model: PuzzleModel, element: ConstraintsElement, predicate: string) {
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
		allow_int_list: true
	};
	const default_name = `cage_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedCageConstraint(
	model: PuzzleModel,
	c_id: string,
	constraint: CageToolI,
	predicate: string
): [out_str: string, var_name: string] {
	const grid = model.puzzle.grid;
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return ['', ''];

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return [out_str, var_name];
}

function valuedCageElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
): [out_str: string, var_names: string[]] {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return [out_str, []];

	const var_names: string[] = [];
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const result = valuedCageConstraint(model, c_id, constraint as CageToolI, predicate);
		out_str += result[0];
		var_names.push(result[1]);
	}
	return [out_str, var_names];
}

function killerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'killer_cage');
	let out_str = result[0];

	const var_names = result[1];
	if (!element.negative_constraints) return out_str;
	const cage_totals_different = !!element.negative_constraints[TOOLS.ALL_CAGE_TOTALS_ARE_DIFFERENT];

	if (cage_totals_different) {
		out_str += `\n% ${TOOLS.ALL_CAGE_TOTALS_ARE_DIFFERENT}\n`;
		out_str += `constraint all_different([${var_names.join(', ')}]);\n`;
	}
	return out_str;
}

function invertedKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;

	if (!value) {
		const constraint_str = allDifferentConstraint(vars);
		return constraint_str;
	}

	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint inverted_killer_cage_p(${vars_str}, ${var_name});\n`;
	return out_str;
}

function invertedKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, invertedKillerCageConstraint);
	return out_str;
}

function sumCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'sum_cage_p');
	return result[0];
}

function parityBalanceCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCageElement(model, element, 'parity_balance_cage_p');
	return out_str;
}

function sumCageLookAndSayElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCageElement(model, element, 'sum_cage_look_and_say_p');
	return out_str;
}

function divisibleKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'divisible_killer_cage_p');
	return result[0];
}

function spotlightCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'spotlight_cage_p');
	return result[0];
}

function uniqueDigitsCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;

	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint unique_values_cage_p(${vars_str}, ${val}, ALLOWED_DIGITS);\n`;
		return constraint_str;
	}
	return '';
}

function uniqueDigitsCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, uniqueDigitsCageConstraint);
	return out_str;
}

function vaultedCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;

	let out_str = '';
	const result = getParsingResult(model, value, c_id);
	if (result) {
		const var_name = result[1];
		out_str += result[0];
		out_str += `constraint sum(${vars_str}) == ${var_name};\n`;
	}

	const cells_coords = constraint.cells;
	const cage_cells = cellsFromCoords(grid, cells_coords);

	const cage_neighbours: Cell[] = [];
	for (const cell of cage_cells) {
		const neighbours = grid.getOrthogonallyAdjacentCells(cell);
		neighbours.forEach((cell2) => {
			if (!cage_cells.includes(cell2) && !cage_neighbours.includes(cell2))
				cage_neighbours.push(cell2);
		});
	}
	const cage_neighbour_vars = cellsToGridVarsStr(cage_neighbours, VAR_2D_NAMES.BOARD);
	out_str += `constraint vaulted_cage_p(${vars_str}, ${cage_neighbour_vars});\n`;

	return out_str;
}

function vaultedCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, vaultedCageConstraint);
	return out_str;
}

function yinYangValuedCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI,
	predicate: string
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function yinYangValuedCageElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = yinYangValuedCageConstraint(
			model,
			grid,
			c_id,
			constraint as CageToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangAntithesisKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const grid = model.puzzle.grid;
	const out_str = yinYangValuedCageElement(
		model,
		grid,
		element,
		'yin_yang_antithesis_killer_cage_p'
	);
	return out_str;
}

function yinYangBreakevenKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const grid = model.puzzle.grid;
	const out_str = yinYangValuedCageElement(
		model,
		grid,
		element,
		'yin_yang_breakeven_killer_cage_p'
	);
	return out_str;
}

function doublersKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint doublers_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function doublersKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, doublersKillerCageConstraint);
	return out_str;
}

function negatorsKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint negators_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, negatorsKillerCageConstraint);
	return out_str;
}

function multisetCageElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints as Record<string, CageToolI>;
	if (!constraints) return out_str;

	// group cells by value
	const groups = groupConstraintsByValue(Object.values(constraints));
	const grid = model.puzzle.grid;
	for (const group of groups.values()) {
		if (group.length <= 1) continue;
		// for each combination of 2
		for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
			const vars1 = getCageVars(grid, e1);
			const vars1_str = `[${vars1.join(',')}]`;
			const vars2 = getCageVars(grid, e2);
			const vars2_str = `[${vars2.join(',')}]`;
			out_str += `constraint multisets_equal_p(${vars1_str}, ${vars2_str});\n`;
		}
	}

	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.KILLER_CAGE, killerCageElement],
	[TOOLS.INVERTED_KILLER_CAGE, invertedKillerCageElement],
	[TOOLS.SUM_CAGE, sumCageElement],
	[TOOLS.PARITY_BALANCE_CAGE, parityBalanceCageElement],
	[TOOLS.SUM_CAGE_LOOK_AND_SAY, sumCageLookAndSayElement],
	[TOOLS.DIVISIBLE_KILLER_CAGE, divisibleKillerCageElement],
	[TOOLS.SPOTLIGHT_CAGE, spotlightCageElement],
	[TOOLS.UNIQUE_DIGITS_CAGE, uniqueDigitsCageElement],
	[TOOLS.VAULTED_CAGE, vaultedCageElement],
	[TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE, yinYangAntithesisKillerCageElement],
	[TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE, yinYangBreakevenKillerCageElement],

	[TOOLS.DOUBLERS_KILLER_CAGE, doublersKillerCageElement],
	[TOOLS.NEGATORS_KILLER_CAGE, negatorsKillerCageElement],

	[TOOLS.MULTISET_CAGE, multisetCageElement]
]);

export function cageElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
