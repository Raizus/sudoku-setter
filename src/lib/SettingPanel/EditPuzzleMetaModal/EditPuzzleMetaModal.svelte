<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$lib/Components/Modal/ModalButtonsContainer.svelte';
	import ModalSectionHeader from '$lib/Components/Modal/ModalSectionHeader.svelte';
	import type { PuzzleMetaI } from '$src/lib/Puzzle/puzzle_schema';
	import { joinStrList } from '$lib/utils/functionUtils';
	import { puzzleMetaStore, updatePuzzleMeta } from '$stores/BoardStore';
	import { elementsDictStore } from '$stores/BoardStore';
	import { generateDescription } from '$src/lib/Puzzle/Puzzle';

	export let showModal = false;

	let titleStr: string = '';
	let authorsStr: string = '';
	let rulesetStr: string = '';
	let ctcYoutubeUrlStr: string = '';
	let ctcUrlStr: string = '';

	$: if (!showModal) {
		const authors = $puzzleMetaStore.authors;
		titleStr = $puzzleMetaStore.title ?? '';
		authorsStr = authors ? joinStrList(authors, '; ', '; ') : '';
		rulesetStr = $puzzleMetaStore.ruleset ?? '';
		ctcYoutubeUrlStr = $puzzleMetaStore.ctcYoutubeUrl ?? '';
		ctcUrlStr = $puzzleMetaStore.ctcUrl ?? '';
	}

	function cancelCb() {
		showModal = false;
	}

	function applyCb() {
		const authors = authorsStr ? parseAuthors(authorsStr) : ['Anonymous'];
		const title = titleStr ? titleStr : 'Sudoku';
		const newPuzzleMeta: PuzzleMetaI = {
			title,
			authors,
			ruleset: rulesetStr,
			ctcYoutubeUrl: ctcYoutubeUrlStr,
			ctcUrl: ctcUrlStr
		};

		updatePuzzleMeta(newPuzzleMeta);
		showModal = false;
	}

	function parseAuthors(authorsStr: string): string[] {
		const authors = authorsStr.split(/\s*[;]\s*/);
		return authors;
	}

	function autoGenCb() {
		const description = generateDescription($elementsDictStore);
		rulesetStr = description;
	}
</script>

<Modal bind:showModal title="Edit Puzzle Meta">
	<div class="edit-puzzle-meta-content">
		<ModalSectionHeader title="Title" />
		<input class="text-input input-title" type="text" placeholder="Title" bind:value={titleStr} />
		<ModalSectionHeader title="Authors" />
		<input
			class="text-input input-authors"
			type="text"
			placeholder="Authors (For multiple authors, separate them with a semi-colon)"
			bind:value={authorsStr}
		/>
		<ModalSectionHeader title="Ruleset">
			<button class="generate-button" on:click={autoGenCb}>Auto-Generate</button>
		</ModalSectionHeader>
		<textarea
			class="text-input input-ruleset"
			placeholder="Ruleset"
			rows={8}
			bind:value={rulesetStr}
		></textarea>
		<ModalSectionHeader title="CTC Link" />
		<input
			class="text-input input-ctc-link"
			type="text"
			placeholder="CTC Link"
			bind:value={ctcUrlStr}
		/>
		<ModalSectionHeader title="CTC Youtube Link" />
		<input
			class="text-input input-ctc-youtube-link"
			type="text"
			placeholder="CTC Youtube Link"
			bind:value={ctcYoutubeUrlStr}
		/>
		<ModalButtonsContainer>
			<button class="modal-button" on:click={applyCb}>Apply</button>
			<button class="modal-button" on:click={cancelCb}>Cancel</button>
		</ModalButtonsContainer>
	</div>
</Modal>

<style lang="scss">
	.edit-puzzle-meta-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0.4em;
		max-height: 100%;
		overflow-y: scroll;
	}

	.generate-button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: var(--button-background-color);
		border-radius: 5px;
		border: 0;
		padding: 0.5rem;

		margin-bottom: 0.2rem;
		margin-top: 0.2rem;

		&:hover {
			background: var(--button-hover-background-color);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}
</style>
