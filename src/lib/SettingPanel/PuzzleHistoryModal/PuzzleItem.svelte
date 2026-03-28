<script lang="ts">
	import { getAuthorsStr } from '$src/lib/utils/functionUtils';
	import { compressedStrToPuzzle } from '../SavePuzzleModal/io_utils';
	import { formatTimestamp, type PuzzleHistoryItem } from './PuzzleHistory';
	import { base } from '$app/paths';
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import Trash from '$icons/Trash.svelte';
	import { puzzleHistoryStore } from '$stores/PuzzleHistoryStore';
	import { stateStore } from '$stores/StateStore';

	export let item: PuzzleHistoryItem;
	export let item_id: number;
	export let selected: number | undefined;
	export let selected_puzzle: PuzzleI | undefined;
	export let showModal: boolean;
	export let confirm_selected: number | undefined = undefined;

	const constraints: string = 'Given Digits, Regions';
	const historyStore = puzzleHistoryStore.history_store;

	$: compressedStr = item.encodedStr;
	$: puzzle = compressedStrToPuzzle(compressedStr);

	$: title = puzzle.puzzleMeta.title ? puzzle.puzzleMeta.title : 'Sudoku';
	$: authors = getAuthorsStr(puzzle.puzzleMeta.authors);
	$: creation_date = formatTimestamp(item.creationTimestamp);
	$: update_date = formatTimestamp(item.lastUpdateTimestamp);

	function clickCb() {
		selected = item_id;
		selected_puzzle = puzzle;
	}

	function dbClickCb() {
		// close modal, clear user state, load new puzzle, clear command history
		stateStore.resetUserState();
		stateStore.setCreationTimestamp(item.creationTimestamp);
		stateStore.setPuzzle(puzzle);
		confirm_selected = undefined;
		showModal = false;
	}

	function destroyCb() {
		if (confirm_selected != item_id) confirm_selected = item_id;
		else {
			// remove item from history
			puzzleHistoryStore.removeItem(item_id);
			confirm_selected = undefined;
			const puzzle_count = $historyStore.length;

			// select next or previous item
			if (item_id < puzzle_count) {
				selected = item_id;
				const item = $historyStore[selected];
				selected_puzzle = compressedStrToPuzzle(item.encodedStr);
			} else if (item_id > 0) {
				selected = item_id - 1;
				const item = $historyStore[selected];
				selected_puzzle = compressedStrToPuzzle(item.encodedStr);
			} else {
				selected = undefined;
				selected_puzzle = undefined;
			}
		}
	}

	$: active = selected === item_id;
</script>

<li class="item-container" class:active>
	<a
		class="link"
		on:click|stopPropagation|preventDefault={clickCb}
		on:dblclick|stopPropagation|preventDefault={dbClickCb}
		href={`${base}/?puzzle=${compressedStr}`}
	>
		<div class="header">
			<div class="title">{title} by {authors}</div>
			<button
				class="panel-button icon"
				class:confirm={confirm_selected === item_id}
				on:click|stopPropagation|capture|preventDefault={destroyCb}
			>
				<div class="icon-wrapper">
					<Trash />
				</div>
				{#if confirm_selected === item_id}
					<span> Confirm </span>
				{/if}
			</button>
		</div>
		<div class="constraints">{constraints}</div>
		<div class="date">Creation Date: {creation_date}</div>
		<div class="date">Last Update: {update_date}</div>
	</a>
</li>

<style lang="scss">
	.link {
		border-radius: 0.5rem;
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		display: block;
		padding-left: 1rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icon-wrapper {
		width: 1-2rem;
		height: 1.2rem;
		display: flex;
	}

	.panel-button {
		margin-top: 0;
		margin-bottom: 0;
		transition: all 0.5s ease;

		&.confirm {
			width: auto;
			background-color: #e6194b;
		}
	}

	.item-container {
		border: 0.1rem solid black;
		border-radius: 0.5rem;

		&:hover {
			.title {
				text-decoration: underline;
			}
			cursor: pointer;
		}

		&.active {
			.link {
				outline: 0.15rem solid var(--input-outline-color);
			}
		}
	}

	.title {
		font-size: large;
		font-weight: bold;
	}
</style>
