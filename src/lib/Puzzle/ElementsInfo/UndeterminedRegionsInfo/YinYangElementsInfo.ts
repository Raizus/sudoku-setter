import { addHeader, adjCellPairGen, cellsToGridVarsStr, cellToGridVarName, cellToVarName, PuzzleModel, VAR_2D_NAMES, type PuzzleAuxI } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

function yinYangShadedCellsAreGermanWhispersConstraint(puzzle: PuzzleAuxI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	const name = VAR_2D_NAMES.YIN_YANG;

	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const yinyang1 = `${name}[${cell1.r},${cell1.c}]`;
		const yinyang2 = `${name}[${cell2.r},${cell2.c}]`;

		const constraint_str = `constraint (${yinyang1} == 1 /\\ ${yinyang2} == 1) -> abs(${var1} - ${var2}) >= 5;\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangNeighbourGreaterThanOneWithinRegionShadedConstraint(
	puzzle: PuzzleAuxI,
	toolId: TOOLID
): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	for (const cell of grid.getAllCells()) {
		const neighbours = grid
			.getNeighboorCells(cell)
			.filter((_cell) => cell.region !== null && _cell.region === cell.region);
		const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.BOARD);
		const shading_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
		const cells_vars = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);
		out_str += `constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${cell_var}, ${shading_var}, ${cells_vars});\n`;
	}
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function yinYangIdenticalDigitsDiagonallyBelongToSameRegion(toolId: TOOLID): string {
	let out_str: string = `\n% ${toolId}\n`;
	out_str += `constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.YIN_YANG});\n`;
	return out_str;
}

export function yinYangElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;\n`;
	out_str += `constraint yin_yang_p(yin_yang);\n`;

	if (!element.negative_constraints) return out_str;

	const neighbour_greater_than_1_in_region =
		!!element.negative_constraints[TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED];
	if (neighbour_greater_than_1_in_region) {
		out_str += yinYangNeighbourGreaterThanOneWithinRegionShadedConstraint(
			puzzle,
			TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED
		);
	}

	const shaded_cells_are_german_whispers =
		!!element.negative_constraints[TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS];
	if (shaded_cells_are_german_whispers) {
		out_str += yinYangShadedCellsAreGermanWhispersConstraint(
			puzzle,
			TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS
		);
	}

	const identical_digits_diagonally_same_region =
		!!element.negative_constraints[
			TOOLS.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION
		];
	if (identical_digits_diagonally_same_region) {
		out_str += yinYangIdenticalDigitsDiagonallyBelongToSameRegion(
			TOOLS.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION
		);
	}

	return out_str;
}

export const yinYangInfo: SquareCellElementInfo = {
	toolId: TOOLS.YIN_YANG,

	negative_constraints: [
		{
			toolId: TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,
			description:
				'In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).'
		},
		{
			toolId: TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,
			description:
				'The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.'
		},
		{
			toolId: TOOLS.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,
			description:
				'Identical digits which see each other by a bishops move (diagonally) must be the same color.'
		}
	],

	meta: {
		description:
			'Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
    },
    
    solver_func: yinYangElement
};
