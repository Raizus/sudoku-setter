<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { getCagePathStr } from '$lib/utils/SquareCellGridRenderUtils';

	export let cells: Cell[];

	$: usedRegions = new Set(cells.map((cell) => cell.region).filter((region) => region !== null));

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
			d={getCagePathStr(getCellsInRegion(cells, region), 0, false)}
			fill="none"
			stroke="black"
		/>
	{/each}
</g>

<style lang="scss">
	@use '$src/vars' as vars;

	path {
		stroke-width: vars.$region-lines-width;
	}
</style>
