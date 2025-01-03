import type { CageToolI } from '../Puzzle/Constraints/CageConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToVarsName, allDifferentConstraint, cellsToYinYangVarsName, cellsToValueVarsName, constraintsBuilder } from './solver_utils';

function getCageVars(grid: Grid, constraint: CageToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
    const vars = cellsToVarsName(cells);
    return vars;
}

function simpleCageConstraint(grid: Grid, constraint: CageToolI, predicate: string) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str: string = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function valuedCageConstraint(grid: Grid, constraint: CageToolI, predicate: string) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function killerCageConstraint(grid: Grid, constraint: CageToolI) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint killer_cage(${vars_str}, ${val});\n`;
		return constraint_str;
	}
	const constraint_str = allDifferentConstraint(vars);
	return constraint_str;
}

function invertedKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint inverted_killer_cage_p(${vars_str}, ${val});\n`;
		return constraint_str;
	}
	const constraint_str = allDifferentConstraint(vars);
	return constraint_str;
}

function sumCageConstraint(grid: Grid, constraint: CageToolI) {
	const constraint_str = valuedCageConstraint(grid, constraint, 'sum_cage_p');
	return constraint_str;
}

function parityBalanceCageConstraint(grid: Grid, constraint: CageToolI) {
	const constraint_str = simpleCageConstraint(grid, constraint, 'parity_balance_cage_p');
	return constraint_str;
}

function sumCageLookAndSayConstraint(grid: Grid, constraint: CageToolI) {
	const constraint_str = simpleCageConstraint(grid, constraint, 'sum_cage_look_and_say_p');
	return constraint_str;
}

function divisibleKillerCageConstraint(grid: Grid, constraint: CageToolI) {
    const constraint_str = valuedCageConstraint(grid, constraint, 'divisible_killer_cage_p');
    return constraint_str;
}

function spotlightCageConstraint(grid: Grid, constraint: CageToolI) {
	const constraint_str = valuedCageConstraint(grid, constraint, 'spotlight_cage_p');
	return constraint_str;
}

function yinYangValuedCageConstraint(grid: Grid, constraint: CageToolI, predicate: string) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function yinYangAntithesisKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const constraint_str = yinYangValuedCageConstraint(
		grid,
		constraint,
		'yin_yang_antithesis_killer_cage_p'
	);
	return constraint_str;
}

function yinYangBreakevenKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const constraint_str = yinYangValuedCageConstraint(
		grid,
		constraint,
		'yin_yang_breakeven_killer_cage_p'
	);
	return constraint_str;
}

function doublersKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
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

function negatorsKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
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

type ConstraintF = (grid: Grid, constraint: CageToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.KILLER_CAGE, killerCageConstraint],
	[TOOLS.INVERTED_KILLER_CAGE, invertedKillerCageConstraint],
	[TOOLS.SUM_CAGE, sumCageConstraint],
	[TOOLS.PARITY_BALANCE_CAGE, parityBalanceCageConstraint],
	[TOOLS.SUM_CAGE_LOOK_AND_SAY, sumCageLookAndSayConstraint],
	[TOOLS.DIVISIBLE_KILLER_CAGE, divisibleKillerCageConstraint],
	[TOOLS.SPOTLIGHT_CAGE, spotlightCageConstraint],
	[TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE, yinYangAntithesisKillerCageConstraint],
	[TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE, yinYangBreakevenKillerCageConstraint],

	[TOOLS.DOUBLERS_KILLER_CAGE, doublersKillerCageConstraint],
	[TOOLS.NEGATORS_KILLER_CAGE, negatorsKillerCageConstraint]
]);

export function cageConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	return out_str;
}
