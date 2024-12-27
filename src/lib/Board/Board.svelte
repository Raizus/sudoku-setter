<script lang="ts">
	import type { GridShape } from './../Types/types.ts';
	import OutsideDirectionToolsRender from './Constraints/OutsideDirectionToolsRender.svelte';
	import CloneToolsRender from './Constraints/CloneToolsRender.svelte';
	import LineToolsRender from './Constraints/LineToolsRender.svelte';
	import type { Rectangle } from '$lib/Types/types.js';
	import { cellsStore, gridStore, toolStore } from '$stores/BoardStore';
		import { localConstraintsStore } from '$stores/BoardStore.js';
	import CursorRender from './CursorRender.svelte';
	import GridBorderRender from './GridLines/GridBorderRender.svelte';
	import GridLinesRender from './GridLines/GridLinesRender.svelte';
	import GridRegionsRender from './GridLines/GridRegionsRender.svelte';
	import SelectionRender from './SelectionRender.svelte';
	import CageToolsRender from './Constraints/CageToolsRender.svelte';
	import BoardBackground from './BoardBackground.svelte';
	import CornerToolsRender from './Constraints/CornerToolsRender.svelte';
	import ArrowToolsRender from './Constraints/ArrowToolsRender.svelte';
	import SingleCellToolsRender from './Constraints/SingleCellToolsRender.svelte';
	import EdgeToolsRender from './Constraints/EdgeToolsRender.svelte';
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

	export let svgRef: SVGSVGElement | null = null;
	export let isPreview: boolean = false;

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

	{#if !isPreview}
		<SeenCellsRender />
	{/if}

	<SingleCellToolsRender />

	<GridLinesRender />
	<DiagonalsRender />
	<GridRegionsRender />

	<LineToolsRender />
	<ArrowToolsRender {boundingBox} />

	<CloneToolsRender />
	<CageToolsRender />

	<OutsideDirectionToolsRender />

	{#if !isPreview}
		<SelectionRender {boundingBox} />
		<CursorRender />
	{/if}

	<EdgeToolsRender />
	<CornerToolsRender />

	<PenToolRender />
	
	<g class="cell-values-layer">
		{#each $cellsStore as cell}
			<CellValuesRender {cell} />
		{/each}
	</g>
	<SolutionRender />

	<ConflictsRender />
</svg>
