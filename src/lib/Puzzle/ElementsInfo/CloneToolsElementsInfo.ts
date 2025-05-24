import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { SHAPE_TYPES } from '../Shape/Shape';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import type { Grid } from '../Grid/Grid';
import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
import { cellsToVarsName, PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { CloneToolI, ConstraintsElement } from '../puzzle_schema';

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

function cloneRegionElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = cloneRegionConstraint(grid, constraint as CloneToolI);
		out_str += constraint_str;
	}
	return out_str;
}

export const cloneRegionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CLONE
	},

	toolId: TOOLS.CLONE_REGION,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: true, value: 0.03 },
		strokeDasharray: { editable: false, value: 0 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		fill: { editable: false, value: 'none' },
		inset: { editable: false, value: 0.07 }
	},

	meta: {
		description: 'Clone regions contain the same digits in the same position.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.CLONE_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	},

	solver_func: cloneRegionElement
};
