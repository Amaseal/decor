<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../styles.css';
	export let data;
</script>

<Header categories={data.categories} />
<slot />
<Footer categories={data.categories} />
