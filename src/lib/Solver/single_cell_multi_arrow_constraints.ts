import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellMultiArrowToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsToGridVarsName,
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	constraintsBuilder,
	PuzzleModel,
	VAR_2D_NAMES
} from './solver_utils';

function countCellsNotInTheSameRegionConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const directions = constraint.directions;
	const vars_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS)
		vars_list.push(vars);
	}

	const aux = vars_list.map((vars) => `count_different(${vars}, ${region_var})`).join(' + ');
	const constraint_str = `constraint ${aux} == ${cell_var};\n`;
	return constraint_str;
}

function yinYangSumOfCellsOfOppositeColorConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);

	const directions = constraint.directions;
	let out_str: string = '';
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const cells_vars = cellsToVarsName(cells);
		const cells_vars_str = '[' + cells_vars.join(',') + ']';
		
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint yin_yang_sum_of_opposite_color_f(${yin_yang_var}, ${cells_vars_str}, ${yin_yang_vars_str}) == ${cell_var};\n`;
	}

	return out_str;
}

function yinYangCountUniqueFillominoSameShadingConstraint(
	grid: Grid,
	constraint: CellMultiArrowToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);

	const directions = constraint.directions;
	const string_parts: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		const fillomino_regions_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.FILLOMINO_REGIONS);

		string_parts.push(
			`yin_yang_count_unique_fillominoes_same_shading_f(${yin_yang_var}, ${yin_yang_vars_str}, ${fillomino_regions_vars_str})`
		);
	}

	if (!string_parts.length) return '';
	const out_str = `constraint ${string_parts.join(' + ')} == ${cell_var};\n`;
	return out_str;
}

function loopCellsCountArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	const str_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);

		const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);
		const aux_str = `count_loop_vars_f(${loop_vars_str})`;
		str_list.push(aux_str);
	}
	if (!str_list.length) return '';

	const out_str = `constraint ${str_list.join(' + ')} = ${cell_var};\n`;
	return out_str;
}

function sameGalaxyUnobstructedCountArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.GALAXY_REGIONS);

	const directions = constraint.directions;
	const str_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const region_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.GALAXY_REGIONS);
		const region_vars_str = '[' + region_vars.join(',') + ']';

		const aux_str = `count(${region_vars_str}, ${region_var})`;
		str_list.push(aux_str);
	}
	if (!str_list.length) return '';

	const out_str = `constraint ${str_list.join(' + ')} = ${cell_var};\n`;
	return out_str;
}

function hotArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	let out_str: string = '';
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
        const cells_vars = cellsToVarsName(cells);
		const cells_vars_str = '[' + cells_vars.join(',') + ']';

		out_str += `constraint hot_arrows_p(${cells_vars_str}, ${cell_var});\n`;
    }
    
	return out_str;
}

function coldArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	let out_str: string = '';
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const cells_vars = cellsToVarsName(cells);
		const cells_vars_str = '[' + cells_vars.join(',') + ']';

		out_str += `constraint cold_arrows_p(${cells_vars_str}, ${cell_var});\n`;
	}

	return out_str;
}

type ConstraintF = (grid: Grid, constraint: CellMultiArrowToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.HOT_ARROWS, hotArrowsConstraint],
	[TOOLS.COLD_ARROWS, coldArrowsConstraint],
	[TOOLS.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS, countCellsNotInTheSameRegionConstraint],
	[TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR, yinYangSumOfCellsOfOppositeColorConstraint],
	[TOOLS.LOOP_CELL_COUNT_ARROWS, loopCellsCountArrowsConstraint],
	[
		TOOLS.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,
		yinYangCountUniqueFillominoSameShadingConstraint
	],
	[TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS, sameGalaxyUnobstructedCountArrowsConstraint]
]);

export function singleCellMultiArrowConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	return out_str;
}
