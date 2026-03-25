<script lang="ts">
	import { flip } from 'svelte/animate';
	import { type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import {
		TOOLS,
		type TOOLID,
		TOOL_CATEGORIES,
		isElement,
		ELEMENTS_CATEGORIES
	} from '$lib/Puzzle/Tools';

	import SettingToolsPanel from '../Subpanel/SettingToolsPanel.svelte';
	import Local from '$icons/Local.svelte';
	import ElementButton from './ElementButton.svelte';

	import { stateStore } from '$stores/StateStore';
	import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
	import { removeElementAction, restoreElementAction } from '$src/lib/reducers/ElementsActions';

	export let elementHandlers: AbstractElementHandlers;

	const elementsDictStore = stateStore.elementsDictStore;
	const categories = ELEMENTS_CATEGORIES;

	const onAddTool = (toolId: TOOLID): void => {
		const new_element: ConstraintsElement = { tool_id: toolId, constraints: {} };
		const new_ele_id = stateStore.addGroupToElementsDict(new_element);

		const action = restoreElementAction(new_ele_id, new_element);
		const reverse_action = removeElementAction(new_ele_id);
		const command = stateStore.getUpdateElementCommand(action, reverse_action);

		stateStore.commandHistoryStore.addCommand(command, false);

		// TODO split update tool and update current constraint
		stateStore.updateToolAndCurrentConstraintStores(toolId, new_ele_id);
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

		{#each $elementsDictStore.orderedEntries() as [element_id, element], index (element_id)}
			<li animate:flip={{ duration: 500 }}>
				{#if isElement(element.tool_id)}
					<ElementButton
						tool_id={element.tool_id}
						{elementHandlers}
						{element}
						{element_id}
						order={index}
					/>
				{/if}
			</li>
		{/each}
	</svelte:fragment>
</SettingToolsPanel>

<style lang="scss">
	li {
		list-style: none;
		margin-bottom: 0.05rem;
	}
</style>