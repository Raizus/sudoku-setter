<script lang="ts">
	import { getToolInfo, type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { TOOLID } from '$lib/Puzzle/Tools';
	import {
		removeLocalConstraintGroupAction,
		restoreLocalConstraintGroupAction
	} from '$src/lib/reducers/LocalConstraintsActions';
	import { removeGroupFromLocalConstraint, updateToolOnRemoveGroup } from '$stores/BoardStore';
		import { localConstraintsStore } from '$stores/BoardStore';
	import { addCommand } from '$stores/HistoryStore';
	import { getLocalConstraintCommand } from '$stores/LocalConstraintsStore';
	import ToolSelectorButton from '../ToolButton/ToolSelectorButton.svelte';

	export let toolId: TOOLID;
	export let elementHandlers: AbstractElementHandlers;

	const onTrash = () => {
		updateToolOnRemoveGroup(toolId);

		const constraints = $localConstraintsStore.get(toolId);
		if (!constraints) return;
		const action = removeLocalConstraintGroupAction(toolId);
		const reverse_action = restoreLocalConstraintGroupAction(toolId, constraints);
		const command = getLocalConstraintCommand(action, reverse_action);
		addCommand(command);
	};
</script>

<ToolSelectorButton elementInfo={getToolInfo(toolId, elementHandlers)} {onTrash} />
