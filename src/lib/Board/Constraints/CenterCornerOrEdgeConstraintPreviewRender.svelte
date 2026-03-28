<script lang="ts">
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import type { ToolPreview } from '$src/lib/Puzzle/puzzle_schema';
	import CenterCornerOrEdgeConstraintRenderAux from './CenterCornerOrEdgeConstraintRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<CenterCornerOrEdgeToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: center = tool.cell;
</script>

{#if mode === 'remove' && c_id}
	<g class="center-corner-or-edge-constraint-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.c} cy={center.r} {c_id} />
	</g>
{:else}
	<g class="center-corner-or-edge-constraint-preview" opacity={0.5}>
		<CenterCornerOrEdgeConstraintRenderAux {tool} />
	</g>
{/if}

