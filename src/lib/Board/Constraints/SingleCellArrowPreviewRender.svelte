<script lang="ts">
		import type { CellArrowToolI } from "$src/lib/Puzzle/puzzle_schema";
	import type { ToolPreview } from '$stores/ElementsStore';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';
	import SingleCellArrowRenderAux from './SingleCellArrowRenderAux.svelte';

	export let tool_preview: ToolPreview<CellArrowToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: center = { x: tool.cell.c + 0.5, y: tool.cell.r + 0.5 };
</script>

{#if mode === 'remove' && c_id}
	<g class="single-cell-arrow-tool-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="single-cell-arrow-tool-preview" opacity={0.5}>
		<SingleCellArrowRenderAux {tool} />
	</g>
{/if}
