import { addHeader, cellsToGridVarsStr, PuzzleModel, VAR_2D_NAMES } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

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

function caveWallSuguruConstraint(model: PuzzleModel, tool: TOOLID) {
    const puzzle = model.puzzle;
    const grid = puzzle.grid;

    const all_cells = grid.getAllCells();
    if (all_cells.some((cell) => cell.outside)) {
        console.warn(`${tool} not implemented when there are cells outside the grid.`);
        return '';
    }

    const grid_name1 = VAR_2D_NAMES.BOARD;
    const grid_name2 = VAR_2D_NAMES.CAVE_REGIONS;

    let out_str: string = `\n% ${tool}\n`;
    out_str += `constraint cave_wall_suguru_p(${grid_name1}, ${grid_name2});\n`;

    return out_str;
}

function caveCellsFillominoConstraint(model: PuzzleModel, tool: TOOLID) {
    const puzzle = model.puzzle;
    const grid = puzzle.grid;

    const all_cells = grid.getAllCells();
    if (all_cells.some((cell) => cell.outside)) {
        console.warn(`${tool} not implemented when there are cells outside the grid.`);
        return '';
    }

    const grid_name1 = VAR_2D_NAMES.BOARD;
    const grid_name2 = VAR_2D_NAMES.CAVE_SHADING;
    const grid_name3 = VAR_2D_NAMES.CAVE_CELLS_FILLOMINO_REGIONS;

    let out_str: string = `\n% ${tool}\n`;
    out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name3};\n`;
    out_str += `constraint cave_cells_fillomino_p(${grid_name1}, ${grid_name2}, ${grid_name3});\n`;

    return out_str;
}

export function caveElement(model: PuzzleModel, element: ConstraintsElement) {
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
    if (cave_2x2) {
        out_str += cave2x2NotFullyShadedOrUnshadedConstraint(
            TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED
        );
    }

    const cave_cells_odd = !!element.negative_constraints[TOOLS.CAVE_CELLS_ARE_ODD];
    if (cave_cells_odd) {
        out_str += caveCellsAreOddConstraint(TOOLS.CAVE_CELLS_ARE_ODD);
    }

    const cave_walls_even = !!element.negative_constraints[TOOLS.CAVE_WALLS_ARE_EVEN];
    if (cave_walls_even) {
        out_str += caveWallsAreEvenConstraint(TOOLS.CAVE_WALLS_ARE_EVEN);
    }

    const cave_lits = !!element.negative_constraints[TOOLS.CAVE_LITS];
    if (cave_lits) {
        out_str += caveLitsConstraint(model, TOOLS.CAVE_LITS);
    }

    const renban_caves = !!element.negative_constraints[TOOLS.RENBAN_CAVES];
    if (renban_caves) {
        out_str += renbanCavesConstraint(model, TOOLS.RENBAN_CAVES);
    }

    const digit_not_in_cave =
        !!element.negative_constraints[TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE];
    if (digit_not_in_cave) {
        out_str += oneDigitDoesNotAppearInTheCaveConstraint(
            TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE
        );
    }

    const cave_wall_suguru = !!element.negative_constraints[TOOLS.CAVE_WALL_SUGURU];
    if (cave_wall_suguru) {
        out_str += caveWallSuguruConstraint(model, TOOLS.CAVE_WALL_SUGURU);
    }

    const cave_cells_fillomino = !!element.negative_constraints[TOOLS.CAVE_CELLS_FILLOMINO];
    if (cave_cells_fillomino) {
        out_str += caveCellsFillominoConstraint(model, TOOLS.CAVE_CELLS_FILLOMINO);
    }

    return out_str;
}

export const caveInfo: SquareCellElementInfo = {
	toolId: TOOLS.CAVE,

	negative_constraints: [
		{
			toolId: TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,
			description: 'No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.'
		},
		{
			toolId: TOOLS.CAVE_WALLS_ARE_EVEN,
			description: 'Cave walls must contain even digits.'
		},
		{
			toolId: TOOLS.CAVE_CELLS_ARE_ODD,
			description: 'Cave cells must contain odd digits.'
		},
		{
			toolId: TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,
			description: 'There is exactly one digit that does not appear anywhere in the cave.'
		},
		{
			toolId: TOOLS.RENBAN_CAVES,
			description: 'Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.'
		},
		{
			toolId: TOOLS.CAVE_LITS,
			description: "The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."
		},
		{
			toolId: TOOLS.CAVE_WALL_SUGURU,
			description: 'Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group.'
		},
		{
			toolId: TOOLS.CAVE_CELLS_FILLOMINO,
			description: 'Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge.'
		}
	],

	meta: {
		description: 'Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
    },
    
    solver_func: caveElement
};
