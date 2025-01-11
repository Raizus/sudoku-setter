<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
	import { SHAPE_TYPES, defaultCornerCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';

	import { Vector2D } from '$lib/utils/Vector2D';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import QuadrupleTextRender from './QuadrupleTextRender.svelte';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';

	export let cornerTool: CornerToolI;

	const coords = cornerTool.cells;
	const defaultShape =
		getDefaultShape(cornerTool.toolId, squareCellElementHandlers) ?? defaultCornerCircleShape;
	$: shape = cornerTool.shape ?? defaultShape;

	$: type = shape?.type ?? SHAPE_TYPES.CIRCLE;
	const center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);

	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	function getText(tool: CornerToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

{#if coords.length === 4}
	<g class="corner-tool">
		<RenderShape cx={center.x} cy={center.y} {shape} />
		<!-- render text -->
		{#if cornerTool.toolId === TOOLS.QUADRUPLE}
			<QuadrupleTextRender {cornerTool} />
		{:else}
			<text
				x={center.x}
				y={center.y}
				text-anchor="middle"
				dominant-baseline="central"
				font-size={fontSize}
				fill={fontColor}
			>
				<!-- &#215; -->
				{getText(cornerTool, type)}
			</text>
		{/if}
	</g>
{/if}

<!-- <style>
	text {
		stroke-width: 0.01;
		stroke: var(--grid-background-color);
	}
</style> -->