<script lang="ts">
	import {
		cellToCellCenterVector,
		getArrowHead,
		linePointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
		import type { OutsideDirectionToolI } from "$src/lib/Puzzle/puzzle_schema";
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { defaultOutsideShape } from '$lib/Puzzle/Shape/Shape';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import type { DIRECTION } from '$src/lib/utils/directions';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import { currentConstraintStore, gridStore } from '$stores/BoardStore';

	export let tool: OutsideDirectionToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: coords = tool.cell;
	$: center = cellToCellCenterVector(coords);

    $: cells = $gridStore.getCellsInDirection(tool.cell.r, tool.cell.c, tool.direction);

	$: defaultShape = getDefaultShape(tool.toolId, elementInfoRegistry) ?? defaultOutsideShape;
	$: shape = tool.shape ?? defaultShape;
	// maybe adjust fontSize to shape size?
	$: fontSize = shape?.fontSize ?? 0.5;
	$: fontColor = shape?.fontColor ?? 'var(--text-primary-color)';
	$: stroke = shape?.stroke ?? 'var(--text-primary-color)';
	const arrowStrokeWidth = 0.03;

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: arrowStrokeWidth ? arrowStrokeWidth + 0.07 : 0.07
	};

	function getText(tool: OutsideDirectionToolI): string {
		return tool.value ? (tool.value.length ? tool.value : '-') : '-';
	}

	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction);
		const vec = new Vector2D(delta.c, delta.r).scale(0.5);
		const cellCenter = cellToCellCenterVector(_cell);

		const p1 = cellCenter.add(vec.scale(0.5));
		const p2 = cellCenter.add(vec.scale(0.8));
		const line = [p1, p2];
		return line;
	}

	function getArrowPath(_cell: GridCoordI, _direction: DIRECTION) {
		const l = 0.08;
		const line = getLine(_cell, _direction);
		let head = getArrowHead(l, _direction);
		head = head.map((p) => p.add(line[1]));

		const linePathStr = linePointsToPathStr(line);
		const headPathStr = linePointsToPathStr(head);
		const arrowPathStr = linePathStr + headPathStr;
		return arrowPathStr;
	}

	$: arrowPathStr = getArrowPath(coords, tool.direction);
</script>

<g class="outside-direction-tool">
    <!-- preview -->
    {#if c_id === undefined}
        {#each cells as cell}
            <rect x={cell.c} y={cell.r} width={1} height={1} stroke="none" fill="#5373ea80"/>
        {/each}
    {/if}
    <!-- current constraint highlight -->
	{#if c_id && c_id === currentConstraintId}
		<path
			d={arrowPathStr}
			fill="none"
			stroke={selectedOutlineShape.stroke}
			stroke-width={selectedOutlineShape.strokeWidth}
			stroke-linecap="round"
		/>
        {#each cells as cell}
            <rect x={cell.c} y={cell.r} width={1} height={1} stroke="none" fill="#5373ea66"/>
        {/each}
	{/if}
    <!-- constraint -->
	<path
		d={arrowPathStr}
		fill="none"
		{stroke}
		stroke-width={arrowStrokeWidth}
		stroke-linecap="round"
	/>
	<text
		x={center.x}
		y={center.y}
		text-anchor="middle"
		dominant-baseline="central"
		font-size={fontSize}
		fill={fontColor}
	>
		{getText(tool)}
	</text>
</g>

<!-- <style>
    rect {
        fill: #5373ea66;
    }
</style> -->

