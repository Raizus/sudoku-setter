<script lang="ts">
    export let value = false;
</script>

<div class="checkbox-container">
    <input type="checkbox" checked={value}/>
</div>


<style>
    input {
        cursor: pointer;
        accent-color: var(--icon-button-color);
        outline-color: var(--icon-button-color);
    }
</style>