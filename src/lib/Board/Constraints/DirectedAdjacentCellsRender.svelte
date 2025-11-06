<script lang="ts">
	import { defaultArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { cellsToVector2DPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$lib/utils/Vector2D';
	import { currentConstraintStore } from '$stores/BoardStore';
	import { coordsToDirection, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
	import CenteredArrowRender from '../SvgComponents/CenteredArrowRender.svelte';
	import { DIRECTION } from '$src/lib/utils/directions';

	export let tool: EdgeToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultArrowShape;
	$: shape = tool.shape ?? defaultShape;

	const outline = true;
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

	function getDirection(_cells: GridCoordI[]) {
		if (_cells.length < 2) return DIRECTION.N;
		const delta: GridCoordI = { r: _cells[1].r - _cells[0].r, c: _cells[1].c - _cells[0].c };
		const direction = coordsToDirection(delta);
		return direction;
	}

	const arrow_l = 0.6;
	$: center = vectorAverage(cellsToVector2DPoints(tool.cells));
	$: direction = getDirection(tool.cells);
</script>

{#if tool.cells.length === 2}
	{#if outline}
		<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} shape={outlineShape} {direction} />
	{/if}
	{#if c_id && c_id === currentConstraintId}
		<CenteredArrowRender
			cx={center.x}
			cy={center.y}
			{arrow_l}
			shape={selectedOutlineShape}
			{direction}
		/>
	{/if}
	<CenteredArrowRender cx={center.x} cy={center.y} {arrow_l} {shape} {direction} />
{/if}
