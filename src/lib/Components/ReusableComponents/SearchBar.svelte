<script lang="ts">
	export let searchPattern: string = '';
	export let showModal: boolean;

	let searchBarRef: HTMLInputElement | null = null;
	$: if (showModal && searchBarRef) {
		searchBarRef.focus()
	}
</script>

<div class="search-input-container">
	<span class="icon-container">
		<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
			<path
				d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"
			/>
		</svg>
	</span>
	<input
		class="search-input"
		type="text"
		spellcheck={false}
		bind:value={searchPattern}
		bind:this={searchBarRef}
	/>
</div>

<style>
	span {
		display: flex;
		padding: 5px;
		width: 2rem;
		height: 2rem;
	}
	.icon {
		fill: var(--text-primary-color);
	}
	.search-input-container {
		background: var(--input-background-color);
		display: flex;
		border-radius: 5px;
		border: 2px solid gray;
		align-items: center;
	}
	.search-input-container:focus-within {
		border: 2px solid blue;
	}
	input {
		background: inherit;
		flex-grow: 1;
		margin: 0;
		border: none;
		outline: none;
	}
	input:focus {
		outline: none;
	}
</style>
