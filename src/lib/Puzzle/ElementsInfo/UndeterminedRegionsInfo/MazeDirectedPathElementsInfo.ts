import {
	addHeader,
	format_2d_array,
	get_grid_name,
	groupConstraintsByValue,
	PuzzleModel,
	VAR_1D_NAMES,
	VAR_2D_NAMES,
	type PuzzleAuxI
} from '$src/lib/Solver/solver_utils';
import type { GridShape } from '$src/lib/Types/types';
import { DIRECTION } from '$src/lib/utils/directions';
import { combinations } from '$src/lib/utils/functionUtils';
import {
	cellEdgeToCellCoords,
	coordsAdd,
	coordsScale,
	coordsSubtract,
	coordsToDirection,
	cornerCoordToAdjCellCoords,
	isCellOnGrid,
	type GridCoordI
} from '$src/lib/utils/SquareCellGridCoords';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import type {
	CellToolI,
	ConstraintsElement,
	CornerLineToolI,
	EdgeToolI
} from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

type Edge2d = [n1: GridCoordI, n2: GridCoordI];

function directedPathAdjacentCellsSumIsPrimeConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;

	out_str += `constraint direct_path_adjacent_sum_is_prime(${board}, ${edges_from}, ${edges_to}, ${edges_bools});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsDutchWhispersConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	out_str += `constraint direct_path_adjacent_dutch_whispers(${board}, ${edges_from}, ${edges_to}, ${edges_bools});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsAreMultiplesConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const teleports = VAR_2D_NAMES.DIRECTED_PATH_TELEPORTS;
	out_str += `constraint direct_path_adjacent_multiples_p(${board}, ${teleports}, ${edges_from}, ${edges_to}, ${edges_bools});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsWhispersConstraint(
	element: ConstraintsElement,
	toolId: TOOLID
): string {
	let out_str: string = '';
	const grid_name = get_grid_name(element.negative_constraints);
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const teleports = VAR_2D_NAMES.DIRECTED_PATH_TELEPORTS;
	out_str += `constraint direct_path_adjacent_whispers_p(${grid_name}, ${teleports}, ${edges_from}, ${edges_to}, ${edges_bools}, 5);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsRegionSumLineConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const nodes_bools = VAR_1D_NAMES.DIRECTED_PATH_NODES_BOOLS;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const dpath_source = 'dpath_source';

	out_str += `constraint directed_path_is_region_sum_line_p(${board}, board_regions, ${edges_from}, ${edges_to}, ${nodes_bools}, ${edges_bools}, ${dpath_source});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathRegionSegmentAbstractConstraint(
	element: ConstraintsElement,
	toolId: TOOLID,
	predicate: string
): string {
	let out_str: string = '';

	const grid_name = get_grid_name(element.negative_constraints);

	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const nodes_bools = VAR_1D_NAMES.DIRECTED_PATH_NODES_BOOLS;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const dpath_source = 'dpath_source';

	out_str += `constraint ${predicate}(${grid_name}, board_regions, ${edges_from}, ${edges_to}, ${nodes_bools}, ${edges_bools}, ${dpath_source});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportSegmentsSumConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const teleports = VAR_2D_NAMES.DIRECTED_PATH_TELEPORTS;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const nodes_bools = VAR_1D_NAMES.DIRECTED_PATH_NODES_BOOLS;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const dpath_source = 'dpath_source';

	out_str += `constraint directed_path_teleport_segments_sum_p(${board}, ${teleports}, ${edges_from}, ${edges_to}, ${nodes_bools}, ${edges_bools}, ${dpath_source});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportRenbanSegmentsConstraint(puzzle: PuzzleAuxI, toolId: TOOLID): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	const used_regions = puzzle.grid.getUsedRegions();
	const reg_sizes = [...used_regions].map((reg) => puzzle.grid.getRegion(reg).length);
	const max_reg_size = reg_sizes.length ? Math.max(...reg_sizes) : grid.nCols * grid.nRows;

	const board = VAR_2D_NAMES.BOARD;
	const teleports = VAR_2D_NAMES.DIRECTED_PATH_TELEPORTS;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const nodes_bools = VAR_1D_NAMES.DIRECTED_PATH_NODES_BOOLS;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const dpath_source = 'dpath_source';

	out_str += `constraint directed_path_teleport_renban_segments_p(${board}, ${teleports}, ${edges_from}, ${edges_to}, ${nodes_bools}, ${edges_bools}, ${dpath_source}, ${max_reg_size});\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsParityLineConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	const board = VAR_2D_NAMES.BOARD;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;

	out_str += `constraint directed_path_is_parity_line_p(${board}, ${edges_from}, ${edges_to}, ${edges_bools});\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathSumOfCellsPerRegionIsPrimeConstraint(
	puzzle: PuzzleAuxI,
	toolId: TOOLID
): string {
	let out_str: string = '';

	const grid = puzzle.grid;
	const regions = [...grid.getUsedRegions()];
	const used_regions = '{' + regions.join(',') + '}';
	const board = VAR_2D_NAMES.BOARD;
	const nodes = VAR_2D_NAMES.MAZE_DIRECTED_PATH;
	out_str += `constraint directed_path_sum_path_cells_in_region_is_prime_p(${board}, board_regions, ${nodes}, ${used_regions});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathModifierConstraints(model: PuzzleModel, element: ConstraintsElement): string {
	let out_str = '';

	if (!element.negative_constraints) return out_str;

	const puzzle = model.puzzle;
	const board = VAR_2D_NAMES.BOARD;
	const path = VAR_2D_NAMES.MAZE_DIRECTED_PATH;

	let tool: TOOLID = TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME;
	const directed_path_adjacent_sum_prime = !!element.negative_constraints[tool];
	if (directed_path_adjacent_sum_prime) {
		out_str += directedPathAdjacentCellsSumIsPrimeConstraint(
			TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME
		);
	}

	tool = TOOLS.DIRECTED_PATH_IS_PARITY_LINE;
	const directed_path_parity_line = !!element.negative_constraints[tool];
	if (directed_path_parity_line) {
		out_str += directedPathIsParityLineConstraint(tool);
	}

	tool = TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS;
	const directed_path_dutch_whispers = !!element.negative_constraints[tool];
	if (directed_path_dutch_whispers) {
		out_str += directedPathAdjacentCellsDutchWhispersConstraint(tool);
	}

	tool = TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME;
	const directed_path_region_sum_is_prime = !!element.negative_constraints[tool];
	if (directed_path_region_sum_is_prime) {
		out_str += directedPathSumOfCellsPerRegionIsPrimeConstraint(puzzle, tool);
	}

	tool = TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE;
	const directed_path_is_region_sum_line = !!element.negative_constraints[tool];
	if (directed_path_is_region_sum_line) {
		out_str += directedPathIsRegionSumLineConstraint(tool);
	}

	tool = TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM;
	const directed_path_teleport_segments_sum = !!element.negative_constraints[tool];
	if (directed_path_teleport_segments_sum) {
		out_str += directedPathTeleportSegmentsSumConstraint(tool);
	}

	tool = TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_RENBAN_LINE;
	const directed_path_teleport_segments_renban = !!element.negative_constraints[tool];
	if (directed_path_teleport_segments_renban) {
		out_str += directedPathTeleportRenbanSegmentsConstraint(puzzle, tool);
	}

	tool = TOOLS.DIRECTED_PATH_ADJACENT_CELLS_ARE_MULTIPLES;
	const directed_path_adjacent_are_multiples = !!element.negative_constraints[tool];
	if (directed_path_adjacent_are_multiples) {
		out_str += directedPathAdjacentCellsAreMultiplesConstraint(tool);
	}

	tool = TOOLS.DIRECTED_PATH_ADJACENT_CELLS_WHISPERS;
	const directed_path_adjacent_cells_whispers = !!element.negative_constraints[tool];
	if (directed_path_adjacent_cells_whispers) {
		out_str += directedPathAdjacentCellsWhispersConstraint(element, tool);
	}

	tool = TOOLS.DIRECTED_PATH_REGION_SEGMENTS_NABNER_LINE;
	const directed_path_region_segments_nabner = !!element.negative_constraints[tool];
	if (directed_path_region_segments_nabner) {
		out_str += directedPathRegionSegmentAbstractConstraint(
			element,
			tool,
			'directed_path_region_segments_is_nabner_line_p'
		);
	}

	tool = TOOLS.PATH_NODES_SUM_OF_FIRST_CELL_IN_COLUMN_AND_ROW;
	const path_nodes_sum_of_first_cell_in_column_and_row = !!element.negative_constraints[tool];
	if (path_nodes_sum_of_first_cell_in_column_and_row) {
		out_str += `constraint path_nodes_sum_of_first_cell_in_column_and_row_p(${board}, ${path});\n`;
	}

	tool = TOOLS.DIRECTED_PATH_REGION_SEGMENTS_INDEX_LINE;
	const directed_path_region_segments_index = !!element.negative_constraints[tool];
	if (directed_path_region_segments_index) {
		out_str += directedPathRegionSegmentAbstractConstraint(
			element,
			tool,
			'directed_path_region_segments_index_line_p'
		);
	}

	return out_str;
}

export function coordsToIdx(r: number, c: number, grid: Grid): number {
	const n_cols = grid.nCols;
	const [c_min, r_min] = [0, 0];
	const n = (r - r_min) * n_cols + (c - c_min) + 1;
	return n;
}

export function idxToCoords(idx: number, grid: Grid): [number, number] {
	const n_cols = grid.nCols;
	const [c_min, r_min] = [0, 0];
	const r: number = r_min + Math.floor((idx - 1) / n_cols);
	const c: number = c_min + ((idx - 1) % n_cols);
	return [r, c];
}

function cornerLineToEdges(constraint: CornerLineToolI, grid_shape: GridShape): Edge2d[] {
	function edge_wall_vertical(cell1: GridCoordI, cell2: GridCoordI): Edge2d[] {
		const _edges: Edge2d[] = [];
		for (let i = -1; i <= 1; i++) {
			const n2: GridCoordI = { r: cell2.r + i, c: cell2.c };
			if (isCellOnGrid(n2, grid_shape)) {
				_edges.push([cell1, n2]);
				_edges.push([n2, cell1]);
			}
		}
		return _edges;
	}

	function edge_wall_horizontal(cell1: GridCoordI, cell2: GridCoordI): Edge2d[] {
		const _edges: Edge2d[] = [];
		for (let j = -1; j <= 1; j++) {
			const n2: GridCoordI = { r: cell2.r, c: cell2.c + j };
			if (isCellOnGrid(n2, grid_shape)) {
				_edges.push([cell1, n2]);
				_edges.push([n2, cell1]);
			}
		}
		return _edges;
	}

	const edges: Edge2d[] = [];

	const coords = constraint.coords;
	if (coords.length === 1) {
		const corner_coord = coords[0];
		const cells = cornerCoordToAdjCellCoords(corner_coord);

		// diagonal edges
		const edge1: Edge2d = [cells[0], cells[3]];
		const edge2: Edge2d = [cells[3], cells[0]];
		const edge3: Edge2d = [cells[1], cells[2]];
		const edge4: Edge2d = [cells[2], cells[1]];

		edges.push(...[edge1, edge2, edge3, edge4]);
		return edges;
	}

	for (let i = 0; i < coords.length - 1; i++) {
		const edge_coord: GridCoordI = coordsScale(coordsAdd(coords[i], coords[i + 1]), 0.5);
		const cells = cellEdgeToCellCoords(edge_coord);

		if (cells.length !== 2) continue;
		const [cell1, cell2] = cells;

		if (cell1.r === cell2.r) {
			// vertical border
			let edges_v = edge_wall_vertical(cell1, cell2);
			edges.push(...edges_v);
			edges_v = edge_wall_vertical(cell2, cell1);
			edges.push(...edges_v);
		} else if (cell1.c === cell2.c) {
			// horizontal border
			let edges_h = edge_wall_horizontal(cell1, cell2);
			edges.push(...edges_h);
			edges_h = edge_wall_horizontal(cell2, cell1);
			edges.push(...edges_h);
		}
	}
	return edges;
}

function findWalledEdges(puzzle: PuzzleAuxI): Edge2d[] {
	const grid = puzzle.grid;
	const grid_shape: GridShape = {
		nRows: grid.nRows,
		nCols: grid.nCols
	};
	const elements = puzzle.elementsDict;
	const maze_wall_elements = elements.findElementsByTool(TOOLS.MAZE_WALL);
	const edges: Edge2d[] = [];
	for (const element of maze_wall_elements) {
		const constraints = element.constraints;
		if (!constraints) continue;
		const clist = [...Object.values(constraints)] as CornerLineToolI[];

		for (const constraint of clist) {
			const constraint_edges = cornerLineToEdges(constraint, grid_shape);
			edges.push(...constraint_edges);
		}
	}
	return edges;
}

function edgeToVar(edge: Edge2d): string {
	const [n1, n2] = edge;
	const delta: GridCoordI = coordsSubtract(n2, n1);
	const dir = coordsToDirection(delta);

	const edges_l = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_L;
	const edges_r = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_R;
	const edges_u = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_U;
	const edges_d = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_D;
	const edges_dl = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_DL;
	const edges_dr = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_DR;
	const edges_ul = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_UL;
	const edges_ur = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_UR;

	switch (dir) {
		case DIRECTION.N: {
			return `${edges_u}[${n1.r - 1}, ${n1.c}]`;
		}
		case DIRECTION.S: {
			return `${edges_d}[${n1.r}, ${n1.c}]`;
		}
		case DIRECTION.E: {
			return `${edges_r}[${n1.r}, ${n1.c}]`;
		}
		case DIRECTION.W: {
			return `${edges_l}[${n1.r}, ${n1.c - 1}]`;
		}
		case DIRECTION.NE: {
			return `${edges_ur}[${n1.r - 1}, ${n1.c}]`;
		}
		case DIRECTION.NW: {
			return `${edges_ul}[${n1.r - 1}, ${n1.c - 1}]`;
		}
		case DIRECTION.SE: {
			return `${edges_dr}[${n1.r}, ${n1.c}]`;
		}
		case DIRECTION.SW: {
			return `${edges_dl}[${n1.r}, ${n1.c - 1}]`;
		}
	}
}

function findEdgesBlockedByOneWayDoors(puzzle: PuzzleAuxI): Edge2d[] {
	const grid = puzzle.grid;
	const edges: Edge2d[] = [];
	const elements = puzzle.elementsDict;
	const one_way_door_elements = elements.findElementsByTool(TOOLS.ONE_WAY_DOOR);
	if (!one_way_door_elements) return edges;

	for (const element of one_way_door_elements) {
		if (!element.constraints) continue;

		for (const constraint of Object.values(element.constraints) as EdgeToolI[]) {
			const coords = constraint.cells;
			const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
			const [cell1, cell2] = cells;
			const value = constraint.value;

			const n1: GridCoordI = { r: cell1.r, c: cell1.c };
			const n2: GridCoordI = { r: cell2.r, c: cell2.c };
			if (value === '<') {
				edges.push([n1, n2]);
			} else if (value === '>') {
				edges.push([n2, n1]);
			}
		}
	}
	return edges;
}

function findEdgesBlockedByForbiddenDoors(puzzle: PuzzleAuxI): Edge2d[] {
	const grid = puzzle.grid;
	const edges: Edge2d[] = [];
	const elements = puzzle.elementsDict;
	const forbidden_door_elements = elements.findElementsByTool(TOOLS.FORBIDDEN_DOORS);
	if (!forbidden_door_elements) return edges;

	for (const element of forbidden_door_elements) {
		if (!element.constraints) continue;

		for (const constraint of Object.values(element.constraints) as EdgeToolI[]) {
			const coords = constraint.cells;
			const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
			const [cell1, cell2] = cells;

			const n1: GridCoordI = { r: cell1.r, c: cell1.c };
			const n2: GridCoordI = { r: cell2.r, c: cell2.c };
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
	}
	return edges;
}

function constructEdgeList(grid: Grid): Edge2d[] {
	const edge_list: Edge2d[] = [];

	for (const cell of grid.getAllCells()) {
		const n1: GridCoordI = { r: cell.r, c: cell.c };
		// const source = coordsToIdx(cell.r, cell.c, grid);
		const adj_cells = grid.getNeighboorCells(cell);
		for (const cell2 of adj_cells) {
			const n2: GridCoordI = { r: cell2.r, c: cell2.c };
			// const target = coordsToIdx(cell2.r, cell2.c, grid);
			// edge_list.push([source, target]);
			const edge: Edge2d = [n1, n2];
			edge_list.push(edge);
		}
	}
	return edge_list;
}

interface TpResult {
	tp_entries: [label: string, coord: GridCoordI][];
	tp_edges: Edge2d[];
	tp_groups_count: number;
	tp_array: number[][];
}

function getTeleports(puzzle: PuzzleAuxI): TpResult | null {
	const grid = puzzle.grid;
	const tp_edges: Edge2d[] = [];
	const tp_entries: [label: string, coord: GridCoordI][] = [];
	const elements = puzzle.elementsDict;
	const teleport_elements = elements.findElementsByTool(TOOLS.TELEPORT);

	if (!teleport_elements) return null;

	const tp_constraints: CellToolI[] = [];
	for (const element of teleport_elements) {
		if (!element.constraints) continue;

		for (const constraint of Object.values(element.constraints) as CellToolI[]) {
			tp_constraints.push(constraint);
		}
	}

	if (tp_constraints.length === 0) return null;

	const tp_array: number[][] = Array.from(Array(grid.nRows), () => new Array(grid.nRows).fill(0));

	const groups = groupConstraintsByValue(tp_constraints);
	let k = 0; // group id
	for (const [val, group] of groups.entries()) {
		if (group.length <= 1) continue;
		k++;

		// for each combination of 2
		for (const [e1, e2] of combinations(group, 2)) {
			const n1: GridCoordI = { r: e1.cell.r, c: e1.cell.c };
			const n2: GridCoordI = { r: e2.cell.r, c: e2.cell.c };

			tp_edges.push([n1, n2]);
			tp_edges.push([n2, n1]);

			tp_entries.push([val, n1]);
			tp_entries.push([val, n2]);

			tp_array[e1.cell.r][e1.cell.c] = k;
			tp_array[e2.cell.r][e2.cell.c] = k;
		}
	}

	const result: TpResult = {
		tp_entries,
		tp_edges,
		tp_groups_count: k,
		tp_array
	};

	return result;
}

function oneEdgePerTeleport(
	grid: Grid,
	tp_result: TpResult | null,
	edge_list: [s: number, t: number][]
): string {
	// at most one edge for each teleport
	if (!tp_result) return '';

	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const tp_entries = tp_result.tp_entries;
	let out_str = `\n% At most 1 edge per teleporter\n`;
	for (const [val, tp_coord] of tp_entries) {
		const cell1 = grid.getCell(tp_coord.r, tp_coord.c);
		if (!cell1) continue;
		const n1 = coordsToIdx(cell1.r, cell1.c, grid);

		const neighbours = grid.getNeighboorCells(cell1);

		const edges: [s: number, t: number][] = [];
		// if two endpoints of a teleport happen to be neighbours
		// then that edge connecting the two teleports does not count to
		// for this constraint
		for (const cell2 of neighbours) {
			const match = tp_entries.some(
				([val2, tp]) => tp.r === cell2.r && tp.c == cell2.c && val2 === val
			);
			if (match) continue;
			const n2 = coordsToIdx(cell2.r, cell2.c, grid);
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
		const edge_idxs = edges
			.map((edge) => edge_list.findIndex((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1]))
			.filter((idx) => idx !== -1);
		if (edge_idxs.length) {
			const aux = edge_idxs.map((idx) => `${edges_bools}[${idx + 1}]`).join(',');
			out_str += `constraint sum([${aux}]) <= 1;\n`;
		}
	}
	return out_str;
}

function directedPathNoCrossings(grid: Grid, edge_list: [s: number, t: number][]): string {
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;

	// // TODO: neighboring teleport edges as exception
	let out_str = `\n% Direct Path no crossings\n`;
	for (let i = 0; i < grid.nRows - 1; i++) {
		for (let j = 0; j < grid.nCols - 1; j++) {
			const cell1 = grid.getCell(i, j);
			const cell2 = grid.getCell(i, j + 1);
			const cell3 = grid.getCell(i + 1, j);
			const cell4 = grid.getCell(i + 1, j + 1);
			if (!cell1 || !cell2 || !cell3 || !cell4) continue;
			const n1 = coordsToIdx(cell1.r, cell1.c, grid);
			const n2 = coordsToIdx(cell2.r, cell2.c, grid);
			const n3 = coordsToIdx(cell3.r, cell3.c, grid);
			const n4 = coordsToIdx(cell4.r, cell4.c, grid);

			const edges: [s: number, t: number][] = [
				[n1, n4],
				[n4, n1],
				[n2, n3],
				[n3, n2]
			];
			const edge_idxs = edges
				.map((edge) => edge_list.findIndex((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1]))
				.filter((idx) => idx !== -1);
			if (edge_idxs.length) {
				const aux = edge_idxs.map((idx) => `${edges_bools}[${idx + 1}]`).join(',');
				out_str += `constraint sum([${aux}]) <= 1;\n`;
			}
		}
	}
	return out_str;
}

export function mazeDirectedPathElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	// const nrows = grid.nRows;
	// const ncols = grid.nCols;

	let out_str: string = '';
	const path = VAR_2D_NAMES.MAZE_DIRECTED_PATH;
	const teleports = VAR_2D_NAMES.DIRECTED_PATH_TELEPORTS;
	// const edges_l = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_L;
	// const edges_r = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_R;
	// const edges_u = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_U;
	// const edges_d = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_D;
	// const edges_dl = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_DL;
	// const edges_dr = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_DR;
	// const edges_ul = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_UL;
	// const edges_ur = VAR_2D_NAMES.MAZE_DIRECTED_PATH_EDGES_UR;
	const edges_from = VAR_1D_NAMES.DIRECTED_PATH_EDGES_FROM;
	const edges_to = VAR_1D_NAMES.DIRECTED_PATH_EDGES_TO;
	const edges_bools = VAR_1D_NAMES.DIRECTED_PATH_EDGES_BOOLS;
	const nodes_bools = VAR_1D_NAMES.DIRECTED_PATH_NODES_BOOLS;
	const dpath_source = 'dpath_source';
	const dpath_target = 'dpath_target';

	// define the node and edge arrays
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${path};\n`;
	// out_str += `array[ROW_IDXS, 0..${ncols - 2}] of var bool: ${edges_l};\n`;
	// out_str += `array[ROW_IDXS, 0..${ncols - 2}] of var bool: ${edges_r};\n`;
	// out_str += `array[0..${nrows - 2}, COL_IDXS] of var bool: ${edges_u};\n`;
	// out_str += `array[0..${nrows - 2}, COL_IDXS] of var bool: ${edges_d};\n`;
	// out_str += `array[0..${nrows - 2}, 0..${ncols - 2}] of var bool: ${edges_ul};\n`;
	// out_str += `array[0..${nrows - 2}, 0..${ncols - 2}] of var bool: ${edges_ur};\n`;
	// out_str += `array[0..${nrows - 2}, 0..${ncols - 2}] of var bool: ${edges_dl};\n`;
	// out_str += `array[0..${nrows - 2}, 0..${ncols - 2}] of var bool: ${edges_dr};\n`;
	out_str += `var int: ${dpath_source};\n`;
	out_str += `var int: ${dpath_target};\n`;

	// directed path
	out_str += `\n% Directed Path \n`;

	// out_str += `array[int] of int: ${edges_from} = directed_path_from_all_f(${path}, ${edges_l}, ${edges_r}, ${edges_u}, ${edges_d}, ${edges_ul}, ${edges_ur}, ${edges_dl}, ${edges_dr});\n`;
	// out_str += `array[int] of int: ${edges_to} = directed_path_to_all_f(${path}, ${edges_l}, ${edges_r}, ${edges_u}, ${edges_d}, ${edges_ul}, ${edges_ur}, ${edges_dl}, ${edges_dr});\n`;
	// out_str += `array[int] of var bool: ${edges_bools} = directed_path_edges_f(${path}, ${edges_l}, ${edges_r}, ${edges_u}, ${edges_d}, ${edges_ul}, ${edges_ur}, ${edges_dl}, ${edges_dr});\n`;
	// out_str += `array[int] of var bool: ${nodes_bools} = directed_path_nodes_f(${path});\n`;
	// out_str += `constraint directed_path_p(dpath_source, dpath_target, ${edges_from}, ${edges_to}, ${nodes_bools}, ${edges_bools});\n`;

	// out_str += `\n% ${TOOLS.MAZE_WALL} \n`;
	// for (const edge of wall_edges) {
	// 	const var_name = edgeToVar(edge);
	// 	out_str += `% edge: (${edge[0].r}, ${edge[0].c}) -> (${edge[1].r}, ${edge[1].c})\n`;
	// 	out_str += `constraint ${var_name} = false;\n`;
	// }

	const edge2d_list = constructEdgeList(grid);
	let edge_list: [s: number, t: number][] = [];
	for (const [n1, n2] of edge2d_list) {
		const idx1 = coordsToIdx(n1.r, n1.c, grid);
		const idx2 = coordsToIdx(n2.r, n2.c, grid);
		edge_list.push([idx1, idx2]);
	}

	// find edges blocked by one way and two way doors
	const door_edges = findEdgesBlockedByOneWayDoors(puzzle);
	door_edges.push(...findEdgesBlockedByForbiddenDoors(puzzle));
	const door_edges_1d: [s: number, t: number][] = door_edges.map((edge) => [
		coordsToIdx(edge[0].r, edge[0].c, grid),
		coordsToIdx(edge[1].r, edge[1].c, grid)
	]);

	const wall_edges = findWalledEdges(puzzle);
	const wall_edges_1d: [s: number, t: number][] = wall_edges.map((edge) => [
		coordsToIdx(edge[0].r, edge[0].c, grid),
		coordsToIdx(edge[1].r, edge[1].c, grid)
	]);

	// remove edges blocked by walls and one way doors
	edge_list = edge_list.filter(
		(edge) => !wall_edges_1d.some((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1])
	);
	edge_list = edge_list.filter(
		(edge) => !door_edges_1d.some((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1])
	);

	// add teleport edges
	const tp_res = getTeleports(puzzle);
	if (tp_res && tp_res.tp_edges.length > 0) {
		for (const edge of tp_res.tp_edges) {
			const n1 = coordsToIdx(edge[0].r, edge[0].c, grid);
			const n2 = coordsToIdx(edge[1].r, edge[1].c, grid);
			edge_list.push([n1, n2]);
		}
		const array_str = format_2d_array(tp_res.tp_array);
		const l = tp_res.tp_groups_count;
		out_str += `\n% teleports grid\n`;
		out_str += `array[ROW_IDXS, COL_IDXS] of 0..${l}: ${teleports} = array2d(ROW_IDXS, COL_IDXS, ${array_str});\n`;
	}

	model.edge_list = edge_list;
	// const n = grid.nRows * grid.nCols;
	const e = edge_list.length;
	const from_str = '[' + edge_list.map((edge) => edge[0]).join(',') + ']';
	const to_str = '[' + edge_list.map((edge) => edge[1]).join(',') + ']';

	out_str += `array[int] of int: ${edges_from} = ${from_str};\n`;
	out_str += `array[int] of int: ${edges_to} = ${to_str};\n`;
	out_str += `array[1..${e}] of var bool: ${edges_bools};\n`;
	// out_str += `array[1..${n}] of var bool: dpath_ns;\n`;
	out_str += `array[int] of var bool: ${nodes_bools} = directed_path_nodes_f(${path});\n`;
	out_str += `constraint dpath(${edges_from}, ${edges_to}, dpath_source, dpath_target, ${nodes_bools}, ${edges_bools});\n`;

	// direct path no crossings
	out_str += directedPathNoCrossings(grid, edge_list);
	out_str += oneEdgePerTeleport(grid, tp_res, edge_list);

	out_str += directedPathModifierConstraints(model, element);
	return out_str;
}

export const mazeDirectedPathInfo: SquareCellElementInfo = {
	toolId: TOOLS.MAZE_DIRECTED_PATH,

	negative_constraints: [
		{
			toolId: TOOLS.USE_CELL_VALUES,
			description: 'For path constraints use modified cell values instead of digits.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,
			description: 'Any two adjacent cells along the correct path must sum to a prime number.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,
			description:
				'The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_WHISPERS,
			description:
				'The values of any two physically adjacent cells along the path (ie; not separated by teleportation) must have a difference of at least 5.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_IS_PARITY_LINE,
			description:
				'The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE,
			description:
				'The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_REGION_SEGMENTS_NABNER_LINE,
			description:
				'Region borders divide the correct path into segments, each of which must be a valid "nabner line"; no two cells anywhere on a path segment can have consecutive or equal values. Eg: if a path segment contains an 8, there may not be a 7, a 9, or a doubled 4 anywhere else on that segment.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,
			description:
				'All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,
			description:
				'The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_RENBAN_LINE,
			description:
				'The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_ARE_MULTIPLES,
			description:
				'Any two adjacent digits along the correct path, one can be divided by the other to give an exact integer (ie; one is a multiple of the other.)'
		},
		{
			toolId: TOOLS.PATH_NODES_SUM_OF_FIRST_CELL_IN_COLUMN_AND_ROW,
			description:
				'Any cell on the path equals the digit at the top of its column plus the digit at the left-hand end of its row.'
		}
		// {
		// 	toolId: TOOLS.DIRECTED_PATH_REGION_SEGMENTS_INDEX_LINE,
		// 	description:
		// 		'Region borders divide the correct path into "index lines"; In any box, the Nth cell visited by the directed path is called "position N". The digit in position N always indicates which position along that segment contains the digit N. Eg: In a box, a path might visit the digits 35142 in that order. The first digit being a 3 indicates that the third digit is a 1, the second digit being a 5 indicates that the fifth digit is a 2, and so on.'
		// }
	],

	meta: {
		description:
			"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",
		tags: ['Rat run'],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: mazeDirectedPathElement
};
