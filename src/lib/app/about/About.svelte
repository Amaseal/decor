<section>
	<div class="container flex">
		<div class="flex text collumn left justify">
			<h2>About us</h2>
			<p>
				SG Home Décor part of our family business. Everyday we produce high quality bespoke
				carpentry and joinery from wood and other materials.
			</p>
			<button class="button">...Read more</button>
		</div>
		<div class="images">
			<img src="../about-1.png" alt="family" />
			<img src="../about-2.png" alt="company" />
			<img src="../about-3.png" alt="team" />
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--background-accent);
	}
	h2,
	p {
		margin-bottom: var(--size-m);
	}
	.text {
		width: 30%;
	}
	.container {
		padding: var(--size-xl) 10px;
	}
	.images {
		width: 70%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: var(--size-s);
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: var(--size-s);
	}

	img:first-of-type {
		grid-row: span 2;
	}
</style>
