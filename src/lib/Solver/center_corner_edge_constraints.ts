import type { CenterCornerOrEdgeToolI } from '../Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToGridVarsStr, VAR_2D_NAMES, type PuzzleModel } from './solver_utils';

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
	grid: Grid,
	constraints: CenterCornerOrEdgeToolI[]
) {
	let out_str = '';
	for (let i = 0; i < constraints.length; i++) {
		const constraint = constraints[i];
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
    if (!constraints.length) return out_str;

    const max_galaxies = grid.nCols * grid.nRows;
    const given_galaxies = constraints.length;
    const reg_idxs = `${given_galaxies+1}..${max_galaxies}`;
    out_str += `\nconstraint order_remaining_galaxies_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${reg_idxs});\n`;
	return out_str;
}

type ConstraintF = (
	model: PuzzleModel,
	grid: Grid,
	constraints: CenterCornerOrEdgeToolI[]
) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM, rotationallySymmetricGalaxyCenterSumConstraints]
]);

export function centerCornerOrEdgeConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	// const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		const constl = Object.values(constraints) as CenterCornerOrEdgeToolI[];
		const constraint_str = constraintF(model, grid, constl);
		out_str += constraint_str;
	}

	return out_str;
}
