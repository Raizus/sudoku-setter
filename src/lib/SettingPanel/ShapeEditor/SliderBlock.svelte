<script lang="ts">
	import ValueSlider from '$lib/Components/ValueSlider.svelte';
	import PropertyBlock from "./PropertyBlock.svelte";

    export let name: string;
    export let value: number;
    export let min: number;
	export let max: number;
	export let step: number = (max - min) / 10;
    export let onChangeCb: ((val: number) => void) | undefined = undefined;
    export let onInputCb: ((val: number) => void) | undefined = undefined;

</script>

<PropertyBlock name="{name}: {value}">
    <ValueSlider
        bind:value
        {min}
        {max}
        {step}
        {onChangeCb}
        {onInputCb}
    />
</PropertyBlock>

<style>

</style>