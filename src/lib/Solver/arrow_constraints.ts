import type { ArrowToolI } from '../Puzzle/Constraints/ArrowConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToVarsName } from './solver_utils';

type ConstraintF = (grid: Grid, constraint: ArrowToolI) => string;

export function arrowConstraint(grid: Grid, constraint: ArrowToolI) {
    let out_str = ''
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
    if (vars.length === 1) {
        const circ_var = vars[0]
		const lines = constraint.lines;
		for (const line of lines) {
			const line_cells = line
				.map((coord) => grid.getCell(coord.r, coord.c))
                .filter((cell) => !!cell);
            const line_vars = cellsToVarsName(line_cells.slice(1));
            const line_vars_str = `[${line_vars.join(',')}]`;
            const constraint_str = `constraint sum(${line_vars_str}) == ${circ_var};\n`;;
            out_str += constraint_str;
        }
        
	}
	return out_str;
}

const tool_map = new Map<string, ConstraintF>([[TOOLS.ARROW, arrowConstraint]]);

export function arrowConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as ArrowToolI);
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
