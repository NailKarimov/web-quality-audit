import { test, expect } from '../../src/fixtures';

for (const width of [375, 768, 1366]) {
  test(`no horizontal scrolling at ${width} px`, async ({ shop, page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/contact', '/auth/login']) {
      if (path !== '/') await shop.go(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${path} is wider than the screen`).toBeLessThanOrEqual(0);
    }
  });
}

test('the mobile menu opens with its toggle button', async ({ shop, page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  const toggle = page.getByRole('button', { name: /toggle navigation/i });
  await expect(toggle).toBeVisible();
  await expect(page.locator('[data-test=nav-sign-in]')).toBeHidden();
  await toggle.click();
  await expect(page.locator('[data-test=nav-sign-in]')).toBeVisible();
  void shop;
});
