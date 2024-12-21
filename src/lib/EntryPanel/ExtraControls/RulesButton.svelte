<script lang="ts">
	import RulesModal from './../RulesModal/RulesModal.svelte';
	import Rules from '$icons/Rules.svelte';
	import ExtraControlButton from './ExtraControlButton.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<ExtraControlButton title="Rules" {clickCb}>
    <Rules />
</ExtraControlButton>
<RulesModal bind:showModal />
