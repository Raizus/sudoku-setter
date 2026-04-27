<script lang="ts">
	import { range } from 'lodash';

	export let n_rows: number;
	export let n_cols: number;
	export let resolution: number = 1;

    const step = 1 / resolution;

	$: horizontal_points = range(-1, n_cols+1+step, step);
	$: vertical_points = range(-1, n_rows+1+step, step);
</script>

<g class="grid-lines">
	<!-- vertical lines -->
	{#each horizontal_points as x}
		<line stroke="black" x1={x} y1={-1} x2={x} y2={n_rows+1} />
	{/each}
	<!-- horizontal lines -->
	{#each vertical_points as y}
		<line stroke="black" x1={-1} y1={y} x2={n_cols+1} y2={y} />
	{/each}
</g>

<style lang="scss">
	@use '$src/vars' as vars;

	line {
		stroke-width: calc(vars.$grid-lines-width * 0.4);
	}
</style>
