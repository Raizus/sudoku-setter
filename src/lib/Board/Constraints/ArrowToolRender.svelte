<script lang="ts">
	import type { ArrowToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultArrowShape, SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import BulbousArrowRender from './BulbousArrowRender.svelte';
	import SimpleArrowToolRender from './SimpleArrowToolRender.svelte';
	import { getContext } from 'svelte';
	import { readable } from 'svelte/store';
	import type { Readable } from 'svelte/motion';

	export let tool: ArrowToolI;
	export let c_id: string;

	const outline = true;
	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	$: currentConstraintId = $currentConstraintStore?.id;

	$: shape = tool.shape ?? defaultShape;

	$: is_selected = c_id === currentConstraintId;
	$: filter_url =
		outline && is_selected
			? 'url(#filter-both)'
			: outline
				? 'url(#filter-bg-only)'
				: is_selected
					? 'url(#filter-sel-only)'
					: null;
</script>

<g class="arrow-tool" filter={filter_url}>
	{#if shape.type === SHAPE_TYPES.BULBOUS_ARROW}
		<BulbousArrowRender {tool} arrowId={c_id} />
	{:else}
		<SimpleArrowToolRender {tool} {c_id} {shape} />
	{/if}
</g>
