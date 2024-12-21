<script lang="ts">
	import { TOOLS } from '$lib/Puzzle/Tools';
	import { gridStore } from '$stores/BoardStore';
		import { globalConstraintsStore } from '$stores/BoardStore';

	$: global_constraints = $globalConstraintsStore;
	$: positive_diag = !!global_constraints.get(TOOLS.POSITIVE_DIAGONAL);
	$: negative_diag = !!global_constraints.get(TOOLS.NEGATIVE_DIAGONAL);
	$: negative_antidiag = !!global_constraints.get(TOOLS.NEGATIVE_ANTIDIAGONAL);
	$: positive_antidiag = !!global_constraints.get(TOOLS.POSITIVE_ANTIDIAGONAL);
	$: odd_even_mirror_negative_diag = !!global_constraints.get(
		TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL
	);
	$: odd_even_mirror_positive_diag = !!global_constraints.get(
		TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL
	);
	$: grid = $gridStore;

	const tl_x = 0;
	const tl_y = 0;
	$: tr_x = grid.nCols;
	const tr_y = 0;

	const bl_x = 0;
	$: bl_y = grid.nRows;
	$: br_x = grid.nCols;
	$: br_y = grid.nRows;
</script>

<g class="diagonals-layer" mask="url(#fog-mask-fog)">
	{#if negative_diag}
		<line class="diag" x1={tl_x} x2={br_x} y1={tl_y} y2={br_y} />
	{/if}
	{#if negative_antidiag}
		<line class="antidiag" x1={tl_x} x2={br_x} y1={tl_y} y2={br_y} />
	{/if}
	{#if odd_even_mirror_negative_diag}
		<line class="odd-even-mirror-diag" x1={tl_x} x2={br_x} y1={tl_y} y2={br_y} />
	{/if}
	{#if positive_diag}
		<line class="diag" x1={tr_x} x2={bl_x} y1={tr_y} y2={bl_y} />
	{/if}
    {#if positive_antidiag}
		<line class="antidiag" x1={tr_x} x2={bl_x} y1={tr_y} y2={bl_y} />
	{/if}
	{#if odd_even_mirror_positive_diag}
		<line class="odd-even-mirror-diag" x1={tr_x} x2={bl_x} y1={tr_y} y2={bl_y} />
	{/if}
</g>

<style>
	line {
		stroke-width: 0.02;

		&.diag {
			stroke: black;
		}

		&.antidiag {
			stroke: rgb(169, 0, 169);
		}

		&.odd-even-mirror-diag {
			stroke: orange;
		}
	}
</style>
