<script lang="ts">
	import SettingsModal from '$components/SettingsModal/SettingsModal.svelte';
	import Settings from '$icons/Settings.svelte';
	import ExtraControlButton from './ExtraControlButton.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<ExtraControlButton title="Settings" {clickCb}>
    <Settings />
</ExtraControlButton>
<SettingsModal bind:showModal />
