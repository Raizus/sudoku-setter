<script lang="ts">
	import { inputHandlerStore } from '$stores/InputHandlerStore';
	import Board from './Board.svelte';
	import { onExtraInput } from '$input/ExtraInputHandler';
	import { getWheelInputHandler } from '$input/WheelInputHandler';
	import { stateStore } from '$stores/StateStore';

	let boardContainerRef: HTMLDivElement | null = null;

	const svgRefStore = stateStore.svgRefStore;
	const currentScaleStore = stateStore.currentScaleStore;

	$: inputHandler = $inputHandlerStore;
	$: wheelInputHandler = getWheelInputHandler($svgRefStore);

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

	function resetZoomCb() {
		stateStore.resetZoom();
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
	on:pointerdown|capture|preventDefault={(event) => {
		wheelInputHandler.pointerDown(event);
	}}
	on:pointermove|capture={(event) => {
		wheelInputHandler.pointerMove(event);
	}}
	on:pointerup|capture={(event) => {
		wheelInputHandler.pointerUp(event);
	}}
	on:pointercancel|capture={(event) => {
        // Make sure to handle pointer cancellation too
        wheelInputHandler.pointerUp(event);
    }}
	on:wheel|capture|stopPropagation|preventDefault={(event) => {
		event.currentTarget.focus();
		if (wheelInputHandler.wheelEvent) wheelInputHandler.wheelEvent(event);
	}}
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
	{#if $currentScaleStore !== 1}
		<button
			class="form-button zoom-reset"
			on:click|capture|stopPropagation|preventDefault={resetZoomCb}
		>
			Reset zoom
		</button>
	{/if}
</div>

<style lang="scss">
	.board-container {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;

		/* margin: 5px;
		vertical-align: middle;
		justify-content: space-around;
		align-items: center; */

		&:focus {
			outline: none;
		}
	}

	.zoom-reset {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
		padding: 0 0.5em;
		min-height: 2em;
		min-width: 6ch;

		background-color: var(--panel-background-color);
		border: 0.125rem solid black;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}
	}
</style>
