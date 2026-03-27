<script lang="ts">
	import type { CellArrowToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { getContext } from 'svelte';
	import SingleCellArrowRenderAux from './SingleCellArrowRenderAux.svelte';
	import { readable, type Readable } from 'svelte/store';
	import { getOutlineFilterUrl } from './utils';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;

	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

{#if c_id !== undefined}
	<g class="single-cell-arrow-tool" id={`c-${c_id}`} filter={filter_url}>
		<SingleCellArrowRenderAux {tool} />
	</g>
{/if}
