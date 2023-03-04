<section>
	<div class="container flex gap align">
		<img src="../hero.png" alt="" />
		<div class="flex collumn left full-height">
			<h1>WOODEN INTERIOR PRODUCTS</h1>
			<p>
				We create beautifully designed things - decors, craft kits and furniture for nicer living.
			</p>
			<button class="button">PRODUCTS</button>
			<div class="flex tags">
				<p>LOVE FOR WOOD & DETAIL</p>
				<p>HANDMADE</p>
				<p>NICER LIVING</p>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		padding-top: var(--size-xl);
		padding-bottom: var(--size-l);
	}

	section {
		height: 100vh;
		background-color: var(--background-accent);
	}
	h1,
	p {
		margin-bottom: var(--size-m);
	}

	p {
		max-width: 40ch;
	}

	img {
		height: 100%;
		width: 50%;
		object-fit: cover;
		border-radius: var(--size-s);
	}

	.tags {
		margin-top: auto;
		gap: var(--size-xs);
	}
	.tags > p {
		padding: var(--size-s);
		background-color: var(--background);
		font-family: 'Playfair Display', serif;
		font-size: 1rem;
		text-align: center;
		margin-bottom: 0;
	}
</style>
