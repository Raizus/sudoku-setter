<script lang="ts">
	import DropdownMenuButton from "$components/ReusableComponents/DropdownMenuButton.svelte";
	import Copy from "$icons/Copy.svelte";
	import Trash from "$icons/Trash.svelte";
	import Visibility from "$icons/Visibility.svelte";
	import VisibilityOff from "$icons/VisibilityOff.svelte";
	import { getContext } from "svelte";

    export let disabled = false;
	export let deleteElementCb: (() => void) | null = null;
	export let enableDisableElementCb: (() => void) | null = null;
	export let duplicateElementCb: (() => void) | null = null;

	const close = getContext<() => void>('closeDropdown');
</script>

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
{#if duplicateElementCb}
	<DropdownMenuButton
		clickCb={() => {
			duplicateElementCb();
			close();
		}}
	>
		<svelte:fragment slot="icon">
			<Copy />
		</svelte:fragment>
		<svelte:fragment slot="label">Duplicate</svelte:fragment>
	</DropdownMenuButton>
{/if}
