<script lang="ts">
	import MenuButton from './MenuButton.svelte';
    import Save from '$icons/Save.svelte';
	import SavePuzzleModal from '../SavePuzzleModal/SavePuzzleModal.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<MenuButton title="Save Puzzle" {clickCb}>
    <Save/>
</MenuButton>
<SavePuzzleModal bind:showModal />
