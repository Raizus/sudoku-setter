<script lang="ts">
	export let cx: number;
	export let cy: number;
	export let c_id: string;

	$: element = document.getElementById(`c-${c_id}`) as SVGGraphicsElement | null;
	$: bbox = element?.getBBox();
	$: max_a = bbox ? Math.max(bbox.width, bbox.height) : undefined;
</script>

{#if max_a}
	<g transform={`translate(${cx}, ${cy}) scale(${max_a * 0.6})`}>
		<path d="M-1,-1 L 1,1 M-1,1 L 1,-1" stroke-width={0.6} />
	</g>
{/if}

<style>
	path {
		fill: none;
		stroke: rgb(255, 0, 0);
	}
</style>
