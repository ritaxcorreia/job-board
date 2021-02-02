import styles from "./hero.module.css";

export default function Hero() {
	return (
		<>
			<h1 className={styles.title}>
				Welcome to <span className={styles.bright}>Bright.</span>
			</h1>

			<p className={styles.description}>Your curated dev job board</p>
		</>
	);
}
