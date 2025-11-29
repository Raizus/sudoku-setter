<script lang="ts">
	import { filterElements } from '../Puzzle/Constraints/ElementsDict';
	import { getDefaultBoundingBox, type PuzzleI } from '../Puzzle/Puzzle';
	import { isDiagonalConstraint, isOverlayTool, isUnderlayTool } from '../Puzzle/Tools';
	import type { Rectangle } from '../Types/types';
	import BoardBackground from './BoardBackground.svelte';
	import CellValuesRender from './CellRender/CellValuesRender.svelte';
	import HighlightsRender from './CellRender/HighlightsRender.svelte';
	import DiagonalElementsRender from './Constraints/DiagonalElementsRender.svelte';
	import FogLightBulbDefs from './Fog/FogLightBulbDefs.svelte';
	import GridBorderRender from './GridLines/GridBorderRender.svelte';
	import GridLinesRender from './GridLines/GridLinesRender.svelte';
	import GridRegionsRender from './GridLines/GridRegionsRender.svelte';
	import OverlayRender from './OverlayRender.svelte';
	import UnderlayRender from './UnderlayRender.svelte';

	export let svgRef: SVGSVGElement | null = null;
	export let puzzle: PuzzleI;

	$: grid = puzzle.grid;
	$: gridShape = { nRows: grid.nRows, nCols: grid.nCols };

	$: elements = puzzle.elementsDict;
	$: underlay_elements = filterElements(elements, isUnderlayTool);
	$: overlay_elements = filterElements(elements, isOverlayTool);
	$: diagonal_elements = filterElements(elements, isDiagonalConstraint);
	$: cells = grid.getAllCells();
	$: bbox = getDefaultBoundingBox(grid, elements);

    const enable_fog_mask = false;

	function getViewbox(boundingBox: Rectangle) {
		return `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;
	}
</script>

<svg
	bind:this={svgRef}
	id="board-preview-svg"
	class="puzzle-board"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid meet"
	tabindex="-1"
	viewBox={getViewbox(bbox)}
>
	<FogLightBulbDefs />
	<!-- <FogDefs {gridShape} /> -->

	<BoardBackground {grid} />
	<!-- <FogCover {gridShape} /> -->

	<GridBorderRender {gridShape} />

	<g class="highlights-layer">
		{#each cells as cell}
			<HighlightsRender {cell} />
		{/each}
	</g>

	<!-- <FogLightsRender element={$fogLightsStore} /> -->

	<!-- underlay elements - below the grid lines -->
	<UnderlayRender {underlay_elements} {enable_fog_mask}/>

	<DiagonalElementsRender {diagonal_elements} />

	<GridLinesRender {cells} />
	<GridRegionsRender {cells} />

	<!-- overlay elements - above the grid lines -->
	<OverlayRender {overlay_elements} {enable_fog_mask}/>

	<g class="cell-values-layer">
		{#each cells as cell}
			<CellValuesRender {cell} />
		{/each}
	</g>
</svg>

<style>
	.puzzle-board {
		position: relative;
	}
</style>
