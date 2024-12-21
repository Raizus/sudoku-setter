<script lang="ts">
	import { getColor, isTransparent, isValidColor } from "$lib/utils/functionUtils";

	export let value: string;
	export let onChangeCb: ((val: string) => void) | undefined = undefined;

	let color: string | undefined = undefined;

	$: colorStr = value;
	$: if (isValidColor(colorStr)) {
		color = getColor(colorStr);
	}

	function changeWrapper(val: string) {
		const aux = getColor(val);
		aux && onChangeCb && onChangeCb(aux);
	}
</script>

<div class="color-picker-container">
	<label
		class="color-picker-button-label"
		class:transparent={isTransparent(colorStr)}
		style="--choosen-color: {color}"
	>
		<input
			type="color"
			class="color-picker-button"
			bind:value={colorStr}
			on:change={() => changeWrapper(colorStr)}
		/>
	</label>
	<label class="color-input-container">
		<div class="color-picker-hash">#</div>
		<input
			class="color-picker-input"
			type="text"
			spellcheck={false}
			bind:value={colorStr}
			maxlength={30}
			on:input={() => changeWrapper(colorStr)}
		/>
	</label>
</div>

<style lang="scss">
	$height: 1.875rem;

	.color-picker-container {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.5rem;
	}

	.color-picker-button-label {
		background-color: var(--choosen-color);
		height: $height;
		width: $height;
		border: 2px solid var(--input-border-color);
		border-radius: 0.25rem;
		white-space: nowrap;
		cursor: pointer;

		&.transparent {
			background: repeating-conic-gradient(#3e3e3e 0% 25%, transparent 0% 50%) 50% / 14px 14px !important;
		}

		&:focus, &:focus-within {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.color-picker-button {
		opacity: 0;
		// appearance: none;
		// -webkit-appearance: none;
		// -moz-appearance: none;
		position: absolute;
		top: -1000px;
		left: -1000px;
		border: none;
		outline: none;
		pointer-events: none;
	}

	.color-input-container {
		display: flex;
		height: $height;
		border-radius: 4px;
		border: 2px solid var(--input-border-color);

		&:focus-within {
			border: 2px solid var(--focus-highlight-color);
		}
	}

	.color-picker-hash {
		background: var(--input-border-color);
		color: var(--input-label-color);
		width: $height;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		user-select: none;
	}

	.color-picker-input {
		background-color: var(--input-background-color);
		display: flex;
		flex-grow: 1;
		color: var(--text-primary-color);
		border: 0;
		border-radius: 0 4px 4px 0;
		outline: none;
		padding: 1px;
		-webkit-padding-start: 0.5em;
		padding-inline-start: 0.5em;
		appearance: none;
	}
</style>
