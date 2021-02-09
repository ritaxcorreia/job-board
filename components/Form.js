import styles from "./Form.module.css";
import Button from "./Button";

export default function Form(props) {
	return (
		<>
			<div className={styles.container}>
				<form name="contact" method="POST" data-netlify="false">
					<div className={styles.question}>
						<label htmlFor="name" className={styles.title}>
							What's your name?{" "}
						</label>

						<input
							className={styles.textInput}
							type="text"
							id="name"
							name="name"
							data-validate="Name is required"
							placeholder="Type your name"
						/>
					</div>

					<div className={styles.question}>
						<label htmlFor="location" className={styles.title}>
							Preferred location?{" "}
						</label>

						<input
							className={styles.textInput}
							type="text"
							id="location"
							name="location"
							data-validate="Location is required"
							placeholder="City"
						/>
					</div>

					<div className={styles.question}>
						<label htmlFor="jobs" className={styles.title}>
							What roles are you looking for?
						</label>
						<div className={styles.buttonContainer}>
							<Button className={styles.button}>
								Full-stack
							</Button>
							<Button className={styles.button}>Front-end</Button>
							<Button className={styles.button}>Back-end</Button>
							<Button className={styles.button}>DevOps</Button>
						</div>
					</div>

					<div className={styles.searchButton}>
						<Button type="submit">Search</Button>
					</div>
				</form>
			</div>
		</>
	);
}
