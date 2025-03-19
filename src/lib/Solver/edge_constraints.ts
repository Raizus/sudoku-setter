import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsFromCoords,
	cellsToGridVarsName,
	cellsToVarsName,
	cellToVarName,
	PuzzleModel,
	VAR_2D_NAMES
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

function xvConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	if (constraint.value === 'V' || constraint.value === 'v') {
		const constraint_str = `constraint ${var1} + ${var2} = 5;\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} + ${var2} = 10;\n`;
	return constraint_str;
}

function ratioConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(model, grid, c_id, constraint, 'ratio_p', '2');
	return constraint_str;
}

function differenceConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(model, grid, c_id, constraint, 'abs_difference', '1');
	return constraint_str;
}

function edgeInequalityConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
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

function edgeSumConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(model, grid, c_id, constraint, 'edge_sum_p');
	return constraint_str;
}

function edgeModuloConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(model, grid, c_id, constraint, 'edge_modulo_p');
	return constraint_str;
}

function edgeFactorConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) {
	const constraint_str = simpleEdgeConstraint(grid, constraint, 'edge_factor_p');
	return constraint_str;
}

function xyDifferencesConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
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

function yinYangKropkiConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [var1, var2] = cellsToVarsName(cells);
	const yin_yang_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.YIN_YANG);
	const [yin_yang1, yin_yang2] = yin_yang_vars;

	const constraint_str = `constraint yin_yang_kropki_p(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
	return constraint_str;
}

function yinYangWhiteKropkiConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [var1, var2] = cellsToVarsName(cells);
	const yin_yang_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.YIN_YANG);
	const [yin_yang1, yin_yang2] = yin_yang_vars;

	const constraint_str = `constraint yin_yang_white_kropki_p(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
	return constraint_str;
}

function regionBorderConstraint(grid: Grid, constraint: EdgeToolI, regions_var_name: VAR_2D_NAMES) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const region_vars = cellsToGridVarsName(cells, regions_var_name);
	const [region1, region2] = region_vars;

	const constraint_str = `constraint ${region1} != ${region2};\n`;
	return constraint_str;
}

function unknownRegionBorderConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const constraint_str = regionBorderConstraint(grid, constraint, VAR_2D_NAMES.UNKNOWN_REGIONS);
	return constraint_str;
}

function chaosConstructionSuguruBorderConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const constraint_str = regionBorderConstraint(grid, constraint, VAR_2D_NAMES.SUGURU_REGIONS);
	return constraint_str;
}

function edgeCaveOneOfEachConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const constraint_str = regionBorderConstraint(grid, constraint, VAR_2D_NAMES.CAVE_SHADING);
	return constraint_str;
}

type ConstraintF = (model: PuzzleModel, grid: Grid, c_id: string, constraint: EdgeToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.XV, xvConstraint],
	[TOOLS.DIFFERENCE, differenceConstraint],
	[TOOLS.RATIO, ratioConstraint],
	[TOOLS.EDGE_INEQUALITY, edgeInequalityConstraint],
	[TOOLS.ONE_WAY_DOOR, edgeInequalityConstraint],
	[TOOLS.EDGE_SUM, edgeSumConstraint],
	[TOOLS.EDGE_MODULO, edgeModuloConstraint],
	[TOOLS.EDGE_FACTOR, edgeFactorConstraint],
	[TOOLS.XY_DIFFERENCES, xyDifferencesConstraint],
	[TOOLS.YIN_YANG_KROPKI, yinYangKropkiConstraint],
	[TOOLS.YIN_YANG_WHITE_KROPKI, yinYangWhiteKropkiConstraint],
	[TOOLS.UNKNOWN_REGION_BORDER, unknownRegionBorderConstraint],
	[TOOLS.CHAOS_CONSTRUCTION_SUGURU_BORDER, chaosConstructionSuguruBorderConstraint],
	[TOOLS.EDGE_CAVE_ONE_OF_EACH, edgeCaveOneOfEachConstraint]
]);

export function edgeConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	// const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as EdgeToolI);
			out_str += constraint_str;
		}
	}

	return out_str;
}
