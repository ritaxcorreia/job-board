import styles from "./footer.module.css";

export default function Footer() {
	return (
		<>
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
		</>
	);
}
