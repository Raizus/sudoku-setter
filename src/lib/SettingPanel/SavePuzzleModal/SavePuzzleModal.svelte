<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$lib/Components/Modal/ModalButtonsContainer.svelte';
	import { puzzleToJson } from '$lib/Puzzle/Puzzle';
	import type { PuzzleMetaI } from '$lib/Puzzle/PuzzleMeta';
	import { encodeToBase64UrlSafe, getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { puzzleMetaStore, puzzleStore, svgRefStore } from '$stores/BoardStore';

	export let showModal = false;
	let svgPreviewRef: SVGSVGElement | null = null;
	$: svgElement = $svgRefStore;

	function getComputedStyles(node: Element) {
		const styles = getComputedStyle(node);
		let cssText = '';
		for (let prop of styles) {
			const value = styles.getPropertyValue(prop);
			if (value) {
				cssText += `${prop}:${value};`;
			}
		}
		return cssText;
	}

	function deepCloneWithStyles(sourceNode: Element) {
		// Create a clone of the node
		const clone = sourceNode.cloneNode(true);

		// Handle the source node's styles
		if (clone instanceof SVGElement || clone instanceof HTMLElement) {
			clone.style.cssText = getComputedStyles(sourceNode);
		}

		// Recursively handle child nodes
		const children = sourceNode.childNodes;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child instanceof Element) {
				const clonedChild = deepCloneWithStyles(child);
				clone.replaceChild(clonedChild, clone.childNodes[i]);
			}
		}

		return clone;
	}

	function downloadAsPNG(svgElement: SVGSVGElement | null) {
		if (!svgElement) return;
		// Create a deep clone with computed styles
		const clonedSvg = deepCloneWithStyles(svgElement);

		const fileName = getPuzzleFilename($puzzleMetaStore);

		// Get the SVG content
		const serializer = new XMLSerializer();
		const svgString = serializer.serializeToString(clonedSvg);

		// Create an Image object
		const img = new Image();
		const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
		const url = URL.createObjectURL(svgBlob);

		img.onload = () => {
			const svgBounds = svgElement.getBoundingClientRect();
			const svgWidth = svgBounds.width;
			const svgHeight = svgBounds.height;

			// Create canvas with the same dimensions as the SVG
			const canvas = document.createElement('canvas');
			const scale = window.devicePixelRatio || 1; // For high DPI displays
			canvas.width = svgWidth * scale;
			canvas.height = svgHeight * scale;

			const context = canvas.getContext('2d');
			if(!context) return;
			// Scale everything up by our device pixel ratio
			context.scale(scale, scale);
			// Draw the image at the original SVG size
			context.drawImage(img, 0, 0, svgWidth, svgHeight);

			canvas.toBlob((blob) => {
				if (!blob) return;
				const pngUrl = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = pngUrl;
				link.download = fileName;
				link.click();

				URL.revokeObjectURL(pngUrl);
			});
		};

		img.src = url;
	}

	function downloadAsSVG(svgElement: SVGSVGElement | null, fileName = 'download.svg') {
		if (!svgElement) return;
		// Get the SVG content
		const clonedSvg = deepCloneWithStyles(svgElement);

		// Get the SVG content with styles
		const serializer = new XMLSerializer();
		let svgString = serializer.serializeToString(clonedSvg);

		// Add XML declaration and SVG namespace if they're missing
		if (!svgString.includes('<?xml')) {
			svgString = '<?xml version="1.0" standalone="no"?>\r\n' + svgString;
		}

		// Create a blob with the SVG content
		const blob = new Blob([svgString], { type: 'image/svg+xml' });
		const url = URL.createObjectURL(blob);

		// Create download link
		const link = document.createElement('a');
		link.href = url;
		link.download = fileName;
		link.click();

		// Clean up
		URL.revokeObjectURL(url);
	}

	const puzzleToJsonAux = (space?: string|number) => {
		// console.log("puzzle", $puzzleStore);
		const data = puzzleToJson($puzzleStore);
		const jsonData = JSON.stringify(data, null, space);
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

		const jsonData = puzzleToJsonAux(2);
		const fileName = getPuzzleFilename($puzzleMetaStore);
		download(jsonData, `${fileName}.json`, 'text/plain');
	};

	const copyCompressedLink = () => {
		const jsonData = puzzleToJsonAux();
		const jsonStr = JSON.stringify(jsonData);
		console.log('jsonStr', jsonStr);
		const compressedStr = encodeToBase64UrlSafe(jsonStr);
		const url = `${window.location.host}/?puzzle=${compressedStr}`;
		navigator.clipboard.writeText(url);

		// const decompressedStr = decodeFromBase64UrlSafe(compressedStr);
		// const jsonData2 = JSON.parse(decompressedStr);
		// console.log(jsonStr.length, compressedStr.length);
		// console.log(jsonData2);
	};

	function cancelCb() {
		showModal = false;
	}

	const previewScale = 1;
</script>

<Modal bind:showModal title="Save Puzzle">
	<div class="save-puzzle-content">
		<div class="save-puzzle-options">
			<div class="column-left">
				<button class="modal-button" on:click={downloadPuzzleJson}>Download JSON</button>
				<button class="modal-button" on:click={() => downloadAsPNG(svgElement)}
					>Download PNG</button
				>
				<button class="modal-button" on:click={() => downloadAsSVG(svgElement)}
					>Download SVG</button
				>
				<!-- <button class="modal-button" on:click={copyCompressedLink}>Copy Link</button> -->
				<!-- <button>Open With Link</button> -->
			</div>
			<div class="column-right">
				<span class="preview-header">Board preview</span>
				<div id="puzzle-preview">
					<svg width={400 * previewScale} height={300 * previewScale}>
        				<use href="#board-svg" width="100%" height="100%" />
				    </svg>
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
