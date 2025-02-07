<script lang="ts">
	import type { ArrowToolI } from '$lib/Puzzle/Constraints/ArrowConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultArrowShape, SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import type { Rectangle } from '$lib/Types/types';
	import BulbousArrowRender from './BulbousArrowRender.svelte';
	import SimpleArrowToolRender from './SimpleArrowToolRender.svelte';

	export let tool: ArrowToolI;
	export let arrowId: string;
	export let boundingBox: Rectangle;

	const defaultShape = getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultArrowShape;
	$: shape = tool.shape ?? defaultShape;
</script>

<g class="arrow-tool">
	{#if shape.type === SHAPE_TYPES.BULBOUS_ARROW}
		<BulbousArrowRender {tool} {arrowId} {boundingBox}/>
	{:else}
		<SimpleArrowToolRender {tool} {arrowId} {boundingBox}/>
	{/if}
</g>
