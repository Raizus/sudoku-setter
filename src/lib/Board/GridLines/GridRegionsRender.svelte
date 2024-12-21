<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { getCagePathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import { cellsStore, gridStore } from '$stores/BoardStore';

	const strokeWidth = 0.06;
	$: allCells = $cellsStore;
	$: usedRegions = $gridStore.getUsedRegions();

	function getCellsInRegion(cells: Cell[], region: number) {
		const regionCells = cells.filter((cell) => cell.region === region);
		const coords: GridCoordI[] = regionCells.map((cell) => {
			return { r: cell.r, c: cell.c };
		});
		return coords;
	}
</script>

<g class="regions-border">
	{#each usedRegions as region}
		<path
			class="region-border"
			id="region-{region}"
			d={getCagePathStr(getCellsInRegion(allCells, region), 0, false)}
			stroke-width={strokeWidth}
			fill="none"
			stroke="black"
		/>
	{/each}
</g>
