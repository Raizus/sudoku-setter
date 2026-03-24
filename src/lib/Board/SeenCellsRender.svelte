<script lang="ts">
	import { cellsSeenByCells } from '$lib/Puzzle/SeenCells';
	import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import { isCellInputTool, type TOOLID } from '$lib/Puzzle/Tools';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import { stateStore } from '$stores/StateStore';
	import type { PuzzleI } from '../Puzzle/Puzzle';
	import CageRender from './Constraints/CageRender.svelte';

	export let tool: TOOLID;

	const puzzleStore = stateStore.puzzleStore;
	const selectionStore = stateStore.selectionStore;

	$: selection = $selectionStore.cells;
	$: showSeen = $settingsStore.highlightCellsSeenBySelection;
	$: puzzle = $puzzleStore;

	$: showSelection = isCellInputTool(tool);
	$: seen_color = $settingsStore.seen_cells_color;

	$: shape = {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: 0,
		stroke: 'none',
		fill: seen_color,
		inset: 0.15,
		connectDiag: false
	};

	function getSeen(selected: GridCoordI[], _puzzle: PuzzleI): GridCoordI[] {
		if (!selected.length) return [];
		const cells = cellsSeenByCells(_puzzle, selected);
		return cells;
	}

	$: enable_fog_mask = $enableFogMaskStore;
</script>

{#if showSeen && showSelection}
	<g class="seen-cells-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
		<CageRender cells={getSeen(selection, puzzle)} {shape} />
	</g>
{/if}

<style>
	.seen-cells-layer {
		opacity: 0.1;
	}
</style>
