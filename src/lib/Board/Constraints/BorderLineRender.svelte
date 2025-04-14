<script lang="ts">
	import type { ShapeI } from '$src/lib/Puzzle/Shape/Shape';
	import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';

	export let shape: ShapeI;
	export let coords: GridCoordI[];

	const [coord1, coord2] = coords;

	$: stroke = shape.stroke ?? 'black';
	$: opacity = shape?.opacity;
	$: strokeWidth = shape.strokeWidth ?? 0.02;

	const x1 = coord2.c;
	const x2 = coord1.c === coord2.c ? coord2.c + 1 : coord2.c;
	const y1 = coord2.r;
	const y2 = coord1.r === coord2.r ? coord2.r + 1 : coord2.r;
</script>

<line {x1} {x2} {y1} {y2} {stroke} stroke-width={strokeWidth} {opacity} stroke-linecap='butt'/>

<style>
	line {
		fill: none;
	}
</style>
