<script lang="ts">
	import { defaultCageShape, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { getCagePathStr } from '$lib/utils/SquareCellGridRenderUtils';

	export let cells: GridCoordI[];
    export let shape: ShapeI = defaultCageShape;

	type Linejoin = "inherit" | "miter" | "arcs" | "miter-clip" | "round" | "bevel" | null | undefined;

	$: inset = shape.inset ?? 0.06;
	$: stroke = shape.stroke ?? 'black';
	$: strokeWidth = shape.strokeWidth ?? 0.03;
	$: strokeDasharray = shape.strokeDasharray ?? 0.08;
	$: fill = shape.fill ?? 'none';
	$: connectDiag = shape.connectDiag ?? true;

	$: maskPathStr = getCagePathStr(cells, inset, connectDiag);

	$: strokeLinejoin = (shape.strokeLinejoin ?? "miter") as Linejoin;
    const strokeLinecap = "square";

</script>

<path
	d={maskPathStr}
	{stroke}
	stroke-width={strokeWidth}
	{fill}
	stroke-dasharray={strokeDasharray}
	stroke-linejoin={strokeLinejoin}
    stroke-linecap={strokeLinecap}
/>

