<script lang="ts">
		import type { CornerToolI } from "$src/lib/Puzzle/puzzle_schema";
	import { getDefaultShape } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
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
		getDefaultShape(cornerTool.toolId, elementInfoRegistry) ?? defaultCornerCircleShape;
	$: shape = cornerTool.shape ?? defaultShape;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: values = value ? value?.split(',') : [];
</script>

{#if value}
	<g class="quadruple-text" data-count={values.length}>
		{#if values.length <= 2}
			<text
				x={center.x}
				y={center.y}
				text-anchor="middle"
				dominant-baseline="central"
				font-size={fontSize}
				fill={fontColor}
			>
				{values.join(' ')}
			</text>
		{:else}
			<text
				x={center.x}
				y={center.y}
				dy={-fontSize / 2}
				text-anchor="middle"
				dominant-baseline="central"
				font-size={fontSize}
				fill={fontColor}
			>
				{values.slice(0, 2).join(' ')}
			</text>
			<text
				x={center.x}
				y={center.y}
				dy={fontSize / 2}
				text-anchor="middle"
				dominant-baseline="central"
				font-size={fontSize}
				fill={fontColor}
			>
				{values.slice(2).join(' ')}
			</text>
		{/if}
	</g>
{/if}

<style lang="scss">
	text {
		text-anchor: 'middle';
		dominant-baseline: 'central';
	}
</style>
