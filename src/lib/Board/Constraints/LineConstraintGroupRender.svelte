<script lang="ts">
	import type { LineToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { getCurrentConstraintStore } from './utils';
	import LineConstraintRender from './LineConstraintRender.svelte';

	export let tool: LineToolI;
	export let c_id: string;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultLineShape;
	const currentConstraintStore = getCurrentConstraintStore();
	const outline = true;

	$: disabled = !!tool.disabled;
	$: linePoints = cellsToVector2DPoints(tool.cells);
	$: shape = tool.shape ?? defaultShape;
	// $: opacity = shape?.opacity ?? 1;

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

	$: is_selected = c_id === $currentConstraintStore?.id;
</script>

<g class="line-constraint" id={`c-${c_id}`} data-id={c_id} opacity={disabled ? 0.2 : 1}>
	{#if outline}
		<g class="emphasis-outline">
			<LineConstraintRender {linePoints} shape={outlineShape} />
		</g>
	{/if}
	{#if is_selected}
		<g class="selection-outline">
			<LineConstraintRender {linePoints} shape={selectedOutlineShape} />
		</g>
	{/if}
	<g class="constraint">
		<LineConstraintRender {linePoints} {shape} />
	</g>
</g>
