<script lang="ts">
	import InfoTable from './InfoTable.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import HelpShortcutRow from './HelpShortcutRow.svelte';
	import InfoShortcut from './InfoShortcut.svelte';

	export let showModal = false;

</script>

<Modal bind:showModal title="Info">
	<div class="info-content">
		<InfoTable title="General">
			<HelpShortcutRow description="Toggle Darkmode">
				<InfoShortcut shortcut="Alt+Shift+D"/>
			</HelpShortcutRow>
		</InfoTable>
		<InfoTable title="Selection">
			<HelpShortcutRow description="Select cells">
				<InfoShortcut shortcut="click/drag" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Add to current selection">
				<InfoShortcut shortcut="Shift+click/drag" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Remove from current selection">
				<InfoShortcut shortcut="Alt+click/drag" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Add or remove from current selection">
				<InfoShortcut shortcut="Ctrl+click/drag" />
			</HelpShortcutRow>
		</InfoTable>

		<InfoTable title="Change Tool">
			<HelpShortcutRow description="Cycle Tool">
				<InfoShortcut shortcut="Space" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Change to Digit Tool">
				<InfoShortcut shortcut="Z" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Change to Corner Pencilmark Tool">
				<InfoShortcut shortcut="X" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Change to Center Pencilmark Tool">
				<InfoShortcut shortcut="C" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Change to Highlights Tool">
				<InfoShortcut shortcut="V" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Quickshift To Corner Pencilmark Tool">
				<InfoShortcut shortcut="Shift" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Quickshift To Center Pencilmark Tool">
				<InfoShortcut shortcut="Ctrl" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Quickshift To Highlights Tool">
				<InfoShortcut shortcut="Shift + Ctrl" />
				or
				<InfoShortcut shortcut="Alt" />
			</HelpShortcutRow>
		</InfoTable>

		<InfoTable title="Undo/Redo">
			<HelpShortcutRow description="Undo">
				<InfoShortcut shortcut="Ctrl+Z" />
			</HelpShortcutRow>
			<HelpShortcutRow description="Redo">
				<InfoShortcut shortcut="Ctrl+Y" />
			</HelpShortcutRow>
		</InfoTable>
	</div>
</Modal>

<style>
	.info-content {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		overflow: auto;
		overflow-y: scroll;
		gap: 0.5rem;
		font-size: 1rem;
	}
</style>
