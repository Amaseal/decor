<script lang="ts">
	import type { Hero } from '../../../types/types';

	export let data: Hero;
</script>

<section>
	<div class="container flex gap align">
		<img src={data.image.formats.large?.url || data.image.url} alt="" />
		<div class="flex collumn left full-height">
			<h1>{data.title}</h1>
			<p>
				{data.description}
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

	img {
		height: 100%;
		width: 50%;
		object-fit: cover;
		border-radius: var(--size-s);
	}

	.tags {
		margin-top: auto;
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
		img {
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
