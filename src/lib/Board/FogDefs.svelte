<script lang="ts">
	import {
		cellsStore,
		enableFogMaskStore,
		gridStore,
		hasFogStore,
		solutionStore
	} from '$stores/BoardStore';
	import { customFogClearingStore, fogLightsStore } from '$stores/ElementsStore';
	import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
	import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
	import type { Cell } from '../Puzzle/Grid/Cell';
	import type { Solution } from '../Puzzle/Puzzle';
	import { TOOLS } from '../Puzzle/Tools';
	import type { GridShape, Rectangle } from '../Types/types';
	import { getCagePathStr } from '../utils/SquareCellGridRenderUtils';

	export let gridShape: GridShape;
	export let boundingBox: Rectangle;

	$: disable_fog_mask = !$enableFogMaskStore;
	// $: has_fog = $hasFogStore;
	$: solution = $solutionStore;
	$: grid = $gridStore;
	$: fog_lights = $fogLightsStore;
	$: custom_fog_clearing = $customFogClearingStore;
	$: fogPathStr = getCagePathStr(fog_coords, 0);
	$: all_cells = $cellsStore;
	$: fog_coords = getFoggedCells(all_cells, fog_lights, custom_fog_clearing);

	function getFogLightCells(fog_lights: Record<string, CellToolI>) {
		const light_cells: Cell[] = [];
		if (!fog_lights) return light_cells;
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
		fog_lights: Record<string, CellToolI>,
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

<defs id="fog-defs">
	<g id="fog-shape">
		<path class="fog-path" d={fogPathStr} />
	</g>
	<g id="fog-edge">
		<use stroke-width={0.4} class="fog-edge-1" href="#fog-shape" />
		<use stroke-width={0.3} class="fog-edge-2" href="#fog-shape" />
		<use stroke-width={0.2} class="fog-edge-3" href="#fog-shape" />
		<use stroke-width={0.1} class="fog-edge-4" href="#fog-shape" />
		<use href="#fog-shape" />
	</g>
	{#if !disable_fog_mask}
		<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class:disabled={disable_fog_mask}>
			<rect class="fog-mask-white" x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} />
			<g class="fog-mask-black">
				<use href="#fog-edge" />
			</g>
		</mask>
	{/if}
	<mask id="fog-mask-light" maskUnits="userSpaceOnUse">
		<rect class="fog-mask-white" x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} />
		<rect
			class="fog-mask-black"
			x={0}
			y={0}
			width={gridShape.nCols}
			height={gridShape.nRows}
			mask="url(#fog-mask-fog)"
		/>
	</mask>
</defs>

<style>
	.fog-mask-white {
		fill: white;
	}

	.fog-mask-black {
		fill: black;
	}

	.fog-edge-1 {
		stroke: rgb(180, 180, 180);
		opacity: 0.2;
	}
	.fog-edge-2 {
		stroke: rgb(180, 180, 180);
		opacity: 0.3;
		/* stroke: rgb(160, 160, 160); */
	}
	.fog-edge-3 {
		stroke: rgb(180, 180, 180);
		opacity: 0.5;
		/* stroke: rgb(140, 140, 140); */
	}
	.fog-edge-4 {
		stroke: rgb(180, 180, 180);
		opacity: 0.7;
		/* stroke: rgb(120, 120, 120); */
	}

	#fog-mask-fog.disabled {
		& .fog-mask-black,
		.fog-mask-white {
			fill: white;
		}
	}

	/* #fog-edge.disabled > * {
		stroke: white;
	} */
</style>
