<script lang="ts">
		import type { CellArrowToolI } from "$src/lib/Puzzle/puzzle_schema";
	import SingleCellArrowRenderAux from './SingleCellArrowRenderAux.svelte';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="single-cell-arrow-tool" id={`c-${c_id}`}>
		<SingleCellArrowRenderAux {tool} {c_id} />
	</g>
{/if}
