<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	export let data;
</script>

<svelte:head>
	<title>SG Home Decor</title>
</svelte:head>

<Header categories={data.posts} />
