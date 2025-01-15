<script lang="ts">
	import type { GridShape } from '$lib/Types/types';

	export let gridShape: GridShape;
</script>

<g class="grid-border">
	<rect x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} fill="none" stroke="black" />
</g>

<style lang="scss">
	@use '$src/vars' as vars;

	rect {
		stroke-width: vars.$grid-border-width;
	}
</style>
