<script lang="ts">
	import { findConflicts } from '$lib/Puzzle/conflicts';
	import { SHAPE_TYPES, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { cellsStore, gridStore } from '$stores/BoardStore';
		import { globalConstraintsStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import type { Cell } from '$lib/Puzzle/Grid/Cell';

	$: showConflicts = $settingsStore.checkConflicts;
	$: grid = $gridStore;
    $: global_constraints = $globalConstraintsStore;
	$: all_cells = $cellsStore;

	const shape: ShapeI = {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: 0,
		stroke: 'none',
		fill: 'rgba(255, 255, 0, 0.02)',
        inset: 0,
	};

	function getConflicts(cells: Cell[]) {
		const conflict_cells = findConflicts(grid, global_constraints);
		const coords = conflict_cells.map(cell => cell.toCoords())
		return coords;
	}

</script>

{#if showConflicts}
	<g class="conflicts-layer" mask="url(#fog-mask-fog)">
		{#each getConflicts(all_cells) as coord}
			<rect class="conflict" x={coord.c} y={coord.r} width={1} height={1}/>
		{/each}
	</g>
{/if}

<style>
	.conflict {
		stroke-width: 0;
		stroke: none;
		fill: hsl(0, 69%, 33%);
		opacity: 0.5;
	}
</style>
