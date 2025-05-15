<script lang="ts">
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { getRegularPolygonPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$lib/utils/Vector2D';

	export let cx: number;
	export let cy: number;

	export let shape: ShapeI;

	$: n = shape.n ?? 3;
	$: r = shape.r ?? 0.5;
	$: points = getRegularPolygonPoints(r, n, new Vector2D(cx, cy));
	$: pointsStr = points.map((point) => `${point.x},${point.y}`).join(' ');

	$: stroke = shape.stroke ?? 'black';
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: fill = shape.fill ?? 'none';
	$: angle = shape.angle ?? 0;
</script>

<polygon
	points={pointsStr}
	{stroke}
	stroke-width={strokeWidth}
	{fill}
	transform={`rotate(${angle}, ${cx}, ${cy} )`}
/>
