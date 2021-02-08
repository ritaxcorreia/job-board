import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<>
			<div className={styles.bg} aria-hidden="true"></div>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Welcome to <br />
					<span className={styles.bright}>Bright.</span>
				</h1>

				<p className={styles.description}>
					Your curated dev job board.
				</p>
			</div>
		</>
	);
}
