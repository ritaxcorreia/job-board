import styles from "./form.module.css";

export default function Form() {
	return (
		<>
			<div class={styles.container}>
				<form name="contact" method="POST" data-netlify="false">
					<p>
						<label for="name">What's your name? </label>
						<input type="text" id="name" name="name" />
					</p>
					<p>
						<label for="location">Preferred location? </label>
						<input type="text" id="location" name="location" />
					</p>

					<p>
						<label for="jobs">What are you looking for?</label>
						<button type="submit">Full-stack</button>
						<button type="submit">Front-end</button>
						<button type="submit">Back-end</button>
						<button type="submit">DevOps</button>
					</p>

					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</>
	);
}
