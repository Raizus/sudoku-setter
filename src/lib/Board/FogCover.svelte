<script lang="ts">
	import { showFogStore } from "$stores/BoardStore";
	import type { GridShape } from "../Types/types";

	export let gridShape: GridShape;

	$: show_fog = $showFogStore;
</script>

<g class="fog-fogcover" visibility={show_fog ? "visible" : "hidden"}>
	<rect x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} mask="url(#fog-mask-light)"/>
</g>

<style>
	.fog-fogcover {
		fill: rgb(100, 100, 100);
	}
</style>
