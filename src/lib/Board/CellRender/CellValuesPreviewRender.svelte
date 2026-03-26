<script lang="ts">
	import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
	import { cellToCellCenterVector } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { settingsStore } from '$stores/SettingsStore';
	import CenterMarksRender from './CenterMarksRender.svelte';
	import CornerMarksRender from './CornerMarksRender.svelte';

	export let cell: Cell;
	export let enable_fog_mask = false;

	const fontSize = 0.8;
	const fontWeight = 400;

	$: value = cell.value;
	$: given = cell.given;
	$: center = cellToCellCenterVector({ r: cell.r, c: cell.c });
	$: cell_digit_color = given ? 'var(--cell-given-color)' : $settingsStore.non_given_color;
	$: hide_given = cell.given && enable_fog_mask;
</script>

<g class="cell-values cell-digit-outline" class:hide-given={hide_given}>
	<!-- render region values -->
	{#if value !== null}
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
		<CornerMarksRender {cell} seen_values={[]} />
		<CenterMarksRender {cell} seen_values={[]} />
	{/if}
</g>

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
