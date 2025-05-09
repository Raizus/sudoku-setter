<script lang="ts">
	// import CaretDown from '$icons/CaretDown.svelte';
	// import CaretUp from '$icons/CaretUp.svelte';
	import Trash from '$icons/Trash.svelte';
	import { getToolInfo, type AbstractElementHandlers } from '$src/lib/Puzzle/ElementHandlersUtils';
	import { TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { getUsageDescription } from '$src/lib/Puzzle/ToolUsage';
	import {
		removeLocalConstraintGroupAction,
		restoreElementAction
	} from '$src/lib/reducers/LocalConstraintsActions';
	import {
		elementsDictStore,
		toolStore,
		updateToolAndCurrentConstraintStores,
		updateToolOnRemoveGroup
	} from '$stores/BoardStore';
	import { addCommand } from '$stores/HistoryStore';
	import { getLocalConstraintCommand } from '$stores/LocalConstraintsStore';
	import ElementEditor from './ElementEditor.svelte';

	export let tool_id: TOOLID;
	export let elementHandlers: AbstractElementHandlers;
	
	const permanent: boolean = !!elementHandlers[tool_id].permanent;
	let selected: boolean = false;
	let constraint_name = tool_id;

	$: elementInfo = getToolInfo(tool_id, elementHandlers);

	function selectCb() {
		if (selected) {
			updateToolAndCurrentConstraintStores(TOOLS.DIGIT);
		} else {
			updateToolAndCurrentConstraintStores(tool_id);
		}
	}

	function deleteElement() {
		updateToolOnRemoveGroup(tool_id);

		const constraints = $elementsDictStore.get(tool_id);
		if (!constraints) return;
		const action = removeLocalConstraintGroupAction(tool_id);
		const reverse_action = restoreElementAction(tool_id, constraints);
		const command = getLocalConstraintCommand(action, reverse_action);
		addCommand(command);
	}

	function getTooltip() {
		const toolDescription = elementInfo.meta?.description;
		const toolUsage = elementInfo.meta?.usage ?? getUsageDescription(tool_id);

		let description: string | undefined = undefined;
		if (toolDescription && toolDescription.length) {
			description = toolDescription;
		}
		if (toolUsage.length) {
			if (description) {
				description = description + '\n\n' + toolUsage;
			} else {
				description = toolUsage;
			}
		}
		return description;
	}

	$: selected = tool_id === $toolStore;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="element-button-wrapper">
	<!-- <div class="reorder-buttons">
		<button class="form-button reorder-button move-up">
			<CaretUp />
		</button>
		<button class="form-button reorder-button move-down">
			<CaretDown />
		</button>
	</div> -->
	<div class="constraints-ui" class:clickable={true} class:selected>
		<div class="header" title={getTooltip()} on:click={selectCb}>
			<div class="element-icon-container"></div>
			<div class="element-name">{constraint_name}</div>
			{#if !permanent}
				<button class="form-button icon header-button" on:click|stopPropagation={deleteElement}>
					<Trash />
				</button>
			{/if}
		</div>
		{#if selected}
			<ElementEditor {tool_id} />
		{/if}
	</div>
</div>

<style lang="scss">
	.element-button-wrapper {
		display: flex;
	}

	// .reorder-buttons {
	// 	flex-grow: 0;
	// 	min-width: 0;
	// }

	// .reorder-button {
	// 	color: #333;
	// 	background: #fff;
	// 	border: 0.125rem solid black;
	// 	font-weight: 700;
	// 	line-height: 1;
	// 	position: relative;
	// 	min-width: 0;
	// 	width: 2rem !important;
	// 	min-height: 0;
	// 	height: 1.5rem;

	// 	&.move-up {
	// 		border-bottom-left-radius: 0;
	// 		border-bottom-right-radius: 0;
	// 		border-bottom: 0.05rem solid black;
	// 	}

	// 	&.move-down {
	// 		border-top-left-radius: 0;
	// 		border-top-right-radius: 0;
	// 		border-top: 0.05rem solid black;
	// 	}
	// }

	.constraints-ui {
		flex: 1;
		min-width: 0;

		border: 0.125rem solid black;
		border-radius: 0.25rem;
		transition: all 0.2s ease-in-out;

		&.selected {
			box-shadow: 0 0.1em 0.2em -0.1em #333;
			outline: var(--input-outline-color) solid 0.15rem;
		}
	}

	.header {
		display: flex;
		align-items: center;
		position: relative;
		gap: 0.5rem;
		cursor: pointer;

		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	.element-icon-container {
		width: 2.5rem;
		height: 2.5rem;
		overflow: hidden;
		flex-shrink: 0;
	}

	.element-name {
		line-height: 1;
		flex: 1;
	}

	.form-button {
		padding: 0 0.5em;
	}

	.header-button {
		align-self: start;
	}
</style>
