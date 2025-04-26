<script lang="ts">
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
	import CenterCornerOrEdgeToolRenderAux from './CenterCornerOrEdgeToolRenderAux.svelte';

	export let tool: CenterCornerOrEdgeToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="center-corner-or-edge-tool" id={`c-${c_id}`}>
		<CenterCornerOrEdgeToolRenderAux {tool} {c_id} />
	</g>
{/if}
