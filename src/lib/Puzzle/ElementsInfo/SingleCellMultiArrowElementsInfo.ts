import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type SingleCellMultiArrowToolOptions
} from '$input/ToolInputHandlers/types';
import {
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	findSingleCellConstraintMatch,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import { DIRECTION } from '$src/lib/utils/directions';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Cell } from '../Grid/Cell';
import type { Grid } from '../Grid/Grid';
import type { CellMultiArrowToolI, ConstraintsElement } from '../puzzle_schema';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

const defaultCategories = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_MULTIARROW_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const defaultShape: EditableShapeI = {
	type: SHAPE_TYPES.CELL_ARROW,
	strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
	stroke: { editable: true, value: 'black' }
};

const DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS: SingleCellMultiArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW,
	cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
};

export function singleCellMultiArrowElementFunction(
	model: PuzzleModel,
	element: ConstraintsElement,
	func: (grid: Grid, constraint: CellMultiArrowToolI) => string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = func(grid, constraint as CellMultiArrowToolI);
		out_str += constraint_str;
	}
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

export const sameGalaxyUnobstructedCountArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			sameGalaxyUnobstructedCountArrowsConstraint
		);
	}
};

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

export const yinYangCountUniqueFillominoSameShadingInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			yinYangCountUniqueFillominoSameShadingConstraint
		);
	}
};

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

export const loopCellCountArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.LOOP_CELL_COUNT_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(model, element, loopCellsCountArrowsConstraint);
	}
};

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

export const yinYangSumOfCellsOfOppositeColorInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,

	shape: defaultShape,

	meta: {
		description:
			'An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			yinYangSumOfCellsOfOppositeColorConstraint
		);
	}
};

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

function yinYangCountShadedCellsElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = singleCellMultiArrowElementFunction(
		model,
		element,
		yinYangCountShadedCellsConstraint
	);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellMultiArrowToolI>;
	const grid = model.puzzle.grid;

	out_str += `\n% ${TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		// check if cell pair is not in xv pairs
		const match = findSingleCellConstraintMatch(constraints, cell);
		const used_dirs = match ? match.directions : [];

		const cell_var = cellToVarName(cell);
		const directions: DIRECTION[] = [DIRECTION.E, DIRECTION.N, DIRECTION.S, DIRECTION.W];
		for (const direction of directions) {
			if (used_dirs.includes(direction)) continue;
			const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
			const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
			out_str += `constraint count(${yin_yang_vars_str}, 1) != ${cell_var};\n`;
		}
	}

	return out_str;
}

export const yinYangCountShadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_COUNT_SHADED_CELLS,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,
			description:
				'Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given.'
		}
	],

	shape: defaultShape,

	meta: {
		description:
			'Values in cells with arrows give the number of shaded cells in the indicated direction.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: yinYangCountShadedCellsElement
};

function yinYangCombinedShadedCellsCountExceptItselfConstraint(
	grid: Grid,
	constraint: CellMultiArrowToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	const str_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);

		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		const aux_str = `count(${yin_yang_vars_str}, 1)`;
		str_list.push(aux_str);
	}
	if (!str_list.length) return '';

	const out_str = `constraint ${str_list.join(' + ')} = ${cell_var};\n`;
	return out_str;
}

export const yinYangCombinedShadedCellsCountExceptItselfInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_COMBINED_SHADED_CELLS_COUNT_EXCEPT_ITSELF,

	shape: defaultShape,

	meta: {
		description:
			'The digit in a cell with one or more arrows is equal to the total number of shaded cells that appear in the indicated directions combined (not including the arrow cell itself).',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			yinYangCombinedShadedCellsCountExceptItselfConstraint
		);
	}
};

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

export const countCellsNotInTheSameRegionArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			countCellsNotInTheSameRegionConstraint
		);
	}
};

function countSeenCellsInTheSameRegionConstraint(grid: Grid, constraint: CellMultiArrowToolI) {
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

	const aux = vars_list.map((vars) => `count_uninterrupted(${vars}, ${region_var})`).join(' + ');
	const constraint_str = `constraint ${aux} + 1 == ${cell_var};\n`;
	return constraint_str;
}

export const chaosCountSeenCellsInTheSameRegionArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			countSeenCellsInTheSameRegionConstraint
		);
	}
};

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

export const coldArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.COLD_ARROWS,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-blue)' }
	},

	meta: {
		description:
			"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(model, element, coldArrowsConstraint);
	}
};

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

export const hotArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.HOT_ARROWS,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' }
	},

	meta: {
		description:
			"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(model, element, hotArrowsConstraint);
	}
};

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

export const nurikabeCountIslandCellsArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.',
		tags: [],
		categories: defaultCategories
	},
	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			nurikabeCountIslandCellsArrowsConstraint
		);
	}
};

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

export const connectFourCountCellsOfSameColorInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,

	shape: defaultShape,

	meta: {
		description:
			"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			connectFourCountCellsOfSameColorConstraint
		);
	}
};

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

export const nextNumberedRegionDistanceArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			nextNumberedRegionDistanceArrowsConstraint
		);
	}
};

function shadedBoundariesCombinedCountArrowsConstraint(
	grid: Grid,
	constraint: CellMultiArrowToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const directions = constraint.directions;
	const str_list: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		if (cells.length == 0) continue;
		if (direction === DIRECTION.N || direction === DIRECTION.S) {
			const offset = direction === DIRECTION.N ? 0 : -1;
			const boundary_vars =
				'[' +
				cells
					.map(
						(cell2) => `${VAR_2D_NAMES.SHADED_BOUNDARIES_VERTICAL}[${cell2.r + offset}, ${cell2.c}]`
					)
					.join(',') +
				']';
			const aux_str = `count(${boundary_vars}, true)`;
			str_list.push(aux_str);
		}

		if (direction === DIRECTION.E || direction === DIRECTION.W) {
			const offset = direction == DIRECTION.W ? 0 : -1;
			const boundary_vars =
				'[' +
				cells
					.map(
						(cell2) =>
							`${VAR_2D_NAMES.SHADED_BOUNDARIES_HORIZONTAL}[${cell2.r}, ${cell2.c + offset}]`
					)
					.join(',') +
				']';
			const aux_str = `count(${boundary_vars}, true)`;
			str_list.push(aux_str);
		}
	}
	if (!str_list.length) return '';

	const out_str = `constraint ${str_list.join(' + ')} = ${cell_var};\n`;
	return out_str;
}

export const shadedBoundariesCombinedCountArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'A digit in a cell with one or more arrows indicates the total number of shaded boundaries in the directions of all arrows combined.',
		tags: [],
		categories: defaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return singleCellMultiArrowElementFunction(
			model,
			element,
			shadedBoundariesCombinedCountArrowsConstraint
		);
	}
};
