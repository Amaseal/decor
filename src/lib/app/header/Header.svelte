<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/(app)/$types';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';

	export let data: PageData;
	console.log(data.categories[0].images);
	let open = false;
</script>

<header>
	<div class="container flex align">
		<div class="burger flex align">
			<Hamburger bind:open type="spring" --color="#2F434B" --padding="18px" />
		</div>

		{#if open}
			<nav transition:fly={{ y: -200, duration: 500 }}>
				<div class="container">
					<div class="products flex gap small">
						{#each data.categories as category (category.id)}
							<a href="/{category.slug}">
								<div class="img-container">
									<img class="categoryimg" src={category.images[0].imgLarge} alt="" />
								</div>

								{category.title.toUpperCase()}
							</a>
						{/each}
					</div>
					<div class="links flex gap small">
						<div class="wrapper flex align">
							<a href="/about">About</a>
						</div>
						<div class="wrapper flex align">
							<a href="/contacts">Contacts</a>
						</div>
					</div>
				</div>
			</nav>
		{/if}
		<a href="/">
			<img src="../sg_logo.svg" alt="SG Home decor logo" />
		</a>
	</div>
</header>

<style>
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
	.flex > a {
		width: 100%;
	}
	.img-container {
		overflow: hidden;
		border-radius: var(--size-s);
		margin-bottom: var(--size-xs);
	}
	.categoryimg {
		height: 250px;
		width: 100%;

		object-fit: cover;
		transition: transform 0.2s ease;
	}
	a:hover > .img-container > .categoryimg {
		transform: scale(1.05);
	}
	.burger {
		position: relative;
		z-index: 99999;
	}
	img {
		height: 40px;
	}
	header {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: var(--background-accent);
		padding: var(--size-s) 0;
		z-index: 9999;
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
</style>
