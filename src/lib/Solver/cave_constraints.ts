import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToGridVarsStr, VAR_2D_NAMES, type PuzzleModel } from './solver_utils';

function caveCellsAreOddConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint cave_cells_are_odd_p(board, cave_shading);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function caveWallsAreEvenConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint cave_walls_are_even_p(board, cave_shading);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function cave2x2NotFullyShadedOrUnshadedConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint shading_2x2_allowed_p(cave_shading, 1..3);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function oneDigitDoesNotAppearInTheCaveConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function caveLitsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.LITS_SHADING;
	const grid_name2 = VAR_2D_NAMES.LITS_REGIONS;
	const grid_name3 = VAR_2D_NAMES.CAVE_REGIONS;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..4: ${grid_name2};\n`;
	out_str += `constraint lits_shading_p(${grid_name1});\n`;
	out_str += `constraint lits_shading_ids_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint lits_region_and_ids_p(${grid_name3}, ${grid_name2});\n`;
	out_str += `constraint lits_4_per_region_p(${grid_name3}, ${grid_name1});\n`;
	out_str += `constraint lits_tetromino_shapes_p(${grid_name2});\n`;

	const regions = grid.getUsedRegions();
	if (regions.size) out_str += `\n% Exactly 4 shaded cells per region (known regions)\n`;
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.LITS_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 4);\n`;
		out_str += constraint;
	}

	return out_str;
}

function renbanCavesConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.CAVE_SHADING;
	const grid_name2 = VAR_2D_NAMES.BOARD_REGIONS;
	const grid_name3 = 'renban_cave_regions';

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name3};\n`;
	out_str += `constraint renban_cave_regions_p(${grid_name1}, ${grid_name2}, ${grid_name3});\n`;
	out_str += `constraint renban_caves_p(${VAR_2D_NAMES.BOARD}, ${grid_name3});\n`;

	return out_str;
}

export function caveConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.CAVE_SHADING;
	const grid_name2 = VAR_2D_NAMES.CAVE_REGIONS;

	let out_str: string = ``;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name2};\n`;
	out_str += `constraint cave_p(${grid_name1}, ${grid_name2});\n`;

	if (!element.negative_constraints) return out_str;
	const cave_2x2 = !!element.negative_constraints[TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED];
	const cave_cells_odd = !!element.negative_constraints[TOOLS.CAVE_CELLS_ARE_ODD];
	const cave_walls_even = !!element.negative_constraints[TOOLS.CAVE_WALLS_ARE_EVEN];
	const cave_lits = !!element.negative_constraints[TOOLS.CAVE_LITS];
	const renban_caves = !!element.negative_constraints[TOOLS.RENBAN_CAVES];
	const digit_not_in_cave =
		!!element.negative_constraints[TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE];

	if (cave_2x2) {
		out_str += cave2x2NotFullyShadedOrUnshadedConstraint(
			TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED
		);
	}
	if (cave_cells_odd) {
		out_str += caveCellsAreOddConstraint(TOOLS.CAVE_CELLS_ARE_ODD);
	}
	if (cave_walls_even) {
		out_str += caveWallsAreEvenConstraint(TOOLS.CAVE_WALLS_ARE_EVEN);
	}
	if (cave_lits) {
		out_str += caveLitsConstraint(model, TOOLS.CAVE_LITS);
	}
	if (renban_caves) {
		out_str += renbanCavesConstraint(model, TOOLS.RENBAN_CAVES);
	}
	if (digit_not_in_cave) {
		out_str += oneDigitDoesNotAppearInTheCaveConstraint(
			TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE
		);
	}

	return out_str;
}
