<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { SHAPE_TYPES, defaultSingleCellCircleShape } from '$lib/Puzzle/Shape/Shape';
	import ValuedCageRender from './ValuedCageRender.svelte';
	import type { CellToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import MinMaxRender from './MinMaxRender.svelte';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import ColoredCountingCircleRender from './ColoredCountingCircleRender.svelte';
	import { currentConstraintStore } from '$stores/BoardStore';
	import CageRender from './CageRender.svelte';

	export let tool: CellToolI;
	export let c_id: string;

	$: currentConstraintId = $currentConstraintStore?.id;

	const coord = tool.cell;
	const outline = true;

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ??
		defaultSingleCellCircleShape;
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

	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: center = { x: coord.c + 0.5, y: coord.r + 0.5 };

	$: cellTLCorner = new Vector2D(coord.c, coord.r);
	$: value = tool.value;
</script>

<g class="single-cell-tool" id={`constraint-${c_id}`}>
	{#if tool.toolId === TOOLS.MINIMUM}
		<MinMaxRender {coord} minOrMax={'min'} />
	{:else if tool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender {coord} minOrMax={'max'} />
	{:else if tool.toolId === TOOLS.COLORED_COUNTING_CIRCLES}
		{#if c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
		<ColoredCountingCircleRender x={center.x} y={center.y} {value} {shape}/>
	{:else if type === SHAPE_TYPES.CAGE}
		{#if c_id === currentConstraintId}
			<CageRender cells={[coord]} shape={selectedOutlineShape} />
		{/if}
		<ValuedCageRender cells={[coord]} {shape} value={tool.value} />
	{:else}
		{#if outline}
			<RenderShape cx={center.x} cy={center.y} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	{#if type !== SHAPE_TYPES.CAGE && tool.toolId !== TOOLS.COLORED_COUNTING_CIRCLES && value}
		<CellTextLabelRender {value} x={cellTLCorner.x} y={cellTLCorner.y} position="TL" />
	{/if}
</g>
