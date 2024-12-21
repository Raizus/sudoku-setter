<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import { cellToCellCenterVector } from '$lib/utils/SquareCellGridRenderUtils';

	export let cell: Cell;
	export let seen_values: number[];

	const fontSize = 0.25;

	$: center = cellToCellCenterVector({ r: cell.r, c: cell.c });

	function is_conflict(pm_mark_val: number) {
		const found = seen_values.find((val) => val === pm_mark_val);
		if (found === undefined) return false;
		return true;
	}
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
		fill: var(--cell-digit-color);

		&>.conflict {
			fill: rgb(255, 41, 41);
		}
	}
</style>
