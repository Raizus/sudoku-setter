<script lang="ts">
	import type { CornerToolI } from '$src/lib/Puzzle/Constraints/CornerConstraints';
	import CornerToolRenderAux from './CornerToolRenderAux.svelte';

	export let tool: CornerToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="corner-tool" data-id={`${c_id}`}>
		<CornerToolRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="corner-tool-preview" opacity={0.5}>
		<CornerToolRenderAux {tool} />
	</g>    
{/if}
