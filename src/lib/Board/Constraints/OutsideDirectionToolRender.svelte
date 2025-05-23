<script lang="ts">
		import type { OutsideDirectionToolI } from "$src/lib/Puzzle/puzzle_schema";
	import OutsideDirectionToolRenderAux from './OutsideDirectionToolRenderAux.svelte';

	export let tool: OutsideDirectionToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="outside-direction-tool" data-id={`${c_id}`}>
		<OutsideDirectionToolRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="outside-direction-preview" opacity={0.5}>
		<OutsideDirectionToolRenderAux {tool} />
	</g>    
{/if}
