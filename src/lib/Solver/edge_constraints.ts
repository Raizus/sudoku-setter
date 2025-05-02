import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	adjCellPairGen,
	cellsFromCoords,
	cellsToGridVarsName,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	constraintsBuilder,
	PuzzleModel,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function findEdgeConstraintMatch(constraints: Record<string, EdgeToolI>, cell1: Cell, cell2: Cell) {
	const clist = [...Object.values(constraints)];
	const match = clist.find((constraint) => {
		const coord1 = constraint.cells[0];
		const coord2 = constraint.cells[1];
		if (
			cell1.c === coord1.c &&
			cell1.r === coord1.r &&
			cell2.c === coord2.c &&
			cell2.r === coord2.r
		)
			return constraint;
		if (
			cell1.c === coord2.c &&
			cell1.r === coord2.r &&
			cell2.c === coord1.c &&
			cell2.r === coord1.r
		)
			return constraint;
	});
	return match;
}

// function getEdgeConstraintCellPairs(
// 	grid: Grid,
// 	constraints: Record<string, ConstraintType> | undefined
// ) {
// 	const edgec_pairs: Set<Cell>[] = [];
// 	if (constraints) {
// 		for (const constraint of Object.values(constraints)) {
// 			const coords = (constraint as EdgeToolI).cells;
// 			const cell_pair = new Set(
// 				coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
// 			);
// 			edgec_pairs.push(cell_pair);
// 		}
// 	}
// 	return edgec_pairs;
// }

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
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

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
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

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
	let out_str = '';
	const constraints = element.constraints as Record<string, EdgeToolI>;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = xvConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}

	// negative constraints
	if (!element.negative_constraints) return out_str;
	const all_v_given = !!element.negative_constraints[TOOLS.NEGATIVE_V_CONSTRAINT];
	const all_x_given = !!element.negative_constraints[TOOLS.NEGATIVE_X_CONSTRAINT];
	const all_xv_given = !!element.negative_constraints[TOOLS.NEGATIVE_XV_CONSTRAINT];
	if (!all_v_given && !all_x_given && !all_xv_given) return out_str;

	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);

		const var1_name = cellToVarName(cell1);
		const var2_name = cellToVarName(cell2);
		if (all_v_given && (!match || (match.value !== 'V' && match.value !== 'v'))) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5;\n`;
			out_str += constraint_str;
		} else if (all_x_given && (!match || (match.value !== 'X' && match.value !== 'x'))) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 10;\n`;
			out_str += constraint_str;
		} else if (all_xv_given && !match) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5 /\\ (${var1_name} + ${var2_name} != 10);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

function ratioElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = valuedEdgeElement(model, grid, element, 'ratio_p', '2');

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_RATIOS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, EdgeToolI>;

	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '2' : val));
	}
	if (used_vals.length === 0) used_vals.push('2');

	const values = [...new Set(used_vals)];

	console.log('values', values);

	out_str += `\n% ${TOOLS.ALL_RATIOS_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint not ratio_p(${var1}, ${var2}, ${val});\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

function differenceElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = valuedEdgeElement(model, grid, element, 'abs_difference', '1');

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_DIFFERENCES_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, EdgeToolI>;

	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '1' : val));
	}
	if (used_vals.length === 0) used_vals.push('1');

	const values = [...new Set(used_vals)];

	out_str += `\n% ${TOOLS.ALL_DIFFERENCES_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint abs(${var1} - ${var2}) != ${val};\n`;
			out_str += constraint_str;
		}
	}

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
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

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

function xyDiffHelper(grid: Grid, cell1: Cell, cell2: Cell) {
	const var1 = cellToVarName(cell1);
	const var2 = cellToVarName(cell2);

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

	const out_str = `xy_differences_p(${var1}, ${var2}, ${var3});\n`;
	return out_str;
}

function xyDifferencesConstraint(grid: Grid, constraint: EdgeToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [cell1, cell2] = cells;

	const aux_str = xyDiffHelper(grid, cell1, cell2);
	if (aux_str.length === 0) return '';

	const constraint_str = `constraint ${aux_str}`;
	return constraint_str;
}

function xyDifferencesElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, EdgeToolI>;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = xyDifferencesConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_XY_DIFFERENCES_GIVEN];
	if (!all_given) return out_str;

	out_str += `\n% ${TOOLS.ALL_XY_DIFFERENCES_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const aux_str = xyDiffHelper(grid, cell1, cell2);
		if (aux_str.length === 0) continue;

		const constraint_str = `constraint not ${aux_str}`;
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
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = yinYangEdgeConstraint(grid, constraint as EdgeToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangKropkiElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement): string {
	let out_str = yinYangEdgeElement(grid, element, 'yin_yang_kropki_p');

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_YIN_YANG_KROPKI_GIVEN];
	if (!all_given) return out_str;

	const constraints = element.constraints as Record<string, EdgeToolI>;
	out_str += `\n% ${TOOLS.ALL_YIN_YANG_KROPKI_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const yin_yang1 = cellToGridVarName(cell1, VAR_2D_NAMES.YIN_YANG);
		const yin_yang2 = cellToGridVarName(cell2, VAR_2D_NAMES.YIN_YANG);

		const constraint_str = `constraint not yin_yang_kropki_p(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
		out_str += constraint_str;
	}

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
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;
	
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
