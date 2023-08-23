<script lang="ts">
	export let data;
</script>

<section>
	<div class="container">
		<a href="/{data.category.slug}">Back</a>
		<div class="flex gap">
			<div class="info">
				{@html data.category.info}
			</div>
			<div class="flex collumn">
				{#each data.category.info_images as image}
					<img src={image.formats.medium?.url || image.url} alt="" />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.info {
		width: 50%;
	}
	section {
		min-height: 100vh;
		background-color: var(--background-accent);
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
