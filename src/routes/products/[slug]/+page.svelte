<script lang="ts">
	export let data;
	import BiggerPicture from 'bigger-picture/svelte';
	import '@splidejs/svelte-splide/css';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';
	import Slider from '$lib/components/Slider.svelte';

	const meta = import.meta.glob(
		'../../../lib/images/*.{heic,heif,avif,jpg,jpeg,png,tiff,webp,gif,svg}',
		{
			query: {
				format: 'webp',
				h: '600'
			},
			import: 'default',
			eager: true
		}
	);

	let images: string[] = [];

	data.product.images.forEach((element) => {
		images.push(meta[`../../../lib/${element.source.substring(3)}`] as string);
	});

	onMount(() => {
		const bp = BiggerPicture({
			target: document.body
		});
		// grab image links
		const imageLinks = document.querySelectorAll('#images .image');

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

<svelte:window bind:innerWidth={width} />

<section>
	<div class="container flex gap small">
		{#if width > 900}
			<div class="images" id="images">
				{#each images as image}
					<div
						class="image"
						data-img={image}
						data-thumb={image}
						data-width="1200"
						data-alt={data.product.title}
						data-sveltekit-preload-data="tap"
					>
						<img src={image} alt="" />
					</div>
				{/each}
			</div>
		{:else}
			<Slider {images} />
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
