<script lang="ts">
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { SHAPE_TYPES, defaultSingleCellCircleShape } from '$lib/Puzzle/Shape/Shape';
	import ValuedCageRender from './ValuedCageRender.svelte';
	import type { CellToolI, ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import MinMaxRender from './MinMaxRender.svelte';
	import RenderShape from '$src/lib/Board/SvgComponents/RenderShape.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import ColoredCountingCircleRender from './ColoredCountingCircleRender.svelte';
	import { getContext } from 'svelte';
	import { readable, type Readable } from 'svelte/store';
	import { getOutlineFilterUrl } from './utils';

	export let tool: CellToolI;
	export let c_id: string | undefined = undefined;

	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);

	const outline = true;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultSingleCellCircleShape;
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;

	$: center = { x: tool.cell.c + 0.5, y: tool.cell.r + 0.5 };
	$: cellTLCorner = new Vector2D(tool.cell.c, tool.cell.r);
	$: value = tool.value;

	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="single-cell-tool" data-id={`${c_id}`} filter={filter_url}>
	{#if tool.toolId === TOOLS.MINIMUM}
		<MinMaxRender coord={tool.cell} minOrMax={'min'} />
	{:else if tool.toolId === TOOLS.MAXIMUM}
		<MinMaxRender coord={tool.cell} minOrMax={'max'} />
	{:else if tool.toolId === TOOLS.COLORED_COUNTING_CIRCLES}
		<ColoredCountingCircleRender x={center.x} y={center.y} {value} {shape} />
	{:else if type === SHAPE_TYPES.CAGE}
		<ValuedCageRender cells={[tool.cell]} {shape} value={tool.value} />
	{:else}
		<RenderShape cx={center.x} cy={center.y} {shape} />
	{/if}
	{#if type !== SHAPE_TYPES.CAGE && tool.toolId !== TOOLS.COLORED_COUNTING_CIRCLES && value}
		<CellTextLabelRender {value} x={cellTLCorner.x} y={cellTLCorner.y} position="TL" />
	{/if}
</g>
