<script lang="ts">
	import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
	
	export let cells: Cell[];
</script>

<g class="grid-lines">
	{#each cells as cell}
		<rect
			x={cell.c}
			y={cell.r}
			width={1}
			height={1}
			fill="none"
			stroke="black"
		/>
	{/each}
</g>

<style lang="scss">
	@use '$src/vars' as vars;

	rect {
		stroke-width: vars.$grid-lines-width;
	}
</style>