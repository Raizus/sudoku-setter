<script lang="ts">
	import type { ShapeI } from "$lib/Puzzle/Shape/Shape";

    export let cx: number;
    export let cy: number;

    export let shape: ShapeI

    $: width = shape.width ?? 0.5;
    $: height = shape.height ?? 0.5;
    $: x = cx - width/2;
    $: y = cy - height/2;

    $: stroke = shape.stroke || "black";
    $: strokeWidth = shape.strokeWidth || 0.023;
    $: fill = shape.fill || "none";
</script>

<rect {x} {y} {width} {height} {stroke} stroke-width={strokeWidth} {fill}/>

<!-- <style>
    rect {
        stroke: black;
        fill: none;
    }
</style> -->