<script lang="ts">
	import InfoShortcutRow from '$components/SettingsModal/ShortcutsComponents/InfoShortcutRow.svelte';
	import InfoTable from '$components/SettingsModal/ShortcutsComponents/InfoTable.svelte';
	import { shortcutRegistry, toolShortcutRegistry } from './shortcuts';
</script>

<div class="settings-tab-layout">
	<InfoTable title="General">
		{#each shortcutRegistry.values() as shortcut}
			<InfoShortcutRow {shortcut} />
		{/each}
	</InfoTable>
	
	<!-- <InfoTable title="Selection">
		<InfoShortcutRow description="Select cells">
			<InfoShortcut shortcut="click/drag" />
		</InfoShortcutRow>
		<InfoShortcutRow description="Add to current selection">
			<InfoShortcut shortcut="Shift+click/drag" />
		</InfoShortcutRow>
		<InfoShortcutRow description="Remove from current selection">
			<InfoShortcut shortcut="Alt+click/drag" />
		</InfoShortcutRow>
		<InfoShortcutRow description="Add or remove from current selection">
			<InfoShortcut shortcut="Ctrl+click/drag" />
		</InfoShortcutRow>
	</InfoTable> -->

	<InfoTable title="Tools">
		{#each toolShortcutRegistry.values() as shortcut}
			<InfoShortcutRow {shortcut} />
		{/each}
	</InfoTable>

</div>
