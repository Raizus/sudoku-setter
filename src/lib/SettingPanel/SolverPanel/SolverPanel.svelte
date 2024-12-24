<script lang="ts">
	import { createMinizincModel } from '$src/lib/Solver/solver';
	import { gridStore, puzzleStore } from '$stores/BoardStore';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import * as MiniZinc from 'minizinc';
	import SolverModal from './SolverModal.svelte';
	import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
	import { restoreCellsHighlightsAction, restoreCellsValueAction } from '$src/lib/reducers/UpdateCellsActions';
	import { executeUpdateCellsAction } from '$stores/CellsStore';

	type JsonT = { [variable: string]: any } | undefined;

	let isOpen = false;
	$: puzzle = $puzzleStore;
	$: grid = $gridStore;

	let showModal = false;

	const max_sols = 100;
	let sol_count: number | null = null;
	let status: string = '';

	function getSolText(sol_count: number | null): string {
		if (sol_count === null) return '?';
		return String(sol_count);
	}

	function clickCb() {
		showModal = true;
	}

	function setSolutionValues(json: JsonT) {
		if (json === undefined) return;
		const board: number[][] | undefined = json['board'];
		if (board === undefined) return;

		const cells: Cell[] = [];
		const values: number[] = [];
		for (let r=0; r<board.length; r++) {
			const row = board[r];
			for (let c=0; c<row.length; c++) { 
				const cell = grid.getCell(r, c);
				if (!cell || cell.given) continue;
				const value = row[c];
				cells.push(cell);
				values.push(value);
			} 
		}
		const action = restoreCellsValueAction(cells, values);
		executeUpdateCellsAction(action);
	}

	function setBinaryHighlights(json: JsonT) {
		if (json === undefined) return;
		const grid_vars_names = ['yin_yang', 'two_contiguous_regions', 'nurimisaki'];
		for (const name of grid_vars_names) {
			const binary_grid: number[][] | undefined = json[name];
			if (binary_grid === undefined) continue;

			const cells: Cell[] = [];
			const values: number[][] = [];
			for (let i=0; i<binary_grid.length; i++) {
				const row = binary_grid[i];
				for (let j=0; j<row.length; j++) {
					const cell = grid.getCell(i, j);
					if (!cell) continue;
					cells.push(cell);
					const val = row[j];
					if (val === 0) values.push([3]);
					else values.push([1]);
				}
			}
			const action = restoreCellsHighlightsAction(cells, values);
			executeUpdateCellsAction(action);
			return;
		}
	}

	function setUnknownRegionsHighlights(json: JsonT) {
		if (json === undefined) return;
		const unknown_regions: number[][] | undefined = json['unknown_regions'];
		if (unknown_regions === undefined) return;

		const cells: Cell[] = [];
		const values: number[][] = [];
		for (let i=0; i<unknown_regions.length; i++) {
			const row = unknown_regions[i];
			for (let j=0; j<row.length; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				cells.push(cell);
				const val = row[j];
				values.push([val+1]);
			}
		}
		const action = restoreCellsHighlightsAction(cells, values);
		executeUpdateCellsAction(action);
	}

	async function solveModel() {
		sol_count = 0;
		status = 'SOLVING...';

		// Initialize MiniZinc
		const model = new MiniZinc.Model();

		// Define a simple MiniZinc model
		const modelstr = createMinizincModel(puzzle);
		model.addFile('test.mzn', modelstr);

		const solve = model.solve({
			options: {
				solver: 'chuffed',
				'num-solutions': max_sols
			}
		});

		solve.on('solution', (solution) => {
			const json = solution.output.json;
			// console.log(json);
			setSolutionValues(json);
			setBinaryHighlights(json);
			setUnknownRegionsHighlights(json);
			if (solution.type === 'solution' && sol_count !== null) sol_count += 1;
		});

		solve.then((result) => {
			status = result.status;
		});
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Solver" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="entry-panel-button" on:click={clickCb}> Minizinc File... </button>
		<SolverModal bind:showModal />
		<button class="entry-panel-button" on:click={solveModel}> Solve </button>
		<span class="text-field">{`Max. Solutions: ${max_sols}`}</span>
		<!-- <input type="number" min={1} max={20} step={1} value={max_sols}/> -->
		<span class="text-field">{`Solution Count: ${getSolText(sol_count)}`}</span>
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

	// input {
	// 	background-color: var(--input-background-color);
	// 	color: var(--text-primary-color);
	// 	border: 0;
	// 	border-radius: 0 4px 4px 0;
	// 	outline: none;
	// 	padding: 1px;
	// }
</style>
