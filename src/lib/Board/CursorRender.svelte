<script lang="ts">
	import { isCellInputTool, type TOOLID } from '$lib/Puzzle/Tools';
	import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { selectionStore } from '$stores/SelectionStore';

	export let tool: TOOLID;

	const cursorSize = 0.25;

	$: showSelection = isCellInputTool(tool);

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
