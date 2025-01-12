<script lang="ts">
	import { cellToCellCenterVector, cellsLineToPathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import type { OutsideDirectionToolI } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultOutsideShape } from '$lib/Puzzle/Shape/Shape';
	import { gridCoordsNextInDirection } from '$lib/utils/SquareCellGridCoords';
	import ArrowMarker from './ArrowMarker.svelte';

	export let outsideEdgeTool: OutsideDirectionToolI;

	const coords = outsideEdgeTool.cell;
	const direction = outsideEdgeTool.direction;
	const coords2 = gridCoordsNextInDirection(coords, direction);
	const center = cellToCellCenterVector(coords);

	const defaultShape =
		getDefaultShape(outsideEdgeTool.toolId, squareCellElementHandlers) ?? defaultOutsideShape;
	$: shape = outsideEdgeTool.shape ?? defaultShape;

	// maybe adjust fontSize to shape size?
	const fontSize = shape?.fontSize ?? 0.5;
	$: fontColor = shape?.fontColor ?? 'var(--text-primary-color)';
	$: stroke = shape?.stroke ?? 'var(--text-primary-color)';
	const arrowStrokeWidth = 0.03;

	function getText(tool: OutsideDirectionToolI): string {
		return tool.value ? (tool.value.length ? tool.value : '-') : '-';
	}

	function getLinePath() {
		const p2 = cellToCellCenterVector(coords2);
		const dv = p2.subtract(center);
		const l = dv.length()
		const linePathOptions = {
			shortenHead: 0.3*l,
			shortenTail: 0.55*l
		};
		const linePath = cellsLineToPathStr([coords, coords2], linePathOptions);
		return linePath;
	}

	const uid = crypto.randomUUID();
	const markerId = `outside-tool-arrow-marker-${uid}`;
</script>

<g class="outside-direction-tool">
	<ArrowMarker
		id={markerId}
		l={0.07}
		strokeWidth={arrowStrokeWidth}
		{stroke}
	/>
	<path
		d={getLinePath()}
		stroke-width={arrowStrokeWidth}
		fill="none"
		{stroke}
		marker-end="url(#{markerId})"
	/>
	<text
		x={center.x}
		y={center.y}
		text-anchor="middle"
		dominant-baseline="central"
		font-size={fontSize}
		fill={fontColor}
	>
		{getText(outsideEdgeTool)}
	</text>
</g>
