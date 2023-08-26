<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';

	export let categories;

	let open = false;
	let width;
</script>

<header bind:clientWidth={width}>
	<div class="container flex align">
		<div class="burger flex align">
			<Hamburger bind:open type="spring" --color="#2F434B" --padding="18px" />
		</div>
		{#if open}
			<nav transition:fly={{ y: -200, duration: 500 }}>
				<div class="container">
					<div class="products flex gap small">
						{#each categories as category}
							<a href="/{category.slug}" on:click={() => (open = false)}>
								<div class="img-container">
									<img class="categoryimg" src={category.image} alt="" />
								</div>

								{category.title.toUpperCase()}
							</a>
						{/each}
					</div>
					<div class="links flex gap small">
						<div class="wrapper flex align">
							<a on:click={() => (open = false)} href="/about">About</a>
						</div>
						<div class="wrapper flex align">
							<a on:click={() => (open = false)} href="/contacts">Contacts</a>
						</div>
					</div>
				</div>
			</nav>
		{/if}
		<a href="/" on:click={() => (open = false)}>
			<img class="logo" src="../sg_logo.svg" alt="SG Home decor logo" />
		</a>

		<a href="/products" class="button">Products</a>
	</div>
</header>

<style>
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
	img {
		width: auto;
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
		z-index: 999;
	}
	img {
		height: 35px;
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

		.categoryimg {
			height: 125px;
		}
	}
	@media only screen and (max-width: 500px) {
		.button {
			display: none;
		}
	}
</style>
