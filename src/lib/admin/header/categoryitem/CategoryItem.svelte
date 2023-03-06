<script lang="ts">
	import type { Category, Image } from '@prisma/client';
	import MdiTrashCanOutline from '~icons/mdi/trash-can-outline';
	import MdiPencilOutline from '~icons/mdi/pencil-outline';
	export let category: Category & { image: Image | null };
</script>

<div class="item flex align spaced">
	<p class="id">{category.id}</p>
	<p class="title">{category.title.toUpperCase()}</p>
	<p class="slug">{category.slug}</p>
	<p class="description">{category.description}</p>
	<img src="../{category.image?.imgLarge}" alt="" />
	<div class="controls flex gap small">
		<a class="button" href="/edit"><MdiPencilOutline /></a>
		<form action="?delete">
			<button class="button danger"><MdiTrashCanOutline /></button>
		</form>
	</div>
</div>

<style>
	img {
		height: 60px;
		width: 60px;
		border-radius: 20px;
		object-fit: cover;
	}
	.title,
	.slug,
	.description {
		width: 18%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.id {
		width: 2%;
	}
	.item {
		border-bottom: 1px solid var(--primary-color);
	}
	.item > * {
		padding: var(--size-xs);
	}
	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 300px;
	}
	.button {
		padding: var(--size-xs);
	}
	p {
		font-size: var(--size-s);
	}
</style>
