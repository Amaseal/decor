<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<svelte:head>
	<title>Info | {data.category.seo.seo_title}</title>
	<meta name="description" content={data.category.seo.description} />
</svelte:head>

<section>
	<div class="container">
		<a href="/categories/{data.slug}">Back</a>
		<div class="flex gap">
			<div class="info">
				<SvelteMarkdown source={data.category.info} />
			</div>
			<div class="flex collumn">
				{#each data.category.info_images as image}
					<img src="{image}/medium" alt="" />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	img {
		height: 500px;
		width: 100%;
		object-fit: cover;
	}
	.flex > div {
		width: 50%;
	}
	.info {
		width: 50%;
	}
	section {
		min-height: 100vh;
	}
	.container {
		padding-top: var(--size-l);
		padding-bottom: var(--size-l);
	}
	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.info {
			width: 100%;
		}
		.container {
			padding-top: var(--size-m);
			padding-bottom: var(--size-m);
		}
	}
</style>
