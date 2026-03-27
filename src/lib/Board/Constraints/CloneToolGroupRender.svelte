<script lang="ts">
	import type { CloneToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { defaultCloneShape } from '$lib/Puzzle/Shape/Shape';
	import CageRender from './CageRender.svelte';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import { getCurrentConstraintStore, getOutlineFilterUrl } from './utils';

	export let tool: CloneToolI;
	export let c_id: string;

	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultCloneShape;
	$: shape = tool.shape ?? defaultShape;

	$: inset = shape.inset ?? 0.15;
	$: textColor = shape.fontColor ?? shape.stroke ?? 'black';
	const fontWeight = 800;

	const label = tool.value;
	$: cell1 = tool.cells[tool.cells.length - 1];
	$: cell2 = tool.cells2[tool.cells2.length - 1];
	$: cell1TL = new Vector2D(cell1.c + 1 - inset - 0.05, cell1.r + 1 - inset - 0.05);
	$: cell2TL = new Vector2D(cell2.c + 1 - inset - 0.05, cell2.r + 1 - inset - 0.05);

	const outline = true;

	const currentConstraintStore = getCurrentConstraintStore();
	$: currentConstraintId = $currentConstraintStore?.id;
	$: is_selected = c_id !== undefined && c_id === currentConstraintId;
	$: filter_url = getOutlineFilterUrl(outline, is_selected);
</script>

<g class="clone-tool" data-id={c_id} filter={filter_url}>
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
