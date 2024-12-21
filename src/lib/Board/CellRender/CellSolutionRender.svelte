<script lang="ts">
	import { cellToCellCenterVector } from '$src/lib/utils/SquareCellGridRenderUtils';

	export let r: number;
	export let c: number;
	export let val: number | null;

	const fontSize = 0.8;
	const fontWeight = 400;

	$: center = cellToCellCenterVector({ r, c });
</script>

{#if val !== null}
	<text
		class="cell-solution cell-outline"
		x={center.x}
		y={center.y}
        dominant-baseline="central"
		font-size={fontSize}
		font-weight={fontWeight}
	>
		{val}
	</text>
{/if}

<style>
	.cell-solution {
		fill: var(--cell-given-color);
		text-anchor: middle;
	}

	.cell-outline {
		stroke: var(--cell-digit-outline);
		stroke-width: 0.005;
	}
</style>
