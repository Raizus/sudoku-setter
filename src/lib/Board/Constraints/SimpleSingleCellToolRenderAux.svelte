<script lang="ts">
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { SHAPE_TYPES, defaultSingleCellCircleShape } from '$lib/Puzzle/Shape/Shape';
	import ValuedCageRender from './ValuedCageRender.svelte';
		import type { CellToolI } from "$src/lib/Puzzle/puzzle_schema";
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import MinMaxRender from './MinMaxRender.svelte';
	import RenderShape from '$src/lib/Board/SvgComponents/RenderShape.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import ColoredCountingCircleRender from './ColoredCountingCircleRender.svelte';
	import { currentConstraintStore } from '$stores/BoardStore';
	import CageRender from './CageRender.svelte';

	export let tool: CellToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	const outline = true;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ??
		defaultSingleCellCircleShape;
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;

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

	$: center = { x: tool.cell.c + 0.5, y: tool.cell.r + 0.5 };
	$: cellTLCorner = new Vector2D(tool.cell.c, tool.cell.r);
	$: value = tool.value;
</script>

<g class="single-cell-tool" data-id={`${c_id}`}>
	{#if tool.toolId === TOOLS.MINIMUM}
		<MinMaxRender coord={tool.cell} minOrMax={'min'} />
	{:else if tool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender coord={tool.cell} minOrMax={'max'} />
	{:else if tool.toolId === TOOLS.COLORED_COUNTING_CIRCLES}
		{#if c_id && c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
		<ColoredCountingCircleRender x={center.x} y={center.y} {value} {shape}/>
	{:else if type === SHAPE_TYPES.CAGE}
		{#if c_id && c_id === currentConstraintId}
			<CageRender cells={[tool.cell]} shape={selectedOutlineShape} />
		{/if}
		<ValuedCageRender cells={[tool.cell]} {shape} value={tool.value} />
	{:else}
		{#if outline}
			<RenderShape cx={center.x} cy={center.y} shape={outlineShape} />
		{/if}
		{#if c_id && c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	{#if type !== SHAPE_TYPES.CAGE && tool.toolId !== TOOLS.COLORED_COUNTING_CIRCLES && value}
		<CellTextLabelRender {value} x={cellTLCorner.x} y={cellTLCorner.y} position="TL" />
	{/if}
</g>
