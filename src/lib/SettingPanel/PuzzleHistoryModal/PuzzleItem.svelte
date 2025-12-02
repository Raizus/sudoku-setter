<script lang="ts">
	import { getAuthorsStr } from '$src/lib/utils/functionUtils';
	import { compressedStrToPuzzle } from '../SavePuzzleModal/io_utils';
	import { formatTimestamp, type PuzzleHistoryItem } from './PuzzleHistory';
	import { base } from '$app/paths';
	import { resetUserState, setCreationTimestamp, setPuzzle } from '$stores/BoardStore';
	import { resetZoom } from '$stores/BoundingBoxStore';
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import Trash from '$icons/Trash.svelte';
	import { removePuzzleFromHistory } from '$stores/PuzzleHistoryStore';

	export let item: PuzzleHistoryItem;
	export let item_id: number;
	export let selected: number | undefined;
	export let selected_puzzle: PuzzleI | undefined;
	export let showModal: boolean;

	const constraints: string = 'Given Digits, Regions';
	export let confirm_selected: number | undefined = undefined;

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
		resetUserState();
		resetZoom();
		setCreationTimestamp(item.creationTimestamp);
		setPuzzle(puzzle);
		confirm_selected = undefined;
		showModal = false;
	}

	function destroyCb() {
		if (confirm_selected != item_id) confirm_selected = item_id;
		else {
			// remove item from history
			removePuzzleFromHistory(item_id);
			confirm_selected = undefined;
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
				class="destroy-button icon"
				class:confirm={confirm_selected === item_id}
				on:click|stopPropagation|capture|preventDefault={destroyCb}
			>
				<Trash />
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

	.destroy-button {
		display: flex;
		min-width: 1.5rem;
		height: 1.5rem;
		padding: 0.2rem;
		border: 0;
		border-radius: 0.2em;
		background-color: var(--button-background-color);
		transition: background .4s ease;

		&.confirm {
			background-color: #e6194b;
		}

		& span {
			width: auto;
			padding-right: 0.5rem;
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
