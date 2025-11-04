<script lang="ts">
		import type { EdgeToolI } from "$src/lib/Puzzle/puzzle_schema";
	import { TOOLS } from "$src/lib/Puzzle/Tools";
	import DirectedAdjacentCellsRender from "./DirectedAdjacentCellsRender.svelte";
	import EdgeToolRenderAux from './EdgeToolRenderAux.svelte';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="edge-tool" id={`c-${c_id}`}>
		{#if tool.toolId === TOOLS.COSMETIC_DIRECTED_ADJACENT_CELLS}
			<DirectedAdjacentCellsRender {tool} {c_id}/>
		{:else}
			<EdgeToolRenderAux {tool} {c_id} />
		{/if}
	</g>
{/if}
