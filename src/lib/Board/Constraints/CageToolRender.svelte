<script lang="ts">
	import ValuedCageRender from './ValuedCageRender.svelte';
	import { defaultCageShape } from '$lib/Puzzle/Shape/Shape';
	import type { CageToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import CageRender from './CageRender.svelte';
	import { getContext } from 'svelte';
	import { readable, type Readable } from 'svelte/store';

	export let tool: CageToolI;
	export let c_id: string;

	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	$: currentConstraintId = $currentConstraintStore?.id;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultCageShape;
	$: shape = tool.shape ?? defaultShape;

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};
</script>

<g class="cage-tool">
	{#if c_id === currentConstraintId}
		<CageRender cells={tool.cells} shape={selectedOutlineShape} />
	{/if}
	<ValuedCageRender cells={tool.cells} {shape} value={tool.value} />
</g>
