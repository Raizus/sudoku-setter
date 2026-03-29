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
	import type { PuzzleModel } from '$src/lib/Solver/solver_utils';

	let isOpen = true;

	let puzzle = stateStore.getPuzzle();

	let showModal = false;
	let solver: null | MiniZinc.SolveProgress = null;
	let is_solving = false;

	// for the next solution feature
	let solutionQueue: MiniZinc.SolutionMessage[] = [];
	let pendingResolve: (() => void) | null = null;

	let max_sols = 100;
	let max_sols_str = '100';
	let sol_count: number | null = null;
	let status: string = 'IDLE';

	let puzzle_model: PuzzleModel | null = null;

	const timer = createStopwatchStore();
	$: ellapsed = $timer;

	function setPuzzleModel() {
		stateStore.resetPuzzle();
		puzzle = stateStore.getPuzzle();
		puzzle_model = createMinizincModel(puzzle);
	}

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

	function clearQueue() {
		solutionQueue = [];
		pendingResolve = null;
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

	function isSolverRunning(solver: MiniZinc.SolveProgress | null): boolean {
		return solver !== null && solver.isRunning();
	}

	function stopSolver() {
		if (solver === null || !solver.isRunning()) return;

		status = 'IDLE';
		is_solving = false;
		timer.stop();
		solver.cancel();
		pendingResolve = null;
	}

	function onSolverError(error: MiniZinc.ErrorMessage) {
		status = 'ERROR';
		console.log(error.message);
		is_solving = false;
		timer.stop();
		if (solver) solver.cancel();
	}

	function onSolverWarning(warning: MiniZinc.WarningMessage) {
		status = 'WARNING';
		console.log(warning.message);
	}

	function onExit(e: MiniZinc.ExitMessage) {
		// solver finished with no problems
		if (e.code === 0) return;

		// solver exited with an error
		if (e.code !== null) {
			status = 'EXIT WITH CODE ' + e.code;
			console.log('Solver exited:', e);
		}

		is_solving = false;
		timer.stop();
		stopSolver();
	}

	function onSolverCompletion(result: MiniZinc.SolveResult) {
		status = result.status;
		timer.stop();
		is_solving = false;
		pendingResolve = null;
	}

	function onSolverRejection(e: MiniZinc.ExitMessage) {
		if (e?.type === 'exit' && e?.code === null) return;
		console.error('Solver promise rejected unexpectedly:', e);
	}

	function setSolverCallbacks(solver: MiniZinc.SolveProgress) {
		solver.on('exit', onExit);
		solver.on('error', onSolverError);
		solver.on('warning', onSolverWarning);
		solver.then(onSolverCompletion, onSolverRejection);
	}

	async function solvePuzzle() {
		clearQueue();
		sol_count = 0;
		status = 'SOLVING...';

		// reset grid values before building the models, only given values will be used
		stateStore.resetPuzzle();
		puzzle = stateStore.getPuzzle();
		const puzzle_model = createMinizincModel(puzzle);

		// Initialize MiniZinc
		const model = new MiniZinc.Model();
		// Define a simple MiniZinc model
		model.addFile('test.mzn', puzzle_model.model_str);

		timer.reset();
		timer.start();
		is_solving = true;

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

		setSolverCallbacks(solver);
	}

	async function findAllCandidates() {
		clearQueue();
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
		is_solving = true;

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

		setSolverCallbacks(solver);
	}

	function initNextSolutionSolver() {
		setPuzzleModel();
		if (puzzle_model === null) return;

		clearQueue();
		sol_count = 0;
		status = 'SOLVING...';

		// Initialize MiniZinc
		const model = new MiniZinc.Model();
		// Define a simple MiniZinc model
		model.addFile('test.mzn', puzzle_model.model_str);

		timer.reset();
		timer.start();
		is_solving = true;

		solver = model.solve({
			options: {
				solver: 'chuffed',
				'num-solutions': max_sols
			}
		});

		solver.on('solution', (solution) => {
			if (solution.type !== 'solution') return;
			if (!puzzle_model) return;
			if (sol_count !== null) sol_count += 1;

			if (pendingResolve) {
				// "Next" was already clicked and is waiting — deliver immediately
				setBoardOnSolution(solution.output.json, puzzle_model);
				pendingResolve();
				pendingResolve = null;
				return;
			}

			// No one is waiting yet — queue it
			solutionQueue.push(solution);
		});

		setSolverCallbacks(solver);
	}

	async function nextSolution() {
		if (!is_solving && solutionQueue.length === 0) {
			initNextSolutionSolver();
		}

		if (!puzzle_model) return;

		if (solutionQueue.length > 0) {
			// Solution already arrived, consume it immediately
			const solution = solutionQueue.shift()!;
			setBoardOnSolution(solution.output.json, puzzle_model);
			return;
		}

		// No solution yet, wait for the next one
		await new Promise<void>((resolve) => {
			pendingResolve = resolve;
		});
	}

	function stopSolverCb() {
		stopSolver();
	}

	function solveCb() {
		if (!isSolverRunning(solver)) solvePuzzle();
	}

	function findAllCandidatesCb() {
		if (!isSolverRunning(solver)) findAllCandidates();
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Solver" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="panel-button" on:click={minizincFileCb}> Minizinc File... </button>
		<SolverModal bind:showModal />
		<button class="panel-button" disabled={is_solving} on:click={solveCb}> Solve </button>
		<button class="panel-button" disabled={is_solving} on:click={findAllCandidatesCb}>
			Find all candidates
		</button>
		<button class="panel-button" on:click={nextSolution}> Next Solution </button>
		<button class="panel-button" disabled={!is_solving} on:click={stopSolverCb}> Stop </button>
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
