<script lang="ts">
	import DropdownMenu from '$components/DropdownMenu.svelte';
	import DropdownMenuButton from '$components/DropdownMenuButton.svelte';
	import MoreVertical from '$icons/MoreVertical.svelte';
	import Trash from '$icons/Trash.svelte';
	import Visibility from '$icons/Visibility.svelte';
	import VisibilityOff from '$icons/VisibilityOff.svelte';

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

	<DropdownMenu bind:this={dropdown} bind:open={dropdow_open} {buttonEl} let:close>
		{#if enableDisableElementCb}
			<DropdownMenuButton
				clickCb={() => {
					enableDisableElementCb();
					close();
				}}
			>
				<svelte:fragment slot="icon">
					{#if disabled}
						<Visibility />
					{:else}
						<VisibilityOff />
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="label">
					{disabled ? 'Enable' : 'Disable'}
				</svelte:fragment>
			</DropdownMenuButton>
		{/if}
		{#if deleteElementCb}
			<DropdownMenuButton
				clickCb={() => {
					deleteElementCb();
					close();
				}}
			>
				<svelte:fragment slot="icon">
					<Trash />
				</svelte:fragment>
				<svelte:fragment slot="label">Delete</svelte:fragment>
			</DropdownMenuButton>
		{/if}
	</DropdownMenu>
{/if}

<style lang="scss">
	.dropdown-container {
		position: relative;
		display: inline-block;
	}

	.header-button {
		padding: 0 0.5em;
	}
</style>
