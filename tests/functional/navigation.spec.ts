import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('Navigation', () => {
  test('the "Home" menu link leads to the home page', async ({ shop, page }) => {
    knownBug('WQA-1');
    await shop.go('/contact');
    await page.locator('[data-test=nav-home]').click();
    await expect.poll(() => shop.currentPath()).toBe('/');
    await expect(shop.productNames.first()).toBeVisible();
  });

  test('the "Contact" menu link opens the contact form', async ({ shop, page }) => {
    await page.locator('[data-test=nav-contact]').click();
    await expect.poll(() => shop.currentPath()).toBe('/contact');
    await expect(page.locator('[data-test=first-name]')).toBeVisible();
  });

  test('no link on the page points to an "undefined" address', async ({ shop, page }) => {
    knownBug('WQA-4');
    await page.locator('[data-test=nav-categories]').click();
    const hrefs = await page
      .locator('a[href]')
      .evaluateAll((as) => as.map((a) => a.getAttribute('href') ?? ''));
    expect(hrefs.length).toBeGreaterThan(10);
    expect(hrefs.filter((h) => /undefined|null/.test(h))).toEqual([]);
  });

  test('a product card opens its product page', async ({ shop, page }) => {
    const name = await shop.openFirstProduct();
    await expect(page.locator('[data-test=unit-price]')).toHaveText(/^\d+\.\d{2}$/);
    expect(name.length).toBeGreaterThan(2);
  });
});
