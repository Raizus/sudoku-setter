<script lang="ts">
		import type { CloneToolI } from "$src/lib/Puzzle/puzzle_schema";
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultCloneShape } from '$lib/Puzzle/Shape/Shape';
	import CageRender from './CageRender.svelte';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CloneToolI;
	export let c_id: string;

	$: currentConstraintId = $currentConstraintStore?.id;

	const defaultShape = getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultCloneShape;
	$: shape = tool.shape ?? defaultShape;

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	$: inset = shape.inset ?? 0.15;
	$: strokeWidth = shape.strokeWidth ?? 0.07;
	$: textColor = shape.fontColor ?? shape.stroke ?? 'black';
	const fontWeight = 800;
	const fontSize = 0.3;

	const label = tool.value;
	$: cell1 = tool.cells[tool.cells.length - 1];
	$: cell2 = tool.cells2[tool.cells2.length - 1];
	$: cell1TL = new Vector2D(cell1.c + 1 - inset - 0.05, cell1.r + 1 - inset - 0.05);
	$: cell2TL = new Vector2D(cell2.c + 1 - inset - 0.05, cell2.r + 1 - inset - 0.05);
</script>

<g class="clone-tool">
	{#if c_id === currentConstraintId}
		<CageRender cells={tool.cells} shape={selectedOutlineShape} />
		<CageRender cells={tool.cells2} shape={selectedOutlineShape} />
	{/if}
	<CageRender cells={tool.cells} {shape} />
	<CellTextLabelRender
		value={label}
		x={cell1TL.x}
		y={cell1TL.y}
		position="BR"
		fontColor={textColor}
		{fontWeight}
	/>
	<CageRender cells={tool.cells2} {shape} />
	<CellTextLabelRender
		value={label}
		x={cell2TL.x}
		y={cell2TL.y}
		position="BR"
		fontColor={textColor}
		{fontWeight}
	/>
</g>
