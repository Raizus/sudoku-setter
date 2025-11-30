<script lang="ts">
	import type { Component } from 'svelte';

	interface TabItem {
		label: string;
		component?: Component;
		props?: Record<string, any>;
	}

	// Define props
	export let tabs: TabItem[] = [];
	export let activeTab: number = 0;

	// Handle tab click
	function handleTabClick(index: number): void {
		activeTab = index;
	}
</script>

<div class="tabbed-menu">
	<div class="tab-header">
		{#each tabs as tab, index}
			<button
				class="tab-button {activeTab === index ? 'active' : ''}"
				on:click={() => handleTabClick(index)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div class="tab-content">
		{#each tabs as tab, index}
			{#if activeTab === index && tab.component}
				<div class="tab-panel">
					<svelte:component this={tab.component} {...tab.props || {}} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.tabbed-menu {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		width: 100%;
		margin: 0 auto;
		height: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
	}

	.tab-header {
		display: flex;
		border-bottom: 1px solid #ddd;
		margin-bottom: 1rem;
	}

	.tab-button {
		padding: 0.75rem 1.25rem;
		background: none;
		border: none;
		border-bottom: 2px solid transparent;
		cursor: pointer;
		font-size: 1rem;
		transition: all 0.3s ease;
		margin-right: 0.5rem;

		&:hover {
			color: #4285f4;
		}

		&.active {
			color: #4285f4;
			border-bottom: 2px solid #4285f4;
		}
	}

	.tab-content {
		padding: 0.5rem 0.5rem;
		height: 100%;
		position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }

	.tab-panel {
		animation: fadeIn 0.3s ease;
		position: relative;
		height: 100%;
    overflow-y: scroll;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
