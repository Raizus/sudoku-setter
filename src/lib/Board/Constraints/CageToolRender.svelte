<script lang="ts">
	import ValuedCageRender from './ValuedCageRender.svelte';
	import { defaultCageShape } from '$lib/Puzzle/Shape/Shape';
	import type { CageToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { getContext } from 'svelte';
	import { readable, type Readable } from 'svelte/store';
	import { getOutlineFilterUrl } from './utils';

	export let tool: CageToolI;
	export let c_id: string;

	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	$: currentConstraintId = $currentConstraintStore?.id;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultCageShape;
	$: shape = tool.shape ?? defaultShape;

	const outline = true;
	$: is_selected = c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="cage-tool" filter={filter_url}>
	<ValuedCageRender cells={tool.cells} {shape} value={tool.value} />
</g>
