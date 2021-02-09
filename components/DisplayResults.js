import styles from "./DisplayResults.module.css";
import { timeOfDay, weekday } from "./DayOfTheWeek.js";

export default function DisplayResults() {
	return (
		<div className={styles.container}>
			<h2 className={styles.intro}>
				Hello [name]! How's your {weekday()} {timeOfDay()} going?
				<br />
				Here's your search results for [dev role] roles in [city].
			</h2>
		</div>
	);
}
