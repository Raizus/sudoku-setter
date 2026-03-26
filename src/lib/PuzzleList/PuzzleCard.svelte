<script lang="ts">
	import type { PuzzleResults } from '../Types/types';
	import { base } from '$app/paths';
	import BoardPreview from '../Board/BoardPreview.svelte';
	import { puzzleFromJson } from '../Puzzle/Puzzle';
	
	export let puzzle_result: PuzzleResults;

	const puzzle_json = puzzle_result.puzzle;
	const puzzle = puzzleFromJson(puzzle_json);

	const title = puzzle.puzzleMeta.title;
	const authors = puzzle.puzzleMeta.authors || ["Anonymous"];
	const description = puzzle.puzzleMeta.ruleset || "Sudoku";
</script>

<a href="{base}/puzzle/{puzzle_result.id}" class="card">
	<div class="thumbnail">
		<!-- <img src={puzzle.thumbnail} alt="{puzzle.title} thumbnail" /> -->
		<BoardPreview {puzzle} />
	</div>
	<div class="content">
		<h3>{title}</h3>
		<div class="meta">
			<span class="authors">By {authors.join('; ')}</span>
			<!-- {#if puzzle.difficulty}
				<span class="difficulty">{puzzle.difficulty}</span>
			{/if} -->
		</div>
		<p class="description">{description.slice(0, 200)}...</p>
	</div>
</a>

<style>
	.card {
		display: flex;
		padding: 1rem;
		margin: 0.2rem 0;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
	}

    .card:hover {
        transform: translateY(-1px) scale(1.005);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        border-color: #3f51b5; /* Or your primary color */
    }

	.thumbnail {
		flex: 0 0 160px; /* Width of thumbnail container */
		margin-right: 1rem;
		position: relative;
		overflow: hidden;
		aspect-ratio: 1; /* Makes container square */
	}

	/* .thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		position: absolute;
		top: 0;
		left: 0;
	} */

	.content {
		flex: 1;
	}

	.meta {
		display: flex;
		gap: 1rem;
		color: #666;
		margin: 0.5rem 0;
	}

	h3 {
		margin-top: 0.1rem;
		margin-bottom: 0.5rem;
	}

	/* .difficulty {
		text-transform: capitalize;
	} */

	.description {
		color: #444;
		font-size: 0.9em;
	}
</style>
