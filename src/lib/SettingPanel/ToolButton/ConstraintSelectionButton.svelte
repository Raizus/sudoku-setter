<script lang="ts">
	import type { TOOLID } from "$lib/Puzzle/Tools";

    import Trash from '$icons/Trash.svelte';
	import { currentConstraintStore, selectConstraint, svgRefStore } from "$stores/BoardStore";
		import { localConstraintsStore } from '$stores/BoardStore';
	import { getLocalConstraintCommand, removeLocalConstraint } from '$stores/LocalConstraintsStore';
	import { addLocalConstraintAction, removeLocalConstraintAction } from "$src/lib/reducers/LocalConstraintsActions";
	import { addCommand } from "$stores/HistoryStore";

    export let constraintId: string;
    export let toolId: TOOLID;

    function onClickCb() {
        //update current constraint
        selectConstraint(constraintId, toolId);
        $svgRefStore.focus();
    }

    function removeConstraint() {
        // removeLocalConstraint(toolId, constraintId);
        const constraint = $localConstraintsStore.getConstraint(toolId, constraintId);
        if (!constraint) return;
        const action = removeLocalConstraintAction(constraintId, toolId);
		const reverse_action = addLocalConstraintAction(constraintId, constraint);
		const command = getLocalConstraintCommand(action, reverse_action);
		addCommand(command);
    }

    $: currentConstraintId = $currentConstraintStore?.id
</script>


<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="constraint-button" on:click={onClickCb} class:active={constraintId === currentConstraintId}>
    <div class="left-side">
        ID: {constraintId}
    </div>
    <div class="right-side">
        <button class="remove-constraint-button" on:click|stopPropagation={removeConstraint}>
            <Trash />
        </button>
    </div>
</div>

<style>
    .constraint-button {
        display: flex;
        background-color: transparent;
        text-align: start;
        border: 1px solid var(--panel-radio-border-color);
        /* border: 1px solid black; */
        border-radius: 5px;
        cursor: pointer;
    }

    .constraint-button:hover{
        background-color: var(--panel-radio-background-hover);
    }

    .constraint-button.active {
        background-color: var(--button-active-background-color);
    }

    .left-side {
		display: flex;
		align-items: center;
	}

	.right-side {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

    .remove-constraint-button {
        color: var(--panel-icon-color);
        background-color: transparent;
        border-radius: 5px;
        padding: 2px;
        border: none;
        width: 1.5rem;
		height: 1.5rem;
        display: flex;
        cursor: pointer;
    }

    .remove-constraint-button:hover {
        color: var(--panel-icon-color-hover);
    }

    .remove-constraint-button:focus {
        outline: transparent;
		box-shadow: var(--focus-shadow);
    }
</style>