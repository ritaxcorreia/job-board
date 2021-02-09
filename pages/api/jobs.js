import fetch from "node-fetch";
import querystring from "querystring";

// jobs fetches stuff from the github jobs API under the hood and returns JSON
export default async function jobs(req, res) {
	// stringify the query params received in the request
	const query = querystring.stringify(req.query);

	// fetch from Github Jobs API and transfer the request query params
	const response = await fetch(
		`https://jobs.github.com/positions.json?${query}`
	);

	// Parse the body as JSON
	const data = await response.json();

	// Send back the parsed JSON data
	res.status(200).json(data);
}
