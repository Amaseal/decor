<script lang="ts">
	import type { ProductSection } from '../../../types/types';

	export let data: ProductSection;
</script>

<section>
	<div class="container">
		<div class="flex spaced align">
			<h2>{data.title}</h2>

			<a href="/products" class="button">All products</a>
		</div>
		<p>{data.description}</p>

		<div class="grid">
			{#each data.categories as category (category.id)}
				<a href="/{category.slug}">
					<div class="img-container">
						<img src={category.image.formats.small?.url} alt="" />
					</div>

					<h3>{category.title}</h3>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		padding: var(--size-xl) 0;
	}
	p {
		margin-bottom: var(--size-l);
	}

	.grid > a {
		height: 300px;
		margin-bottom: var(--size-m);
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: transform 0.2s ease;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--size-m);
	}
	a:hover > .img-container > img {
		transform: scale(1.05);
	}

	h3 {
		transition: letter-spacing 0.2s ease;
	}

	a:hover > h3 {
		letter-spacing: 0.05rem;
	}

	.img-container {
		height: 100%;
		overflow: hidden;
		border-radius: var(--size-s);
		margin-bottom: var(--size-xs);
	}
	@media only screen and (max-width: 900px) {
		.container {
			padding: var(--size-l) 10px;
		}
		p {
			text-align: center;
			margin-top: var(--size-m);
		}
	}
</style>
