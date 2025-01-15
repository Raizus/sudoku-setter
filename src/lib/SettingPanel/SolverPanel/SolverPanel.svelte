<script lang="ts">
	import { createMinizincModel } from '$src/lib/Solver/solver';
	import { gridStore, puzzleStore, resetPuzzle } from '$stores/BoardStore';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import * as MiniZinc from 'minizinc';
	import SolverModal from './SolverModal.svelte';
	import { setBoardOnSolution } from './helpers';
	import { readable } from 'svelte/store';
	import { createStopwatch } from '$stores/timer';

	let isOpen = false;
	$: puzzle = $puzzleStore;
	$: grid = $gridStore;

	let showModal = false;
	let solver: null | MiniZinc.SolveProgress = null;
	$: solverLabel = 'Solve';

	let startTime = Date.now();
	let endTime: number | null = null;
	let max_sols = 100;
	let max_sols_str = '100';
	let sol_count: number | null = null;
	let status: string = 'IDLE';

	const timer = createStopwatch();
	$: ellapsed = $timer;

	function getSolText(sol_count: number | null): string {
		if (sol_count === null) return '';
		return String(sol_count);
	}

	function formatTimeStr(milliseconds: number): string {
		const minutes = Math.floor(milliseconds / 60000);
		const seconds = Math.floor((milliseconds % 60000) / 1000);
		const millis = Math.floor((milliseconds % 1000) / 100);

		// Format seconds to have two digits
		const formattedSeconds = seconds.toString().padStart(2, '0');

		// Return the formatted string
		return `${minutes}:${formattedSeconds}.${millis}`;
	}

	function clickCb() {
		showModal = true;
	}

	function updateMaxSols(value: string) {
		const parsed = parseInt(value);
		if (typeof parsed === 'number' && parsed >= 1) {
			max_sols = parsed;
		}
	}

	async function solveModel() {
		sol_count = 0;
		status = 'SOLVING...';

		// Initialize MiniZinc
		const model = new MiniZinc.Model();

		resetPuzzle();
		// Define a simple MiniZinc model
		console.log(puzzle);
		const modelstr = createMinizincModel(puzzle);
		model.addFile('test.mzn', modelstr);

		timer.reset();
		timer.start();

		solver = model.solve({
			options: {
				solver: 'chuffed',
				'num-solutions': max_sols
			}
		});

		solver.on('solution', (solution) => {
			const json = solution.output.json;
			if (solution.type === 'solution' && sol_count !== null) sol_count += 1;
			// console.log(json);
			setBoardOnSolution(json, puzzle);
		});

		solver.on('error', (error) => {
			solverLabel = 'Solve';
			status = 'ERROR';
			timer.stop();
			if (solver) solver.cancel();
		});

		solver.on('warning', (warning) => {
			status = 'WARNING';
			console.log(warning.message);
		});

		solver.then((result) => {
			status = result.status;
			solverLabel = 'Solve';
			timer.stop();
		});
	}

	function solveCb() {
		if (solver === null || !solver.isRunning()) solveModel();
		else if (solver !== null && solver.isRunning()) {
			status = 'IDLE';
			solverLabel = 'Solve';
			timer.stop();
			solver.cancel();
		}
	}

	$: if (solver) {
		if (solver !== null && solver.isRunning()) {
			solverLabel = 'Stop';
		} else {
			solverLabel = 'Solve';
		}
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Solver" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="entry-panel-button" on:click={clickCb}> Minizinc File... </button>
		<SolverModal bind:showModal />
		<button class="entry-panel-button" on:click={solveCb}> {solverLabel} </button>
		<span class="text-field">{`Max. Solutions: ${max_sols}`}</span>
		<div class="input-container">
			<input
				type="number"
				min={1}
				max={200}
				step={1}
				bind:value={max_sols_str}
				on:input={() => updateMaxSols(max_sols_str)}
			/>
		</div>
		<span class="text-field">{`Solution Count: ${getSolText(sol_count)}`}</span>
		<span class="text-field">{`Elapsed Time: ${formatTimeStr(ellapsed)}`}</span>
		<span class="text-field">{`Status: ${status}`}</span>
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

	.text-field {
		display: flex;
		text-align: left;
		font-weight: bold;
		margin-bottom: 0.4rem;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	input {
		padding-inline-start: 0.5rem;
		background-color: var(--input-background-color);
		color: var(--text-primary-color);
		border: 0;
		border-radius: 0 4px 4px 0;
		outline: none;
		padding: 1px;
	}
</style>
