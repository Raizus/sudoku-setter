<script lang="ts">
	import Modal from '$components/Modal/Modal.svelte';
	import BoardPreview from '$src/lib/Board/BoardPreview.svelte';
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import { MAX_HISTORY_SIZE, puzzleHistoryStore } from '$stores/PuzzleHistoryStore';
	import ManageHistoryButton from './ManageHistoryButton.svelte';
	import PuzzleItem from './PuzzleItem.svelte';

	export let showModal = false;
	let selected: number | undefined = undefined;
	let puzzle: PuzzleI | undefined = undefined;

	$: puzzle_count = $puzzleHistoryStore.length;
</script>

<Modal bind:showModal title="Recent Puzzles">
	<div class="recent-puzzles-content">
		<div class="left">
			<div class="history-count">
				Recent puzzles: {puzzle_count}/{MAX_HISTORY_SIZE}
				<ManageHistoryButton bind:selected bind:selected_puzzle={puzzle} />
			</div>
			<div class="scroller-container">
				<div class="scroller">
					<ol class="list">
						{#each $puzzleHistoryStore as item, i}
							<PuzzleItem
								{item}
								item_id={i}
								bind:selected
								bind:showModal
								bind:selected_puzzle={puzzle}
							/>
						{/each}
					</ol>
				</div>
			</div>
		</div>
		<div class="right">
			{#if puzzle}
				<BoardPreview {puzzle} />
			{/if}
		</div>
	</div>
</Modal>

<style>
	.history-count {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0.2rem;
	}

	.recent-puzzles-content {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.left {
		display: flex;
		flex-direction: column;
		flex: 1 1 0px;
	}

	.right {
		flex: 1 1 0px;
	}

	.scroller-container {
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.scroller {
		height: 100%;
		overflow-y: scroll;
	}

	.list {
		display: flex;
		list-style: none;
		flex-direction: column;
		gap: 0.2rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
	}
</style>
