<script lang="ts">
	import type { Category } from '$lib/types';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';
	export let categories: Category[];

	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	import IcBaselineTiktok from '~icons/ic/baseline-tiktok';
	import Image from './Image.svelte';

	let open = false;
	let width;
</script>

<header bind:clientWidth={width}>
	<div class="container flex gap small align">
		<div class="burger flex align">
			<Hamburger bind:open type="spring" --color="#2F434B" --padding="0" />
		</div>
		{#if open}
			<nav transition:fly={{ y: -200, duration: 500 }}>
				<div class="container">
					<div class="products flex gap small">
						{#each categories as category}
							<a href="/categories/{category.slug}" on:click={() => (open = false)}>
								<div class="img-container">
									<div class="image">
										<Image src={category.image.source} alt={category.image.alt} size="small" />
									</div>
								</div>

								{category.title.toUpperCase()}
							</a>
						{/each}
					</div>
					<div class="links flex gap align small">
						<div class="wrapper flex align">
							<a on:click={() => (open = false)} href="/about">About</a>
						</div>
						<div class="wrapper flex align">
							<a on:click={() => (open = false)} href="/contacts">Contacts</a>
						</div>
						<div class="socials flex align gap small">
							<a href="https://www.facebook.com/SkriveruGaldnieciba" target="_blank"
								><MdiFacebook /></a
							>
							<a href="https://www.instagram.com/skriveru_galdnieciba/" target="_blank"
								><MdiInstagram /></a
							>
							<a href="https://www.tiktok.com/@sg_homedecor" target="_blank"><IcBaselineTiktok /></a
							>
						</div>
					</div>
				</div>
			</nav>
		{/if}
		<a href="/" on:click={() => (open = false)}>
			<img class="logo" src="/images/sg_logo.svg" alt="SG Home decor logo" />
		</a>

		<a href="/products" class="button">Products</a>
	</div>
</header>

<style>
	.logo {
		height: 35px;
	}
	.socials {
		margin-left: auto;
	}
	.button {
		margin-left: auto;
		color: white;
		font-weight: 300;
		letter-spacing: 0;
	}
	.button:hover {
		letter-spacing: 0;
	}
	.container {
		padding: 0 10px;
	}

	.wrapper {
		width: 5%;
	}
	nav {
		padding: var(--size-m) 0;
	}
	.products {
		padding-bottom: var(--size-s);
		margin-bottom: var(--size-s);
		border-bottom: 1px solid var(--primary-color);
	}
	nav .flex > a {
		width: 100%;
	}
	.img-container {
		height: 250px;
		width: 100%;
		overflow: hidden;
		border-radius: var(--size-s);
		margin-bottom: var(--size-xs);
	}
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.2s ease;
	}
	a:hover > .img-container > .image {
		transform: scale(1.05);
	}
	.burger {
		position: relative;
		z-index: 999;
	}

	header {
		position: sticky;
		top: 0;
		width: 100%;
		background-color: var(--background-accent);
		padding: var(--size-xs) 0;
		z-index: 999;
	}

	nav {
		width: 100%;
		background-color: var(--background-accent);
		position: absolute;
		top: 100%;
		left: 0;
		filter: drop-shadow(0 3px 1px rgba(0, 0, 0, 0.2));
	}
	a {
		text-align: center;
		color: var(--primary-color);
		font-weight: 400;
		letter-spacing: 0.1rem;
		transition: letter-spacing 0.2s ease;
		font-size: var(--size-s);
	}
	a:hover {
		letter-spacing: 0.05rem;
	}

	@media only screen and (max-width: 900px) {
		.container {
			padding: 0 10px;
		}
		.logo {
			height: 40px;
		}
		nav {
			padding: var(--size-s) 0;
		}
		nav .flex {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		img {
			height: 125px;
		}
	}
	@media only screen and (max-width: 500px) {
		.button {
			display: none;
		}
	}
</style>
