<script lang="ts">
	import { toolStore } from '$stores/BoardStore';
	import {
		isCenterEdgeCornerTool,
		isCornerTool,
		isEdgeTool,
		isOutsideDirectionTool,
		isSimpleSingleCellTool,
		isSingleCellArrowTool,
		isSingleCellMultiArrowTool,
		TOOLS
	} from '../Puzzle/Tools';
	import CenterCornerOrEdgeToolPreviewRender from './Constraints/CenterCornerOrEdgeToolPreviewRender.svelte';
	import CornerToolPreviewRender from './Constraints/CornerToolPreviewRender.svelte';
	import EdgeToolPreviewRender from './Constraints/EdgeToolPreviewRender.svelte';
	import OutsideDirectionToolPreviewRender from './Constraints/OutsideDirectionToolPreviewRender.svelte';
	import SimpleSingleCellToolPreviewRender from './Constraints/SimpleSingleCellToolPreviewRender.svelte';
	import SingleCellArrowPreviewRender from './Constraints/SingleCellArrowPreviewRender.svelte';
	import SingleCellMultiArrowRender from './Constraints/SingleCellMultiArrowRender.svelte';

	import {
		centerCornerOrEdgeToolPreviewStore,
		cornerToolPreviewStore,
		edgeToolPreviewStore,
		outsideDirectionToolPreviewStore,
		simpleCellToolPreviewStore,
		singleCellArrowPreviewStore,
		singleCellMultiArrowPreviewStore
	} from '$stores/ElementsStore.js';

	$: tool = $toolStore;
</script>

{#if isOutsideDirectionTool(tool) && $outsideDirectionToolPreviewStore}
	<OutsideDirectionToolPreviewRender tool_preview={$outsideDirectionToolPreviewStore} />
{/if}
{#if isSimpleSingleCellTool(tool) && tool !== TOOLS.FOG_LIGHTS && $simpleCellToolPreviewStore}
	<SimpleSingleCellToolPreviewRender tool_preview={$simpleCellToolPreviewStore} />
{/if}
{#if isSingleCellArrowTool(tool) && $singleCellArrowPreviewStore}
	<SingleCellArrowPreviewRender tool_preview={$singleCellArrowPreviewStore} />
{/if}
{#if isSingleCellMultiArrowTool(tool) && $singleCellMultiArrowPreviewStore}
	<SingleCellMultiArrowRender tool={$singleCellMultiArrowPreviewStore} />
{/if}
{#if isEdgeTool(tool) && $edgeToolPreviewStore}
	<EdgeToolPreviewRender tool_preview={$edgeToolPreviewStore} />
{/if}
{#if isCornerTool(tool) && $cornerToolPreviewStore}
	<CornerToolPreviewRender tool_preview={$cornerToolPreviewStore} />
{/if}
{#if isCenterEdgeCornerTool(tool) && $centerCornerOrEdgeToolPreviewStore}
	<CenterCornerOrEdgeToolPreviewRender tool_preview={$centerCornerOrEdgeToolPreviewStore} />
{/if}
