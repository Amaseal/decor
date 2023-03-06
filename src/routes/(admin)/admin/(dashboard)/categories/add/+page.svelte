<script lang="ts">
	import type { PageData } from './$types';
	import MdiPlus from '~icons/mdi/plus';
	import MdiViewGridPlusOutline from '~icons/mdi/view-grid-plus-outline';
	import CategoryItem from '$lib/admin/header/categoryitem/CategoryItem.svelte';
</script>

<section>
	<div class="head flex spaced align">
		<div class="flex align">
			<div class="icon flex">
				<MdiViewGridPlusOutline />
			</div>

			<div class="flex collumn left">
				<h3>Add a category</h3>
			</div>
		</div>
	</div>
	<div class="content">
		<form action="?/add">
			<label for="title">Title</label>
			<input type="text" />
			<label for="slug">Slug</label>
			<input type="text" />
		</form>
	</div>
</section>

<style>
	.content {
		padding: var(--size-s);
		border-radius: var(--size-xs);
		background-color: var(--background);
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
