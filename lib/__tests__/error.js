import µtime from "../lib/utime.js";

describe('Use invalid unit', () => {
	it('Verifies that date-fnc throws an error when using invalid unit', () => {
		expect(() => {
				µtime("add", new Date(), "sheconds", 1);
			}
		).toThrow();
	});
})
