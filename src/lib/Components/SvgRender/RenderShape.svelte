<script lang="ts">
	import { SHAPE_TYPES, type ShapeI } from "$src/lib/Puzzle/Shape/Shape";
	import CircleRender from "./CircleRender.svelte";
	import EllipseRender from "./EllipseRender.svelte";
	import PolygonRender from "./PolygonRender.svelte";
	import RectangleRender from "./RectangleRender.svelte";
	import SquareRender from "./SquareRender.svelte";

    export let cx: number;
    export let cy: number;
    export let shape: ShapeI;

    $: type = shape?.type ?? SHAPE_TYPES.CIRCLE;
</script>

{#if type === SHAPE_TYPES.CIRCLE}
	<CircleRender x={cx} y={cy} {shape} />
{:else if type === SHAPE_TYPES.ELLIPSE}
	<EllipseRender cx={cx} cy={cy} {shape} />
{:else if type === SHAPE_TYPES.SQUARE}
	<SquareRender cx={cx} cy={cy} {shape} />
{:else if type === SHAPE_TYPES.RECTANGLE}
	<RectangleRender cx={cx} cy={cy} {shape} />
{:else if type === SHAPE_TYPES.POLYGON}
	<PolygonRender cx={cx} cy={cy} {shape} />
{:else}
    <CircleRender x={cx} y={cy} {shape} />
{/if}
