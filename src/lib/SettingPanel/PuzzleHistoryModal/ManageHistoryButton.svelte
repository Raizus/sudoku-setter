<script lang="ts">
	import DropdownMenu from '$components/DropdownMenu.svelte';
	import DropdownMenuButton from '$components/DropdownMenuButton.svelte';
	import Build from '$icons/Build.svelte';
	import Trash from '$icons/Trash.svelte';
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import { clearPuzzleHistory } from '$stores/PuzzleHistoryStore';

	export let selected: undefined | number;
	export let selected_puzzle: undefined | PuzzleI;

	let dropdow_open = false;
	let dropdown: DropdownMenu;
	let buttonEl: HTMLButtonElement;

	function clearHistoryCb() {
		selected = undefined;
		selected_puzzle = undefined;
		clearPuzzleHistory();
	}
</script>

<button
	bind:this={buttonEl}
	class="form-button icon edit-history"
	on:click|stopPropagation={() => dropdown?.toggle()}
	aria-label="Manage history"
>
	<div class="icon-wrapper">
		<Build />
	</div>
</button>

<DropdownMenu bind:this={dropdown} bind:open={dropdow_open} {buttonEl} let:close>
	<DropdownMenuButton
		clickCb={() => {
			clearHistoryCb();
			close();
		}}
	>
		<Trash slot="icon" />
		<svelte:fragment slot="label">Clear list</svelte:fragment>
	</DropdownMenuButton>
</DropdownMenu>

<style lang="scss">
	.edit-history {
		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		width: 80%;
		height: 80%;
	}
</style>
