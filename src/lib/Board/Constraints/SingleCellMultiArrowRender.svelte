<script lang="ts">
	import { defaultSingleCellMultiArrowShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { directionToCoords, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
	import { Vector2D } from '$lib/utils/Vector2D';
	import {
		cellToCellCenterVector,
		getArrowHead,
		linePointsToPathStr
	} from '$lib/utils/SquareCellGridRenderUtils';
	import type { CellMultiArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
	import type { DIRECTION } from '$lib/utils/directions';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CellMultiArrowToolI;
	export let c_id: string;

	$: currentConstraintId = $currentConstraintStore?.id;

	const cell = tool.cell;
	const outline = true;

	const defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ??
		defaultSingleCellMultiArrowShape;
	$: shape = tool.shape ?? defaultShape;
	$: strokeWidth = shape.strokeWidth ?? 0.08;
	$: stroke = shape.stroke ?? 'black';

	$: outlineShape = {
		...shape,
		stroke: 'var(--grid-background-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.03 : 0.03
	};

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.05 : 0.05
	};

	const arrow_l = 0.2;

	function getLine(_cell: GridCoordI, _direction: DIRECTION) {
		const delta = directionToCoords(_direction)
		const vec = (new Vector2D(delta.c, delta.r))
		const cellCenter = cellToCellCenterVector(_cell);

		const p2 = cellCenter.add(vec.scale(0.4));
		const p1 = p2.subtract(vec.normalise().scale(arrow_l));
		const line = [p1, p2];
		return line;
	}

	function getArrowPath(_cell: GridCoordI, _direction: DIRECTION) {
		const l = 0.1;
		const line = getLine(_cell, _direction);
		let head = getArrowHead(l, _direction);
		head = head.map((p) => p.add(line[1]));

		const linePathStr = linePointsToPathStr(line);
		const headPathStr = linePointsToPathStr(head);
		const arrowPathStr = linePathStr + headPathStr;
		return arrowPathStr;
	}
</script>

{#if outline}
	{#each tool.directions as direction}
		<path
			d={getArrowPath(cell, direction)}
			fill="none"
			stroke={outlineShape.stroke}
			stroke-width={outlineShape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
{/if}
{#if c_id === currentConstraintId}
	{#each tool.directions as direction}
		<path
			d={getArrowPath(cell, direction)}
			fill="none"
			stroke={selectedOutlineShape.stroke}
			stroke-width={selectedOutlineShape.strokeWidth}
			stroke-linecap="round"
		/>
	{/each}
{/if}
{#each tool.directions as direction}
	<path
		d={getArrowPath(cell, direction)}
		fill="none"
		{stroke}
		stroke-width={strokeWidth}
		stroke-linecap="round"
	/>
{/each}

