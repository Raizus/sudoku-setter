<script lang="ts">
	import type { CellArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultSingleCellArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { cellToCellCenterVector } from '$lib/utils/SquareCellGridRenderUtils';
	import { currentConstraintStore } from '$stores/BoardStore';
	import CenteredArrowRender from '../SvgComponents/CenteredArrowRender.svelte';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	const outline = true;

	$: defaultShape =
		getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultSingleCellArrowShape;
	$: shape = tool.shape ?? defaultShape;

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	const arrow_l = 0.6;
	$: center = cellToCellCenterVector(tool.cell);
</script>

{#if outline}
	<CenteredArrowRender
		cx={center.x}
		cy={center.y}
		{arrow_l}
		shape={outlineShape}
		direction={tool.direction}
	/>
{/if}
{#if c_id && c_id === currentConstraintId}
	<CenteredArrowRender
		cx={center.x}
		cy={center.y}
		{arrow_l}
		shape={selectedOutlineShape}
		direction={tool.direction}
	/>
{/if}
<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} {shape} direction={tool.direction} />
