<script lang="ts">
		import type { CornerToolI } from "$src/lib/Puzzle/puzzle_schema";
	import CornerToolRenderAux from './CornerToolRenderAux.svelte';

	export let tool: CornerToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="corner-tool" id={`c-${c_id}`}>
		<CornerToolRenderAux {tool} {c_id} />
	</g>
{/if}
