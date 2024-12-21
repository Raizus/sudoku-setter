<script lang="ts">
	import CustomToggle from "./CustomToggle.svelte";

    export let value: boolean;
    export let name: string;
    export let updateCb: ((value: boolean) => void) | undefined = undefined
    export let disabled = false;

    function onClickCb() {
        if (disabled) return;
        updateCb && updateCb(!value);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="settings-toggle" class:disabled={disabled}>
    <CustomToggle value={value} {onClickCb} {disabled}/>
    <span on:click|stopPropagation={onClickCb}>{name}</span>
</div>

<style>
    .settings-toggle {
        display: flex;
        cursor: pointer;
        align-items: center;
        user-select: none;

        &.disabled {
            cursor: auto;
        }
    }

    span {
        padding-left: 1rem;
    }
</style>