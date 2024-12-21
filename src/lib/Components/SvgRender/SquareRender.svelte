<script lang="ts">
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';

	export let cx: number;
	export let cy: number;

	export let shape: ShapeI;

	$: r = shape.r ?? 0.5;
	$: x = cx - r;
	$: y = cy - r;
	$: width = 2 * r;
	$: height = 2 * r;

	$: stroke = shape.stroke ?? 'black';
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: fill = shape.fill ?? 'none';
	$: angle = shape.angle ?? 0;
</script>

<rect
	{x}
	{y}
	{width}
	{height}
	{stroke}
	stroke-width={strokeWidth}
	{fill}
	transform={`rotate(${angle}, ${cx}, ${cy})`}
/>

