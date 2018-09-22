function utime(op, date, unit, units) {
	const _date = new Date(date);
	switch (unit) {
		case "hours": {
			switch (op) {
				case "add": {
					_date.setTime(_date.getTime() + units * 60 * 60 * 1000);
					break;
				}
				case "sub": {
					_date.setTime(_date.getTime() - units * 60 * 60 * 1000);
					break;
				}
			}
			return _date;
		}
		case "minutes": {
			switch (op) {
				case "add": {
					_date.setTime(_date.getTime() + units * 60 * 1000);
					break;
				}
				case "sub": {
					_date.setTime(_date.getTime() - units * 60 * 1000);
					break;
				}
			}
			return _date;
		}
		case "seconds": {
			switch (op) {
				case "add": {
					_date.setTime(_date.getTime() + units * 1000);
					break;
				}
				case "sub": {
					_date.setTime(_date.getTime() - units * 1000);
					break;
				}
			}
			return _date;
		}
	}
	throw new TypeError("No unit or wrong unit used. Use either 'seconds',  'minutes' or 'hours'");
}

export default utime;
