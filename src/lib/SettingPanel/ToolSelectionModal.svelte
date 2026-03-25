<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import SearchBar from '$lib/Components/SearchBar.svelte';
	import type { AbstractElementHandlers } from '../Puzzle/ElementHandlersUtils';
	import type { AbstractElementInfo } from '../Puzzle/ElementInfo';
	import type { TOOL_CATEGORIES, TOOLID } from '../Puzzle/Tools';
	import ToolSearchResults from './Subpanel/ToolSearchResults.svelte';

	export let showModal: boolean;
	export let title: string = "Elements";
	export let categories: TOOL_CATEGORIES[];
	export let elementHandlers: AbstractElementHandlers;
	export let onAddTool: (toolId: TOOLID) => void;
	export let elementHandlerFilterFunc: (key: TOOLID, elementInfo: AbstractElementInfo) => boolean;
	
	let searchPattern = '';

	const addToolWrapper = (toolId: TOOLID): void => {
		showModal = false;
		onAddTool(toolId);
	};
</script>

<Modal bind:showModal {title}>
	<div class="tool-selection-container">
		<SearchBar bind:searchPattern {showModal} />
		<div class="tools-list-container-wrapper">
			<div class="tools-list-container">
				<ToolSearchResults
					{searchPattern}
					{categories}
					filterFunc={elementHandlerFilterFunc}
					addTool={addToolWrapper}
					{elementHandlers}
				/>
			</div>
		</div>
	</div>
</Modal>

<style>
	.tool-selection-container {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 100%;
	}

	.tools-list-container-wrapper {
		flex: 1;
		position: relative;
	}

	.tools-list-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin-top: 0.5em;
		padding: 0.4em;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		align-items: start;
	}
</style>
