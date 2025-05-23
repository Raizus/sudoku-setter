<script lang="ts">
	import type { GridShape } from './../Types/types.ts';
	import type { Rectangle } from '$lib/Types/types.js';
	import { cellsStore, gridStore, toolStore } from '$stores/BoardStore';
	import CursorRender from './CursorRender.svelte';
	import GridBorderRender from './GridLines/GridBorderRender.svelte';
	import GridLinesRender from './GridLines/GridLinesRender.svelte';
	import GridRegionsRender from './GridLines/GridRegionsRender.svelte';
	import SelectionRender from './SelectionRender.svelte';
	import BoardBackground from './BoardBackground.svelte';
	import CellValuesRender from './CellRender/CellValuesRender.svelte';
	import HighlightsRender from './CellRender/HighlightsRender.svelte';
	import {
		isCenterEdgeCornerTool,
		isCornerTool,
		isEdgeTool,
		isOutsideDirectionTool,
		isSimpleSingleCellTool,
		isSingleCellArrowTool,
		isSingleCellMultiArrowTool,
		TOOLS
	} from '$lib/Puzzle/Tools';
	import PenToolRender from './PenToolRender/PenToolRender.svelte';
	import SeenCellsRender from './SeenCellsRender.svelte';
	import ConflictsRender from './ConflictsRender.svelte';
	import SolutionRender from './SolutionRender.svelte';
	import ToolsLayerRender from './Constraints/ToolsLayerRender.svelte';
	import {
		centerCornerOrEdgeToolPreviewStore,
		centerCornerOrEdgeToolsStore,
		cornerLineToolsStore,
		cornerToolPreviewStore,
		cornerToolsStore,
		edgeToolPreviewStore,
		edgeToolsStore,
		fogLightsStore,
		outsideDirectionToolPreviewStore,
		simpleCellToolPreviewStore,
		singleCellArrowPreviewStore,
		singleCellMultiArrowPreviewStore
	} from '$stores/ElementsStore.js';
	import CornerToolRender from './Constraints/CornerToolRender.svelte';
	import CenterCornerOrEdgeToolRender from './Constraints/CenterCornerOrEdgeToolRender.svelte';
	import OutsideDirectionToolRender from './Constraints/OutsideDirectionToolRender.svelte';
	import CornerLineToolRender from './Constraints/CornerLineToolRender.svelte';
	import EdgeToolRender from './Constraints/EdgeToolRender.svelte';
	import SingleCellMultiArrowRender from './Constraints/SingleCellMultiArrowRender.svelte';
	import FogLightsRender from './Constraints/FogLightsRender.svelte';
	import EdgeToolPreviewRender from './Constraints/EdgeToolPreviewRender.svelte';
	import CornerToolPreviewRender from './Constraints/CornerToolPreviewRender.svelte';
	import SingleCellArrowPreviewRender from './Constraints/SingleCellArrowPreviewRender.svelte';
	import SimpleSingleCellToolPreviewRender from './Constraints/SimpleSingleCellToolPreviewRender.svelte';
	import UnderlayRender from './UnderlayRender.svelte';
	import CenterCornerOrEdgeToolPreviewRender from './Constraints/CenterCornerOrEdgeToolPreviewRender.svelte';
	import DiagonalElementsRender from './Constraints/DiagonalElementsRender.svelte';
	import { boundingBoxStore } from '$stores/BoundingBoxStore.js';
	import FogLightBulbDefs from './Fog/FogLightBulbDefs.svelte';
	import FogDefs from './Fog/FogDefs.svelte';
	import FogCover from './Fog/FogCover.svelte';

	export let svgRef: SVGSVGElement | null = null;

	$: grid = $gridStore;
	$: gridShape = { nRows: grid.nRows, nCols: grid.nCols } as GridShape;
	$: boundingBox = $boundingBoxStore;

	function getViewbox(boundingBox: Rectangle) {
		return `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;
	}
</script>

<svg
	bind:this={svgRef}
	id="board-svg"
	class="puzzle-board"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid meet"
	tabindex="-1"
	viewBox={getViewbox(boundingBox)}
>
	<FogLightBulbDefs />
	<FogDefs {gridShape} />

	<BoardBackground grid={$gridStore} />
	<FogCover {gridShape} />

	<GridBorderRender {gridShape} />

	<g class="highlights-layer">
		{#each $cellsStore as cell}
			<HighlightsRender {cell} />
		{/each}
	</g>

	<SeenCellsRender />

	<FogLightsRender element={$fogLightsStore} />

	<!-- underlay elements - below the grid lines -->
	<UnderlayRender />

	<DiagonalElementsRender />
	<GridLinesRender />
	<GridRegionsRender />

	<!-- overlay elements - above the grid lines -->

	<!-- CornerLineToolsRender -->
	<ToolsLayerRender
		elements={$cornerLineToolsStore}
		g_name={'corner-line-tools-layer'}
		Component={CornerLineToolRender}
	/>

	<SelectionRender {gridShape} />
	<CursorRender />

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
		Component={CornerToolRender}
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
			<CellValuesRender {cell} />
		{/each}
	</g>

	<SolutionRender />
	<ConflictsRender />

	<!-- ConstraintPreviewRender -->
	{#if isOutsideDirectionTool($toolStore) && $outsideDirectionToolPreviewStore}
		<OutsideDirectionToolRender tool={$outsideDirectionToolPreviewStore} />
	{/if}
	{#if isSimpleSingleCellTool($toolStore) && $toolStore !== TOOLS.FOG_LIGHTS && $simpleCellToolPreviewStore}
		<SimpleSingleCellToolPreviewRender tool_preview={$simpleCellToolPreviewStore} />
	{/if}
	{#if isSingleCellArrowTool($toolStore) && $singleCellArrowPreviewStore}
		<SingleCellArrowPreviewRender tool_preview={$singleCellArrowPreviewStore} />
	{/if}
	{#if isSingleCellMultiArrowTool($toolStore) && $singleCellMultiArrowPreviewStore}
		<SingleCellMultiArrowRender tool={$singleCellMultiArrowPreviewStore} />
	{/if}
	{#if isEdgeTool($toolStore) && $edgeToolPreviewStore}
		<EdgeToolPreviewRender tool_preview={$edgeToolPreviewStore} />
	{/if}
	{#if isCornerTool($toolStore) && $cornerToolPreviewStore}
		<CornerToolPreviewRender tool_preview={$cornerToolPreviewStore} />
	{/if}
	{#if isCenterEdgeCornerTool($toolStore) && $centerCornerOrEdgeToolPreviewStore}
		<CenterCornerOrEdgeToolPreviewRender tool_preview={$centerCornerOrEdgeToolPreviewStore} />
	{/if}
</svg>

<style>
	.puzzle-board {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
