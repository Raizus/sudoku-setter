<script lang="ts">
	import type { ShapeI } from '$src/lib/Puzzle/Shape/Shape';

	export let x: number;
	export let y: number;
	export let value: string | undefined;
	export let shape: ShapeI;

	$: r = shape.r ?? 0.35;
	$: stroke = shape.stroke ?? 'black';
	$: opacity = shape?.opacity;
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: fill =
		value === '1'
			? 'var(--constraint-color-red)'
			: value === '2'
				? 'var(--constraint-color-green)'
				: value === '3'
					? 'var(--constraint-color-blue)'
					: 'none';
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
