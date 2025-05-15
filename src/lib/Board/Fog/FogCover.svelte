<script lang="ts">
	import type { GridShape } from '$src/lib/Types/types';
	import { enableFogMaskStore } from '$stores/BoardStore';

	export let gridShape: GridShape;

	$: show_fog = $enableFogMaskStore;
</script>

<g class="fog-fogcover">
	<rect
		x={0}
		y={0}
		width={gridShape.nCols}
		height={gridShape.nRows}
		mask="url(#fog-mask-light)"
	/>
</g>

<style>
	.fog-fogcover {
		fill: rgb(100, 100, 100);
	}
</style>
