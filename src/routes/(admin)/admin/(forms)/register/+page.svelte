<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<section>
	<div class="container center full-height">
		<form action="?/register" method="POST">
			<img src="../sg_logo.svg" alt="" />
			<div class="flex collumn">
				<label for="email">E-mail</label>
				<input type="email" name="email" />
			</div>
			<div class="flex collumn">
				<label for="password">Password</label>
				<input type="password" name="password" />
			</div>
			<button class="button" type="submit">Register</button>
			{#if form?.user}
				<p class="error">Username is taken.</p>
			{/if}
		</form>
	</div>
</section>

<style>
	section {
		background-image: url('../candle-holders.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	button {
		margin-top: var(--size-s);
	}
	img {
		margin-bottom: var(--size-m);
	}
	section {
		height: 100vh;
	}

	form {
		background-color: var(--background-accent);
		padding: var(--size-l);
		border-radius: var(--size-xs);
	}
</style>
