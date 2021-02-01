import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bright.</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <span className={styles.bright}>Bright.</span>
				</h1>

				<p className={styles.description}>Your curated dev job board</p>

				<div className={styles.grid}></div>
			</main>

			<footer className={styles.footer}>
				<div>
					<a className="" href="/">
						Bright.{" "}
					</a>
				</div>
				<p>
					Designed and built by{" "}
					<a href="https://www.ritacorreia.co/" target="_blank">
						Rita Correia.
					</a>
				</p>
			</footer>
		</div>
	);
}
