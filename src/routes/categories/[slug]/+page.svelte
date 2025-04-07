<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data;
	// @ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips';
	import { fade, slide } from 'svelte/transition';

	import MdiChevronDown from '~icons/mdi/chevron-down';
	import MdiChevronUp from '~icons/mdi/chevron-up';

	$: products = data.products;

	const filterByTag = (tag: string) => {
		if (tag) {
			products = data.products.filter((elem) => {
				return elem.tags === tag;
			});
		} else {
			products = data.products;
		}
	};

	const filterByColor = (color: string) => {
		products = data.products.filter((elem) => {
			return elem.color.some((c) => c === color);
		});
	};

	let typeOpen = false;
	let colorOpen = false;
	let height: number;
	let width: number;
	let filterOpen = false;
</script>

<Seo data={data.category} />
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<section class="header">
	<div class="container">
		<div class="flex gap align">
			<div class="images">
				{#key data.category}
					<div class="image">
						<Image
							src={data.category.description_images.image_1.image_1_source}
							alt={data.category.description_images.image_1.image_1_alt}
							size="medium"
						/>
					</div>
					<div class="image">
						<Image
							src={data.category.description_images.image_2.image_2_source}
							alt={data.category.description_images.image_2.image_2_alt}
							size="medium"
						/>
					</div>
					<div class="image">
						<Image
							src={data.category.description_images.image_3.image_3_source}
							alt={data.category.description_images.image_3.image_3_alt}
							size="medium"
						/>
					</div>
				{/key}
			</div>
			<div class="description flex gap collumn left justify">
				<h2>{data.category.title}</h2>
				{#if data.category.description !== '<p></p>'}
					{@html data.category.description}
				{/if}

				{#if data.category.info}
					<a href="/categories/{data.slug}/info" class="button">Product Info</a>
				{/if}
			</div>
		</div>
	</div>
</section>
<div id="products" />
<section>
	<div class="container product-container">
		<div class="flex gap large">
			{#if width < 900}
				<button on:click={() => (filterOpen = !filterOpen)} class="button">Filters</button>

				{#if filterOpen}
					<aside class="filters mobile">
						<h3>Filter Products</h3>

						<div class="colors">
							<div class="filter">
								<button
									class="flex align gap smaller"
									on:click={() => (typeOpen = !typeOpen)}
									on:click={() => (colorOpen = false)}
								>
									By type:
									{#if !typeOpen}
										<MdiChevronDown />
									{:else}
										<MdiChevronUp />
									{/if}
								</button>
								{#if typeOpen}
									<div transition:slide|local class="tags flex collumn left">
										{#each data.category.tags as tag}
											<button
												on:click={() => filterByTag(tag)}
												on:click={() => (filterOpen = false)}
												class="option">{tag}</button
											>
										{/each}
										<button
											on:click={() => filterByTag('')}
											on:click={() => (filterOpen = false)}
											class="option">All</button
										>
									</div>
								{/if}
							</div>

							<div class="filter">
								<button
									on:click={() => (colorOpen = !colorOpen)}
									on:click={() => (typeOpen = false)}
									>By color:
									{#if !colorOpen}
										<MdiChevronDown />
									{:else}
										<MdiChevronUp />
									{/if}
								</button>
								{#if colorOpen}
									<div transition:slide|local class="colors flex gap smaller wrap">
										{#each data.colors as color}
											<button
												on:click={() => filterByColor(color.title)}
												use:tooltip={{ content: color.title, theme: 'custom-tooltip' }}
												class="color"
												on:click={() => (filterOpen = false)}
												style="background-color: {color.color}"
											/>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					</aside>
				{/if}
			{:else}
				<aside class="filters">
					<h3>Filter Products</h3>

					<div class="colors">
						<div class="filter">
							<button
								class="flex align gap smaller"
								on:click={() => (typeOpen = !typeOpen)}
								on:click={() => (colorOpen = false)}
							>
								By type:
								{#if !typeOpen}
									<MdiChevronDown />
								{:else}
									<MdiChevronUp />
								{/if}
							</button>
							{#if typeOpen}
								<div transition:slide|local class="tags flex collumn left">
									{#each data.category.tags as tag}
										<button
											on:click={() => filterByTag(tag)}
											on:click={() => (filterOpen = false)}
											class="option">{tag}</button
										>
									{/each}
									<button
										on:click={() => filterByTag('')}
										on:click={() => (filterOpen = false)}
										class="option">All</button
									>
								</div>
							{/if}
						</div>

						<div class="filter">
							<button
								class="flex align gap smaller"
								on:click={() => (colorOpen = !colorOpen)}
								on:click={() => (typeOpen = false)}
								>By color:
								{#if !colorOpen}
									<MdiChevronDown />
								{:else}
									<MdiChevronUp />
								{/if}
							</button>
							{#if colorOpen}
								<div transition:slide|local class="colors flex gap smaller wrap">
									{#each data.colors as color}
										<button
											on:click={() => filterByColor(color.title)}
											use:tooltip={{ content: color.title, theme: 'custom-tooltip' }}
											class="color"
											on:click={() => (filterOpen = false)}
											style="background-color: {color.color}"
										/>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</aside>
			{/if}

			{#if products?.length > 0}
				<div class="grid products">
					{#each products as product (product.title)}
						<a
							href="/products/{product.slug}"
							class="product"
							in:fade|local={{ duration: 200, delay: 100 }}
							out:fade|local={{ duration: 100 }}
						>
							<div class="img-container">
								<div class="image">
									<Image
										src={product.featured_image.source}
										alt={product.featured_image.alt}
										size="small"
									/>
								</div>
							</div>

							{product.title}
						</a>
					{/each}
				</div>
			{:else}
				<div class="empty flex justify">
					<p>No products match your filters.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.image {
		height: 100%;
		width: 100%;
	}
	.container > div {
		height: 100%;
	}
	.empty {
		padding: var(--size-s) 0;
		width: 100%;
		height: 60px;
		border-radius: var(--size-s);
		background-color: var(--background-accent);
	}
	.products {
		min-height: 85vh;
	}
	.filter {
		padding: var(--size-s);
		background-color: var(--background-accent);
		margin-bottom: var(--size-s);
		border-radius: var(--size-s);
	}
	.tags {
		margin-top: var(--size-s);
		margin-left: calc(var(--size-s) * -1);
	}
	.colors {
		margin-top: var(--size-s);
	}
	.option {
		background-color: transparent;
		border: none;
		text-align: start;
		font-weight: 300;
		cursor: pointer;
		border: 1px solid var(--background-accent);
		padding: var(--size-xs) var(--size-s);
	}
	.option:hover {
		border: 1px solid var(--primary-color);
	}
	h3 {
		text-align: start;
		font-weight: 500;
	}
	button {
		font-weight: 500;
		background-color: transparent;
		border: none;

		cursor: pointer;
	}

	.images {
		height: 100%;
		width: 50%;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 50% 50%;
		gap: var(--size-s);
	}
	.images > .image {
		max-height: 100%;
		width: 100%;
		object-fit: cover;
		display: block;
		border-radius: var(--size-s);

		overflow: hidden;
	}

	.images > .image:first-of-type {
		grid-row: span 2;
	}
	.description {
		width: 50%;
		height: 100%;
	}
	.product {
		text-align: center;
		font-weight: 400;
		letter-spacing: 0.05rem;
		transition: letter-spacing 0.2s ease;
		font-size: var(--size-s);
	}
	.product:hover {
		letter-spacing: 0.05rem;
	}
	.img-container {
		height: 300px;
		overflow: hidden;
		background-color: var(--background-accent);
		border-radius: var(--size-s);
	}
	.product:hover > .img-container > .image {
		transform: scale(1.05);
	}
	.image {
		transition: all 0.2s ease;
	}
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: var(--size-s);
	}
	p {
		margin-bottom: var(--size-s);
	}
	:global(.tooltip.custom-tooltip) {
		--tooltip-background-color: var(--background-accent);
		--tooltip-color: var(--primary);
		cursor: context-menu;
	}
	.color {
		height: 20px;
		width: 20px;
		cursor: pointer;
		border: 1px solid var(--secondary-color);
		border-radius: 10px;
	}
	aside {
		width: 27%;
		height: 85vh;
		position: sticky;
		top: 120px;
		text-align: start;
		margin-bottom: var(--size-l);
	}

	.container {
		padding-top: var(--size-l);
		padding-bottom: var(--size-l);
		height: 100%;
	}
	.header {
		height: calc(100vh - 76px);
		background-color: var(--background-accent);
	}
	a {
		text-align: center;
		color: var(--primary-color);

		font-weight: 400;
		letter-spacing: 0.1rem;
		transition: letter-spacing 0.2s ease;
		font-size: var(--size-s);
	}
	a.button {
		color: white;
		font-weight: 300;
	}

	@media only screen and (max-width: 900px) {
		button.button {
			background-color: var(--primary-color);
			position: sticky;
			top: 90px;
		}
		.container {
			padding-top: var(--size-m);
			padding-bottom: var(--size-m);
			height: 100%;
			display: grid;
		}
		.flex {
			flex-direction: column;
		}
		.images {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: var(--size-xs);
		}
		.images > .image {
			max-height: 200px;
		}

		.description {
			width: 100%;
		}
		.color {
			height: 25px;
			width: 25px;
			border-radius: 20px;
		}

		.images > .image:first-of-type {
			grid-row: span 1;
			grid-column: span 2;
		}
		.product-container {
			padding: var(--size-s) 10px;
			position: relative;
		}
		.mobile {
			width: 100%;
			position: sticky;
			top: 150px;
			padding: var(--size-s);
			height: auto;
			background-color: var(--background-accent);
		}
		.filter {
			flex-direction: row;
		}
		button.flex {
			flex-direction: row;
		}
		.colors.flex {
			flex-direction: row;
		}
		.header {
			height: auto;
		}
	}
</style>
