<script lang="ts">
	import type { LineMarker } from '$lib/Puzzle/PenTool';
	import { getHighlightColor, pointsToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$lib/utils/Vector2D';

	type DraftLineMarker = {
		draftLine: LineMarker[];
		mode: 'add' | 'remove';
	};

	export let draftLineMarker: DraftLineMarker;

	const strokeWidth = 0.2;

	function draftLineToPoints(draftLine: LineMarker[]) {
		const points = draftLine
			.map((marker) => [
				new Vector2D(marker.p1.c, marker.p1.r),
				new Vector2D(marker.p2.c, marker.p2.r)
			])
			.flat();

		return points;
	}

	function getDraftLineColor(draftLine: DraftLineMarker) {
		const colorId = draftLine.draftLine.length ? draftLine.draftLine[0].colorId : 0;
		return draftLine.mode === 'add' ? getHighlightColor(colorId, 'black') : 'darkred';
	}

	$: pathStr = pointsToPathStr(draftLineToPoints(draftLineMarker.draftLine));
</script>

<path
	d={pathStr}
	class="draft-line"
	stroke={getDraftLineColor(draftLineMarker)}
	stroke-width={strokeWidth}
	fill="none"
	opacity={0.5}
	stroke-linejoin="round"
	stroke-linecap="round"
/>
