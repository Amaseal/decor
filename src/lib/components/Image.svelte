<script>
	export let image;

	const getImage = async () => {
		await import(`src${image}`);
	};
</script>

{image}
