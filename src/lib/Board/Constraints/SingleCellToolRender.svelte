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

	export let tool: CellToolI;
	export let id: string;

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

	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: center = { x: coord.c + 0.5, y: coord.r + 0.5 };

	$: cellTLCorner = new Vector2D(coord.c, coord.r);
	$: value = tool.value;
</script>

<g class="single-cell-tool" id={`constraint-${id}`}>
	{#if tool.toolId === TOOLS.MINIMUM}
		<MinMaxRender {coord} minOrMax={'min'} />
	{:else if tool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender {coord} minOrMax={'max'} />
	{:else if tool.toolId === TOOLS.COLORED_COUNTING_CIRCLES}
		<ColoredCountingCircleRender x={center.x} y={center.y} {value} {shape}/>
	{:else if type === SHAPE_TYPES.CAGE}
		<ValuedCageRender cells={[coord]} {shape} value={tool.value} />
	{:else}
		{#if outline}
			<RenderShape cx={center.x} cy={center.y} shape={outlineShape} />			
		{/if}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	{#if type !== SHAPE_TYPES.CAGE && tool.toolId !== TOOLS.COLORED_COUNTING_CIRCLES && value}
		<CellTextLabelRender {value} x={cellTLCorner.x} y={cellTLCorner.y} position="TL" />
	{/if}
</g>
