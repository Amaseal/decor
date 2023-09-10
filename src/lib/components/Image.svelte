<script lang="ts">
	import type { ImgMeta } from '$lib/types';

	export let src;
	export let alt = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';
	export let width = 200;

	const meta = import.meta.glob('../images/*.{heic,heif,avif,jpg,jpeg,png,tiff,webp,gif,svg}', {
		query: {
			format: 'webp',
			w: `400;600;800;1200`,
			as: 'picture'
		},
		import: 'default',
		eager: true
	});

	let image = meta[`..${src}`] as ImgMeta;

	const sources = image.sources;
	let source = sources.webp.filter((m) => m.w === width);
</script>

<img src={source[0].src} {alt} {loading} />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 80%;
	}
</style>
