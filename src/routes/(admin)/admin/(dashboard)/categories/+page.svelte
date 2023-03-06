<script lang="ts">
	import type { PageData } from './$types';
	import MdiPlus from '~icons/mdi/plus';
	import MdiViewGridPlusOutline from '~icons/mdi/view-grid-plus-outline';
	import CategoryItem from '$lib/admin/header/categoryitem/CategoryItem.svelte';

	export let data: PageData;
</script>

<section>
	<div class="head flex spaced align">
		<div class="flex align">
			<div class="icon flex">
				<MdiViewGridPlusOutline />
			</div>

			<div class="flex collumn left">
				<h3>Categories</h3>
				<p>Add, edit or remove categories</p>
			</div>
		</div>

		<a href="/admin/categories/add" class="button flex align gap smaller"> <MdiPlus />Add</a>
	</div>
	<div class="items">
		<div class="item flex align spaced">
			<p class="id">ID</p>
			<p class="title">Title</p>
			<p class="slug">Slug</p>
			<p class="description">Description</p>
			<p>Image</p>
			<div class="controls flex gap small">
				<p>Edit</p>
				<p>Delete</p>
			</div>
		</div>
		{#each data.categories as category}
			<CategoryItem {category} />
		{/each}
	</div>
</section>

<style>
	.item > * {
		padding: var(--size-xs);
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
	.items {
		padding: var(--size-s);
		border-radius: var(--size-xs);
		background-color: var(--background);
	}
	.items p {
		font-size: var(--size-s);
		color: var(--secondary-color);
	}
	.icon {
		background-color: var(--background);
		padding: var(--size-s);
		border-radius: var(--size-xs);
		margin-right: var(--size-s);
	}
	.head {
		margin-bottom: var(--size-m);
	}
</style>
