import type { CornerLineToolI } from '../Puzzle/puzzle_schema';
import type { EdgeToolI } from "../Puzzle/puzzle_schema";
import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { CellToolI } from "../Puzzle/puzzle_schema";
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellEdgeToCellCoords,
	coordsAdd,
	coordsScale,
	cornerCoordToAdjCellCoords,
	type GridCoordI
} from '../utils/SquareCellGridCoords';
import { addHeader, format_2d_array, groupConstraintsByValue, PuzzleModel } from './solver_utils';

function directedPathAdjacentCellsSumIsPrimeConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsDutchWhispersConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsRegionSumLineConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportSegmentsSumConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportRenbanSegmentsConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	const used_regions = puzzle.grid.getUsedRegions();
	const reg_sizes = [...used_regions].map((reg) => puzzle.grid.getRegion(reg).length);
	const max_reg_size = reg_sizes.length ? Math.max(...reg_sizes) : grid.nCols * grid.nRows;
	out_str += `constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${max_reg_size});\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsParityLineConstraint(toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathSumOfCellsPerRegionIsPrimeConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';

	const grid = puzzle.grid;
	const regions = [...grid.getUsedRegions()];
	const used_regions = '{' + regions.join(',') + '}';
	out_str += `constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${used_regions});\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function coordsToIdx(r: number, c: number, n_cols: number) {
	const n = r * n_cols + c + 1;
	return n;
}

function findWalledEdges(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	function edge_wall_vertical(cell1: Cell, cell2: Cell) {
		const edges: [s: number, t: number][] = [];
		const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
		for (let i = -1; i <= 1; i++) {
			const n2 = coordsToIdx(cell2.r + i, cell2.c, grid.nCols);
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
		return edges;
	}

	function edge_wall_horizontal(cell1: Cell, cell2: Cell) {
		const edges: [s: number, t: number][] = [];
		const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
		for (let j = -1; j <= 1; j++) {
			const n2 = coordsToIdx(cell2.r, cell2.c + j, grid.nCols);
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
		return edges;
	}

	// find edges blocked by walls
	const edges_rem: [s: number, t: number][] = [];
	const lconstraints = puzzle.elementsDict;
	const maze_wall_element = lconstraints.get(TOOLS.MAZE_WALL);
	if (!maze_wall_element || !maze_wall_element.constraints) return edges_rem;

	for (const constraint of Object.values(maze_wall_element.constraints) as CornerLineToolI[]) {
		const coords = constraint.coords;
		if (coords.length === 1) {
			const corner_coord = coords[0];
			const cells_coords = cornerCoordToAdjCellCoords(corner_coord);
			const cells = cells_coords
				.map((_c) => grid.getCell(_c.r, _c.c))
				.filter((cell) => cell !== undefined);
			let n1 = coordsToIdx(cells[0].r, cells[0].c, grid.nCols);
			let n2 = coordsToIdx(cells[3].r, cells[3].c, grid.nCols);
			edges_rem.push([n1, n2]);
			edges_rem.push([n2, n1]);
			n1 = coordsToIdx(cells[1].r, cells[1].c, grid.nCols);
			n2 = coordsToIdx(cells[2].r, cells[2].c, grid.nCols);
			edges_rem.push([n1, n2]);
			edges_rem.push([n2, n1]);
		}
		for (let i = 0; i < coords.length - 1; i++) {
			const edge_coord: GridCoordI = coordsScale(coordsAdd(coords[i], coords[i + 1]), 0.5);
			const cells_coords = cellEdgeToCellCoords(edge_coord);
			const cells = cells_coords
				.map((_c) => grid.getCell(_c.r, _c.c))
				.filter((cell) => cell !== undefined);

			if (cells.length !== 2) continue;
			const [cell1, cell2] = cells;

			if (cell1.r === cell2.r) {
				// vertical border
				let edges = edge_wall_vertical(cell1, cell2);
				edges_rem.push(...edges);
				edges = edge_wall_vertical(cell2, cell1);
				edges_rem.push(...edges);
			} else if (cell1.c === cell2.c) {
				// horizontal border
				let edges = edge_wall_horizontal(cell1, cell2);
				edges_rem.push(...edges);
				edges = edge_wall_horizontal(cell2, cell1);
				edges_rem.push(...edges);
			}
		}
	}

	return edges_rem;
}

function findEdgesBlockedByOneWayDoors(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const edges_rem: [s: number, t: number][] = [];
	const lconstraints = puzzle.elementsDict;
	const one_way_door_element = lconstraints.get(TOOLS.ONE_WAY_DOOR);
	if (!one_way_door_element || !one_way_door_element.constraints) return edges_rem;

	for (const constraint of Object.values(one_way_door_element.constraints) as EdgeToolI[]) {
		const coords = constraint.cells;
		const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
		const [cell1, cell2] = cells;
		const value = constraint.value;

		const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
		const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
		if (value === '<') {
			edges_rem.push([n1, n2]);
		} else if (value === '>') {
			edges_rem.push([n2, n1]);
		}
	}

	return edges_rem;
}

function constructEdgeList(grid: Grid) {
	const edge_list: [s: number, t: number][] = [];

	for (const cell of grid.getAllCells()) {
		const source = coordsToIdx(cell.r, cell.c, grid.nCols);
		const adj_cells = grid.getNeighboorCells(cell);
		for (const cell2 of adj_cells) {
			const target = coordsToIdx(cell2.r, cell2.c, grid.nCols);
			edge_list.push([source, target]);
		}
	}
	return edge_list;
}

interface TpRes {
	tp_idxs: number[];
	tp_edges: [s: number, t: number][];
	tp_arr: number[][];
	tp_count: number;
}

function teleportConstraints(puzzle: PuzzleI): TpRes {
	const grid = puzzle.grid;
	const tp_edges: [s: number, t: number][] = [];
	const tp_idxs: number[] = [];
	const lconstraints = puzzle.elementsDict;
	const teleport_record = lconstraints.get(TOOLS.TELEPORT);
	const tp_constraints = teleport_record ? (Object.values(teleport_record) as CellToolI[]) : [];
	let tp_count: number = 0;

	const tp_arr: number[][] = Array.from(Array(grid.nRows), () => new Array(grid.nRows).fill(0));

	if (teleport_record) {
		// group teleports by label
		const groups = groupConstraintsByValue(tp_constraints);

		let k = 1;
		for (const group of groups.values()) {
			if (group.length <= 1) continue;
			// for each combination of 2
			for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
				const n1 = coordsToIdx(e1.cell.r, e1.cell.c, grid.nCols);
				const n2 = coordsToIdx(e2.cell.r, e2.cell.c, grid.nCols);
				tp_edges.push([n1, n2]);
				tp_edges.push([n2, n1]);
				tp_arr[e1.cell.r][e1.cell.c] = k;
				tp_arr[e2.cell.r][e2.cell.c] = k;
			}
			for (const tp of group) {
				const n1 = coordsToIdx(tp.cell.r, tp.cell.c, grid.nCols);
				tp_idxs.push(n1);
			}

			k++;
		}

		tp_count = groups.size;
	}

	return { tp_idxs, tp_edges, tp_arr, tp_count };
}

export function mazeDirectedPathConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';

	let edge_list = constructEdgeList(grid);
	// find edges blocked by walls
	const edges_rem = findWalledEdges(puzzle);

	// find edges blocked by one way doors
	const door_edges = findEdgesBlockedByOneWayDoors(puzzle);
	edges_rem.push(...door_edges);

	const lconstraints = puzzle.elementsDict;

	edge_list = edge_list.filter(
		(edge) => !edges_rem.some((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1])
	);

	// add teleport edges
	const tp_res = teleportConstraints(puzzle);
	if (tp_res.tp_edges.length) {
		edge_list.push(...tp_res.tp_edges);
		const array_str = format_2d_array(tp_res.tp_arr);
		const l = tp_res.tp_count;
		out_str += `\n% teleports grid\n`;
		out_str += `array[ROW_IDXS, COL_IDXS] of 0..${l}: teleports = array2d(ROW_IDXS, COL_IDXS, ${array_str});\n`;
	}

	model.edge_list = edge_list;
	console.log(edge_list);
	const n = grid.nRows * grid.nCols;
	const e = edge_list.length;
	const from_str = '[' + edge_list.map((edge) => edge[0]).join(',') + ']';
	const to_str = '[' + edge_list.map((edge) => edge[1]).join(',') + ']';

	out_str += `array[int] of int: dpath_from = ${from_str};\n`;
	out_str += `array[int] of int: dpath_to = ${to_str};\n`;
	out_str += `var 1..${n}: dpath_source;\n`;
	out_str += `var 1..${n}: dpath_target;\n`;
	out_str += `array[1..${n}] of var bool: dpath_ns;\n`;
	out_str += `array[1..${e}] of var bool: dpath_es;\n`;
	out_str += `constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);\n`;

	// TODO: neighboring teleport edges as exception
	out_str += `\n% Direct Path no crossings\n`;
	for (let i = 0; i < grid.nRows - 1; i++) {
		for (let j = 0; j < grid.nCols - 1; j++) {
			const cell1 = grid.getCell(i, j);
			const cell2 = grid.getCell(i, j + 1);
			const cell3 = grid.getCell(i + 1, j);
			const cell4 = grid.getCell(i + 1, j + 1);
			if (!cell1 || !cell2 || !cell3 || !cell4) continue;
			const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
			const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
			const n3 = coordsToIdx(cell3.r, cell3.c, grid.nCols);
			const n4 = coordsToIdx(cell4.r, cell4.c, grid.nCols);

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
				const aux = edge_idxs.map((idx) => `dpath_es[${idx + 1}]`).join(',');
				out_str += `constraint sum([${aux}]) <= 1;\n`;
			}
		}
	}

	// at most one edge for each teleport
	const teleport_record = lconstraints.get(TOOLS.TELEPORT);
	const tp_constraints = teleport_record ? (Object.values(teleport_record) as CellToolI[]) : [];
	if (tp_res.tp_count > 0) {
		out_str += `\n% At most 1 edge per teleporter\n`;
		for (const constraint of tp_constraints) {
			const coord = constraint.cell;
			const cell1 = grid.getCell(coord.r, coord.c);
			if (!cell1) continue;
			const neighbours = grid.getNeighboorCells(cell1);
			const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
			const edges: [s: number, t: number][] = [];
			// if two endpoints of a teleport happen to be neighbours
			// then that edge connecting the two teleports does not count to
			// for this constraint
			for (const cell2 of neighbours) {
				const match = tp_constraints.some(
					(tp) => tp.cell.r === cell2.r && tp.cell.c == cell2.c && tp.value === constraint.value
				);
				if (match) continue;
				const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
				edges.push([n1, n2]);
				edges.push([n2, n1]);
			}
			const edge_idxs = edges
				.map((edge) => edge_list.findIndex((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1]))
				.filter((idx) => idx !== -1);
			if (edge_idxs.length) {
				const aux = edge_idxs.map((idx) => `dpath_es[${idx + 1}]`).join(',');
				out_str += `constraint sum([${aux}]) <= 1;\n`;
			}
		}
	}

	if (!element.negative_constraints) return out_str;
	const directed_path_parity_line =
		!!element.negative_constraints[TOOLS.DIRECTED_PATH_IS_PARITY_LINE];
	const directed_path_dutch_whispers =
		!!element.negative_constraints[TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS];
	const directed_path_adjacent_sum_prime =
		!!element.negative_constraints[TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME];
	const directed_path_region_sum_is_prime =
		!!element.negative_constraints[TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME];
	const directed_path_is_region_sum_line =
		!!element.negative_constraints[TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE];

	if (directed_path_adjacent_sum_prime) {
		out_str += directedPathAdjacentCellsSumIsPrimeConstraint(
			TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME
		);
	}
	if (directed_path_parity_line) {
		out_str += directedPathIsParityLineConstraint(TOOLS.DIRECTED_PATH_IS_PARITY_LINE);
	}
	if (directed_path_dutch_whispers) {
		out_str += directedPathAdjacentCellsDutchWhispersConstraint(
			TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS
		);
	}
	if (directed_path_region_sum_is_prime) {
		out_str += directedPathSumOfCellsPerRegionIsPrimeConstraint(
			puzzle,
			TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME
		);
	}
	if (directed_path_is_region_sum_line) {
		out_str += directedPathIsRegionSumLineConstraint(TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE);
	}

	return out_str;
}
