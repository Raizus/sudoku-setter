<script lang="ts">
	import { isCellInputTool } from '$lib/Puzzle/Tools';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { toolStore } from '$stores/BoardStore';
	import { selectionStore } from '$stores/SelectionStore';

	const cursorSize = 0.25;

	$: showSelection = isCellInputTool($toolStore);

	function getCursorStr(coords: GridCoordI | null): string {
		if (!coords) return '';
		const [x, y] = [coords.c, coords.r];

		return `M${x},${y}L${x + cursorSize},${y}L${x},${y + cursorSize}Z`;
	}

	$: cursorStr = getCursorStr($selectionStore.lastCell)
</script>

<path class="cursor" d={cursorStr} visibility={showSelection ? 'visible' : 'hidden'} />

<style>
	.cursor {
		stroke-width: 0;
		stroke: none;
		fill: rgb(54, 171, 255);
	}
</style>
