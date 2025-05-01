<script lang="ts">
	export let tool_id: string;
	export let description: string;

	let value = false;

	function clickCb() {
		value = !value;
	}
</script>

<label class="checkbox-label">
	<span class="checkbox" class:checked={value}>
		<input type="checkbox" class:checked={value} on:click={clickCb} />
		<div class="check-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
				<path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z" />
			</svg>
		</div>
	</span>
	<span>
		{tool_id}
	</span>
</label>

<style lang="scss">
	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.5em;
		cursor: pointer;
		min-height: 1.75rem;

		&:hover {
			color: #666;
		}
	}

	.checkbox {
		display: inline-block;
		position: relative;
		top: 0.05em;
		height: 1em;
		width: 1em;
		cursor: pointer;
		border: 0.1em solid;
		background: #fff;
		flex-shrink: 0;
	}

	input {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0;
		z-index: 1;
		cursor: inherit;
	}

	.check-container {
		position: absolute;
		display: block;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		opacity: 0;
		color: black;
	}

	input.checked ~ .check-container {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
</style>
