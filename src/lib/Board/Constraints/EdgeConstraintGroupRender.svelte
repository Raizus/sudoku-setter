<script lang="ts">
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import EdgeConstraintRenderAux from './EdgeConstraintRenderAux.svelte';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;

</script>

{#if c_id !== undefined}
	<g class="edge-constraint" id={`c-${c_id}`} data-id={`${c_id}`}>
		<EdgeConstraintRenderAux {tool} {c_id}/>
	</g>
{/if}
