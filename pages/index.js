import styles from "./index.module.css";
import Head from "next/head";
import Hero from "../components/Hero.js";
import Form from "../components/Form.js";
import ExploreCities from "../components/ExploreCities.js";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bright.</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Hero />
				<Form />

				<ExploreCities />
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
