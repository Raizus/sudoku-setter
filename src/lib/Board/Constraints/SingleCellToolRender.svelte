<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import CircleRender from '$lib/Components/SvgRender/CircleRender.svelte';
	import EllipseRender from '$lib/Components/SvgRender/EllipseRender.svelte';
	import PolygonRender from '$lib/Components/SvgRender/PolygonRender.svelte';
	import SquareRender from '$lib/Components/SvgRender/SquareRender.svelte';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { SHAPE_TYPES, defaultSingleCellCircleShape } from '$lib/Puzzle/Shape/Shape';
	import ValuedCageRender from './ValuedCageRender.svelte';
	import type { CellToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import RectangleRender from '$lib/Components/SvgRender/RectangleRender.svelte';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import MinMaxRender from './MinMaxRender.svelte';

	export let singleCellTool: CellToolI;
	export let id: string;

	const coord = singleCellTool.cell;

	const defaultShape = getDefaultShape(singleCellTool.toolId, squareCellElementHandlers) ?? defaultSingleCellCircleShape;
	$: shape = singleCellTool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: center = {x: coord.c + 0.5, y: coord.r + 0.5}
</script>

<g class="single-cell-tool">
	{#if singleCellTool.toolId === TOOLS.MINIMUM}
		<MinMaxRender {coord} minOrMax={'min'}/>
	{:else if singleCellTool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender {coord} minOrMax={'max'}/>
	{:else if type === SHAPE_TYPES.CIRCLE}
		<CircleRender x={center.x} y={center.y} {shape} />
	{:else if type === SHAPE_TYPES.ELLIPSE}
		<EllipseRender cx={center.x} cy={center.y} {shape} />
	{:else if type === SHAPE_TYPES.SQUARE}
		<SquareRender cx={center.x} cy={center.y} {shape} />
	{:else if type === SHAPE_TYPES.RECTANGLE}
		<RectangleRender cx={center.x} cy={center.y} {shape} />
	{:else if type === SHAPE_TYPES.POLYGON}
		<PolygonRender cx={center.x} cy={center.y} {shape} />
	{:else if type === SHAPE_TYPES.CAGE}
		<ValuedCageRender cells={[coord]} {shape} value={singleCellTool.value}/>
	{:else}
		<CircleRender x={center.x} y={center.y} {shape} />
	{/if}
</g>
