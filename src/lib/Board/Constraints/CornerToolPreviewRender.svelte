<script lang="ts">
	import RenderShape from '$components/SvgRender/RenderShape.svelte';
	import type { CornerToolI } from '$src/lib/Puzzle/Constraints/CornerConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultCornerCircleShape, SHAPE_TYPES } from '$src/lib/Puzzle/Shape/Shape';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import QuadrupleTextRender from './QuadrupleTextRender.svelte';

	export let tool: CornerToolI;

	$: defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultCornerCircleShape;
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type ?? SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: coords = tool.cells;
	$: center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);

    function getText(tool: CornerToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

<g class="edge-tool-preview" opacity={0.5}>
	<RenderShape cx={center.x} cy={center.y} {shape} />
	<!-- render text -->
	{#if tool.toolId === TOOLS.QUADRUPLE}
		<QuadrupleTextRender cornerTool={tool} />
	{:else}
		<text
			x={center.x}
			y={center.y}
			text-anchor="middle"
			dominant-baseline="central"
			font-size={fontSize}
			fill={fontColor}
		>
			{getText(tool, type)}
		</text>
	{/if}
</g>
