<script lang="ts">
	import { findConflicts } from '$lib/Puzzle/conflicts';
	import { SHAPE_TYPES, type ShapeI } from '$lib/Puzzle/Shape/Shape';
	import { cellsStore, gridStore, elementsDictStore, enableFogMaskStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import type { Cell } from '$lib/Puzzle/Grid/Cell';

	$: showConflicts = $settingsStore.checkConflicts;
	$: grid = $gridStore;
	$: element_dict = $elementsDictStore;
	$: all_cells = $cellsStore;

	const shape: ShapeI = {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: 0,
		stroke: 'none',
		fill: 'rgba(255, 255, 0, 0.02)',
		inset: 0
	};

	function getConflicts(cells: Cell[]) {
		const conflict_cells = findConflicts(grid, element_dict);
		const coords = conflict_cells.map((cell) => cell.toCoords());
		return coords;
	}

	$: enable_fog_mask = $enableFogMaskStore;
	$: fill_color = $settingsStore.conflict_cells_color;
</script>

{#if showConflicts}
	<g class="conflicts-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
		{#each getConflicts(all_cells) as coord}
			<rect class="conflict" x={coord.c} y={coord.r} width={1} height={1} fill={fill_color} />
		{/each}
	</g>
{/if}

<style>
	.conflict {
		stroke-width: 0;
		stroke: none;
		opacity: 0.5;
	}
</style>
