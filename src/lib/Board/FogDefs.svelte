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
	import { TOOLS } from '../Puzzle/Tools';
	import type { GridShape, Rectangle } from '../Types/types';
	import { getCagePathStr } from '../utils/SquareCellGridRenderUtils';

	export let gridShape: GridShape;

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

	function getFoggedCells(
		cells: Cell[],
		fog_lights: Record<string, CellToolI>,
		fog_clearing_element: ConstraintsElement | undefined
	) {
		const light_cells = getFogLightCells(fog_lights);
		let fogged_cells = new Set(cells);

		// removed light cells from
		fogged_cells = fogged_cells.difference(new Set(light_cells));
		const filled_cells = getFilledCells(cells);

		// remove other cells based on the fog clearing element
		const neg_constr = fog_clearing_element?.negative_constraints;
		if (neg_constr) {
			const clear_itself = !!neg_constr[TOOLS.FOG_CLEARING_ITSELF];
			const clear_orthogonal_neighbours = !!neg_constr[TOOLS.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS];
			const clear_diagonal_neighbours = !!neg_constr[TOOLS.FOG_CLEARING_DIAGONAL_NEIGHBOURS];

			// removed filled or correct cells from fogged_cells
			const cells_to_clear: Set<Cell> = new Set();
			if (clear_itself) {
				filled_cells.forEach((cell) => cells_to_clear.add(cell));
			}
			if (clear_orthogonal_neighbours) {
				filled_cells.forEach((cell) =>
					grid.getOrthogonallyAdjacentCells(cell).forEach((cell2) => cells_to_clear.add(cell2))
				);
			}
			if (clear_diagonal_neighbours) {
				filled_cells.forEach((cell) =>
					grid.getDiagonallyAdjacentCells(cell).forEach((cell2) => cells_to_clear.add(cell2))
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
	<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class:disabled={disable_fog_mask}>
		<rect class="fog-mask-white" x="0%" y="0%" width="100%" height="100%" />
		<g class="fog-mask-black">
			<use href="#fog-edge" />
		</g>
	</mask>
	<mask id="fog-mask-light" maskUnits="userSpaceOnUse">
		<rect class="fog-mask-white" x="0%" y="0%" width="100%" height="100%" />
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

	#fog-edge.disabled > * {
		stroke: white;
	}
</style>
