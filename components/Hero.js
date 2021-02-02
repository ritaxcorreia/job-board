import styles from "./hero.module.css";

export default function Hero() {
	return (
		<>
			{" "}
			<div class={styles.container}>
				<h1 class={styles.title}>
					Welcome to <span class={styles.bright}>Bright.</span>
				</h1>

				<p class={styles.description}>Your curated dev job board</p>

				<img
					class={styles.bg}
					src="../assets/triangle1.svg"
					aria-hidden="true"
					alt=" "
				/>
			</div>
		</>
	);
}
