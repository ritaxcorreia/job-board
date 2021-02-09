// Time of the day

export function timeOfDay() {
	const date = new Date();
	const time = date.toLocaleTimeString("en-GB");

	if (time > "06:00:00" && time < "12:00:00") {
		return "morning";
	} else if (time >= "12:00:00" && time < "17:00:00") {
		return "afternoon";
	} else if (time >= "17:00:00" && time < "20:00:00") {
		return "evening";
	} else {
		return "night";
	}
}

// Day of the week

export function weekday() {
	const date = new Date();
	const weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	const dayOfTheWeek = weekday[date.getDay()];

	return dayOfTheWeek;
}
