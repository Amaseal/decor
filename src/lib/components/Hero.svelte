<script lang="ts">
	import type { Home } from '../types';
	export let data: Home;
</script>

<section>
	<div class="container flex gap align">
		<div class="heroImage">
			<img src="{data.featured_image.source}/medium" alt={data.featured_image.alt} />
		</div>

		<div class="flex collumn left full-height info">
			<h1>{data.title}</h1>
			<p>
				{data.intro}
			</p>
			<a href="/products" class="button">PRODUCTS</a>
			<div class="flex tags">
				{#each data.quotes as quote}
					<p class="flex align">{quote.quote}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.info {
		width: 50%;
	}
	.container {
		padding-top: var(--size-l);
		padding-bottom: var(--size-l);
	}

	section {
		height: calc(100vh - 76px);
		background-color: var(--background-accent);
	}
	h1,
	p {
		margin-bottom: var(--size-m);
	}

	p {
		max-width: 40ch;
	}

	.heroImage {
		overflow: hidden;
		height: 100%;
		width: 50%;
		border-radius: var(--size-s);
	}

	.tags {
		margin-top: auto;
		width: 100%;
		justify-content: stretch;
		gap: var(--size-xs);
	}
	.tags > p {
		padding: var(--size-s);
		background-color: var(--background);
		font-family: 'Playfair Display', serif;
		font-size: clamp(0.7rem, 0.9vw, 1rem);
		text-align: center;
		margin-bottom: 0;
	}

	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.heroImage {
			width: 100%;
		}
		section {
			height: auto;
		}
		.tags {
			flex-direction: row;
		}
		.button {
			margin-bottom: var(--size-m);
		}
	}
</style>
