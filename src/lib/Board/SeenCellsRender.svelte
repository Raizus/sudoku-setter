<script lang="ts">
	import { cellsSeenByCells } from '$lib/Puzzle/SeenCells';
	import { SHAPE_TYPES, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { isCellInputTool } from '$lib/Puzzle/Tools';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { enableFogMaskStore, puzzleStore, toolStore } from '$stores/BoardStore';
	import { selectionStore } from '$stores/SelectionStore';
	import { settingsStore } from '$stores/SettingsStore';
	import type { PuzzleI } from '../Puzzle/Puzzle';
	import CageRender from './Constraints/CageRender.svelte';

	$: selection = $selectionStore.cells;
	$: showSeen = $settingsStore.highlightCellsSeenBySelection;
	$: puzzle = $puzzleStore;

	$: showSelection = isCellInputTool($toolStore);
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
		const cells = cellsSeenByCells(puzzle, selected);
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
