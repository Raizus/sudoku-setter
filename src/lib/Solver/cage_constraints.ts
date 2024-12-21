import type { CageToolI } from '../Puzzle/Constraints/CageConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToVarsName, allDifferentConstraint, addHeader } from './solver_utils';

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

type ConstraintF = (grid: Grid, constraint: CageToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.KILLER_CAGE, killerCageConstraint],
	[TOOLS.SUM_CAGE, sumCageConstraint],
	[TOOLS.DIVISIBLE_KILLER_CAGE, divisibleKillerCageConstraint],
	[TOOLS.SPOTLIGHT_CAGE, spotlightCageConstraint]
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

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
