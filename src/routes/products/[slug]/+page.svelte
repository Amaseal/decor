<script lang="ts">
	export let data;
	import BiggerPicture from 'bigger-picture/svelte';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';
	import Slider from '$lib/components/Slider.svelte';

	const meta = import.meta.glob(
		'../../../lib/images/*.{heic,heif,avif,jpg,jpeg,png,tiff,webp,gif,svg}',
		{
			query: {
				w: '1200;600',
				format: 'webp',
				as: 'picture'
			},
			import: 'default',
			eager: true
		}
	);

	for (const image of data.product.images) {
		const source = image.source;
		if (meta[`../../../lib${source}`]) {
			console.log(meta[`../../../lib${source}`]);
			image.large = meta[`../../../lib${source}`].img.src;
			image.small = meta[`../../../lib${source}`].sources.webp[1].src;
			image.w = meta[`../../../lib${source}`].img.w;
			image.h = meta[`../../../lib${source}`].img.h;
		}
	}

	console.log(data.product.images);

	onMount(() => {
		const bp = BiggerPicture({
			target: document.body
		});

		const imageLinks = document.querySelectorAll('#images .image');

		console.log(imageLinks);
		// add click listener to open BiggerPicture
		for (let link of imageLinks) {
			link.addEventListener('click', openGallery);
		}

		// open BiggerPicture
		function openGallery(e: Event) {
			e.preventDefault();
			bp.open({
				items: imageLinks,
				el: e.currentTarget as HTMLElement
			});
		}
	});

	let width: number;
</script>

<svelte:head>
	<title>{data.product.seo.title}</title>
	<meta name="description" content={data.product.seo.description} />
</svelte:head>
<svelte:window bind:innerWidth={width} />

<section>
	<div class="container flex gap small">
		{#if width > 900}
			<div class="images" id="images">
				{#each data.product.images as image}
					<div
						class="image"
						data-img={image.large}
						data-thumb={image.small}
						data-height={image.h}
						data-width={image.w}
						data-alt={image.alt}
						data-sveltekit-preload-data="tap"
					>
						<img src={image.small} alt={image.alt} />
					</div>
				{/each}
			</div>
		{:else}
			<Slider images={data.product.images} />
		{/if}

		<div class="text">
			<h1>{data.product.title}</h1>

			<p>{@html data.product.description}</p>
		</div>
	</div>
</section>

<style>
	.images,
	.text {
		width: 50%;
	}

	h1 {
		font-size: clamp(1.5rem, 4.5vw, 2.5rem);
		margin-bottom: var(--size-m);
	}
	.container {
		padding-top: var(--size-l);
		padding-bottom: var(--size-l);
		height: 100%;
	}
	.images {
		display: grid;
		gap: var(--size-s);
		grid-template-columns: 1fr 1fr;
	}
	img {
		border-radius: var(--size-s);
		max-height: 500px;
		object-fit: cover;
	}

	.images div:first-of-type,
	.images div:nth-of-type(4n) {
		grid-column: span 2;
	}

	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.images,
		.text {
			width: 100%;
		}
	}
</style>
