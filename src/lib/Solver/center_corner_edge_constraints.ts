import type { CenterCornerOrEdgeToolI } from '../Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellEdgeToCellCoords,
	cornerCoordToAdjCellCoords,
	type GridCoordI
} from '../utils/SquareCellGridCoords';
import {
	cellsToGridVarsStr,
	constraintsBuilder,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF,
	type PuzzleModel
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function getCellRot180(grid: Grid, cell: Cell, r: number, c: number) {
	const center_r = cell.r + 0.5;
	const center_c = cell.c + 0.5;

	const dr = r - center_r;
	const dc = c - center_c;
	const nr = Math.floor(r + dr);
	const nc = Math.floor(c + dc);
	const new_cell = grid.getCell(nr, nc);
	return new_cell;
}

function possibleGalaxyCells(
	grid: Grid,
	coord: GridCoordI
): [cells: Cell[], mapped: Cell[], not_in_galaxy: Cell[]] {
	const cells: Cell[] = [];
	const mapped: Cell[] = [];
	const not_in_galaxy: Cell[] = [];

	for (const cell of grid.getAllCells()) {
		const cell2 = getCellRot180(grid, cell, coord.r, coord.c);
		if (cell2 && !cells.includes(cell2)) {
			cells.push(cell);
			mapped.push(cell2);
		} else if (!mapped.includes(cell)) {
			not_in_galaxy.push(cell);
		}
	}

	return [cells, mapped, not_in_galaxy];
}

function rotationallySymmetricGalaxyCenterSumConstraints(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	let out_str = '';
	const constraints = element.constraints as Record<string, CenterCornerOrEdgeToolI>;
	if (!constraints) return out_str;

	const constraints_list = [...Object.values(constraints)];
	const grid = model.puzzle.grid;

	for (let i = 0; i < constraints_list.length; i++) {
		const constraint = constraints_list[i];
		const coord = constraint.cell;
		const gal_id = i + 1;

		const [cells, mapped, not_in_galaxy] = possibleGalaxyCells(grid, coord);
		const group_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.GALAXY_REGIONS);
		const mapped_vars = cellsToGridVarsStr(mapped, VAR_2D_NAMES.GALAXY_REGIONS);
		const not_in_galaxy_vars = cellsToGridVarsStr(not_in_galaxy, VAR_2D_NAMES.GALAXY_REGIONS);
		out_str += `% galaxy ${gal_id}\n`;
		out_str += `constraint galaxy_center_p(${group_vars}, ${mapped_vars}, ${not_in_galaxy_vars}, ${gal_id});\n`;
		out_str += `constraint connected_region(${VAR_2D_NAMES.GALAXY_REGIONS}, ${gal_id});\n`;
		const value = constraint.value;
		if (!value) continue;
		const val = parseInt(value);

		out_str += `constraint galaxy_sum_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.GALAXY_REGIONS}, ${val}, ${gal_id});\n`;
	}
	if (!constraints_list.length) return out_str;

	const max_galaxies = grid.nCols * grid.nRows;
	const given_galaxies = constraints_list.length;
	const reg_idxs = `${given_galaxies + 1}..${max_galaxies}`;
	out_str += `\nconstraint order_remaining_galaxies_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${reg_idxs});\n`;
	return out_str;
}

function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};
	const default_name = `center_corner_edge_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function yinYangSumOfAdjacentShadedEdgeOrCornerConstraints(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CenterCornerOrEdgeToolI
) {
	const coord = constraint.cell;
	const [r, c] = [coord.r, coord.c];
	const value = constraint.value;

	const result = getParsingResult(model, value, c_id);
	if (!result) return '';
	const var_name = result[1];
	let out_str: string = result[0];

	// is corner coord
	let cells: Cell[] = [];
	if (r % 1 === 0 && c % 1 === 0) {
		const coords = cornerCoordToAdjCellCoords(coord);
		cells = coords.map((_c) => grid.getCell(_c.r, _c.c)).filter((cell) => cell !== undefined);
	} else if ((r % 1 === 0.5 && c % 1 === 0) || (r % 1 === 0 && c % 1 === 0.5)) {
		const coords = cellEdgeToCellCoords(coord);
		cells = coords.map((_c) => grid.getCell(_c.r, _c.c)).filter((cell) => cell !== undefined);
	}
	if (!cells.length) return '';

	const cell_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	out_str += `constraint conditional_sum_f(${cell_vars}, ${yin_yang_vars}, 1) == ${var_name};\n`;
	return out_str;
}

function yinYangSumOfAdjacentShadedEdgeOrCornerElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		yinYangSumOfAdjacentShadedEdgeOrCornerConstraints
	);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[
		TOOLS.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,
		yinYangSumOfAdjacentShadedEdgeOrCornerElement
	],
	[TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM, rotationallySymmetricGalaxyCenterSumConstraints]
]);

export function centerCornerOrEdgeElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
