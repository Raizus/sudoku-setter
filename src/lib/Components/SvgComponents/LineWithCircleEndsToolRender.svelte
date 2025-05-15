<script lang="ts">
	import { type ShapeI, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cloneDeep } from 'lodash';

	import type { Vector2D } from '$lib/utils/Vector2D';
	import CircleRender from './CircleRender.svelte';
	import LineRender from './LineRender.svelte';

	export let linePoints: Vector2D[];
	export let shape: ShapeI = defaultLineShape;

	$: len = linePoints.length;

	$: head = len >= 0 ? linePoints[0] : undefined;
	$: tail = len >= 0 ? linePoints[len - 1] : undefined;

	function buildShape(shape: ShapeI) {
		const newShape = cloneDeep(shape);
		newShape.r = newShape.r || 0.2;
		const shorten = newShape.r;
		newShape.strokeDasharray = shape.strokeDasharray;
		newShape.opacity = 1;
		newShape.linePathOptions = {
			shortenHead: shorten,
			shortenTail: shorten,
			bezierRounding: newShape.linePathOptions?.bezierRounding
		};

		return newShape;
	}

	$: shape2 = buildShape(shape);
</script>

{#if head}
	<CircleRender x={head.x} y={head.y} shape={shape2} />
{/if}
{#if len > 1}
	<LineRender {linePoints} shape={shape2} />
{/if}
{#if tail}
	<CircleRender x={tail.x} y={tail.y} shape={shape2} />
{/if}
