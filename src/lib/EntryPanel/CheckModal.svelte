<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import { cellsStore, gridStore, solutionStore } from '$stores/BoardStore';
	import type { Cell } from '../Puzzle/Grid/Cell';
	import type { Grid } from '../Puzzle/Grid/Grid';
	import type { Solution } from '../Puzzle/Puzzle';

	export let showModal = false;
	$: solution = $solutionStore;
	$: grid = $gridStore;
	$: cells = $cellsStore;

	function isGridFilled(cells: Cell[]) {
		for (const cell of cells) {
			if (cell.value === null && !cell.outside) return false;
		}
		return true;
	}

	function compareToSolution(grid: Grid, solution: Solution) {
		if (!solution) return true;

		for (let i = 0; i < grid.nRows; i++) {
			for (let j = 0; j < grid.nCols; j++) {
				const cell = grid.getCell(i, j);
				const sol_val = solution[i][j];
				if (!cell) continue;
				if (sol_val !== null && cell.value !== null && sol_val !== cell.value) return false;
			}
		}

		return true;
	}

	$: if(showModal) {
		const is_filled = isGridFilled(cells);
		const has_solution = !!solution;
		const matches_solution = compareToSolution(grid, solution);
		// const constraint_violated = false;

		// possible cases: 
		// 	- has solution, is unfinished but correct
		// 	- has solution, is unfinished but at least one cell incorrect
		// 	- has solution, is finished and correct
		// 	- has solution, is finished and incorrect
		//  - has no solution, is unfinished and no constraints violated
		//  - has no solution, is unfinished and has at least one constraint violated
		//  - has no solution, is finished and no constraints violated
		//  - has no solution, is finished and has at least one constraint violated
	}
</script>

<Modal bind:showModal title="Check puzzle">
	<div class="rules-content">

	</div>
</Modal>

<style>
	.rules-content {
		position: relative;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		/* align-items: start; */
		font-size: 1rem;
	}
</style>
