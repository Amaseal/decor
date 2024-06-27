<script lang="ts">
	export let images;
	import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
	import { TinySlider } from 'svelte-tiny-slider';
</script>

<div id="inline" class="inline-gallery">
	<LightboxGallery
		arrowsConfig={{
			color: 'black',
			enableKeyboardControl: true,
			character: 'loop'
		}}
	>
		<svelte:fragment slot="thumbnail">
			<div class="wrapper">
				<TinySlider>
					{#each images as image, index}
						<GalleryThumbnail id={index}>
							<img class="thumbnail" src={image.source} alt={image.alt} />
						</GalleryThumbnail>
					{/each}
				</TinySlider>
			</div>
		</svelte:fragment>

		{#each images as image}
			<GalleryImage>
				<img src={image.source} alt={image.alt} />
			</GalleryImage>
		{/each}
	</LightboxGallery>
</div>

<style>
	.flex {
		width: 100%;
		flex-wrap: nowrap; /* Prevent wrapping */
		overflow-x: auto;
	}
	.thumbnail {
		height: 300px;
		width: 100vw;
		max-width: none;
	}
	.wrapper {
		border-radius: var(--size-s);
		overflow: hidden;
	}
</style>
