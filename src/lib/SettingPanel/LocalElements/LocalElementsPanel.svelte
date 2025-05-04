<script lang="ts">
	import { getToolInfo, type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import {
		TOOLS,
		type TOOLID,
		TOOL_CATEGORIES,
		isLocalElement,
		ELEMENTS_CATEGORIES
	} from '$lib/Puzzle/Tools';
	import { localConstraintsStore, updateToolAndCurrentConstraintStores } from '$stores/BoardStore';

	import SettingToolsPanel from '../Subpanel/SettingToolsPanel.svelte';
	import ToolSelectorButton from '../ToolButton/ToolSelectorButton.svelte';
	import LocalConstraintSelectionButton from './LocalConstraintSelectionButton.svelte';

	import Local from '$icons/Local.svelte';
	import ConstraintList from '../ToolButton/ConstraintList.svelte';
	import { addGroupToLocalConstraint } from '$stores/LocalConstraintsStore';
	import ElementButton from './ElementButton.svelte';
	// import ConstraintList from '../ToolButton/ConstraintList.svelte';

	export let elementHandlers: AbstractElementHandlers;

	const categories = ELEMENTS_CATEGORIES;

	const onAddTool = (toolId: TOOLID): void => {
		addGroupToLocalConstraint(toolId);
		// TODO split update tool and update current constraint
		updateToolAndCurrentConstraintStores(toolId);
	};

	// force the filter to update when a new constraint is added
	$: localCFilterFun = (key: TOOLID, elementInfo: AbstractElementInfo): boolean => {
		const exists = $localConstraintsStore.has(key);
		const isLocal = elementInfo.meta?.categories.includes(TOOL_CATEGORIES.LOCAL_ELEMENT)
			? true
			: false;
		return isLocal && !exists;
	};
</script>

<SettingToolsPanel
	title="Elements"
	{onAddTool}
	{categories}
	elementHandlerFilterFunc={localCFilterFun}
	{elementHandlers}
>
	<Local slot="title-icon" />
	<svelte:fragment slot="panel-content">
		<ToolSelectorButton elementInfo={getToolInfo(TOOLS.GIVEN, elementHandlers)} />
		<ToolSelectorButton elementInfo={getToolInfo(TOOLS.REGIONS, elementHandlers)} />

		{#each $localConstraintsStore.entries() as [tool_id, value] (tool_id)}
			{#if isLocalElement(tool_id)}
				<ElementButton {tool_id} {elementHandlers}/>
			{/if}
		{/each}
	</svelte:fragment>
</SettingToolsPanel>
