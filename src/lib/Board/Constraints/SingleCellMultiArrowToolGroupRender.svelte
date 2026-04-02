<script lang="ts">
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { defaultSingleCellMultiArrowShape } from '$src/lib/Puzzle/Shape/Shape';
	import SingleCellMultiArrowRenderAux from './SingleCellMultiArrowRenderAux.svelte';
	import { getCurrentConstraintStore } from './utils';

	export let tool: CellMultiArrowToolI;
	export let c_id: string | undefined = undefined;

	const outline = true;
	const currentConstraintStore = getCurrentConstraintStore();

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultSingleCellMultiArrowShape;
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

{#if c_id !== undefined}
	<g class="single-cell-multi-arrow-tool" data-id={`${c_id}`}>
		{#if outline}
			<SingleCellMultiArrowRenderAux {tool} shape={outlineShape} />
		{/if}
		{#if is_selected}
			<SingleCellMultiArrowRenderAux {tool} shape={selectedOutlineShape} />
		{/if}
		<SingleCellMultiArrowRenderAux {tool} {shape} />
	</g>
{:else}
	<g class="single-cell-multi-arrow-constraint-preview" opacity={0.5}>
		<SingleCellMultiArrowRenderAux {tool} />
	</g>
{/if}
