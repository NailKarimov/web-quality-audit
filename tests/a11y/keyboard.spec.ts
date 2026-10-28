import { test, expect } from '../../src/fixtures';

test.describe('Keyboard', () => {
  test('the login form can be filled and sent with the keyboard only', async ({ shop, page }) => {
    await shop.go('/auth/login');
    await page.locator('[data-test=email]').focus();
    await page.keyboard.type('nobody@example.com');
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-test=password]')).toBeFocused();
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
