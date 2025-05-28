import { addHeader, adjCellPairGen, cellsToGridVarsStr, cellsToVarsName, cellToGridVarName, cellToVarName, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES } from '../../Tools';

export const diagonalConstraintsDefaultCategories = [
	TOOL_CATEGORIES.LOCAL_ELEMENT,
	TOOL_CATEGORIES.DIAGONAL_CONSTRAINTS
];

export const sudokuRulesDoNotApplyInfo: SquareCellElementInfo = {
	toolId: TOOLS.SUDOKU_RULES_DO_NOT_APPLY,

	meta: {
		description: 'Sudoku rules do not apply.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

function leaveEmptyCellsEmptyElement(model: PuzzleModel, element: ConstraintsElement): string {
	const tool = element.tool_id;
	const grid = model.puzzle.grid;
	const allowed_vals = model.puzzle.valid_digits;
	const min_val = Math.min(...allowed_vals);

	let out_str: string = '';
	for (const cell of grid.getAllCells()) {
		if (cell.value !== null) continue;
		const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.BOARD);
		out_str += `constraint ${cell_var} == ${min_val};\n`;
	}
	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const leaveEmptyCellsEmptyInfo: SquareCellElementInfo = {
	toolId: TOOLS.LEAVE_EMPTY_CELLS_EMPTY,

	meta: {
		description:
			'This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: leaveEmptyCellsEmptyElement
};

export const hexedSudokuInfo: SquareCellElementInfo = {
	toolId: TOOLS.HEXED_SUDOKU,

	meta: {
		description:
			'Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

function antiknightElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = `\n% ${tool}\n`;
	for (const cell of grid.getAllCells()) {
		const knight_move_cells = grid.getCellsByKnightMove(cell);
		const filtered = knight_move_cells.filter((cell2) => cell2.r >= cell.r || cell2.c >= cell.c);
		const var1 = cellToVarName(cell);
		const vars = cellsToVarsName(filtered);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint different_from_group_p(${var1}, ${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}


export const antiknightInfo: SquareCellElementInfo = {
	toolId: TOOLS.ANTIKNIGHT,

	meta: {
		description: "Cells that are a chess knight's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: antiknightElement
};

function antiGiraffeElement(model: PuzzleModel, element: ConstraintsElement): string {
	const tool = element.tool_id;

	let out_str: string = '';
	out_str += `constraint anti_giraffe_p(board);\n`;
	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const antiGiraffeInfo: SquareCellElementInfo = {
	toolId: TOOLS.ANTI_GIRAFFE,

	meta: {
		description:
			'Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: antiGiraffeElement
};

function antiLongKnightElement(model: PuzzleModel, element: ConstraintsElement): string {
	const tool = element.tool_id;

	let out_str: string = '';
	out_str += `constraint anti_long_knight_p(board);\n`;
	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const antiLongKnightInfo: SquareCellElementInfo = {
	toolId: TOOLS.ANTI_LONG_KNIGHT,

	meta: {
		description:
			'Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: antiLongKnightElement
};

function antikingElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = `\n% ${tool}\n`;
	for (const cell of grid.getAllCells()) {
		const kings_move_cells = grid.getNeighboorCells(cell);
		const filtered = kings_move_cells.filter((cell2) => cell2.r + cell2.c >= cell.r + cell.c);
		const var1 = cellToVarName(cell);
		const vars = cellsToVarsName(filtered);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint different_from_group_p(${var1}, ${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

export const antikingInfo: SquareCellElementInfo = {
	toolId: TOOLS.ANTIKING,

	meta: {
		description: "Cells that are a chess king's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: antikingElement
};

function disjointGroupsElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = `\n% ${tool}\n`;
	const num_regions = [...grid.getUsedRegions()].length;
	for (let group_idx = 0; group_idx < num_regions; group_idx++) {
		const disjoint_group = grid.getDisjointGroup(group_idx);
		const vars = cellsToVarsName(disjoint_group);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint alldifferent(${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

export const disjointGroupsInfo: SquareCellElementInfo = {
	toolId: TOOLS.DISJOINT_GROUPS,

	meta: {
		description:
			'Cells that appear in the same position relative to their default regions must not contain the same number.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: disjointGroupsElement
};

function tangoElement(model: PuzzleModel, element: ConstraintsElement): string {
	const tool = element.tool_id;

	let out_str: string = '';
	out_str += `constraint tango_p(board);\n`;
	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const tangoInfo: SquareCellElementInfo = {
	toolId: TOOLS.TANGO,

	meta: {
		description:
			'No adjacent run of three cells may be all odd or all even, horizontally or vertically.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: tangoElement
};

function nonconsecutiveElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = `\n% ${tool}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const constraint_str = `constraint not consecutive_p(${var1}, ${var2});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

export const nonconsecutiveInfo: SquareCellElementInfo = {
	toolId: TOOLS.NONCONSECUTIVE,

	meta: {
		description: 'Orthogonally adjacent cells must not contain consecutive numbers.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: nonconsecutiveElement
};

function nonratioElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = `\n% ${tool}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const constraint_str = `constraint not ratio_p(${var1}, ${var2}, 2);\n`;
		out_str += constraint_str;
	}
	return out_str;
}

export const nonratioInfo: SquareCellElementInfo = {
	toolId: TOOLS.NONRATIO,

	meta: {
		description: 'Orthogonally adjacent cells cannot be in 1:2 ratio.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: nonratioElement
};

function boxRowsAndColumnsFormModularityAndEntropySetElement(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str: string = '';
	const used_regions = puzzle.grid.getUsedRegions();
	for (const region of used_regions) {
		const region_cells = grid.getRegion(region);
		const used_rows = [...new Set(region_cells.map((cell) => cell.r))];
		const used_cols = [...new Set(region_cells.map((cell) => cell.c))];

		for (const col of used_cols) {
			const cells = region_cells.filter((cell) => cell.c === col);
			const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
			out_str += `constraint entropy_and_modularity_set_p(${cells_vars});\n`;
		}

		for (const row of used_rows) {
			const cells = region_cells.filter((cell) => cell.r === row);
			const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
			out_str += `constraint entropy_and_modularity_set_p(${cells_vars});\n`;
		}
	}

	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const boxRowsAndColumnsFormModularityAndEntropySetInfo: SquareCellElementInfo = {
	toolId: TOOLS.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,

	meta: {
		description:
			"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: boxRowsAndColumnsFormModularityAndEntropySetElement
};

function antiEntropyElement(model: PuzzleModel, element: ConstraintsElement): string {
	const tool = element.tool_id;

	let out_str: string = '';
	out_str += `constraint anti_entropy_p(board);\n`;
	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const antiEntropyInfo: SquareCellElementInfo = {
	toolId: TOOLS.ANTI_ENTROPY,

	meta: {
		description:
			'Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: antiEntropyElement
};

function globalIndexingColumnElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	let out_str = `\n% ${tool}\n`;
	for (const cell of grid.getAllCells()) {
		const row_cells = grid.getRow(cell.r);
		const vars = cellsToVarsName(row_cells);
		const vars_str = `[${vars.join(',')}]`;
		const col = cell.c + 1;
		const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

export const globalIndexingColumnInfo: SquareCellElementInfo = {
	toolId: TOOLS.GLOBAL_INDEXING_COLUMN,

	meta: {
		description:
			'Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: globalIndexingColumnElement
};

function allOddDigitsOrthogonallyConnectedElement(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const tool = element.tool_id;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;\n`;
	out_str += `constraint odd_even_grid_p(board, even_odd_grid);\n`;
	out_str += `constraint connected_region(even_odd_grid, 1);\n`;

	out_str = addHeader(out_str, `${tool}`);
	return out_str;
}

export const allOddDigitsAreOrthogonallyConnectedInfo: SquareCellElementInfo = {
	toolId: TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,

	meta: {
		description: 'All odd numbers must form an othogonally connected region at the end.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	},

	solver_func: allOddDigitsOrthogonallyConnectedElement
};

