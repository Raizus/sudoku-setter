import type { CloneToolI } from '../Puzzle/Constraints/CloneConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToVarsName } from './solver_utils';

function coordsToVarsStr(grid: Grid, coords: GridCoordI[]) {
	const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function cloneRegionConstraint(grid: Grid, constraint: CloneToolI) {
	const vars1 = coordsToVarsStr(grid, constraint.cells);
	const vars1_str = '[' + vars1.join(',') + ']';
    const vars2 = coordsToVarsStr(grid, constraint.cells2);
	const vars2_str = '[' + vars2.join(',') + ']';

	const constraint_str = `constraint clone_region_p(${vars1_str}, ${vars2_str});\n`;
	return constraint_str;
}

type ConstraintF = (grid: Grid, constraint: CloneToolI) => string;

const tool_map = new Map<string, ConstraintF>([[TOOLS.CLONE_REGION, cloneRegionConstraint]]);

export function cloneConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as CloneToolI);
			out_str += constraint_str;
		}
	}
	return out_str;
}
