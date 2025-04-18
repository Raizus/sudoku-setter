<script lang="ts">
	import {
		cellsStore,
		gridStore,
		showFogStore,
		solutionStore,
		toolStore
	} from '$stores/BoardStore';
	import { fogLightsStore } from '$stores/ElementsStore';
	import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
	import type { Cell } from '../Puzzle/Grid/Cell';
	import type { Grid } from '../Puzzle/Grid/Grid';
	import type { GridShape, Rectangle } from '../Types/types';
	import { getCagePathStr } from '../utils/SquareCellGridRenderUtils';

	export let boundingBox: Rectangle;
	export let gridShape: GridShape;

	$: show_fog = $showFogStore;
	$: solution = $solutionStore;
	$: grid = $gridStore;
	$: fog_lights = $fogLightsStore;
	$: fog_coords = getFoggedCells(grid, fog_lights);
	$: fogPathStr = getCagePathStr(fog_coords, 0);

	function getFogLightCells(fog_lights: Record<string, CellToolI>) {
		const light_cells: Cell[] = [];
		if (!fog_lights) return light_cells;
		for (const fog_light of Object.entries(fog_lights)) {
			const coord = fog_light[1].cell;
			const cell = grid.getCell(coord.r, coord.c);
			if(cell) light_cells.push(cell);
		}
		return light_cells;
	}

	function getFoggedCells(grid: Grid, fog_lights: Record<string, CellToolI>) {
		const light_cells = getFogLightCells(fog_lights);
		const cells = grid.getAllCells();
		const fogged_cells = cells.filter((cell) => !light_cells.includes(cell) );
		const fog_coords = [...fogged_cells].map((cell) => cell.toCoords());

		// if (!solution) {
		// 	const fog_coords = fogged_cells.map((cell) => cell.toCoords());
		// 	return fog_coords;
		// }

		// // when the value in a cell is correct, the fog on that cell
		// // and all its neighbourhood (8 cells around it) is lifted
		// const correct_cells = cells.filter((cell) => cell.value === solution[cell.r][cell.c]);
		// let cc_neighbour: Set<Cell> = new Set();
		// for (const cell of correct_cells) {
		// 	const neighbour = grid.getNeighboorCells(cell);
		// 	cc_neighbour = new Set([...neighbour, cell]);
		// }
		// const fogged_cells2 = new Set(fogged_cells).difference(cc_neighbour);
		// let fog_coords = [...fogged_cells2].map((cell) => cell.toCoords());
		return fog_coords;
	}


</script>

<defs id="fog-defs">
	<g id="fog-shape">
		<path class="fog-path" d={fogPathStr} />
	</g>
	<g id="fog-edge" class:disabled={!show_fog}>
		<use stroke-width={0.4} class="fog-edge-1" href="#fog-shape" />
		<use stroke-width={0.3} class="fog-edge-2" href="#fog-shape" />
		<use stroke-width={0.2} class="fog-edge-3" href="#fog-shape" />
		<use stroke-width={0.1} class="fog-edge-4" href="#fog-shape" />
		<use href="#fog-shape" />
	</g>
	<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class:disabled={!show_fog}>
		<rect
			class="fog-mask-white"
			x={boundingBox.x}
			y={boundingBox.y}
			width={boundingBox.width}
			height={boundingBox.height}
		/>
		<g class="fog-mask-black">
			<use href="#fog-edge" />
		</g>
	</mask>
	<mask id="fog-mask-light" maskUnits="userSpaceOnUse">
		<rect
			class="fog-mask-white"
			x={boundingBox.x}
			y={boundingBox.y}
			width={boundingBox.width}
			height={boundingBox.height}
		/>
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
