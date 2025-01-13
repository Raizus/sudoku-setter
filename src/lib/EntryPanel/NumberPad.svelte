<script lang="ts">
	import { penColorStore } from '$stores/PenToolStore';
	import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
	import { InputHandlerStore } from '$stores/InputHandlerStore';
	import { settingsStore } from '$stores/SettingsStore';

	export let selectedTool: TOOLID;
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'O'];
	let letterChecked = false;

	function getLabels(numOrLetter: boolean) {
		if (numOrLetter) return letters;
		return numbers;
	}

	function isLetterTool(tool: TOOLID) {
		const letterTools: TOOLID[] = [TOOLS.DIGIT, TOOLS.CENTER_PM, TOOLS.CORNER_PM, TOOLS.GIVEN];
		return letterTools.includes(tool);
	}

	function handleLetterToolClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		const target = event.currentTarget;
		if (!target) return;
		const state = target.getAttribute('aria-checked');
		letterChecked = state === 'true' ? false : true;
	}

	$: penToolActive = $settingsStore.penToolActive;
	$: letterToolActive = $settingsStore.letterToolActive;
</script>

<div
	class="number-pad"
	class:digit={selectedTool === TOOLS.DIGIT}
	class:center={selectedTool === TOOLS.CENTER_PM}
	class:corner={selectedTool === TOOLS.CORNER_PM}
	class:color={selectedTool === TOOLS.HIGHLIGHTS}
	class:pen={selectedTool === TOOLS.PEN_TOOL}
>
	<!-- pen tool color selection buttons -->
	{#if selectedTool === TOOLS.PEN_TOOL && penToolActive}
		{#each numbers as num, i}
			<label
				class="entry-panel-label number-pad-button number-pad-selector"
				class:active={$penColorStore === num}
				data-value={num}
			>
				<input type="radio" bind:group={$penColorStore} value={num} />
				<div class="selector-color"></div>
			</label>
		{/each}
	{:else}
		{#each getLabels(letterChecked) as label, i}
			<button
				class="entry-panel-button number-pad-button"
				value={label}
				on:click={$InputHandlerStore && $InputHandlerStore.padClick}
			>
				<div class="digit-button-text">{label}</div>
				<div class="digit-button-color"></div>
			</button>
		{/each}
	{/if}
	<!-- letter/num button -->
	{#if letterToolActive && isLetterTool(selectedTool)}
		<button
			role="switch"
			aria-checked={letterChecked}
			class="entry-panel-button letter-button"
			class:letter-checked={letterChecked}
			class:num-checked={!letterChecked}
			value="Letter"
			on:click={handleLetterToolClick}
		>
			<span class="num">9</span>/<span class="letter">A</span>
		</button>
	{/if}
	<!-- delete button -->
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button
		class="entry-panel-button delete-button"
		class:letter-tool={letterToolActive}
		value="Delete"
		on:click={$InputHandlerStore && $InputHandlerStore.padClick}
	>
		<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor">
			<path
				d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"
			/>
		</svg>
	</button>
</div>

<style lang="scss">
	@use 'sass:list';
	@use '$src/vars' as vars;

	$button-size: var(--entry-panel-button-size);
	$button-gap: var(--entry-panel-button-gap);

	.number-pad {
		display: grid;
		grid-template-columns: repeat(3, $button-size);
		grid-template-rows: repeat(4, $button-size);
		gap: $button-gap;
	}

	.delete-button {
		grid-column-start: 2;
		grid-column-end: -1;
	}

	.delete-button.letter-tool {
		grid-column-start: 3;
		grid-column-end: -1;
	}

	.number-pad-button {
		position: relative;
		padding: 0;
	}

	.number-pad.center .digit-button-text {
		font-size: 65%;
	}

	.letter-button {
		font-size: 70%;

		&.letter-checked .num {
			font-size: 60%;
		}

		&.num-checked .letter {
			font-size: 60%;
		}
	}

	.number-pad.corner .digit-button-text {
		font-size: 65%;
		position: absolute;
		top: 5%;
		left: 15%;
	}

	.number-pad.color {
		& .digit-button-text {
			display: none;
		}

		& .digit-button-color {
			width: 100%;
			height: 100%;
			border-radius: inherit;
		}

		& .number-pad-button:hover .digit-button-color {
			background-color: rgba(0, 0, 0, 0.15);
		}
	}

	input[type='radio'] {
		appearance: none;
		position: absolute;
		top: 0;
		left: 0;
	}

	.number-pad.pen {
		& .number-pad-button {
			padding: 5px;
		}

		& .selector-color {
			width: 100%;
			height: 100%;
			border: 1px solid var(--icon-button-color);
		}
	}

	.icon {
		width: 100%;
		height: 100%;
	}

	.number-pad.color {
		@for $i from 1 through 9 {
			& .number-pad-button[value='#{$i}'] {
				background-color: list.nth(vars.$highlight-map, $i);
			}
		}

		.number-pad-button[value='0'] {
			background-color: var(--grid-background-color);
		}
	}

	.number-pad.pen {
		@for $i from 1 through 9 {
			& .number-pad-button[data-value='#{$i}'] .selector-color {
				background-color: list.nth(vars.$highlight-map, $i);
			}
		}

		.number-pad-button[data-value='0'] .selector-color {
			background-color: black;
		}
	}
</style>
