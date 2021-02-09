import styles from "./DisplayResults.module.css";
import { timeOfDay, weekday } from "./DayOfTheWeek.js";
import Button from "./Button";
import { useEffect, useState } from "react";

// - Jobs parameters are received in the URL query string (window.location.search)
// - The query string is transferred to /api/jobs
// - /api/jobs transfers the query string to Github Jobs API
// - Results are piped through from the Github Jobs API

// Example:
// user visits /results?foo=bar
// fetches /api/jobs?foo=bar
// inside it fetches https://jobs.github.com/positions.json?foo=bar
// returns the exact response from the above
// TODO: display the results

export default function DisplayResults() {
	const [searchResults, setSearchResults] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// before request fetches, set loading to true
		setLoading(true);

		// fetch the data from the API
		fetch(`/api/jobs${window.location.search}`)
			// handle the response (might not be a 200)
			.then((response) => {
				// a response is not OK if the status is not 200 to 299
				if (!response.ok) {
					// if not ok, create an error with the status text
					throw new Error(response.statusText);
				}
				// if it's ok, parse the response as JSON (it's a JSON API)
				return response.json();
			})
			// handle the data
			.then((data) => {
				setSearchResults(data);
			})
			// handle the error
			.catch((err) => {
				setError(err.message);
			})
			// handle completion (regardless of success or not)
			.finally(() => {
				// request has finished (good or bad), set loading to false
				setLoading(false);
			});
	}, []);

	// Show spinner while it's loading...
	if (isLoading) {
		return <div className={styles.container}>SPINNER</div>;
	}

	// Show error if one occurred...
	if (error) {
		return (
			<>
				<div className={styles.container}>
					<div>{error}</div>
					<Button>Search again</Button>
				</div>
			</>
		);
	}

	// It has loaded and has no errors but we have no results...?!
	if (!searchResults) {
		return (
			<div className={styles.container}>
				<p>No Search Results</p>
				<Button>Search again</Button>
			</div>
		);
	}

	console.log(searchResults);

	// It has loaded, no errors and we have our search results...
	return (
		<div className={styles.container}>
			<h2 className={styles.intro}>
				Hello [name]! How's your {weekday()} {timeOfDay()} going?
				<br />
				Here's your search results for [dev role] roles in [city].
			</h2>
			<div className={styles.jobResults}>
				<p>Job results go here</p>
				<Button>Search again</Button>
			</div>
		</div>
	);
}
