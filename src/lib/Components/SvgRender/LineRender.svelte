<script lang="ts">
	import type { PathOptions, ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { linePointsToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import type { Vector2D } from '$lib/utils/Vector2D';

	export let linePoints: Vector2D[];
    export let shape: ShapeI | undefined = undefined;

    $: stroke = shape?.stroke ?? 'gray';
    $: strokeWidth = shape?.strokeWidth ?? 0.1;
    $: strokeDasharray = shape?.strokeDasharray ?? 0;
	$: strokeDashoffset = shape?.strokeDashoffset ?? 0;
    // $: opacity = shape?.opacity ?? 0.8;
    $: linePathOptions = {
        shortenHead: shape?.linePathOptions?.shortenHead ?? 0.2,
		shortenTail: shape?.linePathOptions?.shortenTail ?? 0.2,
		bezierRounding: shape?.linePathOptions?.bezierRounding ?? 0.2,
		closeLoops: shape?.linePathOptions?.closeLoops ?? false,
    };

    const strokeLinejoin = "round";
    const strokeLinecap = "round";

	$: pathStr = linePointsToPathStr(linePoints, linePathOptions);
</script>

<path
	d={pathStr}
	{stroke}
	stroke-width={strokeWidth}
	fill="none"
	stroke-dasharray={strokeDasharray}
	stroke-dashoffset={strokeDashoffset}
	stroke-linejoin={strokeLinejoin}
    stroke-linecap={strokeLinecap}
/>
