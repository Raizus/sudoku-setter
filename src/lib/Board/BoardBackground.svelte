<script lang="ts">
	import type { Grid } from '$lib/Puzzle/Grid/Grid';
	import { getCagePathStr } from '$lib/utils/SquareCellGridRenderUtils';

	export let grid: Grid;

	$: cells = grid.getAllCells().map((cell) => {
		return { r: cell.r, c: cell.c };
	});

	$: pathStr = getCagePathStr(cells, 0);
</script>

<g class="board-background" mask="url(#fog-mask-fog)">
	<path d={pathStr} />
</g>

<style>
	.board-background {
		stroke: none;
		stroke-width: 0;
	}

	.board-background path {
		fill: var(--grid-background-color);
	}
</style>
