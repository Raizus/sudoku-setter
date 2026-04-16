<script lang="ts">
	import type { ArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultArrowShape, SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import BulbousArrowRender from './BulbousArrowRender.svelte';
	import SimpleArrowConstraintRender from './SimpleArrowConstraintRender.svelte';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: ArrowToolI;
	export let c_id: string;

	const outline = true;
	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	const currentConstraintStore = getCurrentConstraintStore();

	$: disabled = !!tool.disabled;
	$: currentConstraintId = $currentConstraintStore?.id;
	$: shape = tool.shape ?? defaultShape;
	$: is_selected = c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="arrow-constraint" id={`c-${c_id}`} filter={filter_url} opacity={disabled ? 0.2 : 1}>
	{#if shape.type === SHAPE_TYPES.BULBOUS_ARROW}
		<BulbousArrowRender {tool} arrowId={c_id} />
	{:else}
		<SimpleArrowConstraintRender {tool} {c_id} {shape} />
	{/if}
</g>
