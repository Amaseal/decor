<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Categories from '$lib/components/Categories.svelte';
	import Hero from '$lib/components/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.homePage.seo.title}</title>
	<meta name="description" content={data.homePage.seo.description} />
</svelte:head>

<Hero data={data.homePage} />
<About data={data.about} />
<Categories data={data.categories} />
