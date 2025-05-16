<script lang="ts">
    export let title: string;
</script>

<div class="info-table">
    <div class="info-table-title">{title}</div>
    <slot></slot>
</div>

<style>
    .info-table {
        border: 1px solid var(--button-background-color);
    }
    .info-table-title {
        background-color: var(--button-background-color);
        font-weight: bold;
        font-size: 1.2rem;
        padding-left: 0.2rem;
    }
</style>