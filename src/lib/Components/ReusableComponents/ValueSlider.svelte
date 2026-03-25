<script lang="ts">
	export let min: number;
	export let max: number;
	export let value: number;
	export let step: number = (max - min) / 10;
	export let onChangeCb: ((val: number) => void) | undefined = undefined;
	export let onInputCb: ((val: number) => void) | undefined = undefined;
</script>

<input
	class="control-slider"
	type="range"
	{min}
	{max}
	{step}
	bind:value
	on:change={() => {
		if (onChangeCb) onChangeCb(value);
	}}
	on:input={() => {
		if (onInputCb) onInputCb(value);
	}}
/>

<style>
	.control-slider {
		display: flex;
		flex-direction: column;
	}

	.control-slider:focus {
		outline: transparent;
		box-shadow: var(--focus-shadow);
	}
</style>
