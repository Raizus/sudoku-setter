<script lang="ts">
	import type { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';

	export let value: SHAPE_TYPES;
	export let selectedShape: SHAPE_TYPES;
	export let title: string;

	export let updateShapeCb: ((shape: SHAPE_TYPES) => void) | undefined = undefined;
</script>

<label class="shape-panel-label" class:active={value === selectedShape} {title}>
	<input
		type="radio"
		bind:group={selectedShape}
		{value}
		on:change={() => updateShapeCb && updateShapeCb(value)}
	/>
	<slot />
</label>

<style lang="scss">
	.shape-panel-label {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		cursor: pointer;
		width: 2rem;
		height: 2rem;

		color: var(--panel-icon-color);
		border: 1px solid var(--panel-radio-border-color);
		border-radius: 0.3rem;
        background-color: var(--panel-radio-background);

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}

		&.active {
            background-color: var(--panel-radio-background-active);
            color: var(--panel-icon-color-active);
		}

        &:active {
            border-color: var(--panel-radio-border-active);
            background-color: var(--panel-radio-background);
        }

        &:focus-visible, &:focus-within {
            outline: transparent;
            box-shadow: var(--focus-shadow);
        }
	}

	input[type='radio'] {
		// appearance: none;
        opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
        pointer-events: none;
	}
</style>
