<script lang="ts">
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import CenterCornerOrEdgeConstraintRenderAux from './CenterCornerOrEdgeConstraintRenderAux.svelte';

	export let tool: CenterCornerOrEdgeToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<!-- filter={filter_url} -->
	<g class="center-corner-or-edge-constraint" id={`c-${c_id}`} data-id={`${c_id}`}>
		<CenterCornerOrEdgeConstraintRenderAux {tool} {c_id}/>
	</g>
{/if}
