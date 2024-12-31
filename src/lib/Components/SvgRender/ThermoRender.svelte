<script lang="ts">
	import { defaultLineShape, SHAPE_TYPES, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { cloneDeep } from 'lodash';

	import type { Vector2D } from '$lib/utils/Vector2D';
	import LineRender from './LineRender.svelte';
	import CircleRender from './CircleRender.svelte';
	import PolygonRender from './PolygonRender.svelte';

	export let linePoints: Vector2D[];
	export let shape: ShapeI = defaultLineShape;

	$: head = linePoints.length > 0 ? linePoints[0] : undefined;

	function buildLineShape(shape: ShapeI) {
		const newShape = cloneDeep(shape);
		newShape.r = newShape.r || 0.3;
		newShape.opacity = 1;
		const shorten = newShape.r;
		newShape.linePathOptions = {
			shortenHead: newShape.linePathOptions?.shortenHead || shorten,
			shortenTail: newShape.linePathOptions?.shortenTail,
			bezierRounding: newShape.linePathOptions?.bezierRounding
		};

		return newShape;
	}

	function buildBulbShape(shape: ShapeI) {
		const newShape = cloneDeep(shape);
		newShape.r = newShape.r || 0.3;
		newShape.opacity = 1;
		newShape.strokeWidth = 0;
		const shorten = newShape.r;
		newShape.linePathOptions = {
			shortenHead: newShape.linePathOptions?.shortenHead || shorten,
			shortenTail: newShape.linePathOptions?.shortenTail,
			bezierRounding: newShape.linePathOptions?.bezierRounding
		};

		return newShape;
	}
</script>

{#if linePoints.length > 1}
	<LineRender {linePoints} shape={buildLineShape(shape)} />
{/if}
{#if head && shape.type === SHAPE_TYPES.THERMO_WITH_CIRCLE}
	<CircleRender x={head.x} y={head.y} shape={buildLineShape(shape)} />
{:else if head}
	<PolygonRender cx={head.x} cy={head.y} shape={buildBulbShape(shape)} />
{/if}

