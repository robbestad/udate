import µdate from "../lib/udate.js";

describe('Add hours', () => {
	it('Verifies that date-fnc adds 1 hour to current Date', () => {
		const now = new Date();
		const future = µdate("add", now, "hours", 1);
		expect(future.getTime()).toBe(now.getTime() + 1 * 60 * 60 * 1000)
	});
	it('Verifies that date-fnc adds 168 hour to current Date', () => {
		const now = new Date();
		const future = µdate("add", now, "hours", 168);
		expect(future.getTime()).toBe(now.getTime() + 168 * 60 * 60 * 1000)
	});
})
describe('Subtract hours', () => {
	it('Verifies that date-fnc subtracts 1 hour to current Date', () => {
		const now = new Date();
		const future = µdate("sub", now, "hours", 1);
		expect(future.getTime()).toBe(now.getTime() - 1 * 60 * 60 * 1000)
	});
	it('Verifies that date-fnc subtracts 168 hour to current Date', () => {
		const now = new Date();
		const future = µdate("sub", now, "hours", 168);
		expect(future.getTime()).toBe(now.getTime() - 168 * 60 * 60 * 1000)
	});
})
