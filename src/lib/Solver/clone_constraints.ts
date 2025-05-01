import type { CloneToolI } from '../Puzzle/Constraints/CloneConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToVarsName, constraintsBuilder, PuzzleModel, type ElementF } from './solver_utils';

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

function cloneRegionElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = cloneRegionConstraint(grid, constraint as CloneToolI);
		out_str += constraint_str;
	}
	return out_str;
}

const tool_map = new Map<string, ElementF>([[TOOLS.CLONE_REGION, cloneRegionElement]]);

export function cloneConstraints(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, grid, element, tool_map);
	return out_str;
}
