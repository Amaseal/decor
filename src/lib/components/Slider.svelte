<script lang="ts">
	export let images: ProductImage[];
	import BiggerPicture from 'bigger-picture/svelte';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';
	import type { ProductImage } from '$lib/types';

	onMount(() => {
		const bp = BiggerPicture({
			target: document.getElementById('inline') as HTMLElement
		});

		let items = images.map((item) => {
			return {
				img: `${item.source}`,
				thumb: `${item.source}/thumb`,
				height: 500,
				width: 200,
				alt: item.alt
			};
		});

		bp.open({
			items,
			scale: 1,
			intro: 'fadeup',
			noClose: true,
			inline: true,
			maxZoom: 3
		});
	});
</script>

<div id="inline" class="inline-gallery" />

<style>
	.inline-gallery {
		position: relative;
		overflow: hidden;
		z-index: 0;
	}
	.inline-gallery:before {
		content: '';
		padding-bottom: 66.66%;
		display: block;
	}
	@media only screen and (max-width: 900px) {
		:global(.bp-wrap > div:first-child) {
			background: transparent;
		}
	}
</style>
