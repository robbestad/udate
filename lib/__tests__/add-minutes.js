import µtime from "../lib/utime.js";

describe('Add minutes', () => {
	it('Verifies that date-fnc adds 1 minute to current Date', () => {
		const now = new Date();
		const future = µtime("add", now, "minutes", 1);
		expect(future.getTime()).toBe(now.getTime() + 1 * 60 *1000)
	});
	it('Verifies that date-fnc adds 168 minutes to current Date', () => {
		const now = new Date();
		const future = µtime("add", now, "minutes", 168);
		expect(future.getTime()).toBe(now.getTime() + 168 * 60 * 1000)
	});
})
describe('Subtract minutes', () => {
	it('Verifies that date-fnc subtracts 1 minute from current Date', () => {
		const now = new Date();
		const future = µtime("sub", now, "minutes", 1);
		expect(future.getTime()).toBe(now.getTime() - 1 * 60 *1000)
	});
	it('Verifies that date-fnc subtracts 168 minutes from current Date', () => {
		const now = new Date();
		const future = µtime("sub", now, "minutes", 168);
		expect(future.getTime()).toBe(now.getTime() - 168 * 60 * 1000)
	});
})
