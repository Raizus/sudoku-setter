import type { ConstraintsElement } from '../Puzzle/Constraints/ElementsDict';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, VAR_2D_NAMES, type PuzzleModel } from './solver_utils';

function everyCellBelongsToAGalaxyConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint every_cell_is_in_a_galaxy_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function galaxy2x2DoesNotBelongToOneGalaxyConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function twoSymmetricGalaxiesConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint two_symmetric_galaxies_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function oneGalaxyIsAGermanWhispersConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint one_galaxy_is_german_whispers(board, galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

export function galaxiesConstraint(model: PuzzleModel, element: ConstraintsElement) {
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
	out_str += `constraint adjacent_galaxies_not_size_leq_3_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint gallaxy_connected_regions_p(${grid_name1});\n`;
	// out_str += `constraint galaxy_180_symmetry_p(${grid_name1}, ${grid_name2});\n`;

	if (!element.negative_constraints) return out_str;
	const every_cell_in_a_galaxy =
		!!element.negative_constraints[TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY];
	const two_symmetric_galaxies = !!element.negative_constraints[TOOLS.TWO_SYMMETRIC_GALAXIES];
	const galaxy_2x2 = !!element.negative_constraints[TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY];
	const one_galaxy_is_german_whispers =
		!!element.negative_constraints[TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS];

	if (every_cell_in_a_galaxy) {
		out_str += everyCellBelongsToAGalaxyConstraint(TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY);
	}
	if (galaxy_2x2) {
		out_str += galaxy2x2DoesNotBelongToOneGalaxyConstraint(TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY);
	}
	if (two_symmetric_galaxies) {
		out_str += twoSymmetricGalaxiesConstraint(TOOLS.TWO_SYMMETRIC_GALAXIES);
	}
	if (one_galaxy_is_german_whispers) {
		out_str += oneGalaxyIsAGermanWhispersConstraint(TOOLS.TWO_SYMMETRIC_GALAXIES);
	}
    
	return out_str;
}
