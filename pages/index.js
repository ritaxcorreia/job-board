import styles from "./index.module.css";
import Head from "next/head";
import Hero from "../components/Hero.js";
import Form from "../components/Form.js";
import ExploreCities from "../components/ExploreCities.js";
import Footer from "../components/Footer.js";

export default function Home() {
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log("You have submitted the form.");
	// };

	return (
		<div className={styles.container}>
			<Head>
				<title>Bright.</title>
				<link rel="icon" href="/favicon.ico" />

				{/* <link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />

				<link rel="preconnect" href="https://fonts.gstatic.com" /> */}

				<meta
					id="meta"
					name="viewport"
					content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
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
				{/* <Form /> */}

				<ExploreCities />
			</main>
			<Footer />
		</div>
	);
}
