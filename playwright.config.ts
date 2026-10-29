import { defineConfig } from '@playwright/test';
import type { BuildName } from './src/builds';

/**
 * Two projects run the same tests: `bugs` against the build with planted defects (the system under
 * test) and `clean` against the reference build. Every defect check must pass on `clean`.
 *
 * The hosted shop is a shared public training site behind Cloudflare, so the suite is gentle with it:
 * one worker in CI, a retry for a challenge that does not clear, and headed Chrome, which passes the
 * check where headless browsers are stopped.
 */
export default defineConfig<{ buildName: BuildName }>({
  testDir: './tests',
  timeout: 240_000,
  expect: { timeout: 15_000 },
  forbidOnly: !!process.env.CI,
  fullyParallel: false,
  workers: process.env.CI ? 1 : 2,
  retries: 1,
  use: {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1366, height: 900 },
    screenshot: 'only-on-failure',
    trace: process.env.CI ? 'off' : 'retain-on-failure',
  },
  projects: [
    { name: 'bugs', use: { buildName: 'bugs' } },
    { name: 'clean', use: { buildName: 'clean' } },
  ],
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    ['html', { open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
});
