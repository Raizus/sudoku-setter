<script lang="ts">
	import MoreVertical from "$icons/MoreVertical.svelte";
	import DropdownMenu from "./DropdownMenu.svelte";

	let dropdow_open = false;
	let dropdown: DropdownMenu;
	let buttonEl: HTMLButtonElement;
</script>

<div class="dropdown-container">
    <button
        bind:this={buttonEl}
        class="form-button icon header-button"
        on:click|stopPropagation={() => dropdown?.toggle()}
    >
        <MoreVertical />
    </button>
</div>

<DropdownMenu bind:this={dropdown} bind:open={dropdow_open} {buttonEl} >
    <slot></slot>
</DropdownMenu>

<style lang="scss">
	.dropdown-container {
		position: relative;
		display: inline-block;
	}

	.header-button {
		padding: 0 0.5em;
		background-color: transparent;
	}
</style>