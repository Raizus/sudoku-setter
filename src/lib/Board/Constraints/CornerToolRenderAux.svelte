<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
	import { SHAPE_TYPES, defaultCornerCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';

	import { Vector2D } from '$lib/utils/Vector2D';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import QuadrupleTextRender from './QuadrupleTextRender.svelte';
	import RenderShape from '$src/lib/Board/SvgComponents/RenderShape.svelte';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CornerToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: defaultShape =
	getDefaultShape(tool.toolId, squareCellElementHandlers) ?? defaultCornerCircleShape;
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type ?? SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	$: coords = tool.cells;
	$: center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);

	function getText(tool: CornerToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

{#if coords.length === 4}
	<g class="corner-tool">
		{#if c_id && c_id === currentConstraintId}
			<RenderShape cx={center.x} cy={center.y} shape={selectedOutlineShape} />
		{/if}
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
				<!-- &#215; -->
				{getText(tool, type)}
			</text>
		{/if}
	</g>
{/if}
