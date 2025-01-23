import { expect, test, } from '@playwright/test';


test('users page has expected user', async ({ page, }) => {
	await page.goto('/users');
	await page.waitForTimeout(5000);
	await expect(page.locator('h4').first()).toHaveText('Jane Smith')
});
