<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import { cellsSeenByCell } from '$lib/Puzzle/SeenCells';
	import { TOOLS } from '$lib/Puzzle/Tools';
	import { cellToCellCenterVector } from '$lib/utils/SquareCellGridRenderUtils';
	import { enableFogMaskStore, puzzleStore, toolStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import CenterMarksRender from './CenterMarksRender.svelte';
	import CornerMarksRender from './CornerMarksRender.svelte';
	import RenderRegionValue from './RenderRegionValue.svelte';

	export let cell: Cell;
	const fontSize = 0.8;
	const fontWeight = 400;

	$: value = cell.value;
	$: given = cell.given;
	$: center = cellToCellCenterVector({ r: cell.r, c: cell.c });
	$: highlightPMconflicts = $settingsStore.highlightPencilmarkConflicts;
	$: puzzle = $puzzleStore;
	$: showSolution = $settingsStore.showSolution;
	$: cell_digit_color = given ? "var(--cell-given-color)" : $settingsStore.non_given_color;

	function getSeenValues(highlightPMconflicts: boolean, cell: Cell) {
		if (!highlightPMconflicts) {
			const seen_values: number[] = [];
			return seen_values;
		}

		const seen_cells = [...cellsSeenByCell(puzzle, cell.toCoords())];
		let seen_values = seen_cells.map((cell2) => cell2.value).filter((value) => value !== null);
		seen_values = [...new Set(seen_values)];
		return seen_values;
	}

	function getFogString(value: boolean | null) {
		if (value) return '1';
		return '0';
	}

	$: seen_values = getSeenValues(highlightPMconflicts, cell);
	$: hide_given = cell.given && $enableFogMaskStore;
</script>

{#if !showSolution}
	<g class="cell-values cell-digit-outline" class:hide-given={hide_given}>
		<!-- render region values -->
		{#if $toolStore === TOOLS.REGIONS}
			<RenderRegionValue {cell}/>
		{:else if value !== null}
			<!-- render cell values -->
			<text
				class="cell-value"
				class:given
				x={center.x}
				y={center.y}
				dominant-baseline="central"
				font-size={fontSize}
				font-weight={fontWeight}
				fill={cell_digit_color}
			>
				{value}
			</text>
		{:else}
			<!-- render pencilmarks -->
			<CornerMarksRender {cell} {seen_values} />
			<CenterMarksRender {cell} {seen_values} />
		{/if}
	</g>
{/if}

<style>
	.cell-value {
		text-anchor: middle;
	}

	.cell-values.hide-given {
		mask: url(#fog-mask-fog);
	}

	.cell-digit-outline {
		stroke: var(--cell-digit-outline);
		stroke-width: 0.005;
	}
</style>
