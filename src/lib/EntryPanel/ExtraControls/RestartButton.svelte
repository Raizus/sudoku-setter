<script lang="ts">
	import Restart from '$icons/Restart.svelte';
	import ExtraControlButton from './ExtraControlButton.svelte';
	import RestartModal from './RestartModal.svelte';

	let showModal = false;

	function clickCb() {
		showModal = true;
	}
</script>

<ExtraControlButton title="Restart" {clickCb}>
	<Restart />
</ExtraControlButton>
<RestartModal bind:showModal />
