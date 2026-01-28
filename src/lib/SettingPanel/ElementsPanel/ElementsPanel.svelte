<script lang="ts">
	import { type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import {
		TOOLS,
		type TOOLID,
		TOOL_CATEGORIES,
		isElement,
		ELEMENTS_CATEGORIES
	} from '$lib/Puzzle/Tools';
	import { elementsDictStore, updateToolAndCurrentConstraintStores } from '$stores/BoardStore';

	import SettingToolsPanel from '../Subpanel/SettingToolsPanel.svelte';

	import Local from '$icons/Local.svelte';
	import { addGroupToLocalConstraint } from '$stores/LocalConstraintsStore';
	import ElementButton from './ElementButton.svelte';

	export let elementHandlers: AbstractElementHandlers;

	const categories = ELEMENTS_CATEGORIES;

	const onAddTool = (toolId: TOOLID): void => {
		addGroupToLocalConstraint(toolId);
		// TODO split update tool and update current constraint
		updateToolAndCurrentConstraintStores(toolId);
	};

	// force the filter to update when a new constraint is added
	$: localCFilterFun = (key: TOOLID, elementInfo: AbstractElementInfo): boolean => {
		const exists = $elementsDictStore.hasTool(key);
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
		<ElementButton tool_id={TOOLS.GIVEN} {elementHandlers} />
		<ElementButton tool_id={TOOLS.REGIONS} {elementHandlers} />

		{#each $elementsDictStore.entries() as [tool_id, element] (tool_id)}
			{#if isElement(tool_id)}
				<ElementButton tool_id={element.tool_id} {elementHandlers} {element}/>
			{/if}
		{/each}
	</svelte:fragment>
</SettingToolsPanel>
