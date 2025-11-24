<script lang="ts">
	import Check from '$icons/Check.svelte';
	import Redo from '$icons/Redo.svelte';
	import Select from '$icons/Select.svelte';
	import Undo from '$icons/Undo.svelte';
	import { selectOnStore } from '$stores/BoardStore';
	import { commandHistoryStore, redo, undo } from '$stores/CommandHistoryStore';

	$: undoDisabled = $commandHistoryStore._undoStack.length === 0;
	$: redoDisabled = $commandHistoryStore._redoStack.length === 0;

	function undoCb() {
		undo();
	}

	function redoCb() {
		redo();
	}

	function checkCb() {
		console.log('check');
	}

	function selectCb() {
		$selectOnStore = !$selectOnStore;
	}
</script>

<div class="controls-aux-pad">
	<button
		class="entry-panel-button controls-aux-button undo"
		title="Undo"
		disabled={undoDisabled}
		on:click={undoCb}
	>
		<Undo />
	</button>
	<button
		class="entry-panel-button controls-aux-button redo"
		title="Redo"
		disabled={redoDisabled}
		on:click={redoCb}
	>
		<Redo />
	</button>
	<button
		class="entry-panel-button controls-aux-button check"
		title="Check"
		disabled={true}
		on:click={checkCb}
	>
		<Check />
	</button>
	<button
		role="switch"
		aria-checked={$selectOnStore}
		class="controls-aux-switch controls-aux-button select"
		class:active={$selectOnStore}
		title="Select"
		on:click={selectCb}
	>
		<Select />
	</button>
</div>

<style lang="scss">
	$button-size: var(--entry-panel-button-size);
	$button-gap: var(--entry-panel-button-gap);

	.controls-aux-pad {
		display: grid;
		grid-auto-columns: $button-size;
		grid-template-rows: repeat(4, $button-size);
		grid-auto-flow: column;
		gap: $button-gap;
	}

	.controls-aux-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.controls-aux-switch {
		border: 1px solid var(--icon-button-color);
		border-radius: 0.3rem;
		color: var(--icon-button-color);
		font-weight: 700;
		cursor: pointer;
		background-color: var(--background-color);

		&:hover {
			background-color: hsl(215, 19%, 85%);
		}

		&.active {
			background-color: var(--icon-button-color);
			color: white;
		}
	}

	// .select {
	// 	&.active {
	// 		background-color: var(--icon-button-color);
	// 		color: white;
	// 	}
	// }
</style>
