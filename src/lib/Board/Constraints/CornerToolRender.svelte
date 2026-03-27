<script lang="ts">
	import type { CornerToolI } from '$src/lib/Puzzle/puzzle_schema';
	import CornerToolRenderAux from './CornerToolRenderAux.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CornerToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="corner-tool" data-id={`${c_id}`} filter={filter_url}>
		<CornerToolRenderAux {tool} />
	</g>
{/if}
