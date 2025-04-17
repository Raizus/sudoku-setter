<script lang="ts">
	import type { EdgeToolI } from '$src/lib/Puzzle/Constraints/EdgeConstraints';
	import EdgeToolRenderAux from './EdgeToolRenderAux.svelte';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="edge-tool" data-id={`${c_id}`}>
		<EdgeToolRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="edge-tool-preview" opacity={0.5}>
		<EdgeToolRenderAux {tool} />
	</g>    
{/if}
