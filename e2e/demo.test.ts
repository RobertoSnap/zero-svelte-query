import { expect, test, } from '@playwright/test';


test('home page has expected h1', async ({ page, }) => {
	await page.goto('/users');
	await expect(page.locator('h3')).toBeVisible();
	await expect(page.locator('h3')).toHaveText('Jane Smith');
});
