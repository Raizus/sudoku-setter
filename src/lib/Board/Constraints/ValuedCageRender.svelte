<script lang="ts">
	import { defaultCageShape, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { Vector2D } from '$lib/utils/Vector2D';
	import CageRender from './CageRender.svelte';
	import CellTextLabelRender from './CellTextLabelRender.svelte';

	export let cells: GridCoordI[];
	export let shape: ShapeI = defaultCageShape;
	export let value: string | undefined = undefined;

	$: firstCell = cells[0];
	$: cellTLCorner = new Vector2D(firstCell.c, firstCell.r);
</script>

<CageRender {cells} {shape} />
{#if value && value.length}
	<CellTextLabelRender {value} anchorPos={cellTLCorner} position="TL" />
{/if}
