<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import {
		cellToCellCenterVector,
		getCornerMarksOffset
	} from '$lib/utils/SquareCellGridRenderUtils';

	export let cell: Cell;
	export let seen_values: number[];

	const fontSize = 0.25;
	const inset = 0.28;

	function getPositions(_cell: Cell) {
		const corners = _cell.cornerMarks.slice(0, 8);
		const center = cellToCellCenterVector({ r: _cell.r, c: _cell.c });

		return corners.map((value, idx) => {
			const cornerOffset = getCornerMarksOffset(idx, inset);
			const pos = center.add(cornerOffset);

			return {
				pos,
				value,
				idx
			};
		});
	}

	function is_conflict(pm_mark_val: number) {
		const found = seen_values.find((val) => val === pm_mark_val);
		if (found === undefined) return false;
		return true;
	}
</script>

{#if cell.cornerMarks.length}
	<g class="corner-marks-group">
		{#each getPositions(cell) as { pos, value }}
			<text
				class:conflict={is_conflict(value)}
				x={pos.x}
				y={pos.y}
				class="corner-mark"
				font-size={fontSize}
				dominant-baseline="central"
			>
				{value}
			</text>
		{/each}
	</g>
{/if}

<style>
	.corner-mark {
		text-anchor: middle;
		fill: var(--cell-digit-color);

		&.conflict {
			fill: rgb(255, 41, 41);
		}
	}
</style>
