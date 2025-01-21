<script lang="ts">
	import CircleRender from '$components/SvgRender/CircleRender.svelte';
	import LineRender from '$components/SvgRender/LineRender.svelte';
	import { type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { Vector2D } from '$lib/utils/Vector2D';
	import { cloneDeep } from 'lodash';

	export let linePoints: Vector2D[];
    export let shape: ShapeI;

	$: len = linePoints.length;
	$: is_closed = len > 1 && linePoints[0].equals(linePoints[len-1]);
	$: head = len >= 0 ? linePoints[0] : undefined;
	$: tail = len >= 0 ? linePoints[len - 1] : undefined;

	function buildShape(shape: ShapeI) {
		const newShape = cloneDeep(shape);
		newShape.r = newShape.r || 0.2;
		newShape.strokeWidth = 0;
		newShape.opacity = 1;

		return newShape;
	}

	$: shape2 = buildShape(shape);

</script>

<LineRender {linePoints} {shape} />
{#if !is_closed && head}
	<CircleRender x={head.x} y={head.y} shape={shape2} />
{/if}

{#if !is_closed && tail}
	<CircleRender x={tail.x} y={tail.y} shape={shape2} />
{/if}