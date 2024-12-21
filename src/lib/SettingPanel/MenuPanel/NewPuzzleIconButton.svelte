<script lang="ts">
	import MenuButton from './MenuButton.svelte';
    import New from '$icons/New.svelte';
	import NewPuzzleModal from '../NewPuzzleModal/NewPuzzleModal.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<MenuButton title="New Puzzle" {clickCb}>
    <New/>
</MenuButton>
<NewPuzzleModal bind:showModal />
