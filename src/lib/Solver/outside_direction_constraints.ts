import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { OutsideDirectionToolI } from '../Puzzle/Constraints/OutsideDirectionConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToValueVarsName, cellsToVarsName, cellsToYinYangVarsName } from './solver_utils';

function getOutsideDirectionConstraintVars(grid: Grid, constraint: OutsideDirectionToolI) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleOutsideDirectionConstraint(
	grid: Grid,
	constraint: OutsideDirectionToolI,
	predicate: string
) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function sandwichSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint sandwich_sum_p(${vars_str}, ${val}, 1, 9);\n`;
		return constraint_str;
	}
	return '';
}

function xIndexConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const first_var = vars[0];
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint x_index_p(${vars_str}, ${first_var}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function xSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const first_var = vars[0];
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint x_sum_p(${vars_str}, ${first_var}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function shortsightedXSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const first_var = vars[0];
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint shortsighted_x_sum_p(${vars_str}, ${first_var}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function brokenXSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const first_var = vars[0];
	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint broken_x_sum_p(${vars_str}, ${first_var}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function shiftedXSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const first_var = vars[0];

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint shifted_x_sum_p(${vars_str}, ${first_var}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function skyscrapersConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'skyscrapers_p');
	return constraint_str;
}

function xSumSkyscrapersConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'x_sum_skyscrapers_p');
	return constraint_str;
}

function battlefieldConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'battlefield_p');
	return constraint_str;
}

function risingStreakConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'rising_streak_p');
	return constraint_str;
}

function outsideConsecutiveSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'outside_consecutive_sum_p');
	return constraint_str;
}

function littleKillerSumConstraint(grid: Grid, c_id: string, constraint: OutsideDirectionToolI) {
	const constraint_str = simpleOutsideDirectionConstraint(grid, constraint, 'little_killer_sum_p');
	return constraint_str;
}

function xOmitlittleKillerSumConstraint(
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		grid,
		constraint,
		'x_omit_little_killer_sum_p'
	);
	return constraint_str;
}

function outsideEdgeYinYangAdjacentSumOfShadedConstraint(
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint outside_edge_yin_yang_sum_of_shaded_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsLittleKillerSumConstraint(
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const values_vars = cellsToValueVarsName(cells);
	const values_vars_str = `[${values_vars.join(', ')}]`;

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint little_killer_sum_p(${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

type ConstraintF = (grid: Grid, c_id: string, constraint: OutsideDirectionToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.SANDWICH_SUM, sandwichSumConstraint],
	[TOOLS.X_SUM, xSumConstraint],
	[TOOLS.SHORTSIGHTED_X_SUM, shortsightedXSumConstraint],
	[TOOLS.BROKEN_X_SUM, brokenXSumConstraint],
	[TOOLS.SHIFTED_X_SUM, shiftedXSumConstraint],
	[TOOLS.SKYSCRAPERS, skyscrapersConstraint],
	[TOOLS.X_SUM_SKYSCRAPERS, xSumSkyscrapersConstraint],
	[TOOLS.X_INDEX, xIndexConstraint],
	[TOOLS.BATTLEFIELD, battlefieldConstraint],
	[TOOLS.RISING_STREAK, risingStreakConstraint],
	[TOOLS.OUTSIDE_CONSECUTIVE_SUM, outsideConsecutiveSumConstraint],
	[TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED, outsideEdgeYinYangAdjacentSumOfShadedConstraint],
	// outside corner
	[TOOLS.LITTLE_KILLER_SUM, littleKillerSumConstraint],
	[TOOLS.X_OMIT_LITTLE_KILLER_SUM, xOmitlittleKillerSumConstraint],
	[TOOLS.NEGATORS_LITTLE_KILLER_SUM, negatorsLittleKillerSumConstraint]
]);

export function outsideDirectionConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(grid, c_id, constraint as OutsideDirectionToolI);
			out_str += constraint_str;
		}
	}
	return out_str;
}
