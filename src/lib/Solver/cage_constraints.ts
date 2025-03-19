import type { CageToolI } from '../Puzzle/Constraints/CageConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	allDifferentConstraint,
	cellsToValueVarsName,
	PuzzleModel,
	cellsToGridVarsStr,
	VAR_2D_NAMES,
	groupConstraintsByValue,
	cellsFromCoords
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
	grid: Grid,
	c_id: string,
	constraint: CageToolI,
	predicate: string
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return out_str;
}

function killerCageConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CageToolI) {
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
	out_str += `constraint killer_cage(${vars_str}, ${var_name});\n`;
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

function sumCageConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CageToolI) {
	const constraint_str = valuedCageConstraint(model, grid, c_id, constraint, 'sum_cage_p');
	return constraint_str;
}

function parityBalanceCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const constraint_str = simpleCageConstraint(grid, constraint, 'parity_balance_cage_p');
	return constraint_str;
}

function sumCageLookAndSayConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const constraint_str = simpleCageConstraint(grid, constraint, 'sum_cage_look_and_say_p');
	return constraint_str;
}

function divisibleKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const constraint_str = valuedCageConstraint(
		model,
		grid,
		c_id,
		constraint,
		'divisible_killer_cage_p'
	);
	return constraint_str;
}

function spotlightCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const constraint_str = valuedCageConstraint(model, grid, c_id, constraint, 'spotlight_cage_p');
	return constraint_str;
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
	const cage_cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);

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

function yinYangValuedCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI,
	predicate: string
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function yinYangAntithesisKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const constraint_str = yinYangValuedCageConstraint(
		model,
		grid,
		c_id,
		constraint,
		'yin_yang_antithesis_killer_cage_p'
	);
	return constraint_str;
}

function yinYangBreakevenKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const constraint_str = yinYangValuedCageConstraint(
		model,
		grid,
		c_id,
		constraint,
		'yin_yang_breakeven_killer_cage_p'
	);
	return constraint_str;
}

function doublersKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const values_vars = cellsToValueVarsName(cells);
	const values_vars_str = `[${values_vars.join(', ')}]`;

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint doublers_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const values_vars = cellsToValueVarsName(cells);
	const values_vars_str = `[${values_vars.join(', ')}]`;

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint negators_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function multisetCageConstraint(grid: Grid, constraints: CageToolI[]) {
	let out_str = '';

	// group cells by value
	const groups = groupConstraintsByValue(constraints);

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

type ConstraintF = (model: PuzzleModel, grid: Grid, c_id: string, constraint: CageToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.KILLER_CAGE, killerCageConstraint],
	[TOOLS.INVERTED_KILLER_CAGE, invertedKillerCageConstraint],
	[TOOLS.SUM_CAGE, sumCageConstraint],
	[TOOLS.PARITY_BALANCE_CAGE, parityBalanceCageConstraint],
	[TOOLS.SUM_CAGE_LOOK_AND_SAY, sumCageLookAndSayConstraint],
	[TOOLS.DIVISIBLE_KILLER_CAGE, divisibleKillerCageConstraint],
	[TOOLS.SPOTLIGHT_CAGE, spotlightCageConstraint],
	[TOOLS.UNIQUE_DIGITS_CAGE, uniqueDigitsCageConstraint],
	[TOOLS.VAULTED_CAGE, vaultedCageConstraint],
	[TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE, yinYangAntithesisKillerCageConstraint],
	[TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE, yinYangBreakevenKillerCageConstraint],

	[TOOLS.DOUBLERS_KILLER_CAGE, doublersKillerCageConstraint],
	[TOOLS.NEGATORS_KILLER_CAGE, negatorsKillerCageConstraint]
]);

export function cageConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	// let out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as CageToolI);
			out_str += constraint_str;
		}
	} else if (toolId === TOOLS.MULTISET_CAGE) {
		const constl = Object.values(constraints) as CageToolI[];
		const constraint_str = multisetCageConstraint(grid, constl);
		out_str += constraint_str;
	}
	return out_str;
}
