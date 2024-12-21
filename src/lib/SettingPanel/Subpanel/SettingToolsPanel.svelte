<script lang="ts">
	import ToolSelectionModal from './../ToolSelectionModal.svelte';
	import type { TOOLID, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import ToolSearchResults from './ToolSearchResults.svelte';
	import ToolPanelHeader from './ToolPanelHeader.svelte';
	import Panel from './Panel.svelte';
	import type { AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';

	export let categories: TOOL_CATEGORIES[];
	export let title: string;
	export let onAddTool: (toolId: TOOLID) => void;
	export let elementHandlerFilterFunc: (key: TOOLID, elementInfo: AbstractElementInfo) => boolean;
	export let elementHandlers: AbstractElementHandlers;

	let isOpen = true;
	let showModal = false;
	let searchPattern = '';

	const addToolWrapper = (toolId: TOOLID): void => {
		showModal = false;
		isOpen = true;
		onAddTool(toolId);
	};
</script>

<Panel bind:isOpen>
	<svelte:fragment slot="panel-header">
		<ToolPanelHeader {title} bind:isOpen bind:showModal>
			<slot name="title-icon" slot="title-icon"/>
		</ToolPanelHeader>
		<ToolSelectionModal bind:showModal bind:searchPattern {title}>
			<ToolSearchResults
				{searchPattern}
				{categories}
				filterFunc={elementHandlerFilterFunc}
				addTool={addToolWrapper}
				{elementHandlers}
			/>
		</ToolSelectionModal>
	</svelte:fragment>
	<svelte:fragment slot="panel-content">
		<slot name="panel-content"/>
	</svelte:fragment>
</Panel>
