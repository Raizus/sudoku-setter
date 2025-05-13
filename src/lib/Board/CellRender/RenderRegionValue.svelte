<script lang="ts">
	import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
	import { cellToCellCenterVector } from '$src/lib/utils/SquareCellGridRenderUtils';

	export let cell: Cell;

	const fontSize = 0.8;
	const fontWeight = 400;
	$: center = cellToCellCenterVector({ r: cell.r, c: cell.c });
</script>

{#if cell.region !== null}
	<text
		class="cell-region"
		x={center.x}
		y={center.y}
		dominant-baseline="central"
		font-size={fontSize}
		font-weight={fontWeight}
	>
		{cell.region}
	</text>
{/if}

<style>
	.cell-region {
		fill: var(--cell-region-value-color);
		text-anchor: middle;
	}
</style>
