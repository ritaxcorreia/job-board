import styles from "./Footer.module.css";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className={styles.footer}>
				<div>
					<a className={styles.bright} href="/">
						Bright.{" "}
					</a>
				</div>
				<p>
					Designed and built by{" "}
					<a href="https://www.ritacorreia.co/" target="_blank">
						Rita Correia © {year}.
					</a>
				</p>
			</footer>
		</>
	);
}
