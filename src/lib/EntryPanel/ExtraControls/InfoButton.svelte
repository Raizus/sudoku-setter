<script lang="ts">
	import InfoModal from '$components/InfoModal/InfoModal.svelte';
	import Info from '$icons/Info.svelte';
	import ExtraControlButton from './ExtraControlButton.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<ExtraControlButton title="Info" {clickCb}>
    <Info/>
</ExtraControlButton>
<InfoModal bind:showModal />
