<script lang="ts">
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import CenterCornerOrEdgeConstraintRenderAux from './CenterCornerOrEdgeConstraintRenderAux.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CenterCornerOrEdgeToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;

	const currentConstraintStore = getCurrentConstraintStore();
	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="center-corner-or-edge-constraint" id={`c-${c_id}`} data-id={`${c_id}`} filter={filter_url}>
		<CenterCornerOrEdgeConstraintRenderAux {tool} />
	</g>
{/if}
