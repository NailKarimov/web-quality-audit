import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

const focused = (page: import('@playwright/test').Page) =>
  page.evaluate(() => {
    const e = document.activeElement;
    return e?.getAttribute('data-test') || e?.id || e?.tagName || 'none';
  });

test.describe('Keyboard', () => {
  test('the login form can be filled and sent with the keyboard only', async ({ shop, page }) => {
    knownBug('WQA-16');
    await shop.go('/auth/login');
    await page.locator('[data-test=email]').focus();
    await page.keyboard.type('nobody@example.com');
    await page.keyboard.press('Tab');
    expect(await focused(page), 'focus after Tab from the e-mail field').toBe('password');
    await page.keyboard.type('Wrong-password-1');
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-test=login-error]')).toBeVisible();
  });

  test('the search can be used with the keyboard only', async ({ shop, page }) => {
    await shop.search.focus();
    await page.keyboard.type('hammer');
    await page.keyboard.press('Enter');
    await expect
      .poll(async () => (await shop.productNames.allInnerTexts()).every((n) => /hammer/i.test(n)))
      .toBe(true);
  });
});
