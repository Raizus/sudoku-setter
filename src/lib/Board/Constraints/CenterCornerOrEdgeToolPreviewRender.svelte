<script lang="ts">
		import type { CenterCornerOrEdgeToolI } from "$src/lib/Puzzle/puzzle_schema";
	import type { ToolPreview } from '$stores/ElementsStore';
	import CenterCornerOrEdgeToolRenderAux from './CenterCornerOrEdgeToolRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<CenterCornerOrEdgeToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: center = tool.cell;
</script>

{#if mode === 'remove' && c_id}
	<g class="center-corner-or-edge-tool-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.c} cy={center.r} {c_id} />
	</g>
{:else}
	<g class="center-corner-or-edge-tool-preview" opacity={0.5}>
		<CenterCornerOrEdgeToolRenderAux {tool} />
	</g>
{/if}

<style>
	.center-corner-or-edge-tool-remove-preview {
		fill: none;
		stroke: rgb(255, 0, 0);
	}
</style>
