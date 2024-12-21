<script lang="ts">
	import ValuedCageRender from './ValuedCageRender.svelte';
	import { defaultCageShape } from '$lib/Puzzle/Shape/Shape';
	import type { CageToolI } from '$lib/Puzzle/Constraints/CageConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';

	export let cageTool: CageToolI;

	const defaultShape = getDefaultShape(cageTool.toolId, squareCellElementHandlers) ?? defaultCageShape;
	$: shape = cageTool.shape ?? defaultShape;
</script>

<g class="cage-tool">
	<ValuedCageRender cells={cageTool.cells} {shape} value={cageTool.value} />
</g>
