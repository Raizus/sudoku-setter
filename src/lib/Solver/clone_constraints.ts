import type { CloneToolI } from '../Puzzle/Constraints/CloneConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToVarsName, constraintsBuilder, PuzzleModel } from './solver_utils';

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
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	return out_str;
}
