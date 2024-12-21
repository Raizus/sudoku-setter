<script lang="ts">
	import type { SquareCellElementInfo } from '$lib/Puzzle/ElementInfo';
	import { getUsageDescription } from '$lib/Puzzle/ToolUsage';
	import { TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
	import { toolStore, updateToolAndCurrentConstraintStores } from '$stores/BoardStore';
	import RemoveButton from './RemoveButton.svelte';

	export let elementInfo: SquareCellElementInfo;
	export let onClick: (() => void) | undefined = undefined;
	export let onTrash: (() => void) | undefined = undefined;

	const toolId = elementInfo.toolId;
	const permanent = elementInfo.permanent ?? false;
	const name = elementInfo.menu?.name ?? elementInfo.toolId;
	const isLocal = !elementInfo.meta?.categories.includes(TOOL_CATEGORIES.GLOBAL_CONSTRAINT);

	const label = `label-${name}`;

	if (isLocal) {
		onClick = () => {
			updateToolAndCurrentConstraintStores(toolId);
			// console.log('updated tool');
		};
	}

	function getDescription() {
		const toolDescription = elementInfo.meta?.description;
		const toolUsage = elementInfo.meta?.usage ?? getUsageDescription(toolId);

		let description: string | undefined = undefined;
		if (toolDescription && toolDescription.length) {
			description = toolDescription;
		}
		if (toolUsage.length) {
			if (description) {
				description = description + '\n\n' + toolUsage;
			} else {
				description = toolUsage;
			}
		}
		return description;
	}
</script>

<div class="tool-button" class:checked={toolId === $toolStore}>
	{#if isLocal}
		<input
			type="radio"
			class="radio-select-button"
			id={label}
			value={toolId}
			bind:group={$toolStore}
		/>
	{/if}
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="button-content"
		role="button"
		title={getDescription()}
		aria-labelledby={label}
		on:click|stopPropagation={onClick}
	>
		<div class="button-content-left">
			<div class="remove-button-container">
				{#if !permanent}
					<RemoveButton {onTrash} />
				{/if}
			</div>
			<label class="tool-name" for={label}>{name}</label>
		</div>
		<div class="button-content-right">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.tool-button {
		position: relative;
		// border: 1px solid var(--panel-radio-border-color);
		border: 1px solid transparent;
		border-radius: 4px;
		cursor: pointer;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}

		&.checked {
			background-color: var(--button-active-background-color);
			// border-color: var(--button-background-color);
			// background-color: var(--panel-radio-background-active);
		}

		&:active {
			border-color: var(--panel-radio-border-active);
		}

		// &:focus-visible,
		// &:focus-within	 {
		// 	outline: transparent;
		// 	box-shadow: var(--focus-shadow);
		// }
	}

	.radio-select-button {
		appearance: none;
		// opacity: 0;
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: 4px;
		justify-content: center;
		align-items: center;
		pointer-events: none;

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.button-content {
		display: flex;
		align-items: center;
		padding: 0.25em;
		margin: 0;
	}

	.button-content-left {
		display: flex;
		align-items: center;
	}

	.button-content-right {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	.remove-button-container {
		height: 1.5rem;
		width: 1.5rem;
		padding-right: 2rem;
	}

	.tool-name {
		position: relative;
		cursor: pointer;
	}
</style>
