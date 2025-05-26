import { PuzzleModel, VAR_2D_NAMES } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES } from '../../Tools';

export function galaxiesElement(model: PuzzleModel, element: ConstraintsElement) {
    const puzzle = model.puzzle;
    const grid = puzzle.grid;
    const tool = element.tool_id;

    const all_cells = grid.getAllCells();
    if (all_cells.some((cell) => cell.outside)) {
        console.warn(`${tool} not implemented when there are cells outside the grid.`);
        return '';
    }

    const grid_name1 = VAR_2D_NAMES.GALAXY_REGIONS;
    const grid_name2 = VAR_2D_NAMES.GALAXY_SIZES;
    const max_galaxies = grid.nCols * grid.nRows;

    let out_str: string = `\n% ${tool}\n`;
    out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${max_galaxies}: ${grid_name1};\n`;
    out_str += `constraint galaxy_restrict_numbering_p(${grid_name1});\n`;
    out_str += `array[0..${max_galaxies}] of var 0..${max_galaxies}: ${grid_name2};\n`;
    out_str += `constraint galaxy_sizes_p(${grid_name1}, ${grid_name2});\n`;
    // out_str += `constraint adjacent_galaxies_not_size_leq_3_p(${grid_name1}, ${grid_name2});\n`;
    out_str += `constraint gallaxy_connected_regions_p(${grid_name1});\n`;
    // out_str += `constraint galaxy_180_symmetry_p(${grid_name1}, ${grid_name2});\n`;

    if (!element.negative_constraints) return out_str;
    const every_cell_in_a_galaxy =
        !!element.negative_constraints[TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY];
    const two_symmetric_galaxies = !!element.negative_constraints[TOOLS.TWO_SYMMETRIC_GALAXIES];
    const galaxy_2x2 = !!element.negative_constraints[TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY];
    const one_galaxy_is_german_whispers =
        !!element.negative_constraints[TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS];
    const no_repeats_in_galaxy =
        !!element.negative_constraints[TOOLS.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY];

    if (every_cell_in_a_galaxy) {
        out_str += `\n% ${TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY}\n`;
        out_str += `constraint every_cell_is_in_a_galaxy_p(galaxy_regions);\n`;
    }
    if (galaxy_2x2) {
        out_str += `\n% ${TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY}\n`;
        out_str += `constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);\n`;
    }
    if (two_symmetric_galaxies) {
        out_str += `\n% ${TOOLS.TWO_SYMMETRIC_GALAXIES}\n`;
        out_str += `constraint two_symmetric_galaxies_p(galaxy_regions);\n`;
    }
    if (one_galaxy_is_german_whispers) {
        out_str += `\n% ${TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS}\n`;
        out_str += `constraint one_galaxy_is_german_whispers(board, galaxy_regions);\n`;
    }
    if (no_repeats_in_galaxy) {
        out_str += `\n% ${TOOLS.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY}\n`;
        out_str += `constraint no_repeats_in_galaxy_p(board, galaxy_regions);\n`;
    }

    return out_str;
}

export const galaxiesInfo: SquareCellElementInfo = {
	toolId: TOOLS.GALAXIES,

	negative_constraints: [
		{
			toolId: TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY,
			description: 'Every cell in the grid belongs to a galaxy.'
		},
		{
			toolId: TOOLS.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY,
			description: 'Digits do not repeat in each galaxy.'
		},
		{
			toolId: TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,
			description: 'No 2x2 area may belong entirely to one galaxy.'
		},
		{
			toolId: TOOLS.TWO_SYMMETRIC_GALAXIES,
			description: "Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"
		},
		{
			toolId: TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS,
			description: 'One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.'
		}
	],

	meta: {
		description: 'Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
    },
    
    solver_func: galaxiesElement
};
