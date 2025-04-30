import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { CellMultiArrowToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	PuzzleModel,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';

export function singleCellMultiArrowElementFunction(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	func: (grid: Grid, constraint: CellMultiArrowToolI) => string
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = func(grid, constraint as CellMultiArrowToolI);
		out_str += constraint_str;
	}
	return out_str;
}

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

function countCellsNotInTheSameRegionElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		countCellsNotInTheSameRegionConstraint
	);
	return out_str;
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

function yinYangSumOfCellsOfOppositeColorElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		yinYangSumOfCellsOfOppositeColorConstraint
	);
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

function yinYangCountShadedCellsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		yinYangCountShadedCellsConstraint
	);
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

function yinYangCountUniqueFillominoSameShadingElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		yinYangCountUniqueFillominoSameShadingConstraint
	);
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

function nurikabeCountIslandCellsArrowsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		nurikabeCountIslandCellsArrowsConstraint
	);
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

function loopCellsCountArrowsElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		loopCellsCountArrowsConstraint
	);
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

function sameGalaxyUnobstructedCountArrowsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		sameGalaxyUnobstructedCountArrowsConstraint
	);
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

function hotArrowsElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = singleCellMultiArrowElementFunction(model, grid, element, hotArrowsConstraint);
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

function coldArrowsElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = singleCellMultiArrowElementFunction(model, grid, element, coldArrowsConstraint);
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

function connectFourCountCellsOfSameColorElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		connectFourCountCellsOfSameColorConstraint
	);
	return out_str;
}

function nextNumberedRegionDistanceArrowsConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const directions = constraint.directions;
	let out_str: string = '';
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

		out_str += `constraint next_numbered_region_distance_arrow_p(${cell_var}, ${region_var}, ${region_vars_str});\n`;
	}

	return out_str;
}

function nextNumberedRegionDistanceArrowsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = singleCellMultiArrowElementFunction(
		model,
		grid,
		element,
		nextNumberedRegionDistanceArrowsConstraint
	);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.HOT_ARROWS, hotArrowsElement],
	[TOOLS.COLD_ARROWS, coldArrowsElement],
	[TOOLS.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS, countCellsNotInTheSameRegionElement],
	[TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR, yinYangSumOfCellsOfOppositeColorElement],
	[TOOLS.LOOP_CELL_COUNT_ARROWS, loopCellsCountArrowsElement],
	[
		TOOLS.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,
		yinYangCountUniqueFillominoSameShadingElement
	],
	[TOOLS.YIN_YANG_COUNT_SHADED_CELLS, yinYangCountShadedCellsElement],
	[TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS, sameGalaxyUnobstructedCountArrowsElement],
	[TOOLS.NURIKABE_COUNT_ISLAND_CELLS_ARROWS, nurikabeCountIslandCellsArrowsElement],
	[TOOLS.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR, connectFourCountCellsOfSameColorElement],
	[TOOLS.NEXT_NUMBERED_REGION_DISTANCE_ARROWS, nextNumberedRegionDistanceArrowsElement]
]);

export function singleCellMultiArrowConstraints(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	let out_str = '';
	const tool_id = element.tool_id;
	const elementF = tool_map.get(tool_id);
	if (elementF) {
		const element_str = elementF(model, grid, element);
		out_str += element_str;
	}

	return out_str;
}
