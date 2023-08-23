<script>
	import '../styles.css';
	import Header from '$lib/app/header/Header.svelte';
	import Footer from '$lib/app/footer/Footer.svelte';
	export let data;
</script>

<Header categories={data.header.data.categories} />
<slot />
<Footer categories={data.header.data.categories} />
