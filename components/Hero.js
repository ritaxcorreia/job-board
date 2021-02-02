import styles from "./hero.module.css";

export default function Hero() {
	return (
		<>
			<div class={styles.bg} aria-hidden="true"></div>
			<div class={styles.container}>
				<h1 class={styles.title}>
					Welcome to <br />
					<span class={styles.bright}>Bright.</span>
				</h1>

				<p class={styles.description}>Your curated dev job board.</p>
			</div>
		</>
	);
}
