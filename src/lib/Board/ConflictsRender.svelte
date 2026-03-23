<script lang="ts">
	import { findConflicts } from '$lib/Puzzle/conflicts';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import { stateStore } from '$stores/StateStore';
	import type { Grid } from '../Puzzle/Grid/Grid';
	import type { ElementsDict } from '../Puzzle/Constraints/ElementsDict';

	const gridStore = stateStore.gridStore;
	const elementsDictStore = stateStore.elementsDictStore;

	$: showConflicts = $settingsStore.checkConflicts;
	$: grid = $gridStore;
	$: element_dict = $elementsDictStore;

	// const shape: ShapeI = {
	// 	type: SHAPE_TYPES.CAGE,
	// 	strokeWidth: 0,
	// 	stroke: 'none',
	// 	fill: 'rgba(255, 255, 0, 0.02)',
	// 	inset: 0
	// };

	function getConflicts(grid: Grid, element_dict: ElementsDict) {
		const conflict_cells = findConflicts(grid, element_dict);
		const coords = conflict_cells.map((cell) => cell.toCoords());
		return coords;
	}

	$: enable_fog_mask = $enableFogMaskStore;
	$: fill_color = $settingsStore.conflict_cells_color;
</script>

{#if showConflicts}
	<g class="conflicts-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
		{#each getConflicts(grid, element_dict) as coord}
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
