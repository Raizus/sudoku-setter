import { addHeader, PuzzleModel, VAR_2D_NAMES } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';


function connectFourDrawConstraint(tool: TOOLID) {
    let out_str: string = '';
    out_str += `constraint connect_four_draw_p(${VAR_2D_NAMES.CONNECT_FOUR});\n`;
    out_str = addHeader(out_str, `${tool}`);
    return out_str;
}

function connectFourAdjacentRedsDifferentParityConstraint(tool: TOOLID) {
    let out_str: string = '';
    out_str += `constraint connect_four_adjacent_reds_different_parity_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.CONNECT_FOUR});\n`;
    out_str = addHeader(out_str, `${tool}`);
    return out_str;
}

function connectFourAdjacentYellowsMinimumDifferenceAtLeast3Constraint(tool: TOOLID) {
    let out_str: string = '';
    out_str += `constraint connect_four_adjacent_yellows_difference_at_least_x_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.CONNECT_FOUR}, 3);\n`;
    out_str = addHeader(out_str, `${tool}`);

    return out_str;
}

export function connectFourElement(model: PuzzleModel, element: ConstraintsElement) {
    const puzzle = model.puzzle;
    const grid = puzzle.grid;
    const tool = element.tool_id;

    const all_cells = grid.getAllCells();
    if (all_cells.some((cell) => cell.outside)) {
        console.warn(`${tool} not implemented when there are cells outside the grid.`);
        return '';
    }

    const grid_name = 'connect_four';
    let out_str: string = `\n% ${tool}\n`;
    out_str += '% 1 - Red, 2 - Yellow\n';
    out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: ${grid_name};\n`;

    if (!element.negative_constraints) return out_str;
    // const all_filled = !!element.negative_constraints[TOOLS.CONNECT_FOUR_ALL_FILLED];
    const connect_four_draw = !!element.negative_constraints[TOOLS.CONNECT_FOUR_DRAW];
    const connect_four_adj_yellows =
        !!element.negative_constraints[
            TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3
        ];
    const connect_four_adj_reds_parity =
        !!element.negative_constraints[TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];

    if (connect_four_draw) {
        out_str += connectFourDrawConstraint(TOOLS.CONNECT_FOUR_DRAW);
    }
    if (connect_four_adj_yellows) {
        out_str += connectFourAdjacentYellowsMinimumDifferenceAtLeast3Constraint(
            TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3
        );
    }
    if (connect_four_adj_reds_parity) {
        out_str += connectFourAdjacentRedsDifferentParityConstraint(
            TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY
        );
    }

    return out_str;
}


export const connectFourInfo: SquareCellElementInfo = {
	toolId: TOOLS.CONNECT_FOUR,

	negative_constraints: [
		{
			toolId: TOOLS.CONNECT_FOUR_DRAW,
			description: 'The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.'
		},
		{
			toolId: TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,
			description: 'Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit).'
		},
		{
			toolId: TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,
			description: 'Two orthogonally adjacent yellow discs must have a difference of at least 3.'
		}
	],

	meta: {
		description: 'The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
    },
    
    solver_func: connectFourElement
};
