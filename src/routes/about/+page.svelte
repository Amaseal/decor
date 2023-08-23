<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>SG Home Decor | {data.about.data.title}</title>
	<meta name="description" content={data.about.data.introduction} />
</svelte:head>

<section>
	<div class="container">
		{#each data.about.data.part as part}
			<div class="flex gap part align">
				<div class="text">
					<h2>{part.title}</h2>
					<p>{part.text}</p>
				</div>
				<img src={part.image.formats.large?.url} alt="" />
			</div>
		{/each}
		<h2>Legal info:</h2>
		{#each data.about.data.legal as legal}
			<p>{legal.text}</p>
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

	.part:nth-of-type(2) > img {
		order: 1;
	}
	.part:nth-of-type(2) > .text {
		order: 2;
	}

	img {
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
		img,
		.text {
			width: 100%;
		}

		.part > img {
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
