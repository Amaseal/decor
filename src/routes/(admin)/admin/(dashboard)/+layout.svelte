<script>
	import Header from '$lib/admin/header/Header.svelte';
	import '../../../../styles.css';
</script>

<div class="app flex">
	<Header />
	<main>
		<slot><!-- optional fallback --></slot>
	</main>
</div>

<style>
	main {
		padding: var(--size-m);
		width: 100%;
	}

	.app {
		background-color: var(--background-accent);
	}
</style>
