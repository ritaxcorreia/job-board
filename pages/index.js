import styles from "./index.module.css";
import Head from "next/head";
import Hero from "../components/Hero.js";
import Form from "../components/Form.js";
import ExploreCities from "../components/ExploreCities.js";
import Footer from "../components/Footer.js";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bright.</title>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/favicon/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />

				<meta
					id="meta"
					name="viewport"
					content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0"
				/>
				<meta name="Bright." content="Your curated dev job board." />

				<meta property="og:title" content="Bright." />
				<meta
					property="og:description"
					content="Your curated dev job board."
				/>
				<meta
					property="og:image"
					// content="https://ritacorreia.co/assets/socialcard.jpg"
				/>
				{/* <meta property="og:url" content="https://ritacorreia.co/" /> */}

				<meta name="twitter:title" content="Bright." />
				<meta
					name="twitter:description"
					content="Your curated dev job board."
				/>
				<meta
					name="twitter:image"
					// content="https://ritacorreia.co/assets/socialcard.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<main className={styles.main}>
				<Hero />
				<Form />

				<ExploreCities />
			</main>

			<Footer />
		</div>
	);
}
