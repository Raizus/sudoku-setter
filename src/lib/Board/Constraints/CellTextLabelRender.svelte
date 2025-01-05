<script lang="ts">
	import { Vector2D } from '$lib/utils/Vector2D';
	import { afterUpdate } from 'svelte';

    export let value = '';
	export let fontSize = 0.2;

	export let anchorPos: Vector2D;
	export let position: 'TL' | 'TR' | 'BL' | 'BR' = 'TL';

	export let fontColor = "var(--text-primary-color)";
	export let fontWeight = 400;

	let textRef: SVGTextElement | null = null;
	let rectRef: SVGRectElement | null = null;

	function getTextPos(cellTL: Vector2D, _position: 'TL' | 'TR' | 'BL' | 'BR'): Vector2D {
		const top = ['TL', 'TR'].includes(_position);
		const left = ['TL', 'BL'].includes(_position);

		const x = left ? cellTL.x + 0.05: cellTL.x + 1;
		const y = top ? cellTL.y : cellTL.y + 1;

		const textPos = new Vector2D(x, y);
		return textPos;
	}

	function getAnchor( _position: 'TL' | 'TR' | 'BL' | 'BR'): string {
		const anchor = ["TL", "BL"].includes(_position) ? "start" : "end";
		return anchor;
	}

	function getBaseline( _position: 'TL' | 'TR' | 'BL' | 'BR'): string {
		const baseline = ["TL", "TR"].includes(_position) ? "text-before-edge" : "";
		return baseline;
	}

	afterUpdate(() => {
		if (!textRef || !rectRef) return;

		const bbox = textRef.getBBox();
		rectRef.setAttribute('x', String(bbox.x));
		rectRef.setAttribute('y', String(bbox.y + bbox.height * 0.1));
		rectRef.setAttribute('width', String(bbox.width));
		rectRef.setAttribute('height', String(bbox.height * 0.8));
	});

	$: textPos = getTextPos(anchorPos, position);
</script>

{#if value.length}
	<rect bind:this={rectRef} class="masking-rect" />
	<text
		bind:this={textRef}
		x={textPos?.x}
		y={textPos?.y}
		text-anchor={getAnchor(position)}
		dominant-baseline={getBaseline(position)}
		font-size={fontSize}
		fill={fontColor}
		font-weight={fontWeight}
	>
		{value}
	</text>
{/if}

<style>
	.masking-rect {
		stroke: none;
		fill: var(--grid-background-color);
		opacity: 0.95;
	}
</style>
