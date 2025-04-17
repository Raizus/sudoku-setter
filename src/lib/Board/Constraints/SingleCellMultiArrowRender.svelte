<script lang="ts">
	import type { CellMultiArrowToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import SingleCellMultiArrowRenderAux from './SingleCellMultiArrowRenderAux.svelte';

	export let tool: CellMultiArrowToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="single-cell-multi-arrow-tool" data-id={`${c_id}`}>
		<SingleCellMultiArrowRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="single-cell-multi-arrow-tool-preview" opacity={0.5}>
		<SingleCellMultiArrowRenderAux {tool} />
	</g>    
{/if}
