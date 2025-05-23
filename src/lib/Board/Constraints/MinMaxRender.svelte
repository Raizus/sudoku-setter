<script lang="ts">
		import type { SingleCellTool } from "$src/lib/Puzzle/puzzle_schema";
	import { areCoordsEqual, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
	import { minMaxShape, pointsToPathStr } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { maximumConstraintsStore, minimumConstraintsStore } from '$stores/ElementsStore';

	export let coord: GridCoordI;
	export let minOrMax: 'min' | 'max';

	function minMaxFilterMask(coord: GridCoordI, constraints: Record<string, SingleCellTool>) {
		const mask = [true, true, true, true];
		let offsets = [
			[0, -1],
			[1, 0],
			[0, 1],
			[-1, 0],
		];
		for (let idx = 0; idx < offsets.length; idx++) {
			let offset = offsets[idx];

			// check if adjacent cell is outside of the grid or is another minimum
			const neighbour: GridCoordI = { r: coord.r + offset[1], c: coord.c + offset[0] };
			mask[idx] = !Object.values(constraints).some(
				(constraint) => areCoordsEqual(neighbour, constraint.cell)
			);
		}
		return mask;
	}

	function generatePath(coord: GridCoordI, constraints: Record<string, SingleCellTool>) {
		let markers_shape = minMaxShape(minOrMax, coord.r, coord.c);
		const mask = minMaxFilterMask(coord, constraints);
		markers_shape = markers_shape.filter((_, idx) => mask[idx]);
		const pathStr = markers_shape.map((shape) => pointsToPathStr(shape, false)).join('');
		return pathStr;
	}

	function getConstraints(
		min_constraints: Record<string, SingleCellTool>,
		max_constraints: Record<string, SingleCellTool>
	) {
		if (minOrMax === 'max') return max_constraints;
        return min_constraints;
	}

	$: x = coord.c;
	$: y = coord.r;
    $: constraints = getConstraints($minimumConstraintsStore, $maximumConstraintsStore);
</script>

<g class="minmax-constraint">
	<rect {x} {y} width={1} height={1} />
	<path class="minmax-markers" d={generatePath(coord, constraints)} />
</g>

<style>
	.minmax-markers {
		fill: none;
		stroke: black;
		stroke-width: 0.03;
	}

	rect {
		stroke: none;
		stroke-width: none;
		fill: rgba(0, 0, 0, 0.15);
	}
</style>
