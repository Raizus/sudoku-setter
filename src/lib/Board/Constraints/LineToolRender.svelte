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

	export let tool: LineToolI;
	const defaultShape = getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultLineShape;
	const outline = true;

	$: linePoints = cellsToVector2DPoints(tool.cells);
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.LINE;
	$: opacity = shape?.opacity ?? 1;
	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.08 : 0.08
	};
</script>

<g class="line-tool" {opacity}>
	{#if type === SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS}
		{#if outline}
			<LineWithCircleEndsToolRender {linePoints} shape={outlineShape} />
		{/if}
		<LineWithCircleEndsToolRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.LINE_WITH_POLYGON_ENDS}
		{#if outline}
			<LineWithPolygonEndsRender {linePoints} shape={outlineShape} />
		{/if}
		<LineWithPolygonEndsRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.THERMO_WITH_CIRCLE || type === SHAPE_TYPES.THERMO_WITH_POLYGON}
		{#if outline}
			<ThermoRender {linePoints} shape={outlineShape} />
		{/if}
		<ThermoRender {linePoints} {shape} />
	{:else}
		{#if outline}
			<LineRender {linePoints} shape={outlineShape} />
		{/if}
		<LineRender {linePoints} {shape} />
	{/if}
</g>
