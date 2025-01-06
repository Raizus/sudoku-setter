<script lang="ts">
	import { get } from 'svelte/store';
	import Modal from '$components/Modal/Modal.svelte';
	import { createMinizincModel } from '$src/lib/Solver/solver';
	import { puzzleMetaStore, puzzleStore } from '$stores/BoardStore';
	import { getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { pruneMinizincModel } from '$src/lib/Solver/solver_utils';
	export let showModal = false;

    function getModelStr() {
        const puzzle = get(puzzleStore);
        const modelstr = createMinizincModel(puzzle);
        return modelstr;
    }

    function copyCb() {
        const modelStr = getModelStr();
        navigator.clipboard.writeText(modelStr);
    };

	function copyPrunedCb() {
        const modelStr = getModelStr();
		const pruned = pruneMinizincModel(modelStr);
        navigator.clipboard.writeText(pruned);
    };

    function downloadCb() {
		function download(content: string, fileName: string, contentType: string) {
			var a = document.createElement('a');
			var file = new Blob([content], { type: contentType });
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			URL.revokeObjectURL(a.href);
		}
        const fileName = getPuzzleFilename($puzzleMetaStore);
        const data = getModelStr();
        download(data, `${fileName}.mzn`, 'text/plain');
    };
</script>

<Modal bind:showModal title="Minizinc File">
	<div class="new-puzzle-content">
		<button class="modal-button" on:click={copyCb}>Copy to clipboard</button>
		<button class="modal-button" on:click={copyPrunedCb}>Copy pruned version to clipboard</button>
		<button class="modal-button" on:click={downloadCb}>Download Minizinc File</button>
	</div>
</Modal>

<style lang="scss">
	$button-background: var(--button-background-color);
	$button-hover-background: var(--button-hover-background-color);

	.new-puzzle-content {
		position: relative;
		display: flex;
		flex-direction: column;
        align-items: center;
		padding: 0.4em;
		max-height: 100%;
        gap: 10px;
	}

	.modal-button {
		width: 50%;

		&:hover {
			background: $button-hover-background;
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}
</style>
