<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import { cellToCellCenterVector } from '$lib/utils/SquareCellGridRenderUtils';
	import { settingsStore } from '$stores/SettingsStore';

	export let cell: Cell;
	export let seen_values: number[];

	const fontSize = 0.25;

	function is_conflict(pm_mark_val: number) {
		const found = seen_values.find((val) => val === pm_mark_val);
		if (found === undefined) return false;
		return true;
	}

	$: center = cellToCellCenterVector({ r: cell.r, c: cell.c });
	$: cell_digit_color = $settingsStore.non_given_color;
</script>

{#if cell.centerMarks.length}
	<g class="center-marks-group">
		<text
			x={center.x}
			y={center.y}
			class="center-mark"
			font-size={fontSize}
			dominant-baseline="central"
			textLength={cell.centerMarks.length > 5 ? '0.9' : undefined}
			fill={cell_digit_color}
		>
			{#each cell.centerMarks as mark}
				<tspan class:conflict={is_conflict(mark)}>{mark}</tspan>
			{/each}
		</text>
	</g>
{/if}

<style>
	.center-mark {
		text-anchor: middle;

		&>.conflict {
			fill: var(--cell-digit-conflict-color);
		}
	}
</style>
