<script lang="ts">
	import type { Category } from '../types';
	import Form from './Form.svelte';

	import sgLogo from '$lib/images/sg.svg';
	import sgHomeLogo from '$lib/images/sg_logo-01.svg';

	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	import IcBaselineTiktok from '~icons/ic/baseline-tiktok';

	export let categories: Category[];
</script>

<Form />

<footer>
	<div class="container">
		<div class="flex gap small footer">
			<div class="logo">
				<div class="flex gap small align">
					<img src={sgHomeLogo} alt="logo" />
					<p>HANDMADE WOODEN <br /> INTERIOR PRODUCTS</p>
				</div>
				<div class="flex gap small align">
					<img src={sgLogo} alt="logo" />
					<p>JOINERY&CARPENTRY <br /> SERVICES</p>
				</div>
			</div>

			<div class="links first">
				<h4>Categories</h4>
				{#each categories as category}
					<a href="/categories/{category.slug}">{category.title}</a>
				{/each}
			</div>
			<div class="links">
				<h4>Pages</h4>
				<a href="/about">About us</a>
				<a href="/products">Products</a>
			</div>
			<div class="socials flex align gap small">
				<a href="https://www.facebook.com/SkriveruGaldnieciba" target="_blank"><MdiFacebook /></a>
				<a href="https://www.instagram.com/skriveru_galdnieciba/" target="_blank"
					><MdiInstagram /></a
				>
				<a href="https://www.tiktok.com/@sg_homedecor" target="_blank"><IcBaselineTiktok /></a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		align-items: start;
	}

	a {
		text-transform: uppercase;
	}
	.first {
		margin-left: auto;
	}
	.links {
		width: 200px;
	}
	p {
		color: white;
	}
	h4 {
		font-weight: 500;

		margin-bottom: var(--size-s);
	}
	img {
		height: 100px;
		width: 70px;
		object-position: 50% 50%;
		object-fit: contain;
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
