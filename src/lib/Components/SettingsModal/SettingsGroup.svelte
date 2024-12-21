<script lang="ts">
	import CollapsibleDiv from "$lib/Components/CollapsibleDiv.svelte";
import ModalSectionHeader from "$lib/Components/Modal/ModalSectionHeader.svelte";

    export let title: string;
    export let isOpen = true;
</script>

<div class="settings-group">
    <ModalSectionHeader {title} bind:isOpen isCollapsible={true}/>
    <CollapsibleDiv {isOpen}>
        <div class="group-content-wrapper">
            <slot />
        </div>
    </CollapsibleDiv>
</div>

<style>
    .settings-group {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .group-content-wrapper {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
</style>