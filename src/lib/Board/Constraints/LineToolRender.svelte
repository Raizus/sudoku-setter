<script lang="ts">
	import LineRender from '$src/lib/Board/SvgComponents/LineRender.svelte';
	import LineWithCircleEndsToolRender from '$src/lib/Board/SvgComponents/LineWithCircleEndsToolRender.svelte';
	import LineWithPolygonEndsRender from '$src/lib/Board/SvgComponents/LineWithPolygonEndsRender.svelte';
	import ThermoRender from '$src/lib/Board/SvgComponents/ThermoRender.svelte';
	import type { LineToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { SHAPE_TYPES, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: LineToolI;
	export let c_id: string;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultLineShape;
	const currentConstraintStore = getCurrentConstraintStore();
	const outline = true;

	$: linePoints = cellsToVector2DPoints(tool.cells);
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.LINE;
	$: opacity = shape?.opacity ?? 1;

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="line-tool" {opacity} filter={filter_url}>
	{#if type === SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS}
		<LineWithCircleEndsToolRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.LINE_WITH_POLYGON_ENDS}
		<LineWithPolygonEndsRender {linePoints} {shape} />
	{:else if type === SHAPE_TYPES.THERMO_WITH_CIRCLE || type === SHAPE_TYPES.THERMO_WITH_POLYGON}
		<ThermoRender {linePoints} {shape} />
	{:else}
		<LineRender {linePoints} {shape} />
	{/if}
</g>
