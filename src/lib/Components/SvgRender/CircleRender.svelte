<script lang="ts">
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';

	export let x: number;
	export let y: number;

	export let shape: ShapeI;

	$: r = shape.r ?? 0.35;
	$: stroke = shape.stroke ?? 'black';
	$: opacity = shape?.opacity;
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: fill = shape.fill ?? 'none';
	$: strokeDasharray = shape.strokeDasharray ?? 0;
</script>

<circle
	cx={x}
	cy={y}
	{r}
	{stroke}
	stroke-width={strokeWidth}
	{fill}
	{opacity}
	stroke-dasharray={strokeDasharray}
/>
