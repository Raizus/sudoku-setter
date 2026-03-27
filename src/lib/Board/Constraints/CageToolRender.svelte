<script lang="ts">
	import ValuedCageRender from './ValuedCageRender.svelte';
	import { defaultCageShape } from '$lib/Puzzle/Shape/Shape';
	import type { CageToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CageToolI;
	export let c_id: string;

	const currentConstraintStore = getCurrentConstraintStore();
	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultCageShape;
	const outline = true;

	$: currentConstraintId = $currentConstraintStore?.id;
	$: shape = tool.shape ?? defaultShape;
	$: is_selected = c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="cage-tool" filter={filter_url}>
	<ValuedCageRender cells={tool.cells} {shape} value={tool.value} />
</g>
