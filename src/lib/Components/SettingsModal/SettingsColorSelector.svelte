<script lang="ts">
	import ColorPicker from "$components/ColorPicker.svelte";

    export let name: string;
    export let value: string;
    export let onChangeCb: ((val: string) => void) | undefined = undefined;
</script>

<div class="setting-color-name">{name}</div>
<div class="picker-container">
    <ColorPicker {value} {onChangeCb}/>
</div>

<style>
    div {
        display: flex;
        align-items: center;
    }
</style>