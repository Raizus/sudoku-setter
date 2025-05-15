<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$lib/Components/Modal/ModalButtonsContainer.svelte';
	import ModalSectionHeader from '$lib/Components/Modal/ModalSectionHeader.svelte';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { PuzzleMetaI } from '$lib/Puzzle/PuzzleMeta';
	import { joinStrList } from '$lib/utils/functionUtils';
	import { puzzleMetaStore, updatePuzzleMeta } from '$stores/BoardStore';
	import { elementsDictStore } from '$stores/BoardStore';
	import { TOOLS } from '$src/lib/Puzzle/Tools';

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

	function generateDescription(): string {
		let description: string = '';
		const elementHandlers = squareCellElementHandlers;
		const elements_dict = $elementsDictStore;

		// is sudoku?
		const sudoku = !elements_dict.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY);
		if (!sudoku) {
			description += 'Sudoku rules do not apply.\n\n';
		} else {
			description += 'Sudoku rules apply.\n\n';
		}

		// local constraints descriptions
		for (const [tool_id, element] of elements_dict.entries()) {
			// elements to ignore
			if (tool_id === TOOLS.SUDOKU_RULES_DO_NOT_APPLY) continue;

			const elementInfo = elementHandlers[tool_id];
			const name = elementInfo.menu?.name ?? elementInfo.toolId;
			const constraint_desc = elementInfo.meta?.description;
			description += `**${name}**: ${constraint_desc}\n\n`;

			if (!element.negative_constraints) continue;
			for (const [neg_tool_id, value] of Object.entries(element.negative_constraints)) {
				if (!value) continue;
				const neg_constraint = elementInfo.negative_constraints?.find(
					(neg_constraint) => neg_constraint.toolId === neg_tool_id
				);
				if (!neg_constraint) continue;

				const name = neg_tool_id;
				const constraint_desc = neg_constraint.description;
				description += ` - **${name}**: ${constraint_desc}\n\n`;
			}
		}

		return description.trim();
	}

	function autoGenCb() {
		const description = generateDescription();
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
		<textarea class="text-input input-ruleset" placeholder="Ruleset" rows={8} bind:value={rulesetStr}
		></textarea>
		<ModalSectionHeader title="CTC Link" />
		<input class="text-input input-ctc-link" type="text" placeholder="CTC Link" bind:value={ctcUrlStr} />
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
	$button-background: var(--button-background-color);
	$button-hover-background: var(--button-hover-background-color);

	.edit-puzzle-meta-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0.4em;
		max-height: 100%;
	}

	.generate-button {
		display: flex;
		background: $button-background;
		border-radius: 5px;
		border: 0;
		padding: 0.5rem;
		margin-bottom: 0.2rem;
		margin-top: 0.2rem;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		&:hover {
			background: $button-hover-background;
		}
	}
</style>
