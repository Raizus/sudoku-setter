<script lang="ts">
	import { browser } from '$app/environment';
	import '../global.scss';

	let isMenuOpen = $state(false);

	// Close menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Element;
		if (isMenuOpen && !target?.closest?.('.mobile-menu')) {
			isMenuOpen = false;
		}
	}

	// Use effect for click listener
	$effect(() => {
		if (browser) {
			window.addEventListener('click', handleClickOutside);
			return () => window.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<header class="header">
	<div class="header-container">
		<nav class="desktop-nav">
			<a href="/" class="nav-link">Home</a>
			<a href="/puzzles" class="nav-link">Puzzles</a>
		</nav>

		<!-- Mobile menu -->
		<div class="mobile-menu">
			<button
				class="menu-button"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-expanded={isMenuOpen}
				aria-label="Navigation menu"
			>
				☰
			</button>
			{#if isMenuOpen}
				<div class="dropdown-menu">
					<a href="/" class="nav-link" onclick={() => (isMenuOpen = false)}>Home</a>
					<a href="/puzzles" class="nav-link" onclick={() => (isMenuOpen = false)}>Puzzles</a>
				</div>
			{/if}
		</div>
	</div>
</header>

<style lang="scss">
	@use '$src/vars' as vars;

	header {
		font-size: 0.8rem;
		flex: 0 0 auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: vars.$header-height;
		background-color: rgb(40, 40, 40);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid var(--color-border);
		position: relative;
		z-index: 100;
	}

	.header-container {
		margin: 0 auto;
		padding: 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.desktop-nav {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: var(--text-primary-color);
		text-decoration: none;
        font-size: 1rem;
		font-weight: 500;
		transition: color 0.2s ease;
		padding: 0.5rem;
	}

	.nav-link:hover {
		color: var(--color-primary);
	}

	.mobile-menu {
		display: none;
		position: relative;
	}

	.menu-button {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.2rem;
		color: var(--color-text);
	}

	.dropdown-menu {
		position: absolute;
		right: 0;
		top: 100%;
		background-color: var(--color-background);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-width: 150px;
	}

    @include vars.breakpoint-mobile {
		.desktop-nav {
			display: none;
		}

		.mobile-menu {
			display: block;
		}
	}
</style>
