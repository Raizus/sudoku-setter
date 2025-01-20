<script lang="ts">
	import ValuedCageRender from './ValuedCageRender.svelte';
	import { defaultCageShape } from '$lib/Puzzle/Shape/Shape';
	import type { CageToolI } from '$lib/Puzzle/Constraints/CageConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';

	export let tool: CageToolI;

	const defaultShape = getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultCageShape;
	$: shape = tool.shape ?? defaultShape;
</script>

<g class="cage-tool">
	<ValuedCageRender cells={tool.cells} {shape} value={tool.value} />
</g>
