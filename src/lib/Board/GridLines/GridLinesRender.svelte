<script lang="ts">
	import { gridStore } from '$stores/BoardStore';

	const strokeWidth = 0.01;
	$: allCells = $gridStore.getAllCells();
</script>

<g class="grid-lines">
	{#each allCells as cell}
		<rect
			x={cell.c}
			y={cell.r}
			width={1}
			height={1}
			stroke-width={strokeWidth}
			fill="none"
			stroke="black"
		/>
	{/each}
</g>
