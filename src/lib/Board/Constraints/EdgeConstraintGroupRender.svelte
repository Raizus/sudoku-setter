<script lang="ts">
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import EdgeConstraintRenderAux from './EdgeConstraintRenderAux.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="edge-constraint" id={`c-${c_id}`} data-id={`${c_id}`} filter={filter_url}>
		<EdgeConstraintRenderAux {tool} />
	</g>
{/if}
