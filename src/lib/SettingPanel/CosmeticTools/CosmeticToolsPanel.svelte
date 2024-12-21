<script lang="ts">
	import { isCosmeticTool, TOOL_CATEGORIES, type TOOLID } from '$lib/Puzzle/Tools';
	import {
		updateToolAndCurrentConstraintStores
	} from '$stores/BoardStore';
	import { addGroupToLocalConstraint } from '$stores/LocalConstraintsStore';
		import { localConstraintsStore } from '$stores/BoardStore';
	import LocalConstraintSelectionButton from '../LocalConstraints/LocalConstraintSelectionButton.svelte';

	import Shape from '$icons/Shape.svelte';
	import ConstraintList from '../ToolButton/ConstraintList.svelte';
	import SettingToolsPanel from '../Subpanel/SettingToolsPanel.svelte';
	import type { AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';

	export let elementHandlers: AbstractElementHandlers;
	const categories = [TOOL_CATEGORIES.COSMETIC_TOOL];

	const onAddTool = (toolId: TOOLID): void => {
		addGroupToLocalConstraint(toolId);
		updateToolAndCurrentConstraintStores(toolId);
	};

	// force the filter to update when a new constraint is added
	$: cosmeticFilterFun = (key: TOOLID, elementInfo: AbstractElementInfo): boolean => {
		const exists = $localConstraintsStore.has(key);
		const isCosmetic = elementInfo.meta?.categories.includes(TOOL_CATEGORIES.COSMETIC_TOOL)
			? true
			: false;

		return isCosmetic && !exists;
	};
</script>

<SettingToolsPanel
	title="Cosmetic Tools"
	{onAddTool}
	{categories}
	elementHandlerFilterFunc={cosmeticFilterFun}
	{elementHandlers}
>
	<Shape slot="title-icon"/>
	<svelte:fragment slot="panel-content">
		{#each $localConstraintsStore.entries() as [toolId, value] (toolId)}
			{#if isCosmeticTool(toolId)}
				<LocalConstraintSelectionButton {toolId} {elementHandlers}/>
				<ConstraintList {toolId} />
			{/if}
		{/each}
	</svelte:fragment>
</SettingToolsPanel>
