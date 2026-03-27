<script lang="ts">
	import type { CellMultiArrowToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { getContext } from 'svelte';
	import SingleCellMultiArrowRenderAux from './SingleCellMultiArrowRenderAux.svelte';
	import { readable, type Readable } from 'svelte/store';

	export let tool: CellMultiArrowToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;

	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id && c_id === currentConstraintId;
	$: filter_url =
		outline && is_selected
			? 'url(#filter-both)'
			: outline
				? 'url(#filter-bg-only)'
				: is_selected
					? 'url(#filter-sel-only)'
					: null;
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
