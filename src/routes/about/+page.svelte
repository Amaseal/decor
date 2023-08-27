<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	export let data;
</script>

<svelte:head>
	<title>SG Home Decor | {data.about.seo.title}</title>
	<meta name="description" content={data.about.seo.description} />
</svelte:head>

<section>
	<div class="container">
		{#each data.about.part as part}
			<div class="flex gap part align">
				<div class="text">
					<h2>{part.part_title}</h2>
					<p>{part.info}</p>
				</div>
				<div class="image">
					<Image src={part.image} alt={part.image_alt} />
				</div>
			</div>
		{/each}
		<h2>Legal info:</h2>
		{#each data.about.legal_info as legal}
			<p>{legal.legal_text}</p>
		{/each}
	</div>
</section>

<style>
	h2 {
		text-transform: uppercase;
		margin-bottom: var(--size-m);
	}
	.container {
		padding-top: var(--size-l);
		padding-bottom: var(--size-l);
	}
	.text {
		width: 40%;
	}

	.part {
		padding: var(--size-m) 0;
	}

	.part:nth-of-type(2) > .image {
		order: 1;
	}
	.part:nth-of-type(2) > .text {
		order: 2;
	}

	.image {
		overflow: hidden;
		height: 500px;
		width: 60%;
		object-fit: cover;
		filter: grayscale();
		border-radius: var(--size-s);
	}

	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.image,
		.text {
			width: 100%;
		}

		.part > .image {
			order: 1;
		}
		.part > .text {
			order: 2;
		}
		.container {
			padding-top: var(--size-m);
			padding-bottom: var(--size-m);
		}
	}
</style>
