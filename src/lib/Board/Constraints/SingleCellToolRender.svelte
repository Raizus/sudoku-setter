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

	export let singleCellTool: CellToolI;
	export let id: string;

	const coord = singleCellTool.cell;

	const defaultShape =
		getDefaultShape(singleCellTool.toolId, squareCellElementHandlers) ??
		defaultSingleCellCircleShape;
	$: shape = singleCellTool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: center = { x: coord.c + 0.5, y: coord.r + 0.5 };

	$: cellTLCorner = new Vector2D(coord.c, coord.r);
	$: value = singleCellTool.value;
</script>

<g class="single-cell-tool" id={`constraint-${id}`}>
	{#if singleCellTool.toolId === TOOLS.MINIMUM}
		<MinMaxRender {coord} minOrMax={'min'} />
	{:else if singleCellTool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender {coord} minOrMax={'max'} />
	{:else if type === SHAPE_TYPES.CAGE}
		<ValuedCageRender cells={[coord]} {shape} value={singleCellTool.value} />
	{:else}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	{#if type !== SHAPE_TYPES.CAGE && value}
		<CellTextLabelRender
			{value}
			x={cellTLCorner.x}
			y={cellTLCorner.y}
			position="TL"
		/>
	{/if}
</g>
