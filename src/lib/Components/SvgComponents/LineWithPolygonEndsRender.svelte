<script lang="ts">
	import { type ShapeI, defaultLineShape } from '$lib/Puzzle/Shape/Shape';
	import { cloneDeep } from 'lodash';

	import PolygonRender from './PolygonRender.svelte';
	import { Vector2D } from '$lib/utils/Vector2D';
	import { getRegularPolygonPoints } from '$lib/utils/SquareCellGridRenderUtils';
	import LineRender from './LineRender.svelte';

	export let linePoints: Vector2D[];
	export let shape: ShapeI = defaultLineShape;

	const defaultN = 4;
	const defaultR = 0.5;

	$: len = linePoints.length;
	$: head = len >= 0 ? linePoints[0] : undefined;
	$: tail = len >= 0 ? linePoints[len - 1] : undefined;

	function shortenToPolygon(theta: number, _shape: ShapeI): number {
		const r = _shape.r ?? defaultR;
		const n = _shape.n ?? defaultN;
		const angle = _shape.angle ?? 0;
		const polyPoints = getRegularPolygonPoints(r, n, new Vector2D(0, 0), true, 0);

		const startIdx = (n + (((theta - angle / 360) * n) % n)) % n;
		const a = Math.floor(startIdx) % n;
		const b = Math.ceil(startIdx) % n;
		const dv = polyPoints[a].lerp(polyPoints[b], startIdx % 1);
		const shorten = dv.length();
		return shorten;
	}

	function getShortenHead(_shape: ShapeI): number {
		if (len <= 1) return 0;

		const p1 = linePoints[0];
		const p2 = linePoints[1];

		const theta = p2.subtract(p1).angle() / (2 * Math.PI);
		const shorten = shortenToPolygon(theta, _shape);
		return shorten;
	}

	function getShortenTail(_shape: ShapeI): number {
		if (len <= 1) return 0;

		const p1 = linePoints[len-1];
		const p2 = linePoints[len-2];

		const theta = p2.subtract(p1).angle() / (2 * Math.PI);
		const shorten = shortenToPolygon(theta, _shape);
		return shorten;
	}

	function buildLineShape(shape: ShapeI) {
		const newShape = cloneDeep(shape);
		newShape.r = newShape.r || defaultR;
		newShape.opacity = 1;
		newShape.linePathOptions = {
			shortenHead: getShortenHead(newShape),
			shortenTail: getShortenTail(newShape),
			bezierRounding: newShape.linePathOptions?.bezierRounding
		};

		return newShape;
	}

	$: shape = buildLineShape(shape);
</script>

{#if head}
	<PolygonRender cx={head.x} cy={head.y} {shape} />
{/if}
{#if len > 1}
	<LineRender linePoints={linePoints} {shape} />
{/if}
{#if tail}
	<PolygonRender cx={tail.x} cy={tail.y} {shape} />
{/if}
