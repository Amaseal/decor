<script lang="ts">
	export let data;
	import Slider from '$lib/components/Slider.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
	import Seo from '$lib/components/Seo.svelte';

	let width: number;
</script>

<Seo data={data.product} />
<svelte:window bind:outerWidth={width} />

<section>
	<div class="container flex gap small">
		{#if width != null}
			{#if width < 900}
				<Slider images={data.product.images} />
			{:else}
				<div class="images" id="images">
					<LightboxGallery
						arrowsConfig={{
							color: 'black',
							enableKeyboardControl: true,
							character: 'loop'
						}}
					>
						<svelte:fragment slot="thumbnail">
							{#each data.product.images as image, index}
								<div class="image">
									<GalleryThumbnail id={index}>
										<div class="wrapper">
											<img
												class="thumbnail thmb"
												src={image.source.replace('/images', '/images/medium')}
												alt={image.alt}
											/>
										</div>
									</GalleryThumbnail>
								</div>
							{/each}
						</svelte:fragment>

						{#each data.product.images as image, index}
							<GalleryImage>
								<img src={image.source} alt={image.alt} />
							</GalleryImage>
						{/each}
					</LightboxGallery>
				</div>
			{/if}
		{/if}

		<div class="text">
			<h1>{data.product.title}</h1>
			<SvelteMarkdown source={data.product.description} />
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
	.thmb {
		max-height: 500px;
	}
	img {
		border-radius: var(--size-s);

		object-fit: cover;
		object-position: 50% 80%;
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
