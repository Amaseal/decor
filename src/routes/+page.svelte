<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Categories from '$lib/components/Categories.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>SG Home Decor</title>
</svelte:head>

<Header categories={data.categories} />
<Hero data={data.homePage} />
<About data={data.about} />
