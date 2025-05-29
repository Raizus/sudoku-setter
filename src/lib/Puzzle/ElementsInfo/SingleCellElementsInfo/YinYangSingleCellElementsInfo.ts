import { cellsToGridVarsStr, cellToGridVarName, cellToVarName, groupConstraintsByValue, simpleElementFunction, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import type { CellToolI, ConstraintsElement } from '../../puzzle_schema';
import { SHAPE_TYPES } from '../../Shape/Shape';
import { TOOLS } from '../../Tools';
import { orthogonalRegionSeenCountElement } from './helpers';
import { DEFAULT_SINGLE_CELL_OPTIONS, DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES, DEFAULT_SQUARE_SHAPE, DEFAULT_VALUED_SINGLE_CELL_OPTIONS } from './SingleCellElementsInfo';

function yinYangShadedCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
	const constraint_str = `constraint ${yin_yang_var} == 1;\n`;
	return constraint_str;
}

function yinYangShadedCellElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, yinYangShadedCellConstraint);
	return out_str;
}

export const yinYangShadedCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SHADED_CELL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'var(--constraint-color-gray)' }
	},

	meta: {
		description: 'Grey shaded cells are shaded yin yang cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangShadedCellElement
};

function yinYangMinesweeperConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbours];
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_minesweeper_p(${yin_yang_vars_str}, ${var1});\n`;
	return constraint_str;
}

function yinYangMinesweeperElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, yinYangMinesweeperConstraint);
	return out_str;
}

export const yinYangMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_MINESWEEPER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: "Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangMinesweeperElement
};

function yinYangSeenUnshadedElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		model,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_unshaded_p'
	);
	return out_str;
}

export const yinYangSeenUnshadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangSeenUnshadedElement
};

function yinYangSeenShadedElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		model,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_shaded_p'
	);
	return out_str;
}

export const yinYangSeenShadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_SHADED_CELLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangSeenShadedElement
};

function yinYangSeenSameShadeElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		model,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_same_shade_p'
	);
	return out_str;
}

export const yinYangSeenSameShadeCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description: 'A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangSeenSameShadeElement
};

function yinYangAdjacentSameShadeCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
	const adjacent_cells = grid.getOrthogonallyAdjacentCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(adjacent_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_adjacent_same_shade_count_p(${var1}, ${yin_yang_var}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangAdjacentSameShadeCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, yinYangAdjacentSameShadeCountConstraint);
	return out_str;
}

export const yinYangAdjacentSameShadeCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		angle: { editable: false, value: 45 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: "Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangAdjacentSameShadeCountElement
};

function yinYangShadedNeighboursCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(neighbour_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint count(${yin_yang_vars_str}, 1) == ${cell_var};\n`;
	return constraint_str;
}

function yinYangShadedNeighboursCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, yinYangShadedNeighboursCountConstraint);
	return out_str;
}

export const yinYangShadedNeighboursCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SHADED_NEIGHBOURS_COUNT,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 8 },
		strokeWidth: { editable: false, value: 0.03 },
		angle: { editable: false, value: 22.5 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangShadedNeighboursCountElement
};

function yinYangLabeledShadeCellElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = `\n% ${element.tool_id}\n`;

	const constraints = element.constraints as Record<string, CellToolI>;
	const groups = groupConstraintsByValue(Object.values(constraints));
	const grid = model.puzzle.grid;

	for (const group of groups.values()) {
		if (group.length <= 1) continue;
		// for each combination of 2
		const coords = group.map((constraint) => constraint.cell);
		const cells = coords
			.map((coord) => grid.getCell(coord.r, coord.c))
			.filter((cell) => cell !== undefined);
		const yin_yang_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint all_equal(${yin_yang_vars});\n`;
	}

	return out_str;
}

export const yinYangLabeledShadeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_LABELED_SHADE_CELL,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Cells in cages with the same label have the yin yang shading.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
    },
    
    solver_func: yinYangLabeledShadeCellElement
};
