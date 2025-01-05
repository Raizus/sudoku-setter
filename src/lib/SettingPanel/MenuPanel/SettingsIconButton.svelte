<script lang="ts">
	import MenuButton from './MenuButton.svelte';
    import Settings from '$icons/Settings.svelte';
	import SettingsModal from '$components/SettingsModal/SettingsModal.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<MenuButton title="Settings" {clickCb}>
    <Settings/>
</MenuButton>
<SettingsModal bind:showModal />
