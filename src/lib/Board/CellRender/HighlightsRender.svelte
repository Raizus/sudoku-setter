<script lang="ts">
	import type { Cell } from '$lib/Puzzle/Grid/Cell';
	import { TOOLS } from '$lib/Puzzle/Tools';
	import {
		cellToCellCenterVector,
		getSingleWedge,
		pointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import { toolStore } from '$stores/BoardStore';

	export let cell: Cell;

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

{#if $toolStore !== TOOLS.REGIONS}
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

	$highlight-map: (
		hsla(0, 0%, 70%, 0.7),
		hsla(0, 0%, 45%, 0.7),
		hsla(0, 0%, 12%, 0.7),
		hsla(109, 70%, 45%, 0.7),
		hsla(295, 70%, 45%, 0.7),
		hsla(22, 70%, 45%, 0.7),
		hsla(2, 70%, 45%, 0.7),
		hsla(60, 70%, 45%, 0.7),
		hsla(210, 70%, 45%, 0.7)
	);

	.highlight-wedge {
		stroke-width: 0;
	}
	@for $i from 1 through 9 {
		.color-#{$i} {
			fill: list.nth($highlight-map, $i);
			// fill: var(--highlight-color-#{$i})
		}

		.color-0 {
			fill: var(--grid-background-color);
		}
	}
</style>
