<script lang="ts">
	import { InputHandlerStore } from '$stores/InputHandlerStore';
	import { svgRefStore } from '$stores/BoardStore';
	import Board from './Board.svelte';
	import { onExtraInput } from '$input/ExtraInputHandler';

	let boardContainerRef: HTMLDivElement | null = null;

	$: inputHandler = $InputHandlerStore;

	function wrapListener<T>(onEvent?: (event: T) => void): (event: T) => void {
		return (event: T) => {
			if (!onEvent) return undefined;
			if (
				inputHandler !== null &&
				(document.activeElement === $svgRefStore ||
					document.activeElement === document.body ||
					document.activeElement === boardContainerRef)
			) {
				onEvent(event);
			}
		};
	}
</script>

<svelte:window
	on:keydown={onExtraInput}
	on:keydown={wrapListener(inputHandler?.keyDown)}
	on:keyup={wrapListener(inputHandler?.keyUp)}
/>

<div
	bind:this={boardContainerRef}
	class="board-container"
	tabindex="-1"
	on:pointerdown|capture|stopPropagation|preventDefault={(event) => {
		event.currentTarget.focus();
		inputHandler?.pointerDown(event);
	}}
	on:pointermove|capture|stopPropagation|preventDefault={(event) => {
		event.currentTarget.focus();
		inputHandler?.pointerMove(event);
	}}
	on:pointerup|capture|stopPropagation|preventDefault={(event) => {
		event.currentTarget.focus();
		inputHandler?.pointerUp(event);
	}}
>
	<Board bind:svgRef={$svgRefStore} />
</div>

<style>
	.board-container {
		margin: 5px;
		vertical-align: middle;
		justify-content: space-around;
		align-items: center;
		/* background-color: red; */
		max-width: 100%;
		max-height: 100%;
		aspect-ratio: 1/1;
	}

	.board-container:focus {
		outline: none;
	}
</style>
