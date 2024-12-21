<script lang="ts">
	export let name: string;
</script>

<div class="property-block">
	<span class="property-name">{name}</span>
	<slot></slot>
</div>

<style>
    .property-block {
        margin-top: 0.4rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .property-name {
		display: flex;
		text-align: left;
        font-weight: bold;
        margin-bottom: 0.4rem;
	}
</style>
