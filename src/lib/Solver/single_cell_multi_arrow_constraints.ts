import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellMultiArrowToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
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
		const vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
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
		const cells_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

		out_str += `constraint yin_yang_sum_of_opposite_color_f(${yin_yang_var}, ${cells_vars_str}, ${yin_yang_vars_str}) == ${cell_var};\n`;
	}

	return out_str;
}

function yinYangCountShadedCellsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	let out_str: string = '';
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);

		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint count(${yin_yang_vars_str}, 1) == ${cell_var};\n`;
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

function nurikabeCountIslandCellsArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	const str_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);

		const shading_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.NURIKABE_SHADING);

		const aux_str = `count(${shading_vars_str}, 1)`;
		str_list.push(aux_str);
	}

	const out_str = `constraint ${str_list.join(' + ')} = ${cell_var};\n`;
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
		const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.GALAXY_REGIONS);

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
		const cells_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

		out_str += `constraint cold_arrows_p(${cells_vars_str}, ${cell_var});\n`;
	}

	return out_str;
}

function connectFourCountCellsOfSameColorConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const c_four_var = cellToGridVarName(cell, VAR_2D_NAMES.CONNECT_FOUR);

	const directions = constraint.directions;
	const all_cells: Cell[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		all_cells.push(...cells);
	}
	if (all_cells.length === 0) return '';

	const vars_str = cellsToGridVarsStr(all_cells, VAR_2D_NAMES.CONNECT_FOUR);
	const out_str = `constraint count(${vars_str}, ${c_four_var}) == ${cell_var};\n`;
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
	[TOOLS.YIN_YANG_COUNT_SHADED_CELLS, yinYangCountShadedCellsConstraint],
	[TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS, sameGalaxyUnobstructedCountArrowsConstraint],
	[TOOLS.NURIKABE_COUNT_ISLAND_CELLS_ARROWS, nurikabeCountIslandCellsArrowsConstraint],
	[TOOLS.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR, connectFourCountCellsOfSameColorConstraint]
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
