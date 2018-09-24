import µdate from "../lib/udate.js";

describe('Use invalid unit', () => {
	it('Verifies that date-fnc throws an error when using invalid unit', () => {
		expect(() => {
				µdate("add", new Date(), "sheconds", 1);
			}
		).toThrow();
	});
})
