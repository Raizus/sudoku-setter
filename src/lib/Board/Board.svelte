<script lang="ts">
	import type { GridShape } from './../Types/types';
	import type { Rectangle } from '$lib/Types/types';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import { stateStore } from '$stores/StateStore';

	// components
	import CursorRender from './CursorRender.svelte';
	import GridBorderRender from './GridLines/GridBorderRender.svelte';
	import GridLinesRender from './GridLines/GridLinesRender.svelte';
	import GridRegionsRender from './GridLines/GridRegionsRender.svelte';
	import SelectionRender from './SelectionRender.svelte';
	import BoardBackground from './BoardBackground.svelte';
	import CellValuesRender from './CellRender/CellValuesRender.svelte';
	import HighlightsRender from './CellRender/HighlightsRender.svelte';
	import PenToolRender from './PenToolRender/PenToolRender.svelte';
	import SeenCellsRender from './SeenCellsRender.svelte';
	import ConflictsRender from './ConflictsRender.svelte';
	import SolutionRender from './SolutionRender.svelte';
	import ToolsLayerRender from './Constraints/ToolsLayerRender.svelte';
	import CornerConstraintGroupRender from './Constraints/CornerConstraintGroupRender.svelte';
	import CenterCornerOrEdgeToolRender from './Constraints/CenterCornerOrEdgeToolGroupRender.svelte';
	import CornerLineConstraintGroupRender from './Constraints/CornerLineConstraintGroupRender.svelte';
	import EdgeToolRender from './Constraints/EdgeConstraintGroupRender.svelte';
	import FogLightsRender from './Constraints/FogLightsRender.svelte';
	import UnderlayRender from './UnderlayRender.svelte';
	import DiagonalElementsRender from './Constraints/DiagonalElementsRender.svelte';
	import FogLightBulbDefs from './Fog/FogLightBulbDefs.svelte';
	import FogCover from './Fog/FogCover.svelte';
	import ToolPreviewRender from './ToolPreviewRender.svelte';
	import { setContext } from 'svelte';
	import CreateFogDefs from './Fog/CreateFogDefs.svelte';
	import OutlineFilterDefs from './OutlineFilterDefs.svelte';

	export let svgRef: SVGSVGElement | null = null;

	const gridStore = stateStore.gridStore;
	const toolStore = stateStore.toolStore;
	const cellsStore = stateStore.cellsStore;
	const edgeToolsStore = stateStore.edgeToolsStore;
	const cornerToolsStore = stateStore.cornerToolsStore;
	const diagonalElementsStore = stateStore.diagonalElementsStore;
	const centerCornerOrEdgeToolsStore = stateStore.centerCornerOrEdgeToolsStore;
	const cornerLineToolsStore = stateStore.cornerLineToolsStore;
	const fogLightsStore = stateStore.fogLightsStore;
	const underlayElementsStore = stateStore.underlayElementsStore;
	const boundingBoxStore = stateStore.boundingBoxStore;
	const defaultBboxStore = stateStore.defaultBoundingBoxStore;

	setContext('currentConstraint', stateStore.currentConstraintStore);

	let previous_default_bbox = $defaultBboxStore;

	$: grid = $gridStore;
	$: gridShape = { nRows: grid.nRows, nCols: grid.nCols } as GridShape;
	$: boundingBox = $boundingBoxStore;
	$: defaultBbox = $defaultBboxStore;

	$: viewBox = getViewbox(boundingBox);

	function getViewbox(boundingBox: Rectangle) {
		return `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;
	}

	function compareBbox(bbox1: Rectangle, bbox2: Rectangle) {
		if (bbox1.x !== bbox2.x || bbox1.y !== bbox2.y) return false;
		if (bbox1.width !== bbox2.width || bbox1.height !== bbox2.height) return false;

		return true;
	}

	$: {
		if (!compareBbox(previous_default_bbox, defaultBbox)) {
			previous_default_bbox = defaultBbox;
			viewBox = getViewbox(defaultBbox);
		}
	}
</script>

<svg
	bind:this={svgRef}
	id="board-svg"
	class="puzzle-board"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid meet"
	tabindex="-1"
	{viewBox}
>
	<!-- TODO: NOTE that the outline filters make the rendering considerably slower, compared with rendering outline components -->
	<OutlineFilterDefs grid_shape={gridShape} />
	<FogLightBulbDefs />
	<CreateFogDefs {gridShape} />

	<BoardBackground {grid} />
	<FogCover {gridShape} />

	<GridBorderRender {gridShape} />

	<g class="highlights-layer">
		{#each $cellsStore as cell}
			<HighlightsRender {cell} tool={$toolStore} />
		{/each}
	</g>

	<SeenCellsRender tool={$toolStore} />

	<FogLightsRender element={$fogLightsStore} tool={$toolStore} />

	<!-- underlay elements - below the grid lines -->
	<UnderlayRender
		underlay_elements={$underlayElementsStore}
		enable_fog_mask={$enableFogMaskStore}
	/>
	<DiagonalElementsRender diagonal_elements={$diagonalElementsStore} />

	<GridLinesRender cells={grid.getAllCells()} />
	<GridRegionsRender cells={$cellsStore} />

	<!-- overlay elements - above the grid lines -->

	<!-- CornerLineToolsRender -->
	<ToolsLayerRender
		elements={$cornerLineToolsStore}
		g_name={'corner-line-tools-layer'}
		Component={CornerLineConstraintGroupRender}
	/>

	<SelectionRender {gridShape} tool={$toolStore} />
	<CursorRender tool={$toolStore} />

	<!-- EdgeToolsRender -->
	<ToolsLayerRender
		elements={$edgeToolsStore}
		g_name={'edge-tools-layer'}
		Component={EdgeToolRender}
	/>

	<!-- CornerToolsRender -->
	<ToolsLayerRender
		elements={$cornerToolsStore}
		g_name={'corner-tools-layer'}
		Component={CornerConstraintGroupRender}
	/>

	<!-- CenterCornerOrEdgeToolsRender -->
	<ToolsLayerRender
		elements={$centerCornerOrEdgeToolsStore}
		g_name={'center-corner-edge-tools-layer'}
		Component={CenterCornerOrEdgeToolRender}
	/>

	<PenToolRender />

	<g class="cell-values-layer">
		{#each $cellsStore as cell}
			<CellValuesRender {cell} tool={$toolStore} />
		{/each}
	</g>

	<SolutionRender />
	<ConflictsRender />

	<ToolPreviewRender tool={$toolStore} />
</svg>

<style>
	.puzzle-board {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: default;
		user-select: none;
	}
</style>
