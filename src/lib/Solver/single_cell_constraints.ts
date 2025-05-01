import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import { DIRECTION } from '../utils/directions';
import {
	cellsToGridVarsName,
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	constraintsBuilder,
	findSingleCellConstraintMatch,
	getDirectionCells,
	getDirectionsVars,
	groupConstraintsByValue,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function simpleSingleCellConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const constraint_str = `constraint ${predicate}(${var1});\n`;
	return constraint_str;
}

function simpleSingleCellElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleSingleCellConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

const DEFAULT_PARSE_OPTS: ParseOptions = {
	allow_var: true,
	allow_interval: true,
	allow_int_list: false
};

function getParsingResult(
	model: PuzzleModel,
	value: string,
	c_id: string,
	parse_opts: ParseOptions = DEFAULT_PARSE_OPTS
) {
	const default_name = `cell_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedSingleCellConstraint(
	grid: Grid,
	constraint: CellToolI,
	predicate: string,
	default_value: string = ''
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);

	let value = constraint.value;
	if (!value) value = default_value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint ${predicate}(${var1}, ${val});\n`;
	return constraint_str;
}

function valuedSingleCellElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = valuedSingleCellConstraint(
			grid,
			constraint as CellToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function orthogonalRegionSeenCountConstraint(
	grid: Grid,
	constraint: CellToolI,
	region_var_name: VAR_2D_NAMES,
	predicate: string
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const dirCells = getDirectionCells(grid, cell);
	const region_vars = dirCells.map((cells) => cellsToGridVarsStr(cells, region_var_name));

	const cell_region_var = cellToGridVarName(cell, region_var_name);

	const constraint_str = `constraint ${predicate}(${region_vars.join(', ')}, ${cell_region_var}, ${cell_var});\n`;
	return constraint_str;
}

function orthogonalRegionSeenCountElement(
	grid: Grid,
	element: ConstraintsElement,
	region_var_name: VAR_2D_NAMES,
	predicate: string
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = orthogonalRegionSeenCountConstraint(
			grid,
			constraint as CellToolI,
			region_var_name,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function oddElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleSingleCellElement(model, grid, element, 'odd_p');
	return out_str;
}

function evenElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleSingleCellElement(model, grid, element, 'even_p');
	return out_str;
}

function lowDigitElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedSingleCellElement(model, grid, element, 'low_digit_p', '5');
	return out_str;
}

function highDigitElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = valuedSingleCellElement(model, grid, element, 'high_digit_p', '5');
	return out_str;
}

function minesweeperConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	// A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers.
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint ${predicate}(${vars_str}) == ${var1};\n`;
	return constraint_str;
}

function minesweeperElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = minesweeperConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function oddMinesweeperElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = minesweeperElement(grid, element, 'odd_count');
	return out_str;
}

function evenMinesweeperElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	// A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).
	const out_str = minesweeperElement(grid, element, 'even_count');
	return out_str;
}

function countSameParityNeighbourConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	neighbours.push(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint count_same_parity_p(${var1}, ${vars_str});\n`;
	return constraint_str;
}

function countSameParityNeighbourElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, countSameParityNeighbourConstraint);
	return out_str;
}

function orthogonalSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function orthogonalSumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, orthogonalSumConstraint);
	return out_str;
}

function diagonallyAdjacentSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getDiagonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function diagonallyAdjacentSumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, diagonallyAdjacentSumConstraint);
	return out_str;
}

function indexingColumnConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getRow(cell.r);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const col = cell.c + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
	return constraint_str;
}

function indexingColumnElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, grid, element, indexingColumnConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_INDEXING_COLUMN_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;

	out_str += `\n% ${TOOLS.ALL_INDEXING_COLUMN_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const row_cells = grid.getRow(cell.r);
		const row_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.BOARD);
		const col = cell.c + 1;
		const constraint_str = `constraint not indexing_column_p(${row_vars}, ${col});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

function indexingRowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getCol(cell.c);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const row = cell.r + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${row});\n`;
	return constraint_str;
}

function indexingRowElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, grid, element, indexingRowConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_INDEXING_ROW_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;

	out_str += `\n% ${TOOLS.ALL_INDEXING_ROW_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const col_cells = grid.getCol(cell.c);
		const col_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.BOARD);
		const row = cell.r + 1;
		const constraint_str = `constraint not indexing_column_p(${col_vars}, ${row});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

function friendlyCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const row = cell.r + 1;
	const col = cell.c + 1;
	if (cell.region !== null) {
		const region = cell.region + 1;
		const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col} \\/ ${var1} == ${region};\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col};\n`;
	return constraint_str;
}

function friendlyCellElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, friendlyCellConstraint);
	return out_str;
}

function adjCellsOppositeDirOppositeParityConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';
	const cell1 = grid.getCell(coords.r - 1, coords.c);
	const cell2 = grid.getCell(coords.r + 1, coords.c);
	const cell3 = grid.getCell(coords.r, coords.c - 1);
	const cell4 = grid.getCell(coords.r, coords.c + 1);
	if (!cell1 || !cell2 || !cell3 || !cell4) return '';

	const var1 = cellToVarName(cell1);
	const var2 = cellToVarName(cell2);
	const var3 = cellToVarName(cell3);
	const var4 = cellToVarName(cell4);
	const constraint_str = `constraint groups_opposite_parity_p([${var1},${var2}], [${var3},${var4}]);\n`;
	return constraint_str;
}

function adjCellsOppositeDirOppositeParityElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		adjCellsOppositeDirOppositeParityConstraint
	);
	return out_str;
}

function watchtowerFarsightHelper(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint ${predicate}(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars});\n`;
	return constraint_str;
}

function watchtowerFarsightElementHelper(
	grid: Grid,
	element: ConstraintsElement,
	predicate: string
) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = watchtowerFarsightHelper(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function watchtowerElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(grid, element, 'is_watchtower_p');
	return out_str;
}

function notWatchtowerElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(grid, element, 'is_not_watchtower_p');
	return out_str;
}

function farsightElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(grid, element, 'farsight_p');
	return out_str;
}

function radarConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
	return constraint_str;
}

function radarElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, grid, element, radarConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_RADARS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;

	out_str += `\n% ${TOOLS.ALL_RADARS_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const var0 = cellToVarName(cell);
		const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell);
		const constraint_str = `constraint not radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
		out_str += constraint_str;
	}

	return out_str;
}

function sandwichRowColCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.BOARD);
	const col_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.BOARD);
	const [r, c] = [cell.r + 1, cell.c + 1];
	const constraint_str = `constraint sandwich_row_col_count_p(${row_vars}, ${col_vars}, ${r}, ${c}, ${cell_var});\n`;
	return constraint_str;
}

function sandwichRowColCountElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, sandwichRowColCountConstraint);
	return out_str;
}

function minMaxConstraint(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_max_coords = constl.map((constraint) => constraint.cell);
	const max_cells = new Set(
		all_max_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	for (const constraint of constl) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);

		const adj_cells = grid
			.getOrthogonallyAdjacentCells(cell)
			.filter((cell2) => !max_cells.has(cell2));
		const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${cell_var});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function maximumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = minMaxConstraint(grid, element, 'maximum_p');
	return out_str;
}

function minimumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = minMaxConstraint(grid, element, 'minimum_p');
	return out_str;
}

function countingCirclesElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	out_str += `array[int] of var int: counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);\n`;

	return out_str;
}

function reverseCountingCirclesElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const circle_cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	const not_circle_cells = grid.getAllCells().filter((cell) => !circle_cells.has(cell));

	const circle_vars = cellsToVarsName([...circle_cells]);
	const circle_vars_str = `${circle_vars.join(',\n\t')}`;

	const not_circle_vars = cellsToVarsName([...not_circle_cells]);
	const not_circle_vars_str = `${not_circle_vars.join(',\n\t')}`;

	out_str += `array[int] of var int: reverse_counting_circles = [\n\t${circle_vars_str}\n];\n`;
	out_str += `array[int] of var int: not_reverse_counting_circles = [\n\t${not_circle_vars_str}\n];\n`;
	out_str += `constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);\n`;

	return out_str;
}

function coloredCountingCirclesElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	const circle_colors_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
	const circle_colors_vars_str = `${circle_colors_vars.join(',\n\t')}`;

	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..3: ${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS};\n`;
	out_str += `array[int] of var int: colored_counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `array[int] of var int: counting_circles_colors = [\n\t${circle_colors_vars_str}\n];\n`;
	out_str += `constraint colored_counting_circles_adjacent_p(${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS});\n`;

	out_str += `\n% cells without circles\n`;
	for (const cell of grid.getAllCells()) {
		if (cells.has(cell)) continue;
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
		out_str += `constraint ${color_var} == 0;\n`;
	}

	for (const constraint of constl) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);

		const value = constraint.value;
		if (value) {
			out_str += `constraint ${color_var} == ${value};\n`;
		} else {
			out_str += `constraint ${color_var} != 0;\n`;
		}

		out_str += `constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${cell_var}, ${color_var}) == ${cell_var};\n`;
	}
	out_str += '\n';
	return out_str;
}

function uniqueCellsElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	out_str += `array[int] of var int: unique_cells = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(unique_cells);\n`;
	return out_str;
}

function seenOddEvenCountConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const dirCells = getDirectionCells(grid, cell);
	const cells_vars = dirCells.map((cells) => cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD));

	const constraint_str = `constraint ${predicate}(${cells_vars.join(', ')}, ${cell_var});\n`;
	return constraint_str;
}

function seenOddEvenCountElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints;
	let out_str = '';
	for (const constraint of Object.values(constraints)) {
		const constraint_str = seenOddEvenCountConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function seenEvenCountElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = seenOddEvenCountElement(grid, element, 'seen_even_count_p');
	return out_str;
}

function seenOddCountElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = seenOddEvenCountElement(grid, element, 'seen_odd_count_p');
	return out_str;
}

function cellKnightWhispersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const knights_move_cells = grid.getCellsByKnightMove(cell);
	const cells_vars = cellsToGridVarsStr(knights_move_cells, VAR_2D_NAMES.BOARD);

	const value = constraint.value ?? '5';
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	let out_str = '';
	const var_name = result[1];
	out_str += result[0];

	out_str += `constraint cell_knights_whisper_p(${cell_var}, ${cells_vars}, ${var_name});\n`;
	return out_str;
}

function cellKnightWhispersElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, cellKnightWhispersConstraint);
	return out_str;
}

function yinYangMinesweeperConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbours];
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_minesweeper_p(${yin_yang_vars_str}, ${var1});\n`;
	return constraint_str;
}

function yinYangMinesweeperElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, yinYangMinesweeperConstraint);
	return out_str;
}

function yinYangSeenUnshadedElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		grid,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_unshaded_p'
	);
	return out_str;
}

function yinYangSeenShadedElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		grid,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_shaded_p'
	);
	return out_str;
}

function yinYangSeenSameShadeElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = orthogonalRegionSeenCountElement(
		grid,
		element,
		VAR_2D_NAMES.YIN_YANG,
		'yin_yang_seen_same_shade_p'
	);
	return out_str;
}

function yinYangAdjacentSameShadeCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
	const adjacent_cells = grid.getOrthogonallyAdjacentCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(adjacent_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_adjacent_same_shade_count_p(${var1}, ${yin_yang_var}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangAdjacentSameShadeCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		yinYangAdjacentSameShadeCountConstraint
	);
	return out_str;
}

function yinYangShadedNeighboursCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(neighbour_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint count(${yin_yang_vars_str}, 1) == ${cell_var};\n`;
	return constraint_str;
}

function yinYangShadedNeighboursCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		yinYangShadedNeighboursCountConstraint
	);
	return out_str;
}

function twoConstiguousRegionsRowColumnOppositeSetCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = `two_contiguous_regions[${cell.r},${cell.c}]`;

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.TWO_CONTIGUOUS_REGIONS);
	const col_region_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.TWO_CONTIGUOUS_REGIONS);

	const constraint_str = `constraint two_contiguous_regions_row_col_opposite_set_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var}, ${region_var});\n`;
	return constraint_str;
}

function twoConstiguousRegionsRowColumnOppositeSetCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		twoConstiguousRegionsRowColumnOppositeSetCountConstraint
	);
	return out_str;
}

function seenRegionBordersCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const col_region_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const constraint_str = `constraint unknown_regions_seen_region_border_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var});\n`;
	return constraint_str;
}

function seenRegionBordersCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, seenRegionBordersCountConstraint);
	return out_str;
}

function nurimisakiUnshadedEndpointsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const nurimisaki_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIMISAKI);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_nurimisaki_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.NURIMISAKI);

	let out_str = `constraint nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${nurimisaki_var});\n`;

	out_str += orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.NURIMISAKI,
		'nurimisaki_count_uninterrupted_unshaded_p'
	);

	return out_str;
}

function nurimisakiUnshadedEndpointsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	let out_str = simpleElementFunction(model, grid, element, nurimisakiUnshadedEndpointsConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;

	out_str += `\n% ${TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const nurimisaki_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIMISAKI);

		const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
		const adj_nurimisaki_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.NURIMISAKI);

		const constraint_str = `constraint not nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${nurimisaki_var});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

function sashiganeBendRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE_BENDS);

	let out_str = `constraint sashigane_bend_region_count_p(${cell_var}, ${sashigane_var}, sashigane);\n`;
	out_str += `constraint ${sashigane_bend_var} = true;\n`;
	return out_str;
}

function sashiganeBendRegionCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, sashiganeBendRegionCountConstraint);
	return out_str;
}

function sashiganeRegionSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	const constraint_str = `constraint conditional_sum_f(array1d(board), array1d(sashigane), ${sashigane_var}) == ${val};\n`;
	return constraint_str;
}

function sashiganeRegionSumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, sashiganeRegionSumConstraint);
	return out_str;
}

function cellOnLoopConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 1;\n`;
	return constraint_str;
}

function cellOnLoopElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, cellOnLoopConstraint);
	return out_str;
}

function cellNotOnLoopConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 0;\n`;
	return constraint_str;
}

function cellNotOnLoopElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, cellNotOnLoopConstraint);
	return out_str;
}

function countLoopNeighbourCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbour_cells];

	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint sum(${loop_vars_str}) == ${cell_var};\n`;
	return constraint_str;
}

function countLoopNeighbourCellsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, countLoopNeighbourCellsConstraint);
	return out_str;
}

function caveCluesConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const cave_var = cellToGridVarName(cell, VAR_2D_NAMES.CAVE_SHADING);
	const dirCells = getDirectionCells(grid, cell);
	const cave_vars: string[] = [];
	for (const cells of dirCells) {
		const _cave_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.CAVE_SHADING);
		cave_vars.push(_cave_vars);
	}

	const constraint_str = `constraint cave_clue_p(${cell_var}, ${cave_var}, ${cave_vars[0]}, ${cave_vars[1]}, ${cave_vars[2]}, ${cave_vars[3]});\n`;
	return constraint_str;
}

function caveCluesElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, caveCluesConstraint);
	return out_str;
}

function chaosConstructionChessSumsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);

	// king sum
	out_str += `\n% chess sum ${c_id}\n`;
	const king_cells = grid.getNeighboorCells(cell);
	const king_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.BOARD);
	const king_region_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: king_sum_${c_id};\n`;
	out_str += `constraint king_sum_${c_id} = conditional_sum_f(${king_vars}, ${king_region_vars}, ${region_var});\n`;
	out_str += `var bool: king_${c_id};\n`;
	out_str += `constraint king_${c_id} = (king_sum_${c_id} == ${cell_var});\n`;

	// knight sum
	const knight_cells = grid.getCellsByKnightMove(cell);
	const knight_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.BOARD);
	const knight_region_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: knight_sum_${c_id};\n`;
	out_str += `constraint knight_sum_${c_id} = conditional_sum_f(${knight_vars}, ${knight_region_vars}, ${region_var});\n`;
	out_str += `var bool: knight_${c_id};\n`;
	out_str += `constraint knight_${c_id} = (knight_sum_${c_id} == ${cell_var});\n`;

	// bishop sum
	const directions: DIRECTION[] = [DIRECTION.NE, DIRECTION.NW, DIRECTION.SE, DIRECTION.SW];
	const bishop_cells: Cell[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		cells.forEach((_cell) => bishop_cells.push(_cell));
	}
	const bishop_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.BOARD);
	const bishop_region_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: bishop_sum_${c_id};\n`;
	out_str += `constraint bishop_sum_${c_id} = conditional_sum_f(${bishop_vars}, ${bishop_region_vars}, ${region_var});\n`;
	out_str += `var bool: bishop_${c_id};\n`;
	out_str += `constraint bishop_${c_id} = (bishop_sum_${c_id} == ${cell_var});\n`;

	// chess sums
	out_str += `constraint sum([king_${c_id}, knight_${c_id}, bishop_${c_id}]) == ${val};\n`;

	return out_str;
}

function chaosConstructionChessSumsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, chaosConstructionChessSumsConstraint);
	return out_str;
}

function chaosConstructionArrowKnotsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_region_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `\n% arrow knot ${c_id}\n`;
	out_str += `constraint count_eq(${adj_region_vars}, ${region_var}) >= ${val};\n`;

	const directions: DIRECTION[] = [DIRECTION.N, DIRECTION.S, DIRECTION.E, DIRECTION.W];
	const arrow_vars: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		if (!cells.length) continue;

		const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
		const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
		const in_arrow_var = `in_arrow_${c_id}_${direction}`;
		const first_arrow_var = `in_arrow_${c_id}_${direction}[1]`;
		arrow_vars.push(first_arrow_var);
		out_str += `array[index_set(${cells_vars})] of var bool: ${in_arrow_var};\n`;
		out_str += `constraint chaos_construction_arrow_knots_p(${cells_vars}, ${region_vars}, ${in_arrow_var}, ${cell_var}, ${region_var});\n`;
	}
	out_str += `constraint sum([${arrow_vars.join(',')}]) == ${val};\n`;

	return out_str;
}

function chaosConstructionArrowKnotsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		chaosConstructionArrowKnotsConstraint
	);
	return out_str;
}

function chaosConstructionSeenSameRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.UNKNOWN_REGIONS,
		'chaos_costruction_seen_same_region_count_p'
	);
	return constraint_str;
}

function chaosConstructionSeenSameRegionCountElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		grid,
		element,
		chaosConstructionSeenSameRegionCountConstraint
	);
	return out_str;
}

function directedPathStartConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_source == ${node_id};\n`;
	return constraint_str;
}

function directedPathStartElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, directedPathStartConstraint);
	return out_str;
}

function directedPathEndConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_target == ${node_id};\n`;
	return constraint_str;
}

function directedPathEndElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, directedPathEndConstraint);
	return out_str;
}

function connectFourRedConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.CONNECT_FOUR);

	const constraint_str = `constraint connect_four_red_p(${cell_var});\n`;
	return constraint_str;
}

function connectFourRedElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, connectFourRedConstraint);
	return out_str;
}

function connectFourYellowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.CONNECT_FOUR);

	const constraint_str = `constraint connect_four_yellow_p(${cell_var});\n`;
	return constraint_str;
}

function connectFourYellowElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, grid, element, connectFourYellowConstraint);
	return out_str;
}

function nurikabeIslandProductOfSumAndSizeElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	let out_str: string = '';
	let count = 0;
	const constraints = element.constraints as Record<string, CellToolI>;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const value = constraint.value;

		if (!value) continue;
		const result = getParsingResult(model, value, c_id);
		if (!result) continue;

		const product_var = result[1];
		out_str += result[0];
		const region_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIKABE_REGIONS);

		out_str += `constraint nurikabe_island_product_of_sum_and_size_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.NURIKABE_REGIONS}, ${region_var}, ${product_var});\n`;
		count += 1;
	}

	out_str += `constraint count_unique_values(array1d(${VAR_2D_NAMES.NURIKABE_REGIONS})) == ${count + 1};\n`;

	return out_str;
}

function nurikabeSeenWaterwayCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.NURIKABE_SHADING,
		'nurikabe_seen_waterway_cells_p'
	);
	return constraint_str;
}

function nurikabeSeenWaterwayCellsElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, nurikabeSeenWaterwayCellsConstraint);
	return out_str;
}

function nurikabeIslandSizeCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const cell_nurikabe_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIKABE_REGIONS);

	const constraint_str = `constraint nurikabe_island_size_cell_p(${VAR_2D_NAMES.NURIKABE_REGIONS}, ${cell_nurikabe_var}, ${cell_var});\n`;
	return constraint_str;
}

function nurikabeIslandSizeCellElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, grid, element, nurikabeIslandSizeCellConstraint);
	return out_str;
}

function teleportElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	let out_str = '';

	const constraints = element.constraints as Record<string, CellToolI>;
	const groups = groupConstraintsByValue(Object.values(constraints));

	for (const group of groups.values()) {
		if (group.length <= 1) continue;
		// for each combination of 2
		for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
			const coord1 = e1.cell;
			const coord2 = e2.cell;
			const cell1 = grid.getCell(coord1.r, coord1.c);
			const cell2 = grid.getCell(coord2.r, coord2.c);
			if (!cell1 || !cell2) continue;

			const cell1_var = cellToGridVarName(cell1, VAR_2D_NAMES.BOARD);
			const cell2_var = cellToGridVarName(cell2, VAR_2D_NAMES.BOARD);

			out_str += `constraint ${cell1_var} == ${cell2_var};\n`;
		}
	}
	const first_coords = [...groups.values()].map((group) => group[0].cell);
	const cells = first_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => cell !== undefined);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	out_str += `constraint alldifferent(${vars_str});\n`;

	return out_str;
}

function shikakuRegionSizeElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const shikaku_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.SHIKAKU_REGIONS);
	const vars_str = `${shikaku_vars.join(',\n\t')}`;

	out_str += `array[int] of var int: shikaku_region_size_clues = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(shikaku_region_size_clues);\n`;
	out_str += `constraint shikaku_each_region_contains_one_circle_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, shikaku_region_size_clues);\n`;

	for (const constraint of Object.values(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const shikaku_var = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_REGIONS);
		const shikaku_width = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_WIDTH);
		const shikaku_height = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_HEIGHT);
		out_str += `constraint shikaku_region_size_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, ${shikaku_var}, ${cell_var}, ${shikaku_width}, ${shikaku_height});\n`;
	}

	return out_str;
}

function shikakuRegionSumElement(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';
	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const shikaku_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.SHIKAKU_REGIONS);
	const vars_str = `${shikaku_vars.join(',\n\t')}`;

	out_str += `array[int] of var int: shikaku_region_sum_clues = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(shikaku_region_sum_clues);\n`;
	out_str += `constraint shikaku_each_region_contains_one_circle_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, shikaku_region_sum_clues);\n`;

	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: true,
		allow_var_list: true
	};

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const shikaku_var = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_REGIONS);

		const value = constraint.value ?? '';
		const result = getParsingResult(model, value, c_id, parse_opts);
		if (!result) continue;

		const var_name = result[1];
		out_str += result[0];

		out_str += `constraint shikaku_region_sum_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.SHIKAKU_REGIONS}, ${shikaku_var}, ${var_name});\n`;
	}

	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.ODD, oddElement],
	[TOOLS.EVEN, evenElement],
	[TOOLS.LOW_DIGIT, lowDigitElement],
	[TOOLS.HIGH_DIGIT, highDigitElement],
	[TOOLS.ODD_MINESWEEPER, oddMinesweeperElement],
	[TOOLS.EVEN_MINESWEEPER, evenMinesweeperElement],
	[TOOLS.DIAGONALLY_ADJACENT_SUM, diagonallyAdjacentSumElement],
	[TOOLS.ORTHOGONAL_SUM, orthogonalSumElement],
	[TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS, countSameParityNeighbourElement],
	[TOOLS.FRIENDLY_CELL, friendlyCellElement],
	[
		TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,
		adjCellsOppositeDirOppositeParityElement
	],
	[TOOLS.WATCHTOWER, watchtowerElement],
	[TOOLS.NOT_WATCHTOWER, notWatchtowerElement],
	[TOOLS.FARSIGHT, farsightElement],
	[TOOLS.RADAR, radarElement],
	[TOOLS.INDEXING_COLUMN, indexingColumnElement],
	[TOOLS.INDEXING_ROW, indexingRowElement],
	[TOOLS.SANDWICH_ROW_COL_COUNT, sandwichRowColCountElement],

	[TOOLS.SEEN_EVEN_COUNT, seenEvenCountElement],
	[TOOLS.SEEN_ODD_COUNT, seenOddCountElement],

	[TOOLS.CELL_KNIGHT_WHISPERS, cellKnightWhispersElement],

	[TOOLS.YIN_YANG_MINESWEEPER, yinYangMinesweeperElement],
	[TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS, yinYangSeenUnshadedElement],
	[TOOLS.YIN_YANG_SEEN_SHADED_CELLS, yinYangSeenShadedElement],
	[TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS, yinYangSeenSameShadeElement],
	[TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT, yinYangAdjacentSameShadeCountElement],
	[TOOLS.YIN_YANG_SHADED_NEIGHBOURS_COUNT, yinYangShadedNeighboursCountElement],

	[
		TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,
		twoConstiguousRegionsRowColumnOppositeSetCountElement
	],
	[TOOLS.SEEN_REGION_BORDERS_COUNT, seenRegionBordersCountElement],
	[TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS, nurimisakiUnshadedEndpointsElement],

	[TOOLS.NURIKABE_SEEN_WATERWAY_CELLS, nurikabeSeenWaterwayCellsElement],
	[TOOLS.NURIKABE_ISLAND_SIZE_CELL, nurikabeIslandSizeCellElement],

	[TOOLS.SASHIGANE_BEND_REGION_COUNT, sashiganeBendRegionCountElement],
	[TOOLS.SASHIGANE_REGION_SUM, sashiganeRegionSumElement],

	[TOOLS.CELL_ON_THE_LOOP, cellOnLoopElement],
	[TOOLS.CELL_NOT_ON_THE_LOOP, cellNotOnLoopElement],
	[TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS, countLoopNeighbourCellsElement],
	[TOOLS.CAVE_CLUE, caveCluesElement],

	[TOOLS.CHAOS_CONSTRUCTION_CHESS_SUMS, chaosConstructionChessSumsElement],
	[TOOLS.CHAOS_CONSTRUCTION_ARROW_KNOTS, chaosConstructionArrowKnotsElement],
	[TOOLS.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT, chaosConstructionSeenSameRegionCountElement],

	[TOOLS.DIRECTED_PATH_START, directedPathStartElement],
	[TOOLS.DIRECTED_PATH_END, directedPathEndElement],

	[TOOLS.CONENCT_FOUR_RED, connectFourRedElement],
	[TOOLS.CONNECT_FOUR_YELLOW, connectFourYellowElement],

	[TOOLS.MAXIMUM, maximumElement],
	[TOOLS.MINIMUM, minimumElement],
	[TOOLS.COUNTING_CIRCLES, countingCirclesElement],
	[TOOLS.REVERSE_COUNTING_CIRCLES, reverseCountingCirclesElement],
	[TOOLS.COLORED_COUNTING_CIRCLES, coloredCountingCirclesElement],
	[TOOLS.UNIQUE_CELLS, uniqueCellsElement],

	[TOOLS.SHIKAKU_REGION_SIZE, shikakuRegionSizeElement],
	[TOOLS.SHIKAKU_REGION_SUM, shikakuRegionSumElement],

	[TOOLS.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE, nurikabeIslandProductOfSumAndSizeElement],
	[TOOLS.TELEPORT, teleportElement]
]);

export function singleCellConstraints(model: PuzzleModel, grid: Grid, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, grid, element, tool_map);
	return out_str;
}
