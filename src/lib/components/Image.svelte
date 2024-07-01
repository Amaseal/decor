<script lang="ts">
	export let src;
	export let alt = '';
	export let size = '';
</script>

{#if size === 'medium'}
	<img src={src.replace('/images', '/images/medium')} {alt} />
{:else if size === 'small'}
	<img src={src.replace('/images', '/images/small')} {alt} />
{:else}
	<img {src} {alt} />
{/if}

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 80%;
	}
</style>
