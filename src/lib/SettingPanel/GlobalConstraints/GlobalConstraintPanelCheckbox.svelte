<script lang="ts">
	import { getToolInfo, type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { TOOLID } from '$lib/Puzzle/Tools';
	import {
		removeGlobalConstraintAction,
		setGlobalConstraintAction
	} from '$src/lib/reducers/GlobalConstraintsActions';
	import { getGlobalConstraintCommand } from '$stores/GlobalConstraintsStore';
	import { addCommand } from '$stores/HistoryStore';
	import Checkbox from '../ToolButton/Checkbox.svelte';
	import ToolSelectorButton from '../ToolButton/ToolSelectorButton.svelte';

	export let toolId: TOOLID;
	export let value = false;
	export let elementHandlers: AbstractElementHandlers;

	const onClick = () => {
		const action = setGlobalConstraintAction(toolId, !value);
		const reverse_action = setGlobalConstraintAction(toolId, value);
		const command = getGlobalConstraintCommand(action, reverse_action);
		addCommand(command);
	};

	const onTrash = () => {
		const action = removeGlobalConstraintAction(toolId);
		const reverse_action = setGlobalConstraintAction(toolId, value);
		const command = getGlobalConstraintCommand(action, reverse_action);
		addCommand(command);
	};
</script>

<ToolSelectorButton elementInfo={getToolInfo(toolId, elementHandlers)} {onClick} {onTrash}>
	<Checkbox {value} />
</ToolSelectorButton>
