<script lang="ts">
	import type { GridShape } from "$lib/Types/types";

    export let gridShape: GridShape;
    
    const strokeWidth = 0.08;
</script>

<g class="grid-border">
    <rect x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} stroke-width={strokeWidth} fill="none" stroke="black"/>
</g>