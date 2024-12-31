<script lang="ts">
	import LineRender from '$lib/Components/SvgRender/LineRender.svelte';
	import LineWithCircleEndsToolRender from '$lib/Components/SvgRender/LineWithCircleEndsToolRender.svelte';
	import LineWithPolygonEndsRender from '$lib/Components/SvgRender/LineWithPolygonEndsRender.svelte';
	import ThermoRender from '$lib/Components/SvgRender/ThermoRender.svelte';
	import type { LineToolI } from '$lib/Puzzle/Constraints/LineConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { SHAPE_TYPES, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';

	export let lineTool: LineToolI;
	const defaultShape = getDefaultShape(lineTool.toolId, squareCellElementHandlers) ?? defaultLineShape;

	$: linePoints = cellsToVector2DPoints(lineTool.cells);
	$: shape = lineTool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.LINE;
	$: opacity = shape?.opacity ?? 0.8;
</script>

<g class="line-tool" opacity={opacity}>
	{#if type === SHAPE_TYPES.LINE}
		<LineRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS}
		<LineWithCircleEndsToolRender {linePoints} {shape}/>
	{:else if type === SHAPE_TYPES.LINE_WITH_POLYGON_ENDS}
		<LineWithPolygonEndsRender {linePoints} {shape}/>
	{:else if type === SHAPE_TYPES.THERMO_WITH_CIRCLE}
		<ThermoRender {linePoints} {shape}/>
	{:else if type === SHAPE_TYPES.THERMO_WITH_POLYGON}
		<ThermoRender {linePoints} {shape}/>
	{:else}
		<LineRender {linePoints} {shape} />
	{/if}
</g>
