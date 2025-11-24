<script lang="ts">
	import Modal from "$components/Modal/Modal.svelte";

    export let showModal = false;
</script>

<Modal bind:showModal title="Recent Puzzles">
    <div class="recent-puzzles-content">
        <div class="left">

        </div>
        <div class="right">

        </div>
    </div>
</Modal>

<style>
    .recent-puzzles-content {
        display: flex;
        flex-direction: row;
    }
</style>