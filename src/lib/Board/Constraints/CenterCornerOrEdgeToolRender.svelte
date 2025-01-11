<script lang="ts">
	import { SHAPE_TYPES, defaultEdgeCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';
	import { cellNotOnTheLoopInfo } from '$src/lib/Puzzle/ElementsInfo/SingleCellElementsInfo';
	import CellTextLabelRender from './CellTextLabelRender.svelte';

	export let centerCornerOrEdgeTool: CenterCornerOrEdgeToolI;

	const coords = centerCornerOrEdgeTool.cell;
	const defaultShape =
		getDefaultShape(centerCornerOrEdgeTool.toolId, squareCellElementHandlers) ??
		defaultEdgeCircleShape;
	$: shape = centerCornerOrEdgeTool.shape ?? defaultShape;

	$: center = coords;

	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: isCellCenter = center.r % 1 === 0.5 && center.c % 1 === 0.5;

	function getText(tool: CenterCornerOrEdgeToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

<g class="center-corner-or-edge-tool">
	<RenderShape cx={center.c} cy={center.r} {shape} />
	{#if isCellCenter}
		<CellTextLabelRender
			value = {getText(centerCornerOrEdgeTool, type)}
			x={Math.floor(center.c)}
			y={Math.floor(center.r)}
			position="TL"
			{fontColor}
		/>
	{:else}
		<text
			x={center.c}
			y={center.r}
			text-anchor="middle"
			dominant-baseline="central"
			font-size={fontSize}
			fill={fontColor}
		>
			{getText(centerCornerOrEdgeTool, type)}
		</text>
	{/if}
</g>
