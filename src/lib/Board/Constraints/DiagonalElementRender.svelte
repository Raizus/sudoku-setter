<script lang="ts">
	import type { ConstraintsElement } from '$src/lib/Puzzle/Constraints/LocalConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultDiagonalShape } from '$src/lib/Puzzle/Shape/Shape';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import { gridStore } from '$stores/BoardStore';

	export let element: ConstraintsElement;

	$: tool = element.tool_id;
	$: defaultShape =
		getDefaultShape(element.tool_id, squareCellElementHandlers) ?? defaultDiagonalShape;
	$: strokeWidth = defaultShape?.strokeWidth ?? 0.02;
	$: stroke = defaultShape?.stroke ?? 'black';

	$: grid = $gridStore;
	$: positive =
		tool === TOOLS.POSITIVE_DIAGONAL ||
		tool === TOOLS.POSITIVE_ANTIDIAGONAL ||
		tool === TOOLS.PARITY_MIRROR_POSITIVE_DIAGONAL
			? true
			: false;

	const tl_x = 0;
	const tl_y = 0;
	const tr_y = 0;
	const bl_x = 0;
    
	$: tr_x = grid.nCols;
	$: bl_y = grid.nRows;
	$: br_x = grid.nCols;
	$: br_y = grid.nRows;
</script>

<g class="element-group" data-toolId={element.tool_id}>
	{#if positive}
		<line
			class="positive-diagonal"
			x1={tr_x}
			x2={bl_x}
			y1={tr_y}
			y2={bl_y}
			{stroke}
			stroke-width={strokeWidth}
		/>
	{:else}
		<line
			class="negative-diagonal"
			x1={tl_x}
			x2={br_x}
			y1={tl_y}
			y2={br_y}
			{stroke}
			stroke-width={strokeWidth}
		/>
	{/if}
</g>
