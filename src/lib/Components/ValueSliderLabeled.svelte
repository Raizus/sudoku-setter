<script lang="ts">
	export let name: string;
	export let min: number;
	export let max: number;
	export let value: number;
	export let step: number = (max - min) / 10;
	export let onChangeCb: ((val: number) => void) | undefined = undefined;
	export let onInputCb: ((val: number) => void) | undefined = undefined;
</script>

<div class="slider-container">
	<span class="slider-name">{name}: {value}</span>
	<input
		class="control-slider"
		type="range"
		{min}
		{max}
		{step}
		bind:value
		on:change={() => {
			onChangeCb && onChangeCb(value);
		}}
		on:input={() => {
			onInputCb && onInputCb(value);
		}}
	/>
</div>

<style>
	.slider-container{
		display: flex;
		flex-direction: column;
	}

	.control-slider {
		display: flex;
		flex-direction: column;
	}

	.slider-name {
		display: flex;
		text-align: left;
	}
</style>
