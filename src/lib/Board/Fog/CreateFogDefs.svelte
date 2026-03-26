<script lang="ts">
	import type { ConstraintsElement, CellToolI, Solution } from '$src/lib/Puzzle/puzzle_schema';
	import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import type { GridShape } from '$src/lib/Types/types';
	import { getCagePathStr } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import { stateStore } from '$stores/StateStore';
	import FogDefs from './FogDefs.svelte';

	export let gridShape: GridShape;

	const solutionStore = stateStore.solutionStore;
	const gridStore = stateStore.gridStore;
	const cellsStore = stateStore.cellsStore;
	const fogLightsStore = stateStore.fogLightsStore;
	const customFogClearingStore = stateStore.customFogClearingStore;

	$: disable_fog_mask = !$enableFogMaskStore;
	// $: has_fog = $hasFogStore;
	$: solution = $solutionStore;
	$: grid = $gridStore;
	$: fog_lights_element = $fogLightsStore;
	$: custom_fog_clearing = $customFogClearingStore;
	$: fogPathStr = getCagePathStr(fog_coords, 0);
	$: all_cells = $cellsStore;
	$: fog_coords = getFoggedCells(all_cells, fog_lights_element, custom_fog_clearing);

	function getFogLightCells(fog_lights_el: ConstraintsElement | undefined) {
		const light_cells: Cell[] = [];
		if (!fog_lights_el) return light_cells;

		const fog_lights = fog_lights_el.constraints as Record<string, CellToolI>;
		for (const fog_light of Object.entries(fog_lights)) {
			const coord = fog_light[1].cell;
			const cell = grid.getCell(coord.r, coord.c);
			if (cell) light_cells.push(cell);
		}
		return light_cells;
	}

	function getFilledCells(cells: Cell[]) {
		const filled_cells: Cell[] = [];
		for (const cell of cells) {
			if (cell.value !== null && !cell.given) filled_cells.push(cell);
		}
		return filled_cells;
	}

	function getCorrectCells(filled: Cell[], solution: Solution) {
		const correct_cells: Cell[] = [];
		if (solution) {
			for (const cell of filled) {
				const sol_val = solution[cell.r][cell.c];
				if (sol_val !== null && cell.value === sol_val && !cell.given) correct_cells.push(cell);
			}
		}
		return correct_cells;
	}

	function getFoggedCells(
		cells: Cell[],
		fog_lights: ConstraintsElement | undefined,
		fog_clearing_element: ConstraintsElement | undefined
	) {
		const light_cells = getFogLightCells(fog_lights);
		let fogged_cells = new Set(cells);

		// removed light cells from
		fogged_cells = fogged_cells.difference(new Set(light_cells));

		// use filled cells or cells that match the solution to find which cells to clear
		let target_cells = getFilledCells(cells);
		if (solution) {
			const correct_cells = getCorrectCells(target_cells, solution);
			target_cells = correct_cells;
		}

		// remove other cells based on the fog clearing element
		const neg_constr = fog_clearing_element?.negative_constraints;
		if (neg_constr) {
			// removed filled or correct cells from fogged_cells
			const cells_to_clear: Set<Cell> = new Set();

			const clear_itself = !!neg_constr[TOOLS.FOG_CLEARING_ITSELF];
			if (clear_itself) {
				target_cells.forEach((cell) => cells_to_clear.add(cell));
			}
			const clear_orthogonal_neighbours = !!neg_constr[TOOLS.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS];
			if (clear_orthogonal_neighbours) {
				target_cells.forEach((cell) =>
					grid.getOrthogonallyAdjacentCells(cell).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}
			const clear_diagonal_neighbours = !!neg_constr[TOOLS.FOG_CLEARING_DIAGONAL_NEIGHBOURS];
			if (clear_diagonal_neighbours) {
				target_cells.forEach((cell) =>
					grid.getDiagonallyAdjacentCells(cell).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}
			const clear_containing_row = !!neg_constr[TOOLS.FOG_CLEARING_CONTAINING_ROW];
			if (clear_containing_row) {
				target_cells.forEach((cell) =>
					grid.getRow(cell.r).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}
			const clear_containing_column = !!neg_constr[TOOLS.FOG_CLEARING_CONTAINING_COLUMN];
			if (clear_containing_column) {
				target_cells.forEach((cell) =>
					grid.getCol(cell.c).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}
			const clear_knights_move = !!neg_constr[TOOLS.FOG_CLEARING_KNIGHTS_MOVE];
			if (clear_knights_move) {
				target_cells.forEach((cell) =>
					grid.getCellsByKnightMove(cell).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}

			fogged_cells = fogged_cells.difference(cells_to_clear);
		}

		const fog_coords = [...fogged_cells].map((cell) => cell.toCoords());
		return fog_coords;
	}
</script>

<FogDefs {fogPathStr} {gridShape} {disable_fog_mask} />
