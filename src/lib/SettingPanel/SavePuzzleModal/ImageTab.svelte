<script lang="ts">
	import { getPuzzleFilename } from '$src/lib/utils/functionUtils';
	import { puzzleMetaStore, svgRefStore } from '$stores/BoardStore';
	import { download } from './utils';

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

	function downloadAsPNG(svgElement: SVGSVGElement | null, file_base_name = 'sudoku_by_anonymous') {
		if (!svgElement) return;
		// Create a deep clone with computed styles
		const clonedSvg = deepCloneWithStyles(svgElement);

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
			if (!context) {
				URL.revokeObjectURL(url);
				return;
			}

			// Scale everything up by our device pixel ratio
			context.scale(scale, scale);
			// Draw the image at the original SVG size
			context.drawImage(img, 0, 0, svgWidth, svgHeight);

			canvas.toBlob((blob) => {
				URL.revokeObjectURL(url); // Clean up the SVG URL
				if (!blob) return;
				download(blob, `${file_base_name}.png`, 'image/png');
			});
		};

		img.src = url;
	}

	function downloadAsSVG(svgElement: SVGSVGElement | null, file_base_name = 'sudoku_by_anonymous') {
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

		download(svgString, `${file_base_name}.svg`, 'image/svg+xml');
	}

	const previewScale = 1;
	$: svgElement = $svgRefStore;
	$: file_name = getPuzzleFilename($puzzleMetaStore);
</script>

<div class="tab-container">
	<div id="puzzle-preview">
		<svg width={400 * previewScale} height={300 * previewScale}>
			<use href="#board-svg" width="100%" height="100%" />
		</svg>
	</div>
	<div class="form-row">
		<button
			class="form-button form-modal-button"
			on:click={() => downloadAsPNG(svgElement, file_name)}
		>
			Download PNG
		</button>
		<button
			class="form-button form-modal-button"
			on:click={() => downloadAsSVG(svgElement, file_name)}
		>
			Download SVG
		</button>
	</div>
</div>

<style lang="scss">
	.tab-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
