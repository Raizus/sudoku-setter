<script lang="ts">
	import type { CornerToolI } from '$src/lib/Puzzle/Constraints/CornerConstraints';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import type { ToolPreview } from '$stores/ElementsStore';
	import CornerToolRenderAux from './CornerToolRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<CornerToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: coords = tool.cells;
	$: center = new Vector2D(coords[coords.length - 1].c, coords[coords.length - 1].r);
</script>

{#if mode === 'remove' && c_id}
	<g class="corner-tool-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="corner-tool-preview" opacity={0.5}>
		<CornerToolRenderAux {tool} />
	</g>
{/if}
