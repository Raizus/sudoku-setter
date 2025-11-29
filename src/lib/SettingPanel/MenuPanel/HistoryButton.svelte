<script lang="ts">
	import History from '$icons/History.svelte';
	import PuzzleHistoryModal from '../PuzzleHistoryModal/PuzzleHistoryModal.svelte';
	import MenuButton from './MenuButton.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<MenuButton title="Recent Puzzles" {clickCb}>
	<History />
</MenuButton>
<PuzzleHistoryModal bind:showModal />
