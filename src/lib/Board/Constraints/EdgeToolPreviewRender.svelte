<script lang="ts">
	import type { EdgeToolI } from '$src/lib/Puzzle/Constraints/EdgeConstraints';
	import { cellsToVector2DPoints } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$src/lib/utils/Vector2D';
	import type { ToolPreview } from '$stores/ElementsStore';
	import EdgeToolRenderAux from './EdgeToolRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<EdgeToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: coords = tool.cells;
	$: center = vectorAverage(cellsToVector2DPoints(coords));
</script>

{#if mode === 'remove' && c_id}
	<g class="edge-tool-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="edge-tool-preview" opacity={0.5}>
		<EdgeToolRenderAux {tool} />
	</g>
{/if}

<style>
	.edge-tool-remove-preview {
		fill: none;
		stroke: rgb(255, 0, 0);
	}
</style>
