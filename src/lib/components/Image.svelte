<script lang="ts">
	import type { ImgMeta } from '$lib/types';

	export let src;
	export let alt = '';
	export let sizes = '100vw';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

	const meta = import.meta.glob('../images/*.{heic,heif,avif,jpg,jpeg,png,tiff,webp,gif,svg}', {
		query: {
			format: 'webp;avif',
			w: '200;400;800',
			as: 'picture'
		},
		import: 'default',
		eager: true
	});

	let image = meta[`${src}`] as ImgMeta;

	const sources = image.sources;
	const fallback = image.img;
</script>

<picture>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source
			type="image/{type}"
			{sizes}
			srcset={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')}
		/>
	{/each}
	<img src={fallback.src} {alt} {loading} />
</picture>

<style>
	picture {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
