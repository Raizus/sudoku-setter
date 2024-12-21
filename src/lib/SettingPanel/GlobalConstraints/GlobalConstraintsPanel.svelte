<script lang="ts">
	import { toolStore } from '$stores/BoardStore';
	import { getGlobalConstraintCommand } from '$stores/GlobalConstraintsStore';
		import { globalConstraintsStore } from '$stores/BoardStore';
	import { GLOBAL_CONSTRAINT_CATEGORIES, TOOL_CATEGORIES, type TOOLID } from '$lib/Puzzle/Tools';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import GlobalConstraintPanelCheckbox from './GlobalConstraintPanelCheckbox.svelte';

	import Global from '$icons/Global.svelte';
	import SettingToolsPanel from '../Subpanel/SettingToolsPanel.svelte';
	import type { AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import { removeGlobalConstraintAction, setGlobalConstraintAction } from '$src/lib/reducers/GlobalConstraintsActions';
	import { addCommand } from '$stores/HistoryStore';

	export let elementHandlers: AbstractElementHandlers;

	const categories = GLOBAL_CONSTRAINT_CATEGORIES;
	const onAddTool = (key: TOOLID): void => {
		const action = setGlobalConstraintAction(key, true);
		const reverse_action = removeGlobalConstraintAction(key);
		const command = getGlobalConstraintCommand(action, reverse_action);
		addCommand(command);
	};

	$: globalCFilterFun = (key: TOOLID, elementInfo: AbstractElementInfo): boolean => {
		const isGlobal = elementInfo.meta?.categories.includes(TOOL_CATEGORIES.GLOBAL_CONSTRAINT)
			? true
			: false;
		const exists = $globalConstraintsStore.has(key);
		return isGlobal && !exists;
	};
</script>

<SettingToolsPanel
	title="Global Constraints"
	{onAddTool}
	{categories}
	elementHandlerFilterFunc={globalCFilterFun}
	{elementHandlers}
>
	<Global slot="title-icon"/>
	<svelte:fragment slot="panel-content">
		{#each $globalConstraintsStore.entries() as [toolId, value] (toolId)}
			<GlobalConstraintPanelCheckbox {toolId} {value} {elementHandlers}/>
		{/each}
	</svelte:fragment>
</SettingToolsPanel>
