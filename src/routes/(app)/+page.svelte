<script lang="ts">
	import type { PageData } from './$types';
	import About from '$lib/app/about/About.svelte';
	import Hero from '$lib/app/hero/Hero.svelte';
	import Header from '$lib/app/header/Header.svelte';
	import Categories from '$lib/app/categories/Categories.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>SG Home Decor</title>
</svelte:head>

<Header categories={data.categories} />
<Hero />
<About />
<Categories categories={data.categories} />
