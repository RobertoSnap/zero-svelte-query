import { getNewZero, shutdown, startPostgresAndZero } from '$utils/testcontainer.js';
import { afterAll, beforeAll, expect, test } from 'vitest';


// Provide WebSocket on the global scope
globalThis.WebSocket = WebSocket as any;

beforeAll(async () => {
	console.log("beforeAll");
	await startPostgresAndZero();
}, 30000);

afterAll(async () => {
	console.log("afterAll");
	await shutdown();
});

test("can query users", async () => {
	const zero = await getNewZero();

	const q = zero.query.user;

	const preloadedUsers = await q.preload();
	await preloadedUsers.complete;

	const user = await q.run();
	console.log("USERS", user);


	expect(user).toHaveLength(3);

	preloadedUsers.cleanup();

}, 15000);