<script lang="ts">
	import About from '$lib/app/about/About.svelte';
	import Hero from '$lib/app/hero/Hero.svelte';
	import Categories from '$lib/app/categories/Categories.svelte';
	export let data;
</script>

<svelte:head>
	<title>SG Home Decor</title>
</svelte:head>

<Hero data={data.hero.data} />
<About data={data.about.data} />
<Categories data={data.products.data} />
