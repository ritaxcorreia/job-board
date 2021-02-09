import styles from "./ResultsHero.module.css";

export default function ResultsHero() {
	return (
		<header>
			<div className={styles.bg} aria-hidden="true"></div>
			<div className={styles.container}>
				<h1 className={`${styles.title} ${styles.bright}`}>Bright.</h1>
			</div>
		</header>
	);
}
