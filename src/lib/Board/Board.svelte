<script lang="ts">
	import type { GridShape } from './../Types/types.ts';
	import type { Rectangle } from '$lib/Types/types.js';
	import { cellsStore, gridStore, toolStore } from '$stores/BoardStore';
	import { localConstraintsStore } from '$stores/BoardStore.js';
	import CursorRender from './CursorRender.svelte';
	import GridBorderRender from './GridLines/GridBorderRender.svelte';
	import GridLinesRender from './GridLines/GridLinesRender.svelte';
	import GridRegionsRender from './GridLines/GridRegionsRender.svelte';
	import SelectionRender from './SelectionRender.svelte';
	import BoardBackground from './BoardBackground.svelte';
	import ArrowToolsRender from './Constraints/ArrowToolsRender.svelte';
	import SingleCellToolsRender from './Constraints/SingleCellToolsRender.svelte';
	import CellValuesRender from './CellRender/CellValuesRender.svelte';
	import HighlightsRender from './CellRender/HighlightsRender.svelte';
	import { isOutsideDirectionTool, type TOOLID } from '$lib/Puzzle/Tools';
	import type { OutsideDirectionToolI } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
	import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
	import PenToolRender from './PenToolRender/PenToolRender.svelte';
	import SeenCellsRender from './SeenCellsRender.svelte';
	import ConflictsRender from './ConflictsRender.svelte';
	import DiagonalsRender from './Constraints/DiagonalsRender.svelte';
	import FogDefs from './FogDefs.svelte';
	import FogCover from './FogCover.svelte';
	import SolutionRender from './SolutionRender.svelte';
	import GenericToolsRender from './Constraints/GenericToolsRender.svelte';
	import { cageToolsStore, centerCornerOrEdgeToolsStore, cloneToolsStore, cornerToolsStore, edgeToolsStore, lineToolsStore, outsideDirectionToolsStore } from '$stores/ElementsStore.js';
	import EdgeToolRender from './Constraints/EdgeToolRender.svelte';
	import CornerToolRender from './Constraints/CornerToolRender.svelte';
	import CenterCornerOrEdgeToolRender from './Constraints/CenterCornerOrEdgeToolRender.svelte';
	import LineToolRender from './Constraints/LineToolRender.svelte';
	import CageToolRender from './Constraints/CageToolRender.svelte';
	import CloneToolRender from './Constraints/CloneToolRender.svelte';
	import OutsideDirectionToolRender from './Constraints/OutsideDirectionToolRender.svelte';

	export let svgRef: SVGSVGElement | null = null;

	$: grid = $gridStore;
	$: gridShape = { nRows: grid.nRows, nCols: grid.nCols } as GridShape;

	function hasOutsideCells(): boolean {
		for (const [toolId, elementGroup] of $localConstraintsStore.entries()) {
			if (!isOutsideDirectionTool(toolId)) continue;

			const hasCellOffGrid = Object.entries(
				elementGroup as Record<string, OutsideDirectionToolI>
			).some(([id, constraint]) => {
				return !isCellOnGrid(constraint.cell, gridShape);
			});
			if (hasCellOffGrid) return true;
		}
		return false;
	}

	function getBoundingBox(gridShape: GridShape, toolId: TOOLID): Rectangle {
		const outsideCells = hasOutsideCells();
		const ousideTool = isOutsideDirectionTool(toolId);

		const margin = outsideCells || ousideTool ? 1 : 0.2;

		const x0 = -margin;
		const y0 = -margin;
		const width = gridShape.nCols + 2 * margin;
		const height = gridShape.nRows + 2 * margin;

		return { x: x0, y: y0, width, height };
	}

	$: boundingBox = getBoundingBox(gridShape, $toolStore);

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
	<FogDefs {boundingBox} {gridShape} />
	<FogCover {gridShape} />

	<BoardBackground grid={$gridStore} />
	<GridBorderRender {gridShape} />

	<g class="highlights-layer">
		{#each $cellsStore as cell}
			<HighlightsRender {cell} />
		{/each}
	</g>

	<SeenCellsRender />

	<SingleCellToolsRender />

	<!-- <CageToolsRender /> -->
	<GenericToolsRender
		elements={$cageToolsStore}
		g_name={'cage-tools-layer'}
		Component={CageToolRender}
	/>
	
	<!-- <LineToolsRender /> -->
	<GenericToolsRender
		elements={$lineToolsStore}
		g_name={'line-tools-layer'}
		Component={LineToolRender}
	/>

	<!-- <CloneToolsRender /> -->
	<GenericToolsRender
		elements={$cloneToolsStore}
		g_name={'clone-tools-layer'}
		Component={CloneToolRender}
	/>

	<GridLinesRender />
	<DiagonalsRender />
	<GridRegionsRender />

	<ArrowToolsRender {boundingBox} />

	<!-- <OutsideDirectionToolsRender /> -->
	<GenericToolsRender
		elements={$outsideDirectionToolsStore}
		g_name={'outside-direction-tools-layer'}
		Component={OutsideDirectionToolRender}
	/>

	<SelectionRender {boundingBox} />
	<CursorRender />

	<!-- <EdgeToolsRender /> -->
	<GenericToolsRender
		elements={$edgeToolsStore}
		g_name={'edge-tools-layer'}
		Component={EdgeToolRender}
	/>
	<!-- <CornerToolsRender /> -->
	<GenericToolsRender
		elements={$cornerToolsStore}
		g_name={'corner-tools-layer'}
		Component={CornerToolRender}
	/>
	<!-- <CenterCornerOrEdgeToolsRender /> -->
	<GenericToolsRender
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
</svg>
