<script lang="ts">
	export let shortcut: string;
</script>

<div class="shortcut">{shortcut}</div>

<style>
	.shortcut {
		word-break: keep-all;
		border: 1px solid var(--button-background-color);
		padding: 2px 8px;
		margin: auto 4px;
		background-color: var(--button-background-color);
		border-radius: 2px;
		font-size: 0.8em;
		min-height: 26px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		font-family: inherit;
	}
</style>
