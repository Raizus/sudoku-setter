<script lang="ts">
	import { gridStore } from '$stores/BoardStore';
	
	$: allCells = $gridStore.getAllCells();
</script>

<g class="grid-lines">
	{#each allCells as cell}
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