<script lang="ts">
	import { get } from 'svelte/store';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import { gridStore, updateSolution } from '$stores/BoardStore';
	import type { Solution } from '$src/lib/Puzzle/Puzzle';

	let isOpen = false;

	function setSolution() {
		const grid = get(gridStore);
		const solution: Solution = [];
		for (let i = 0; i < grid.nRows; i++) {
			const line: Array<number | null> = [];
			for (let j = 0; j < grid.nCols; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				const val = cell.value;
				line.push(val);
                
			}
			solution.push(line);
		}
		updateSolution(solution);
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Other Tools" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button class="entry-panel-button" on:click={setSolution}> Set Solution </button>
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
