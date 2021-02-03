import styles from "./form.module.css";

export default function Form() {
	return (
		<>
			<div className={styles.container}>
				<form name="contact" method="POST" data-netlify="false">
					<div>
						<label for="name" className={styles.title}>
							What's your name?{" "}
						</label>

						<input
							type="text"
							id="name"
							name="name"
							data-validate="Name is required"
							placeholder="Type your name"
						/>
					</div>

					<div>
						<label for="location" className={styles.title}>
							Preferred location?{" "}
						</label>

						<input
							type="text"
							id="location"
							name="location"
							data-validate="Location is required"
							placeholder="City"
						/>
					</div>

					<div>
						<label for="jobs" className={styles.title}>
							What are you looking for?
						</label>
						<button type="submit">Full-stack</button>
						<button type="submit">Front-end</button>
						<button type="submit">Back-end</button>
						<button type="submit">DevOps</button>
					</div>

					<button type="submit">Send</button>
				</form>
			</div>
		</>
	);
}

{
	/* <div className="wrap-input2 validate-input" data-validate="Name is required">
						<input className="input2" type="text" name="name">
						<span className="focus-input2" data-placeholder="NAME"></span>
					</div> */
}
