<script lang="ts">
	import LineRender from '$src/lib/Board/SvgComponents/LineRender.svelte';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
	import { SHAPE_TYPES, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
		import type { CornerLineToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import MazeWallRender from './MazeWallRender.svelte';

	export let tool: CornerLineToolI;
	const defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultLineShape;

	$: linePoints = tool.coords.map((coord) => new Vector2D(coord.c, coord.r));
	$: shape = tool.shape ?? defaultShape;
	$: type = shape?.type || SHAPE_TYPES.LINE;
	$: opacity = shape?.opacity ?? 1;
</script>

<g class="corner-line-tool" {opacity}>
	{#if type === SHAPE_TYPES.MAZE_WALL}
		<MazeWallRender {linePoints} {shape} />
	{:else}
		<LineRender {linePoints} {shape} />
	{/if}
</g>
