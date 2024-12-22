<script lang="ts">
	import Board from '$lib/Board/Board.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$lib/Components/Modal/ModalButtonsContainer.svelte';
	import { puzzleToJson } from '$lib/Puzzle/Puzzle';
	import type { PuzzleMetaI } from '$lib/Puzzle/PuzzleMeta';
	import { decodeFromBase64UrlSafe, encodeToBase64UrlSafe, getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { puzzleMetaStore, puzzleStore } from '$stores/BoardStore';

	export let showModal = false;
	let svgPreviewRef: SVGSVGElement | null = null;

	function copyStylesInline(destinationNode: Element, sourceNode: Element) {
		var containerElements = ['svg', 'g'];
		for (var cd = 0; cd < destinationNode.children.length; cd++) {
			var child = destinationNode.children[cd] as HTMLElement;

			if (containerElements.indexOf(child.tagName) != -1) {
				copyStylesInline(child, sourceNode.children[cd]);
				continue;
			}
			var style = window.getComputedStyle(sourceNode.children[cd] as Element);
			if (style == null) continue;
			for (var st = 0; st < style.length; st++) {
				child.style.setProperty(style[st], style.getPropertyValue(style[st]));
			}
		}
	}

	function downloadSVGAsPNG() {
		if (!svgPreviewRef) return;

		var copy = svgPreviewRef.cloneNode(true) as SVGSVGElement;
		copyStylesInline(copy, svgPreviewRef);

		// Create a new canvas element
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		// Set canvas dimensions to match SVG
		canvas.width = svgPreviewRef.clientWidth;
		canvas.height = svgPreviewRef.clientHeight;

		// Create a new Image object
		const img = new Image();
		const svgData = new XMLSerializer().serializeToString(copy);
		const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
		const svgUrl = URL.createObjectURL(svgBlob);
		img.src = svgUrl;

		img.onload = function () {
			// Draw the SVG onto the canvas
			ctx.drawImage(img, 0, 0);

			// Convert canvas to data URL
			const pngDataUrl = canvas.toDataURL('image/png');

			// Create a download link
			const a = document.createElement('a');
			a.href = pngDataUrl;
			// const filename = getPuzzleFilename($puzzleMetaStore);
			const filename = 'sudoku';
			a.download = `${filename}.png`;

			// Trigger the download
			document.body.appendChild(a);
			a.click();

			// Clean up
			document.body.removeChild(a);
			URL.revokeObjectURL(svgUrl);
		};
	}

	const puzzleToJsonAux = () => {
		const data = puzzleToJson(
			$puzzleStore
		);
		const jsonData = JSON.stringify(data, null, 2);
		return jsonData;
	};

	const downloadPuzzleJson = () => {
		// see https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
		function download(content: string, fileName: string, contentType: string) {
			var a = document.createElement('a');
			var file = new Blob([content], { type: contentType });
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			URL.revokeObjectURL(a.href);
		}
		
		const jsonData = puzzleToJsonAux();
		const fileName = getPuzzleFilename($puzzleMetaStore);
		download(jsonData, `${fileName}.json`, 'text/plain');
	};

	const copyCompressedLink = () => {
		const jsonData = puzzleToJsonAux();
		const jsonStr = JSON.stringify(jsonData)
		const compressedStr = encodeToBase64UrlSafe(jsonStr);
		const url = `${window.location.host}/?load=${compressedStr}`;
		navigator.clipboard.writeText(url);

		// const decompressedStr = decodeFromBase64UrlSafe(compressedStr);
		// const jsonData2 = JSON.parse(decompressedStr);
		// console.log(jsonStr.length, compressedStr.length);
		// console.log(jsonData2);
	};

	function cancelCb() {
		showModal = false;
	}
</script>

<Modal bind:showModal title="Save Puzzle">
	<div class="save-puzzle-content">
		<div class="save-puzzle-options">
			<div class="column-left">
				<button class="modal-button" on:click={downloadSVGAsPNG}>Download Image</button>
				<button class="modal-button" on:click={downloadPuzzleJson}>Download JSON</button>
				<!-- <button class="modal-button" on:click={copyCompressedLink}>Copy Link</button> -->
				<!-- <button>Open With Link</button> -->
			</div>
			<div class="column-right">
				<span class="preview-header">Board preview</span>
				<div id="puzzle-preview">
					<!-- <Board bind:svgRef={svgPreviewRef} isPreview={true} /> -->
				</div>
			</div>
		</div>
		<ModalButtonsContainer>
			<button class="modal-button" on:click={cancelCb}>Cancel</button>
		</ModalButtonsContainer>
	</div>
</Modal>

<style lang="scss">
	.save-puzzle-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0.4em;
	}

	.save-puzzle-options {
		position: relative;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: row;
		align-items: start;
	}

	.column-left {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding: 0.5em;
		width: 50%;
		gap: 10px;
	}

	.column-right {
		padding: 0.5em;
		max-height: 100%;
		width: 50%;
		justify-content: center;
	}

	.preview-header {
		display: flex;
		justify-content: center;
		font-weight: bold;
	}
</style>
