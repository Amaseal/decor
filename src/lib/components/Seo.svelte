<script>
	export let data;
	import { page } from '$app/stores';
	$: fullUrl = `https://sghomedecor.lv${$page.url.pathname}`;
</script>

<svelte:head>
	{#if data.seo.title}
		<title>{data.seo.title}</title>
		<meta name="title" content={data.seo.title} />
		<meta property="og:title" content={data.seo.title} />
		<meta name="twitter:title" content={data.seo.title} />
	{/if}

	{#if data.seo.description}
		<meta name="description" content={data.seo.description} />
		<meta property="og:description" content={data.seo.description} />
		<meta name="twitter:description" content={data.seo.description} />
	{/if}

	{#if data.seo.image}
		<meta property="og:image" content={data.seo.image} />
		<meta name="twitter:image" content={data.seo.image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	{#if fullUrl}
		<meta property="og:url" content={fullUrl} />
	{/if}

	<meta property="og:type" content="website" />
</svelte:head>
