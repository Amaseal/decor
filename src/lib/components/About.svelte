<script lang="ts">
	import type { About } from '../types';
	import Image from './Image.svelte';

	export let data: About;
</script>

<section>
	<div class="container flex gap">
		<div class="flex text collumn left justify">
			<h2>{data.title}</h2>
			<p>
				{data.intro}
			</p>
			<a href="/about" class="button">...Read more</a>
		</div>
		<div class="images">
			{#each data.part as part}
				<div class="image">
					<Image src={part.image} alt={part.image_alt} width={600} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--background-accent);
	}
	h2,
	p {
		margin-bottom: var(--size-m);
	}
	.text {
		width: 30%;
	}
	.container {
		padding: var(--size-xl) 10px;
	}
	.images {
		width: 70%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: var(--size-s);
	}

	.image {
		overflow: hidden;
		height: 100%;
		width: 100%;
		object-fit: cover;
		filter: grayscale();
		border-radius: var(--size-s);
	}

	.image:first-of-type {
		grid-row: span 2;
	}
	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.text {
			width: 100%;
		}
		.images {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			gap: var(--size-s);
		}
		.container {
			padding: var(--size-l) 10px;
		}
	}
</style>
