<script lang="ts">
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import SingleCellMultiArrowRenderAux from './SingleCellMultiArrowRenderAux.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CellMultiArrowToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="single-cell-multi-arrow-tool" data-id={`${c_id}`} filter={filter_url}>
		<SingleCellMultiArrowRenderAux {tool} />
	</g>
{:else}
	<g class="single-cell-multi-arrow-tool-preview" opacity={0.5}>
		<SingleCellMultiArrowRenderAux {tool} />
	</g>
{/if}
