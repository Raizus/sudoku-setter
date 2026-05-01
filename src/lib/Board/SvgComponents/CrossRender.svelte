<script lang="ts">
	import { getXPathStr } from "$src/lib/utils/SquareCellGridRenderUtils";
    export let cx: number;
    export let cy: number;
    export let shape;

    $: r = shape.r ?? 0.1;
	$: stroke = shape.stroke ?? 'black';
	$: strokeWidth = shape.strokeWidth ?? 0.025;

	$: pathStr = getXPathStr({r: cy, c: cx}, r);
</script>

<path d={pathStr} class="cell-marker" {stroke} stroke-width={strokeWidth} fill="none" stroke-linecap="round"/>