<script lang="ts">
	export let value: boolean;
	export let onClickCb: () => void;
	export let disabled = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label class="switch" class:disabled={disabled}>
	<input type="checkbox" class="toggle" checked={value} {disabled} on:change={onClickCb} />
	<span class="slider round" />
</label>

<style lang="scss">
	$slider-height: 1.5rem;
	$slider-width: calc(1.75 * $slider-height);

	$slider-radius: $slider-height;
	$toggle-diameter: calc(1 * $slider-height);
	$toggle-offset: calc(($slider-height - $toggle-diameter) / 2);
	$translation: calc($slider-width - $toggle-diameter - 2 * $toggle-offset);
	$transition-time: 0.3s;

	$slider-color-off: #ccc;
	$slider-color-on: #2167f3;
	$slider-disabled-color: hsl(0, 0%, 50%);
	$toggle-circle-background: rgb(50, 50, 50);
	$toggle-circle-font-color: rgb(210, 210, 210);
	$slider-focus-shadow: var(--focus-shadow);

	.switch {
		position: relative;
		display: inline-block;
		width: $slider-width;
		height: $slider-height;

		&:focus-within .slider {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: $slider-color-off;
		-webkit-transition: $transition-time;
		transition: $transition-time;
		box-shadow: 0 0 1px transparent;

		&:before {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			content: '\2715';
			height: $toggle-diameter;
			width: $toggle-diameter;
			left: $toggle-offset;
			top: $toggle-offset;
			background-color: $toggle-circle-background;
			color: $toggle-circle-font-color;
			-webkit-transition: $transition-time;
			transition: $transition-time;
		}

		&.round {
			border-radius: $slider-radius;

			&:before {
				border-radius: 50%;
			}
		}
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;

		&:checked + .slider {
			background-color: $slider-color-on;
		}

		&:checked + .slider:before {
			content: '\2713';
			-webkit-transform: translateX($translation);
			-ms-transform: translateX($translation);
			transform: translateX($translation);
		}

		&:focus + .slider {
			box-shadow: $slider-focus-shadow;
		}

		&:disabled + .slider {
			background-color: $slider-disabled-color;
		}
	}

	.switch.disabled .slider{
		cursor: auto;
	}
</style>
