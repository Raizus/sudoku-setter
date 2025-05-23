<script lang="ts">
		import type { CellToolI } from "$src/lib/Puzzle/puzzle_schema";

	export let tool: CellToolI;
	export let c_id: string | undefined = undefined;

	$: center = { x: tool.cell.c + 0.5, y: tool.cell.r + 0.5 };

</script>

<g class="fog-lights" transform={`translate(${center.x} ${center.y})`}>
    <use href="#fog-bulb" />
</g>

<style>
</style>