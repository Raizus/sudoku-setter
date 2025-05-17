<script lang="ts">
	import { puzzleToJson } from '$src/lib/Puzzle/Puzzle';
	import { encodeToBase64UrlSafe, getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { puzzleMetaStore, puzzleStore } from '$stores/BoardStore';

	const puzzleToJsonAux = (space?: string | number) => {
		// console.log("puzzle", $puzzleStore);
		const data = puzzleToJson($puzzleStore);
		const jsonData = JSON.stringify(data, null, space);
		return jsonData;
	};

	const downloadPuzzleJson = (file_base_name = 'sudoku_by_anonymous') => {
		// see https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
		function download(content: string, fileName: string, contentType: string) {
			var a = document.createElement('a');
			var file = new Blob([content], { type: contentType });
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			URL.revokeObjectURL(a.href);
		}

		const jsonData = puzzleToJsonAux(2);
		download(jsonData, `${file_base_name}.json`, 'text/plain');
	};

	const copyCompressedLink = () => {
		const jsonData = puzzleToJsonAux(0);
		const compressedStr = encodeToBase64UrlSafe(jsonData);
		const url = `${window.location.host}/encpuzzle/${compressedStr}`;
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
	}
</style>
