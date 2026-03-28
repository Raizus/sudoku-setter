<script lang="ts">
	import type { EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { cellsToVector2DPoints } from '$src/lib/utils/SquareCellGridRenderUtils';
	import { vectorAverage } from '$src/lib/utils/Vector2D';
	import type { ToolPreview } from '$src/lib/Puzzle/puzzle_schema';
	import EdgeConstraintRenderAux from './EdgeConstraintRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<EdgeToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: coords = tool.cells;
	$: center = vectorAverage(cellsToVector2DPoints(coords));
</script>

{#if mode === 'remove' && c_id}
	<g class="edge-constraint-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="edge-constraint-preview" opacity={0.5}>
		<EdgeConstraintRenderAux {tool} />
	</g>
{/if}
