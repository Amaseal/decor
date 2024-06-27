<script lang="ts">
	export let src;
	export let alt = '';
</script>

<img {src} {alt} />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 80%;
	}
</style>
