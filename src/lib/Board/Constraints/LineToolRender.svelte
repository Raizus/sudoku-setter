<script lang="ts">
	import LineRender from '$src/lib/Board/SvgComponents/LineRender.svelte';
	import LineWithCircleEndsToolRender from '$src/lib/Board/SvgComponents/LineWithCircleEndsToolRender.svelte';
	import LineWithPolygonEndsRender from '$src/lib/Board/SvgComponents/LineWithPolygonEndsRender.svelte';
	import ThermoRender from '$src/lib/Board/SvgComponents/ThermoRender.svelte';
	import type { LineToolI } from '$lib/Puzzle/Constraints/LineConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { SHAPE_TYPES, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: LineToolI;
	export let c_id: string;
	
	const defaultShape = getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultLineShape;
	const outline = true;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: linePoints = cellsToVector2DPoints(tool.cells);
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.LINE;
	$: opacity = shape?.opacity ?? 1;
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

<g class="line-tool" {opacity}>
	{#if type === SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS}
		{#if outline}
			<LineWithCircleEndsToolRender {linePoints} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<LineWithCircleEndsToolRender {linePoints} shape={selectedOutlineShape} />
		{/if}
		<LineWithCircleEndsToolRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.LINE_WITH_POLYGON_ENDS}
		{#if outline}
			<LineWithPolygonEndsRender {linePoints} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<LineWithPolygonEndsRender {linePoints} shape={selectedOutlineShape} />
		{/if}
		<LineWithPolygonEndsRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.THERMO_WITH_CIRCLE || type === SHAPE_TYPES.THERMO_WITH_POLYGON}
		{#if outline}
			<ThermoRender {linePoints} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<ThermoRender {linePoints} shape={selectedOutlineShape} />
		{/if}
		<ThermoRender {linePoints} {shape} />
	{:else}
		{#if outline}
			<LineRender {linePoints} shape={outlineShape} />
		{/if}
		{#if c_id === currentConstraintId}
			<LineRender {linePoints} shape={selectedOutlineShape} />
		{/if}
		<LineRender {linePoints} {shape} />
	{/if}
</g>
