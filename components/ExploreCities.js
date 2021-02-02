import styles from "./exploreCities.module.css";

export default function ExploreCities() {
	return (
		<>
			<h2>Explore cities</h2>
			<div className={styles.grid}>
				<p>
					<label for="cities">Explore cities</label>
					<button type="submit">London</button>
					<button type="submit">San Francisco</button>
					<button type="submit">Madrid</button>
					<button type="submit">New York City</button>
					<button type="submit">Lisbon</button>
					<button type="submit">Toronto</button>
				</p>
			</div>
		</>
	);
}
