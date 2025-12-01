<script lang="ts">
	import DropdownMenu from '$components/DropdownMenu.svelte';
	import DropdownMenuButton from '$components/DropdownMenuButton.svelte';
	import Build from '$icons/Build.svelte';
	import Download from '$icons/Download.svelte';
	import Trash from '$icons/Trash.svelte';
	import Upload from '$icons/Upload.svelte';
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import { clearPuzzleHistory, puzzleHistoryStore } from '$stores/PuzzleHistoryStore';
	import { get } from 'svelte/store';
	import { download } from '../SavePuzzleModal/utils';

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

	function importCb() {
		selected = undefined;
		selected_puzzle = undefined;
	}

	function exportCb() {
		const data = get(puzzleHistoryStore);
		const jsonData = JSON.stringify(data, null, 2);
		console.log(jsonData);
		download(jsonData, `puzzle_history.json`, 'text/plain');
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
	<DropdownMenuButton
		clickCb={() => {
			importCb();
			// close();
		}}
	>
		<Upload slot="icon" />
		<svelte:fragment slot="label">Import list</svelte:fragment>
	</DropdownMenuButton>
	<DropdownMenuButton
		clickCb={() => {
			exportCb();
			// close();
		}}
	>
		<Download slot="icon" />
		<svelte:fragment slot="label">Export list</svelte:fragment>
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
