<script lang="ts">
	import type { CellArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import SingleCellArrowRenderAux from './SingleCellArrowRenderAux.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="single-cell-arrow-tool" data-id={`${c_id}`} filter={filter_url}>
		<SingleCellArrowRenderAux {tool} />
	</g>
{/if}
