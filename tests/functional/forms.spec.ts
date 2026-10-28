import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('Forms', () => {
  test('the contact form names every missing required field', async ({ shop, page }) => {
    await shop.go('/contact');
    await page.locator('[data-test=contact-submit]').click();
    for (const field of ['first-name', 'last-name', 'email', 'subject', 'message']) {
      await expect(page.locator(`[data-test=${field}-error]`), `error for ${field}`).toBeVisible();
    }
  });

  test('the contact form subjects are real topics, not error messages', async ({ shop, page }) => {
    knownBug('WQA-14');
    await shop.go('/contact');
    const options = (await page.locator('[data-test=subject] option').allInnerTexts()).map((o) => o.trim());
    expect(options).toContain('Customer service');
    expect(options.filter((o) => /error/i.test(o))).toEqual([]);
  });

  test('login with an unknown account is refused with a clear message', async ({ shop, page }) => {
    await shop.go('/auth/login');
    await page.locator('[data-test=email]').fill('nobody@example.com');
    await page.locator('[data-test=password]').fill('Wrong-password-1');
    await page.locator('[data-test=login-submit]').click();
    await expect(page.locator('[data-test=login-error]')).toHaveText(/invalid email or password/i);
    await expect.poll(() => shop.currentPath()).toBe('/auth/login');
  });

  test('the registration form names the missing required fields', async ({ shop, page }) => {
    await shop.go('/auth/register');
    await page.locator('[data-test=register-submit], form [type=submit]').last().click();
    for (const field of ['first-name', 'last-name', 'email', 'password']) {
      await expect(page.locator(`[data-test=${field}-error]`), `error for ${field}`).toBeVisible();
    }
  });

  test('registration: "Country" and "State" labels belong to their own fields', async ({ shop, page }) => {
    knownBug('WQA-10');
    await shop.go('/auth/register');
    await expect(page.getByLabel('Country', { exact: true })).toHaveAttribute('data-test', 'country');
    await expect(page.getByLabel('State', { exact: true })).toHaveAttribute('data-test', 'state');
  });
});
