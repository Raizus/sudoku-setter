<script lang="ts">
	import DropdownMenu from '$components/ReusableComponents/DropdownMenu.svelte';
	import MoreVertical from '$icons/MoreVertical.svelte';
	import ElementDropdownMenu from './ElementDropdownMenu.svelte';

	export let display = false;
	export let disabled = false;
	export let deleteElementCb: (() => void) | null = null;
	export let enableDisableElementCb: (() => void) | null = null;

	let dropdow_open = false;
	let dropdown: DropdownMenu;
	let buttonEl: HTMLButtonElement;
</script>

{#if display}
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
		<ElementDropdownMenu {disabled} {enableDisableElementCb} {deleteElementCb}/>
	</DropdownMenu>
{/if}

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
