<script lang="ts">
	import { createMinizincModel } from '$src/lib/Solver/solver';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import * as MiniZinc from 'minizinc';
	// import * as MiniZinc from 'https://cdn.jsdelivr.net/npm/minizinc/dist/minizinc.mjs';
	import SolverModal from './SolverModal.svelte';
	import { setBoardOnSolution, updateCandidatesOnSolution } from './solution_render_helpers';
	import { createStopwatchStore } from '$stores/timer';
	import { stateStore } from '$stores/StateStore';

	let isOpen = true;

	let puzzle = stateStore.getPuzzle();

	let showModal = false;
	let solver: null | MiniZinc.SolveProgress = null;
	$: solver_button_label = 'Solve';

	let max_sols = 100;
	let max_sols_str = '100';
	let sol_count: number | null = null;
	let status: string = 'IDLE';

	const timer = createStopwatchStore();
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
		const formatted_seconds = seconds.toString().padStart(2, '0');

		// Return the formatted string
		return `${minutes}:${formatted_seconds}.${millis}`;
	}

	function minizincFileCb() {
		showModal = true;
	}

	function updateMaxSols(value: string) {
		const parsed = parseInt(value);
		if (typeof parsed === 'number' && parsed >= 1) {
			max_sols = parsed;
		}
	}

	function isSolverRunning(): boolean {
		return solver !== null && solver.isRunning();
	}

	function stopSolver() {
		if (solver === null || !solver.isRunning()) return;

		status = 'IDLE';
		solver_button_label = 'Solve';
		timer.stop();
		solver.cancel();
	}

	function onSolverError(error: MiniZinc.ErrorMessage) {
		solver_button_label = 'Solve';
		status = 'ERROR';
		console.log(error.message);
		timer.stop();
		if (solver) solver.cancel();
	}

	function onSolverWarning(warning: MiniZinc.WarningMessage) {
		status = 'WARNING';
		console.log(warning.message);
	}

	function onSolverCompletion(result: MiniZinc.SolveResult) {
		status = result.status;
		solver_button_label = 'Solve';
		timer.stop();
	}

	async function solvePuzzle() {
		sol_count = 0;
		status = 'SOLVING...';

		// reset grid values before building the models, only given values will be used
		stateStore.resetPuzzle();
		puzzle = stateStore.getPuzzle();

		// Initialize MiniZinc
		const model = new MiniZinc.Model();

		// Define a simple MiniZinc model
		const puzzle_model = createMinizincModel(puzzle);
		model.addFile('test.mzn', puzzle_model.model_str);

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
			setBoardOnSolution(json, puzzle_model);
		});

		solver.on('error', onSolverError);
		solver.on('warning', onSolverWarning);
		solver.then(onSolverCompletion);
	}

	async function findAllCandidates() {
		sol_count = 0;
		status = 'SOLVING...';

		// reset grid values before building the models, only given values will be used
		stateStore.resetPuzzle();
		puzzle = stateStore.getPuzzle();

		// Initialize MiniZinc
		const model = new MiniZinc.Model();

		// Define a simple MiniZinc model
		const puzzle_model = createMinizincModel(puzzle);
		model.addFile('test.mzn', puzzle_model.model_str);

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
			updateCandidatesOnSolution(json, puzzle_model);
		});

		solver.on('error', onSolverError);
		solver.on('warning', onSolverWarning);
		solver.then(onSolverCompletion);
	}

	function solveCb() {
		if (!isSolverRunning()) solvePuzzle();
		else if (isSolverRunning()) stopSolver();
	}

	function findAllCandidatesCb() {
		if (!isSolverRunning()) findAllCandidates();
		else if (isSolverRunning()) stopSolver();
	}

	$: if (solver) {
		if (solver !== null && solver.isRunning()) {
			solver_button_label = 'Stop';
		} else {
			solver_button_label = 'Solve';
		}
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Solver" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="panel-button" on:click={minizincFileCb}> Minizinc File... </button>
		<SolverModal bind:showModal />
		<button class="panel-button" on:click={solveCb}> {solver_button_label} </button>
		<button class="panel-button" on:click={findAllCandidatesCb}> Find all candidates </button>
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
