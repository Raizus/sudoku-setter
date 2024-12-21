<script lang="ts">
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';

	export let cx: number;
	export let cy: number;

	export let shape: ShapeI;

    $: width = shape.width ?? 0.5;
	$: height = shape.height ?? 0.5;
	$: stroke = shape.stroke ?? 'black';
	$: opacity = shape?.opacity;
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: fill = shape.fill ?? 'none';
	$: angle = shape.angle ?? 0;
</script>

<ellipse
	{cx}
	{cy}
	rx={width/2}
    ry={height/2}
	{stroke}
	stroke-width={strokeWidth}
	{fill}
	{opacity}
	transform={`rotate(${angle}, ${cx}, ${cy} )`}
/>
