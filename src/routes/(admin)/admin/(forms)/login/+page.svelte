<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<section>
	<div class="container center full-height">
		<form action="?/login" method="POST">
			<img src="../sg_logo.svg" alt="" />
			<div class="flex collumn">
				<label for="email">E-mail</label>
				<input type="email" name="email" />
			</div>
			<div class="flex collumn">
				<label for="password">Password</label>
				<input type="password" name="password" />
			</div>
			<button class="button" type="submit">Login</button>
			{#if form?.invalid}
				<p class="error">Email and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
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
