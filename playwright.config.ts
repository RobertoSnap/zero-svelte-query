import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], headless: false },
		},
		// {
		// 	name: 'chromium_headless',
		// 	use: { ...devices['Desktop Chrome'], headless: true },
		// },

	],
	testDir: 'e2e'
});
