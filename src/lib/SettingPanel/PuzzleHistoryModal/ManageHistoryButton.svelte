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
	import { download } from '../SavePuzzleModal/io_utils';

	export let selected: undefined | number;
	export let selected_puzzle: undefined | PuzzleI;

	let dropdownEl: HTMLDivElement | undefined = undefined;

	let dropdow_open = false;
	let dropdown: DropdownMenu;
	let buttonEl: HTMLButtonElement;

	let inputRef: HTMLInputElement | null = null;
	let files: FileList | null = null;

	$: if (files && files.length) {
		const file = files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(file);

		fileReader.onload = function (evt) {
			if (!evt.target) {
				alert(fileReader.error);
				return;
			}

			// read file successfully
			if (evt.target && evt.target.result) {
				const result = evt.target.result;
				if (typeof result !== 'string') return;
				const obj = JSON.parse(result);

				puzzleHistoryStore.set(obj);
			}
		};
		fileReader.onerror = function () {
			alert(fileReader.error);
		};
	}

	function clearHistoryCb() {
		selected = undefined;
		selected_puzzle = undefined;
		clearPuzzleHistory();
	}

	function importCb() {
		inputRef?.click();

		selected = undefined;
		selected_puzzle = undefined;
	}

	function exportCb() {
		const data = get(puzzleHistoryStore);
		const jsonData = JSON.stringify(data, null, 2);
		download(jsonData, `puzzle_history.json`, 'text/plain', dropdownEl);
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

<DropdownMenu bind:this={dropdown} bind:dropdownEl bind:open={dropdow_open} {buttonEl} let:close>
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
			close();
		}}
	>
		<Upload slot="icon" />
		<svelte:fragment slot="label">
			Import list
			<input bind:this={inputRef} type="file" accept=".json" bind:files />
		</svelte:fragment>
	</DropdownMenuButton>
	<DropdownMenuButton
		clickCb={() => {
			exportCb();
			close();
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

	input {
		position: relative;
		display: none;
		appearance: none;
		opacity: 0;
		top: 0;
		left: 0;
	}
</style>
