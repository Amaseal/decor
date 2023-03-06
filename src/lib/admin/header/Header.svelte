<script lang="ts">
	import { page } from '$app/stores';

	import MdiViewGridPlusOutline from '~icons/mdi/view-grid-plus-outline';
	import MdiExitToApp from '~icons/mdi/exit-to-app';
	import MdiHomeOutline from '~icons/mdi/home-outline';
	import MdiPackageVariantClosed from '~icons/mdi/package-variant-closed';
	import MdiFileImageOutline from '~icons/mdi/file-image-outline';
</script>

<header class="flex collumn spaced">
	<img src="../icon.svg" alt="" />
	<nav>
		<a class:active={$page.url.pathname === '/admin'} href="/admin" class="flex align gap small"
			><MdiHomeOutline /></a
		>
		<a
			class:active={$page.url.pathname === '/admin/categories'}
			href="/admin/categories"
			class="flex align gap small"><MdiViewGridPlusOutline /></a
		>
		<a
			class:active={$page.url.pathname === '/admin/products'}
			href="/admin/products"
			class="flex align gap small"
		>
			<MdiPackageVariantClosed /></a
		>
		<a
			class:active={$page.url.pathname === '/admin/images'}
			href="/admin/images"
			class="flex align gap small"><MdiFileImageOutline /></a
		>
	</nav>
	<form action="?/logout">
		<button class="button flex align gap small"><MdiExitToApp /></button>
	</form>
</header>

<style>
	.active {
		background-color: var(--background);
	}
	img {
		height: 32px;
		width: 100%;
	}
	.button,
	a {
		padding: var(--size-s);
	}
	header {
		height: 100vh;
		padding: var(--size-s);

		filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));
		background-color: var(--background-accent);
	}
	a {
		color: var(--primary-color);
		border-radius: var(--size-xs);
	}

	a:hover {
		color: var(--secondary-color);
	}
</style>
