import µdate from "../lib/udate.js";

describe('Add seconds', () => {
	it('Verifies that date-fnc adds 1 second to current Date', () => {
		const now = new Date();
		const future = µdate("add", now, "seconds", 1);
		expect(future.getTime()).toBe(now.getTime() + 1 * 1000)
	});
	it('Verifies that date-fnc adds 168 seconds to current Date', () => {
		const now = new Date();
		const future = µdate("add", now, "seconds", 168);
		expect(future.getTime()).toBe(now.getTime() + 168 * 1000)
	});
})

describe('Subtract seconds', () => {
	it('Verifies that date-fnc subtracts 1 second from current Date', () => {
		const now = new Date();
		const future = µdate("sub", now, "seconds", 1);
		expect(future.getTime()).toBe(now.getTime() - 1 * 1000)
	});
	it('Verifies that date-fnc subtracts 168 seconds from current Date', () => {
		const now = new Date();
		const future = µdate("sub", now, "seconds", 168);
		expect(future.getTime()).toBe(now.getTime() - 168 * 1000)
	});
})
