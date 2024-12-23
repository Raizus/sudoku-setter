import type { CageToolI } from '../Puzzle/Constraints/CageConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToVarsName, allDifferentConstraint } from './solver_utils';

function getCageVars(grid: Grid, constraint: CageToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
    const vars = cellsToVarsName(cells);
    return vars;
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

function sumCageConstraint(grid: Grid, constraint: CageToolI) {
	const constraint_str = valuedCageConstraint(grid, constraint, 'sum_cage_p');
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

function yinYangAntithesisKillerCageConstraint(grid: Grid, constraint: CageToolI) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;
	const yin_yang_vars = cells.map(cell => `yin_yang[${cell.r},${cell.c}]`)
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		let out_str: string = '';
		out_str += `constraint yin_yang_antithesis_killer_cage_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return out_str;
	}
	return '';
}

type ConstraintF = (grid: Grid, constraint: CageToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.KILLER_CAGE, killerCageConstraint],
	[TOOLS.SUM_CAGE, sumCageConstraint],
	[TOOLS.DIVISIBLE_KILLER_CAGE, divisibleKillerCageConstraint],
	[TOOLS.SPOTLIGHT_CAGE, spotlightCageConstraint],
	[TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE, yinYangAntithesisKillerCageConstraint]
]);

export function cageConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as CageToolI);
			out_str += constraint_str;
		}
	}

	return out_str;
}
