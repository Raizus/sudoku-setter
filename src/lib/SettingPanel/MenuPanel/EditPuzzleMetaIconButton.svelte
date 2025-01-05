<script lang="ts">
	import MenuButton from './MenuButton.svelte';
    import EditMeta from '$icons/EditMeta.svelte';
	import EditPuzzleMetaModal from '../EditPuzzleMetaModal/EditPuzzleMetaModal.svelte';

	let showModal = false;
    
    function clickCb() {
        showModal = true;
    }
</script>

<MenuButton title="Edit Puzzle Meta" {clickCb}>
    <EditMeta/>
</MenuButton>
<EditPuzzleMetaModal bind:showModal />
