<script lang="ts">
	export let name: string;
    export let value: string;
    export let selected: string;

    export let onChangeCb: () => void;
</script>

<label class:active={value === selected}>
	{name}
	<input type="radio" bind:group={selected} {value} on:change={onChangeCb}/>
</label>

<style>
	input[type='radio'] {
		opacity: 0;
		width: 0;
		height: 0;
	}

    label {
        border: 1px solid black;
        border-radius: 0.25em;
        cursor: pointer;
    }

    label.active {
        background-color: hsl(0, 0%, 67%);
    }

    label:hover {
        background-color: hsl(215, 19%, 85%);
    }

</style>
