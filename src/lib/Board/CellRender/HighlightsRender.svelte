<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
	import {
		cellToCellCenterVector,
		getSingleWedge,
		pointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';

	export let cell: Cell;
	export let tool: TOOLID | undefined = undefined;

	function getWedges(_cell: Cell) {
		const center = cellToCellCenterVector({ r: cell.r, c: cell.c });
		const numWedges = cell.highlights.length;
		const wedgeData = cell.highlights.map((value, idx) => {
			let wedge = getSingleWedge(idx, numWedges);
			wedge = wedge.map((wedgePoint) => wedgePoint.add(center));
			const pathStr = pointsToPathStr(wedge, true);
			return {
				colorId: value,
				d: pathStr
			};
		});
		return wedgeData;
	}
</script>

{#if tool !== TOOLS.REGIONS}
	{#if cell.highlights.length}
		<g class="highlights-group">
			{#each getWedges(cell) as { colorId, d }}
				<path class="highlight-wedge color-{colorId}" {d} />
			{/each}
		</g>
	{/if}
{/if}

<style lang="scss">
	@use 'sass:list';
	@use '$src/vars' as vars;

	.highlight-wedge {
		stroke-width: 0;
	}
	@for $i from 1 through 9 {
		.color-#{$i} {
			fill: list.nth(vars.$highlight-map, $i);
			// fill: var(--highlight-color-#{$i})
		}

		.color-0 {
			fill: var(--grid-background-color);
		}
	}

	.highlights-group {
		opacity: 0.8;
	}
</style>
