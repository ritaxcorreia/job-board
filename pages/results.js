import styles from "./Results.module.css";
import Head from "next/head";
import ResultsHeader from "../components/Header.js";
import Footer from "../components/Footer.js";
import DisplayResults from "../components/DisplayResults";

export default function Results() {
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
				<meta name="Bright." content="Search results" />

				<meta property="og:title" content="Bright." />
				<meta property="og:description" content="Search results" />
				<meta
					property="og:image"
					// content="https://ritacorreia.co/assets/socialcard.jpg"
				/>
				{/* <meta property="og:url" content="https://ritacorreia.co/" /> */}

				<meta name="twitter:title" content="Bright." />
				<meta name="twitter:description" content="Search results" />
				<meta
					name="twitter:image"
					// content="https://ritacorreia.co/assets/socialcard.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<ResultsHeader />

			<main className={styles.main}>
				<DisplayResults />
			</main>

			<Footer />
		</div>
	);
}
