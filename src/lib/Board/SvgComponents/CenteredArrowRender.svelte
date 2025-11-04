<script lang="ts">
	import type { ShapeI } from '$lib/Puzzle/Shape/Shape';
	import type { DIRECTION } from '$src/lib/utils/directions';
	import { directionToCoords, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
	import { getArrowHead, linePointsToPathStr } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { Vector2D } from '$src/lib/utils/Vector2D';

	export let cx: number;
	export let cy: number;
	export let arrow_l: number = 0.6;
	export let arrow_head_l: number = 0.2
	export let direction: DIRECTION;

	export let shape: ShapeI;

	$: r = shape.r ?? 0.35;
	$: stroke = shape.stroke ?? 'black';
	$: opacity = shape?.opacity;
	$: strokeWidth = shape.strokeWidth ?? 0.02;
	$: strokeDasharray = shape.strokeDasharray ?? 0;

	export function getArrowPath(): string {
		const delta = directionToCoords(direction);
		const delta_v = new Vector2D(delta.c, delta.r);
		const center = new Vector2D(cx, cy);
		const vec = delta_v.normalise().scale(arrow_l / 2);
		const p1 = center.subtract(vec);
		const p2 = center.add(vec);
		const line = [p1, p2];

		let head = getArrowHead(arrow_head_l, direction);
		head = head.map((p) => p.add(line[1]));
		const linePathStr = linePointsToPathStr(line);
		const headPathStr = linePointsToPathStr(head);
		const arrowPathStr = linePathStr + headPathStr;
		return arrowPathStr;
	}
</script>

<path d={getArrowPath()} fill="none" {stroke} stroke-width={strokeWidth} stroke-linecap="round" />
