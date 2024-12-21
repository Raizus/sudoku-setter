<script lang="ts">
	import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
	import { createMinizincModel } from '$src/lib/Solver/solver';
	import { puzzleStore } from '$stores/BoardStore';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import * as MiniZinc from 'minizinc';

	let isOpen = false;
	$: puzzle = $puzzleStore;

	async function solveModel() {
		let sol_count = 0;
		const max_sols = 2;
		
		// Initialize MiniZinc
		const model = new MiniZinc.Model();

		// Define a simple MiniZinc model
		const modelstr = createMinizincModel(puzzle);
		console.log(modelstr);

		model.addFile('test.mzn', modelstr);

		const solve = model.solve({
			options: {
				solver: 'chuffed',
				'num-solutions': 2
			}
		});

		solve.on('solution', (solution) => {
			console.log(solution.output.json);
		});
		solve.then((result) => {
			console.log(result.status);
		});
	}

</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Solver" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="entry-panel-button" on:click={solveModel}> Solve </button>
	</svelte:fragment>
</Panel>

<style lang="scss">
	.entry-panel-button {
		position: relative;
		// border: 1px solid var(--panel-radio-border-color);
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: transparent;
		cursor: pointer;
		height: 2rem;
		text-align: left;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}
	}
</style>
