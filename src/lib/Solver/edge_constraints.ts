import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellsFromCoords,
	cellsToGridVarsName,
	cellsToVarsName,
	cellToVarName,
	constraintsBuilder,
	PuzzleModel,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function getEdgeVars(grid: Grid, constraint: EdgeToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleEdgeConstraint(grid: Grid, constraint: EdgeToolI, predicate: string) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;

	const constraint_str = `constraint ${predicate}(${var1}, ${var2});\n`;
	return constraint_str;
}

function simpleEdgeElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleEdgeConstraint(grid, constraint as EdgeToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};
	const default_name = `edge_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedEdgeConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;

	const value = constraint.value?.length ? constraint.value : default_value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${var1}, ${var2}, ${var_name});\n`;
	return out_str;
}

function valuedEdgeElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = valuedEdgeConstraint(
			model,
			grid,
			c_id,
			constraint as EdgeToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function xvConstraint(grid: Grid, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	if (constraint.value === 'V' || constraint.value === 'v') {
		const constraint_str = `constraint ${var1} + ${var2} = 5;\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} + ${var2} = 10;\n`;
	return constraint_str;
}

function xvElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = xvConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function ratioElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedEdgeElement(model, grid, element, 'ratio_p', '2');
	return out_str;
}

function differenceElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedEdgeElement(model, grid, element, 'abs_difference', '1');
	return out_str;
}

function edgeInequalityConstraint(grid: Grid, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	const value = constraint.value;

	if (value === '<') {
		const constraint_str = `constraint ${var1} < ${var2};\n`;
		return constraint_str;
	} else if (value === '>') {
		const constraint_str = `constraint ${var1} > ${var2};\n`;
		return constraint_str;
	}
	return '';
}

function edgeInequalityElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = edgeInequalityConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function edgeSumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedEdgeElement(model, grid, element, 'edge_sum_p');
	return out_str;
}

function edgeModuloElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedEdgeElement(model, grid, element, 'edge_modulo_p');
	return out_str;
}

function edgeFactorElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleEdgeElement(grid, element, 'edge_factor_p');
	return out_str;
}

function xyDifferencesConstraint(grid: Grid, constraint: EdgeToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [var1, var2] = cellsToVarsName(cells);
	const [cell1, cell2] = cells;

	let var3: string = '';
	if (cell1.r == cell2.r) {
		const row_cells = grid.getRow(cell1.r);
		const first_cell = row_cells[0];
		var3 = cellToVarName(first_cell);
	} else if (cell1.c == cell2.c) {
		const col_cells = grid.getCol(cell1.c);
		const first_cell = col_cells[0];
		var3 = cellToVarName(first_cell);
	}
	if (!var3) return '';

	const constraint_str = `constraint abs(${var1} - ${var2}) == ${var3};\n`;
	return constraint_str;
}

function xyDifferencesElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = xyDifferencesConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangEdgeConstraint(grid: Grid, constraint: EdgeToolI, predicate: string) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [var1, var2] = cellsToVarsName(cells);
	const yin_yang_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.YIN_YANG);
	const [yin_yang1, yin_yang2] = yin_yang_vars;

	const constraint_str = `constraint ${predicate}(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
	return constraint_str;
}

function yinYangEdgeElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = yinYangEdgeConstraint(grid, constraint as EdgeToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangKropkiElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = yinYangEdgeElement(grid, element, 'yin_yang_kropki_p');
	return out_str;
}

function yinYangWhiteKropkiElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = yinYangEdgeElement(grid, element, 'yin_yang_white_kropki_p');
	return out_str;
}

function regionBorderConstraint(grid: Grid, constraint: EdgeToolI, regions_var_name: VAR_2D_NAMES) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const region_vars = cellsToGridVarsName(cells, regions_var_name);
	const [region1, region2] = region_vars;

	const constraint_str = `constraint ${region1} != ${region2};\n`;
	return constraint_str;
}

function regionBorderElement(
	grid: Grid,
	element: ConstraintsElement,
	regions_var_name: VAR_2D_NAMES
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = regionBorderConstraint(grid, constraint as EdgeToolI, regions_var_name);
		out_str += constraint_str;
	}
	return out_str;
}

function unknownRegionBorderElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = regionBorderElement(grid, element, VAR_2D_NAMES.UNKNOWN_REGIONS);
	return out_str;
}

function fillominoRegionBorderElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = regionBorderElement(grid, element, VAR_2D_NAMES.FILLOMINO_REGIONS);
	return out_str;
}

function chaosConstructionSuguruBorderElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = regionBorderElement(grid, element, VAR_2D_NAMES.SUGURU_REGIONS);
	return out_str;
}

function edgeCaveOneOfEachElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = regionBorderElement(grid, element, VAR_2D_NAMES.CAVE_SHADING);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.XV, xvElement],
	[TOOLS.DIFFERENCE, differenceElement],
	[TOOLS.RATIO, ratioElement],
	[TOOLS.EDGE_INEQUALITY, edgeInequalityElement],
	[TOOLS.ONE_WAY_DOOR, edgeInequalityElement],
	[TOOLS.EDGE_SUM, edgeSumElement],
	[TOOLS.EDGE_MODULO, edgeModuloElement],
	[TOOLS.EDGE_FACTOR, edgeFactorElement],
	[TOOLS.XY_DIFFERENCES, xyDifferencesElement],
	[TOOLS.YIN_YANG_KROPKI, yinYangKropkiElement],
	[TOOLS.YIN_YANG_WHITE_KROPKI, yinYangWhiteKropkiElement],
	[TOOLS.FILLOMINO_REGION_BORDER, fillominoRegionBorderElement],
	[TOOLS.UNKNOWN_REGION_BORDER, unknownRegionBorderElement],
	[TOOLS.CHAOS_CONSTRUCTION_SUGURU_BORDER, chaosConstructionSuguruBorderElement],
	[TOOLS.EDGE_CAVE_ONE_OF_EACH, edgeCaveOneOfEachElement]
]);

export function edgeElements(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, grid, element, tool_map);
	return out_str;
}
