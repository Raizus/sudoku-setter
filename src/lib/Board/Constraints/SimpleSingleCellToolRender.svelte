<script lang="ts">
	import type { CellToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import SimpleSingleCellToolRenderAux from './SimpleSingleCellToolRenderAux.svelte';

	export let tool: CellToolI;
	export let c_id: string | undefined = undefined;
</script>

{#if c_id !== undefined}
	<g class="single-cell-tool" data-id={`${c_id}`}>
		<SimpleSingleCellToolRenderAux {tool} {c_id} />
	</g>
{:else}
	<g class="single-cell-tool-preview" opacity={0.5}>
		<SimpleSingleCellToolRenderAux {tool} />
	</g>
{/if}
