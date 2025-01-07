<script lang="ts">
	import ControlsAuxPad from './ControlsAuxPad.svelte';
	import NumberPad from './NumberPad.svelte';
	import ToolPad from './ToolPad.svelte';
	import { puzzleMetaStore, svgRefStore, toolStore } from '$stores/BoardStore';
	import ExtraControlsPad from './ExtraControls/ExtraControlsPad.svelte';
	import { joinStrList } from '../utils/functionUtils';
	import Markdown from '@magidoc/plugin-svelte-marked'

	function onClickCb(): void {
		$svgRefStore.focus();
	}

	function getAuthorsStr(authors?: string[]) {
		const authorsStr = authors ? joinStrList(authors, ' & ', ', ') : 'Anonymous';
		return authorsStr;
	}

	function getRulesetStr(ruleset?: string) {
		const rulesetStr = ruleset && ruleset.length ? ruleset : 'Normal sudoku rules apply.';
		return rulesetStr;
	}

	$: title = $puzzleMetaStore.title ?? 'Sudoku';
	$: authors = getAuthorsStr($puzzleMetaStore.authors);
</script>

<div class="entry-panel-wrapper">
	<div class="puzzle-info">
		<div class="puzzle-header">
			<div class="title">{title}</div>
			<div class="authors">by {authors}</div>
		</div>
		<div class="puzzle-rules">
			<Markdown source={getRulesetStr($puzzleMetaStore.ruleset)}/>
			<!-- <SvelteMarkdown source={getRulesetStr($puzzleMetaStore.ruleset)} /> -->
			<!-- {getRulesetStr($puzzleMetaStore.ruleset)} -->
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="entry-panel"
		on:click|stopPropagation={() => {
			onClickCb();
		}}
	>
		<ExtraControlsPad />
		<div class="entry-subpanel1">
			<NumberPad selectedTool={$toolStore} />
			<ToolPad bind:selectedTool={$toolStore} />
		</div>
		<ControlsAuxPad />
	</div>
</div>

<style lang="scss">
	$panel-gap: 10px;

	.entry-panel-wrapper {
		max-width: 20%;
		height: 100vh;
		display: flex;
  		flex-direction: column;
	}

	.entry-subpanel1 {
		display: flex;
		flex-direction: row;
		gap: $panel-gap;
		user-select: none;
	}

	.entry-panel {
		display: flex;
		flex-direction: column;
		gap: $panel-gap;
		user-select: none;
		font-size: 1.5rem;
	}

	.entry-panel {
		& :global(.entry-panel-button) {
			border: 1px solid var(--icon-button-color);
			background-color: var(--icon-button-color);
			border-radius: 0.3rem;
			color: white;
			font-weight: 700;
			cursor: pointer;

			&:hover {
				background-color: var(--icon-button-hover-color);
			}

			&:disabled {
				background-color: var(--icon-button-color);
				opacity: 0.5;
				cursor: default;
			}

			&:focus {
				outline: transparent;
				box-shadow: var(--focus-shadow);
			}
		}

		& :global(.entry-panel-switch),
		:global(.entry-panel-label) {
			border: 1px solid var(--icon-button-color);
			border-radius: 0.3rem;
			color: var(--icon-button-color);
			font-weight: 700;
			cursor: pointer;

			&:hover {
				background-color: hsl(215, 19%, 85%);
			}
		}

		& :global(.entry-panel-switch.active) {
			background-color: var(--icon-button-color);
			color: white;
		}

		& :global(.tool-pad-button.active) {
			background-color: var(--icon-button-color);
			color: white;
		}

		& :global(.number-pad-selector.active) {
			background-color: var(--icon-button-color);
			color: white;
		}
	}

	.puzzle-info {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		border-radius: 10px;
		max-height: 40%;
		display: flex;
		flex-direction: column;
	}

	.puzzle-header {
		background: var(--modal-header-background-color);
		text-align: center;
		font-family: Lobster, cursive;
		font-size: 1.5rem;
		border-radius: 10px;
	}

	.puzzle-rules {
		margin-top: 0.25rem;
		background: var(--panel-background-color);
		padding: 0.5rem;
		border-radius: 5px;
		overflow-y: scroll;
	}
</style>
