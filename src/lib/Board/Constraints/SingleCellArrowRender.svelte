<script lang="ts">
	import type { CellArrowToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import SingleCellArrowRenderAux from './SingleCellArrowRenderAux.svelte';

	export let tool: CellArrowToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="single-cell-arrow-tool" data-id={`${c_id}`}>
		<SingleCellArrowRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="single-cell-arrow-tool-preview" opacity={0.5}>
		<SingleCellArrowRenderAux {tool} />
	</g>    
{/if}
