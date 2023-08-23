<script lang="ts">
	import type { Category } from '../../../types/types';
	import Form from '../form/Form.svelte';

	export let categories: Category[];
</script>

<Form />

<footer>
	<div class="container">
		<div class="flex gap">
			<div class="flex collumn align">
				<img src="../sg_logo-01.svg" alt="logo" />
				<p>HANDMADE WOODEN <br /> INTERIOR PRODUCTS</p>
			</div>

			<div>
				<h4>Categories</h4>
				{#each categories as category}
					<a href="/{category.slug}">{category.title}</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style>
	p {
		color: white;
	}
	h4 {
		font-weight: 500;
		margin-bottom: var(--size-s);
	}
	img {
		width: 75px;
	}
	footer {
		margin-top: calc(var(--size-xl) * -1);
		padding: calc(var(--size-xl) * 2) 0 var(--size-l) 0;
		background-color: var(--primary-color);
	}
	footer > * {
		color: white;
	}

	a {
		color: white;
		display: block;
		margin-bottom: var(--size-xs);
		font-weight: 400;
		letter-spacing: 0.1rem;
		transition: letter-spacing 0.2s ease;
		font-size: var(--size-s);
	}
	a:hover {
		letter-spacing: 0.05rem;
	}
</style>
