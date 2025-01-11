<script lang="ts">
	import type { CloneToolI } from '$lib/Puzzle/Constraints/CloneConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultCloneShape } from '$lib/Puzzle/Shape/Shape';
	import CageRender from './CageRender.svelte';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';

	export let cloneTool: CloneToolI;

	const defaultShape =
		getDefaultShape(cloneTool.toolId, squareCellElementHandlers) ?? defaultCloneShape;
	$: shape = cloneTool.shape ?? defaultShape;

	$: inset = shape.inset ?? 0.15;
	$: strokeWidth = shape.strokeWidth ?? 0.07;
	$: textColor = shape.fontColor ?? shape.stroke ?? 'black';
	const fontWeight = 800;
	const fontSize = 0.3;

	const label = cloneTool.value;
	$: cell1 = cloneTool.cells[cloneTool.cells.length - 1];
	$: cell2 = cloneTool.cells2[cloneTool.cells2.length - 1];
	$: cell1TL = new Vector2D(cell1.c + 1 - inset - 0.05, cell1.r + 1 - inset - 0.05);
	$: cell2TL = new Vector2D(cell2.c + 1 - inset - 0.05, cell2.r + 1 - inset - 0.05);
</script>

<CageRender cells={cloneTool.cells} {shape} />
<CellTextLabelRender
	value={label}
	x={cell2TL.x}
	y={cell2TL.y}
	position="BR"
	fontColor={textColor}
	{fontWeight}
/>
<CageRender cells={cloneTool.cells2} {shape} />
<CellTextLabelRender
	value={label}
	x={cell2TL.x}
	y={cell2TL.y}
	position="BR"
	fontColor={textColor}
	{fontWeight}
/>
