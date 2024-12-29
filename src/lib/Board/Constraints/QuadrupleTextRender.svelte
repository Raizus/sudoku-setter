<script lang="ts">
	import type { CornerToolI } from '$src/lib/Puzzle/Constraints/CornerConstraints';
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultCornerCircleShape } from '$src/lib/Puzzle/Shape/Shape';
	import { Vector2D } from '$src/lib/utils/Vector2D';

	export let cornerTool: CornerToolI;

	$: value = cornerTool.value;

	function get_values(value: string | undefined): string {
		if (!value) return '';
		const values = value.replace(' ', '');
		return values;
	}

	const coords = cornerTool.cells;
	const center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);

	const defaultShape =
		getDefaultShape(cornerTool.toolId, squareCellElementHandlers) ?? defaultCornerCircleShape;
	$: shape = cornerTool.shape ?? defaultShape;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: values = get_values(value);
</script>

{#if value}
	<g class="quadruple-text" data-count={values.length}>
		<text
			x={center.x}
			y={center.y}
			text-anchor="middle"
			dominant-baseline="central"
			font-size={fontSize}
			fill={fontColor}
		>
			{value}
		</text>
	</g>
{/if}

<style lang="scss">
</style>
