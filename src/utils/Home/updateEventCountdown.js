const updateEventCountDown = (date, setCountdown) => {
	const ONE_DAY = 1000 * 60 * 60 * 24;
	const ONE_HOUR = 1000 * 60 * 60;
	const ONE_MINUTE = 1000 * 60;

	let _dateDiff = date.getTime() - Date.now();
	const newCountdown = {
		days: [],
		hours: [],
		minutes: [],
	};

	const days = Math.floor(_dateDiff / ONE_DAY);
	_dateDiff -= days * ONE_DAY;

	const hours = Math.floor(_dateDiff / ONE_HOUR);
	_dateDiff -= hours * ONE_HOUR;

	const minutes = Math.floor(_dateDiff / ONE_MINUTE);

	// Convert the numbers to their string equivalent
	const daysStr = days.toString();
	const hrsStr = hours.toString();
	const minsStr = minutes.toString();

	// Set the days of the count down
	switch (daysStr.length) {
		case 2:
			newCountdown.days[0] = daysStr.charAt(0);
			newCountdown.days[1] = daysStr.charAt(1);
			break;

		case 1:
			newCountdown.days[0] = 0;
			newCountdown.days[1] = daysStr.charAt(0);
			break;

		default:
			newCountdown.days[0] = 0;
			newCountdown.days[1] = 0;
			break;
	}

	// Set the hours of the count down
	switch (hrsStr.length) {
		case 2:
			newCountdown.hours[0] = hrsStr.charAt(0);
			newCountdown.hours[1] = hrsStr.charAt(1);
			break;

		case 1:
			newCountdown.hours[0] = 0;
			newCountdown.hours[1] = hrsStr.charAt(0);
			break;

		default:
			newCountdown.hours[0] = 0;
			newCountdown.hours[1] = 0;
			break;
	}

	// Set the minutes of the count down
	switch (minsStr.length) {
		case 2:
			newCountdown.minutes[0] = minsStr.charAt(0);
			newCountdown.minutes[1] = minsStr.charAt(1);
			break;

		case 1:
			newCountdown.minutes[0] = 0;
			newCountdown.minutes[1] = minsStr.charAt(0);
			break;

		default:
			newCountdown.minutes[0] = 0;
			newCountdown.minutes[1] = 0;
			break;
	}

	setCountdown(newCountdown);
};

export default updateEventCountDown;
