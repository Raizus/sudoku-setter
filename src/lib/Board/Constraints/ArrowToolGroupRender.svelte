<script lang="ts">
	import type { ArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultArrowShape, SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import BulbousArrowRender from './BulbousArrowRender.svelte';
	import SimpleArrowToolRender from './SimpleArrowToolRender.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: ArrowToolI;
	export let c_id: string;

	const outline = true;
	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: shape = tool.shape ?? defaultShape;
	$: is_selected = c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="arrow-tool" filter={filter_url}>
	{#if shape.type === SHAPE_TYPES.BULBOUS_ARROW}
		<BulbousArrowRender {tool} arrowId={c_id} />
	{:else}
		<SimpleArrowToolRender {tool} {c_id} {shape} />
	{/if}
</g>
