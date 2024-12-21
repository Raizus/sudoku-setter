<script lang="ts">
	import MenuButton from './MenuButton.svelte';
	import OpenFolder from '$icons/OpenFolder.svelte';
	import { puzzleFromJson } from '$lib/Puzzle/Puzzle';
	import { resetUserState, setPuzzle } from '$stores/BoardStore';

	let inputRef: HTMLInputElement | null = null;

	let files: FileList | null = null;

	$: if (files && files.length) {
		const file = files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(file);

		fileReader.onload = function (evt) {
			if (!evt.target) alert(fileReader.error);

			// read file successfully
			if (evt.target && evt.target.result) {
				const result = evt.target.result;
				if (typeof result !== 'string') return;
				const obj = JSON.parse(result);

				const newPuzzle = puzzleFromJson(obj);
				setPuzzle(newPuzzle);
				console.log(newPuzzle.localConstraints);
				resetUserState();
			}
		};

		fileReader.onerror = function () {
			alert(fileReader.error);
		};
	}

	function clickCb() {
		inputRef?.click();
	}
</script>

<MenuButton title="Open Puzzle" {clickCb}>
	<OpenFolder />
	<input bind:this={inputRef} type="file" accept=".json" bind:files />
	<!-- on:change={(event) => onFileSelected} -->
</MenuButton>

<style>
	input {
		position: relative;
		display: none;
		appearance: none;
		opacity: 0;
		top: 0;
		left: 0;
	}
</style>
