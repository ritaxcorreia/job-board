import styles from "./exploreCities.module.css";

export default function ExploreCities(props) {
	return (
		<>
			<label for="cities" class={styles.title}>
				Explore cities
			</label>
			<div class={styles.grid}>
				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.london}
						src="/assets/cities/london.svg"
						aria-label="hidden"
						alt=" "
					></img>
					London
				</button>

				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.sanfran}
						src="/assets/cities/sanfran.svg"
						aria-label="hidden"
						alt=" "
					></img>
					San Francisco
				</button>

				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.sydney}
						src="/assets/cities/sydney.svg"
						aria-label="hidden"
						alt=" "
					></img>
					Sydney
				</button>

				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.nyc}
						src="/assets/cities/nyc.svg"
						aria-label="hidden"
						alt=" "
					></img>
					New York City
				</button>

				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.paris}
						src="/assets/cities/paris.svg"
						aria-label="hidden"
						alt=" "
					></img>
					Paris
				</button>

				<button type="submit" class={styles.cityButton}>
					<img
						class={styles.toronto}
						src="/assets/cities/toronto.svg"
						aria-label="hidden"
						alt=" "
					></img>
					Toronto
				</button>
			</div>
		</>
	);
}
