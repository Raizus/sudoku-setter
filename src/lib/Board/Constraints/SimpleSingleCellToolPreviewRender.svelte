<script lang="ts">
	import type { CellToolI } from '$src/lib/Puzzle/puzzle_schema';
	import type { ToolPreview } from '$src/lib/Puzzle/puzzle_schema';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';
	import SimpleSingleCellToolRenderAux from './SimpleSingleCellToolRenderAux.svelte';

	export let tool_preview: ToolPreview<CellToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: center = { x: tool.cell.c + 0.5, y: tool.cell.r + 0.5 };
</script>

<g class="single-cell-constraint-preview" opacity={0.5}>
	<SimpleSingleCellToolRenderAux {tool} />
</g>

<!-- {#if mode === 'remove' && c_id}
	<g class="single-cell-constraint-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="single-cell-constraint-preview" opacity={0.5}>
		<SimpleSingleCellToolRenderAux {tool} />
	</g>
{/if} -->
