<script lang="ts">
	import CaretDown from '$icons/CaretDown.svelte';
	import CaretUp from '$icons/CaretUp.svelte';
	import { getToolInfo, type AbstractElementHandlers } from '$src/lib/Puzzle/ElementHandlersUtils';
	import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
	import { TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { getUsageDescription } from '$src/lib/Puzzle/ToolUsage';
	import {
		enableDisableElementAction,
		moveElementDownAction,
		moveElementUpAction,
		removeElementAction,
		restoreElementAction
	} from '$src/lib/reducers/LocalConstraintsActions';
	import {
		elementsDictStore,
		selectedElementIdStore,
		toolStore,
		updateToolAndCurrentConstraintStores,
		updateToolOnRemoveGroup
	} from '$stores/BoardStore';
	import { addCommand } from '$stores/CommandHistoryStore';
	import { getUpdateElementCommand } from '$stores/LocalConstraintsStore';
	import ElementEditor from './ElementEditor.svelte';
	import MoreButton from './MoreButton.svelte';

	export let tool_id: TOOLID;
	export let order: number | null = null;
	export let element_id: number | null = null;
	export let element: ConstraintsElement | undefined = undefined;

	export let elementHandlers: AbstractElementHandlers;

	const permanent: boolean = !!elementHandlers[tool_id].permanent;
	let selected: boolean = false;
	let constraint_name = tool_id;

	$: elementInfo = getToolInfo(tool_id, elementHandlers);
	$: disabled = !!element?.disabled;

	function selectCb() {
		if (selected) {
			updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);
		} else if (!disabled) {
			updateToolAndCurrentConstraintStores(tool_id, element_id);
		}
	}

	function deleteElement() {
		updateToolOnRemoveGroup(tool_id);

		if (element_id === null) return;

		const constraints = $elementsDictStore.get(element_id);
		if (!constraints) return;

		const action = removeElementAction(element_id);
		const reverse_action = restoreElementAction(element_id, constraints);
		const command = getUpdateElementCommand(action, reverse_action);
		addCommand(command);
	}

	function enableDisableElement() {
		if (element_id === null) return;

		const action = enableDisableElementAction(element_id, !disabled);
		const reverse_action = enableDisableElementAction(element_id, disabled);
		const command = getUpdateElementCommand(action, reverse_action);
		addCommand(command);
		if (!disabled) {
			updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);
		}
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

	function moveUp() {
		if (element_id === null) return;
		const action = moveElementUpAction(element_id);
		const reverse_action = moveElementDownAction(element_id);
		const command = getUpdateElementCommand(action, reverse_action);
		addCommand(command);
	}

	function moveDown() {
		if (element_id === null) return;
		const action = moveElementDownAction(element_id!);
		const reverse_action = moveElementUpAction(element_id!);
		const command = getUpdateElementCommand(action, reverse_action);
		addCommand(command);
	}

	$: selected = element_id === $selectedElementIdStore && tool_id === $toolStore;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="element-button-wrapper">
	{#if !permanent && element_id !== undefined}
		<div class="reorder-buttons">
			<button
				class="form-button reorder-button move-up"
				on:click={moveUp}
				disabled={order === 0 || order === null}
			>
				<CaretUp />
			</button>
			<button
				class="form-button reorder-button move-down"
				on:click={moveDown}
				disabled={order === null || order === $elementsDictStore.size - 1}
			>
				<CaretDown />
			</button>
		</div>
	{/if}
	<div
		class="constraints-ui"
		class:clickable={true}
		class:selected
		class:disabled={element?.disabled}
	>
		<div class="header" title={getTooltip()} on:click={selectCb}>
			<div class="element-icon-container"></div>
			<div class="name-container">
				<span class="element-name">
					{constraint_name}
				</span>
			</div>
			{#if !permanent}
				<MoreButton
					display={!permanent}
					deleteElementCb={deleteElement}
					{disabled}
					enableDisableElementCb={enableDisableElement}
				/>
			{/if}
		</div>
		{#if selected && element_id !== null}
			<ElementEditor {tool_id} {element_id} />
		{/if}
	</div>
</div>

<style lang="scss">
	.element-button-wrapper {
		display: flex;
	}

	.reorder-buttons {
		flex-grow: 0;
		min-width: 0;
	}
	.reorder-button {
		background: var(--button-hover-background-color);
		border: 0.1rem solid black;
		font-weight: 700;
		line-height: 1;
		position: relative;
		min-width: 0;
		width: 2rem !important;
		min-height: 0;
		height: 1.5rem;
		&.move-up {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			border-bottom: 0.05rem solid black;
		}
		&.move-down {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			border-top: 0.05rem solid black;
		}
		&:disabled {
			opacity: 0.5;
			cursor: default;
		}
		&:hover:not(:disabled) {
			background-color: var(--button2-hover-background-color);
		}
	}

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

	.constraints-ui.disabled .header {
		background-image: repeating-linear-gradient(
			-45deg,
			var(--panel-background-color),
			var(--panel-background-color) 0.25rem,
			transparent 0.25rem,
			var(--background-color) 0.5rem
		);
		cursor: default;
	}

	.element-icon-container {
		width: 2.5rem;
		height: 2.5rem;
		overflow: hidden;
		flex-shrink: 0;
	}

	.name-container {
		margin: 0.2rem;
		display: flex;
		flex: 1;
	}

	.element-name {
		background-color: var(--panel-background-color);
		padding: 0.2rem;
	}

	.form-button {
		padding: 0 0.5em;
	}

	// .header-button {
	// 	align-self: start;
	// }
</style>
