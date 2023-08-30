<script>
</script>

<section>
	<div class="container flex gap small">
		<div class="flex collumn">
			<h2>Get in touch with us:</h2>
			<h3>or contact us on:</h3>
			<p>E -mail: info@skriverugaldnieciba.lv</p>
			<p>ingrida.gavare@gmail.com</p>
		</div>

		<div class="form">
			<form netlify netlify-honeypot="bot-field">
				<div class="flex gap small">
					<label for="name"
						>Name
						<input type="text" name="name" />
					</label>
					<label for="email"
						>E-mail
						<input type="text" name="email" />
					</label>
				</div>
				<label for="message">
					Message
					<textarea name="message" id="" cols="30" rows="10" />
				</label>
				<button type="submit" class="button">Send</button>
			</form>
		</div>
	</div>
</section>

<style>
	.form {
		margin-left: auto;
		width: 50%;
	}
	h3 {
		margin-top: auto;
		text-align: start;
	}
	label,
	input {
		display: block;
	}
	.container {
		width: 100%;
		border-radius: var(--size-s);
		padding: var(--size-l);
		background-color: var(--background-accent);
		z-index: 99;
		position: relative;
	}
	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;
		}
		.form {
			margin-left: auto;
			width: 100%;
		}
		label,
		input {
			width: 100%;
		}
		.container {
			border-radius: var(--size-s);
			padding: var(--size-l) var(--size-m);
		}
	}
</style>
