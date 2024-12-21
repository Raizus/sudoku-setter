<script lang="ts">
	import Rectangle from '$icons/Rectangle.svelte';
	import Square from '$icons/Square.svelte';
	import Circle from '$icons/Circle.svelte';
	import Hexagon from '$icons/Hexagon.svelte';
	import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
	import PropertyBlock from './PropertyBlock.svelte';
	import ShapeRadio from './ShapeRadio.svelte';
	import type { ComponentType } from 'svelte';
	import Ellipse from '$icons/Ellipse.svelte';

	export let name: string;
	export let selectedShape: SHAPE_TYPES;
	export let possibleShapes: SHAPE_TYPES[];
	export let updateShapeCb: ((shape: SHAPE_TYPES) => void) | undefined = undefined;
    
    const shapeIconMap: Map<SHAPE_TYPES, ComponentType> = new Map([
		[SHAPE_TYPES.CIRCLE, Circle],
        [SHAPE_TYPES.ELLIPSE, Ellipse],
        [SHAPE_TYPES.SQUARE, Square],
		[SHAPE_TYPES.RECTANGLE, Rectangle],
		[SHAPE_TYPES.POLYGON, Hexagon]
	]);

</script>

<PropertyBlock {name}>
	<div class="radio-container">
		{#each possibleShapes as shape}
			<ShapeRadio title={shape} value={shape} {selectedShape} {updateShapeCb}>
				{#if shapeIconMap.has(shape)}
					<div class="icon-wrapper">
						<svelte:component this={shapeIconMap.get(shape)} />
					</div>
				{/if}
			</ShapeRadio>
		{/each}
	</div>
</PropertyBlock>

<style>
	.radio-container {
		display: flex;
		flex-direction: row;
        gap: 5px;
        padding: 5px;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
        justify-items: center;
		width: 80%;
		height: 80%;
	}
</style>
