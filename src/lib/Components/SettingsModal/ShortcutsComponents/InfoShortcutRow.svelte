<script lang="ts">
	import { shortcutKeyToString, type Shortcut } from "../shortcuts";
	import InfoShortcut from "./InfoShortcut.svelte";

	export let shortcut: Shortcut;
</script>

<div class="info-shortcut-row">
	<div class="name">{shortcut.name}</div>
    <div class="shortcut-wrapper">
		{#each shortcut.keys as key}
			<InfoShortcut shortcut={shortcutKeyToString(key)}/>
		{/each}
    </div>
</div>

<style>
	.info-shortcut-row {
		display: flex;
		margin: 0;
		padding: 4px 10px;
		align-items: center;
		border: 1px solid var(--button-background-color);
		font-size: 1rem;
	}

	.shortcut-wrapper {
		display: flex;
		flex-wrap: wrap;
		flex-grow: 0;
		flex-basis: auto;
		justify-content: flex-end;
        align-items: center;
		margin-inline-start: auto;
		min-width: 30%;
	}
</style>
