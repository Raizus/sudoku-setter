<script lang="ts">
	import { getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { puzzleMetaStore, puzzleStore } from '$stores/BoardStore';
	import { download, getCompressedLink, puzzleToCompressedStr, puzzleToJsonStr } from './io_utils';

	const downloadPuzzleJson = (file_base_name = 'sudoku_by_anonymous') => {
		const jsonData = puzzleToJsonStr($puzzleStore, 2);
		download(jsonData, `${file_base_name}.json`, 'text/plain');
	};

	const copyCompressedLink = () => {
		const url = getCompressedLink($puzzleStore);
		navigator.clipboard.writeText(url);

		// const decompressedStr = decodeURIComponent(compressedStr);
		// const jsonData2 = JSON.parse(decompressedStr);
		// console.log('jsonData', jsonData);
		// console.log("decompressedStr", decompressedStr);
		// console.log("jsonData2", jsonData2);
	};

	const previewScale = 1;
	$: file_name = getPuzzleFilename($puzzleMetaStore);
</script>

<div class="tab-container">
	<div id="puzzle-preview">
		<svg width={400 * previewScale} height={300 * previewScale}>
			<use href="#board-svg" width="100%" height="100%" />
		</svg>
	</div>
	<div class="form-row">
		<button class="form-button form-modal-button" on:click={() => downloadPuzzleJson(file_name)}>
			Download JSON
		</button>
        <button class="form-button form-modal-button" on:click={copyCompressedLink}>Copy Link</button>
	</div>
</div>

<style lang="scss">
	.tab-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
</style>
