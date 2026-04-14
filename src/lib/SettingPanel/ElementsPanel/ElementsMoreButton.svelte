<script lang="ts">
	import MoreButton from '$components/ReusableComponents/MoreButton.svelte';
	import ElementDropdownMenu from './ElementDropdownMenu.svelte';

	export let display = false;
	export let disabled = false;
	export let deleteElementCb: (() => void) | null = null;
	export let enableDisableElementCb: (() => void) | null = null;
	export let duplicateElementCb: (() => void) | null = null;
</script>

{#if display}
	<MoreButton>
		<ElementDropdownMenu {disabled} {enableDisableElementCb} {deleteElementCb} {duplicateElementCb}/>		
	</MoreButton>
{/if}
