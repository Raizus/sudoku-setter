<script lang="ts">
	import type { GridShape } from '$src/lib/Types/types';

	export let gridShape: GridShape;
	export let fogPathStr: string;
	export let disable_fog_mask: boolean;
</script>

<defs id="fog-defs">
	<g id="fog-shape">
		<path class="fog-path" d={fogPathStr} />
	</g>
	<g id="fog-edge">
		<use stroke-width={0.4} class="fog-edge-1" href="#fog-shape" />
		<use stroke-width={0.3} class="fog-edge-2" href="#fog-shape" />
		<use stroke-width={0.2} class="fog-edge-3" href="#fog-shape" />
		<use stroke-width={0.1} class="fog-edge-4" href="#fog-shape" />
		<use href="#fog-shape" />
	</g>
	{#if !disable_fog_mask}
		<mask
			id="fog-mask-fog"
			maskUnits="userSpaceOnUse"
			maskContentUnits="userSpaceOnUse"
			x={0}
			y={0}
			width={gridShape.nCols}
			height={gridShape.nRows}
			class:disabled={disable_fog_mask}
		>
			<rect class="fog-mask-white" x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} />
			<g class="fog-mask-black">
				<use href="#fog-edge" />
			</g>
		</mask>
	{/if}
	<mask
		id="fog-mask-light"
		maskUnits="userSpaceOnUse"
		maskContentUnits="userSpaceOnUse"
		x={0}
		y={0}
		width={gridShape.nCols}
		height={gridShape.nRows}
	>
		<rect class="fog-mask-white" x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} />
		<rect
			class="fog-mask-black"
			x={0}
			y={0}
			width={gridShape.nCols}
			height={gridShape.nRows}
			mask="url(#fog-mask-fog)"
		/>
	</mask>
</defs>

<style>
	.fog-mask-white {
		fill: white;
	}

	.fog-mask-black {
		fill: black;
	}

	.fog-edge-1 {
		stroke: rgb(180, 180, 180);
		opacity: 0.2;
	}
	.fog-edge-2 {
		stroke: rgb(180, 180, 180);
		opacity: 0.3;
	}
	.fog-edge-3 {
		stroke: rgb(180, 180, 180);
		opacity: 0.5;
	}
	.fog-edge-4 {
		stroke: rgb(180, 180, 180);
		opacity: 0.7;
	}

	#fog-mask-fog.disabled {
		& .fog-mask-black,
		.fog-mask-white {
			fill: white;
		}
	}
</style>
