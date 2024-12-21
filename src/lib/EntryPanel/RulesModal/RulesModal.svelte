<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import { joinStrList } from '$lib/utils/functionUtils';
	import { puzzleMetaStore } from '$stores/BoardStore';
	// import SvelteMarkdown from 'svelte-markdown';

	export let showModal = false;
	$: meta = $puzzleMetaStore;

	function getAuthorsStr(authors?: string[]) {
		const authorsStr = authors ? joinStrList(authors, ' & ', ', ') : 'Anonymous';
		return authorsStr;
	}

	function getRulesetStr(ruleset?: string) {
		const rulesetStr = ruleset && ruleset.length ? ruleset : 'No ruleset provided.';
		return rulesetStr;
	}
</script>

<Modal bind:showModal title="Rules">
	<div class="rules-content">
		<h3 class="title">{meta?.title || 'Puzzle'}</h3>
		<h3 class="authors">by {getAuthorsStr(meta.authors)}</h3>
		<div class="rules">
			<!-- <SvelteMarkdown source={getRulesetStr(meta.ruleset)} /> -->
			{getRulesetStr(meta.ruleset)}
		</div>
		{#if meta?.ctcUrl?.length}
			<br />
			<a href={meta.ctcUrl} target="_blank" rel="noreferrer noopener"> Visit CTC puzzle link </a>
		{/if}
		{#if meta?.ctcYoutubeUrl?.length}
			<br />
			<a href={meta.ctcYoutubeUrl} target="_blank" rel="noreferrer noopener">
				Visit CTC youtube link
			</a>
		{/if}
	</div>
</Modal>

<style>
	.rules-content {
		position: relative;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		/* align-items: start; */
		font-size: 1rem;
	}

	h3 {
		text-align: center;
		margin: 0;
	}

	.title {
		font-weight: bold;
	}

	.authors {
		font-weight: italic;
	}

	.rules {
		text-align: justify;
		text-indent: 20px;
		white-space: pre-line;
	}
</style>
