import type { ArrowToolI } from '../Puzzle/Constraints/ArrowConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToGridVarsStr, cellsToVarsName, PuzzleModel, simpleElementFunction, VAR_2D_NAMES, type ElementF } from './solver_utils';

function getArrowPillVars(grid: Grid, constraint: ArrowToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function lineToVarsStr(grid: Grid, line: GridCoordI[]) {
	const line_cells = line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	const line_vars = cellsToVarsName(line_cells.slice(1));
	const line_vars_str = `[${line_vars.join(',')}]`;
	return line_vars_str;
}

function simpleArrowConstraint(grid: Grid, constraint: ArrowToolI, predicate: string) {
	let out_str = '';
	const bulb_vars = getArrowPillVars(grid, constraint);
	const bulb_str = '[' + bulb_vars.join(',') + ']';

	for (const line of constraint.lines) {
		const line_vars_str = lineToVarsStr(grid, line);
		out_str += `constraint ${predicate}(${bulb_str}, ${line_vars_str});\n`;
	}

	return out_str;
}

function simpleArrowElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleArrowConstraint(grid, constraint as ArrowToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function arrowElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleArrowElement(grid, element, 'arrow_p');
	return out_str;
}

function bulbousArrowElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleArrowElement(grid, element, 'bulbous_arrow_p');
	return out_str;
}

function averageArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);

	if (vars.length === 1) {
		const circ_var = vars[0];
		const lines = constraint.lines;
		for (const line of lines) {
			const line_vars_str = lineToVarsStr(grid, line);
			const constraint_str = `constraint average_arrow_p(${line_vars_str}, ${circ_var});\n`;
			out_str += constraint_str;
		}
	}
	return out_str;
}

function averageArrowElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, averageArrowConstraint);
	return out_str;
}

function chaosConstructionArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';

	const circle_cells = constraint.cells
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const circle_region_vars = cellsToGridVarsStr(circle_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const lines_cells = constraint.lines.map((line) =>
		line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	for (const line of lines_cells) {
		if (line.length <= 1) continue;
		const arrow_vars = cellsToGridVarsStr(line.slice(1), VAR_2D_NAMES.UNKNOWN_REGIONS);
		out_str += `constraint chaos_construction_arrow_p(${circle_region_vars}, ${arrow_vars});\n`;
	}

	out_str += simpleArrowConstraint(grid, constraint, 'arrow_p');

	return out_str;
}

function chaosConstructionArrowElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, chaosConstructionArrowConstraint);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.ARROW, arrowElement],
	[TOOLS.AVERAGE_ARROW, averageArrowElement],
	[TOOLS.BULBOUS_ARROW, bulbousArrowElement],
	[TOOLS.CHAOS_CONSTRUCTION_ARROW, chaosConstructionArrowElement]
]);

export function arrowConstraints(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = '';
	const tool_id = element.tool_id;
	const elementF = tool_map.get(tool_id);
	if (elementF) {
		const element_str = elementF(model, grid, element);
		out_str += element_str;
	}

	return out_str;
}
