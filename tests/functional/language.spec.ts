import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('Language', () => {
  test('the language switcher changes the interface to German and back', async ({ shop, page }) => {
    knownBug('WQA-15');
    const select = page.locator('[data-test=language-select]');
    await expect(select, 'language switcher').toBeVisible({ timeout: 5_000 });
    await select.click();
    await page.locator('[data-test=lang-de]').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    await expect(select).toHaveText(/DE/);
    await select.click();
    await page.locator('[data-test=lang-en]').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(shop.productNames.first()).toBeVisible();
  });
});
