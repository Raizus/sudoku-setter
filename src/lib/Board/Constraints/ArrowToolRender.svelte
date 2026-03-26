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

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.06 : 0.06
	};
	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};
</script>

<g class="arrow-tool">
	{#if shape.type === SHAPE_TYPES.BULBOUS_ARROW}
		<BulbousArrowRender {tool} arrowId={c_id} />
	{:else}
		{#if outline}
			<SimpleArrowToolRender {tool} {c_id} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<SimpleArrowToolRender {tool} {c_id} shape={selectedOutlineShape} />
		{/if}
		<SimpleArrowToolRender {tool} {c_id} {shape} />
	{/if}
</g>
