<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import GameplayTab from './GameplayTab.svelte';
	import OtherTab from './OtherTab.svelte';
	import DisplayTab from './DisplayTab.svelte';
	import ShortcutsTab from './ShortcutsTab.svelte';
	import TabbedMenu from '$components/ReusableComponents/TabbedMenu.svelte';

	export let showModal = false;

	const tabs = [
		{ label: 'Display', component: DisplayTab },
		{ label: 'Gameplay', component: GameplayTab },
		{ label: 'Shortcuts', component: ShortcutsTab },
		{ label: 'Other', component: OtherTab }
	];
</script>

<Modal bind:showModal title="Settings">
	<div class="settings-content">
		<TabbedMenu {tabs} />
	</div>
</Modal>

<style>
	.settings-content {
		position: relative;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		font-size: 1rem;
	}
</style>
