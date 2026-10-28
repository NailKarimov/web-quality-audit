import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('Content', () => {
  test('interface labels are spelled correctly', async ({ shop, page }) => {
    knownBug('WQA-2');
    await expect.soft(page.locator('[data-test=nav-contact]'), 'menu item').toHaveText(/^\s*Contact\s*$/);
    await expect.soft(shop.searchSubmit, 'search button').toHaveText(/^\s*Search\s*$/);
    await expect
      .soft(page.getByRole('heading', { name: 'Sort', exact: true }), 'filter heading')
      .toBeVisible();
    await shop.go(shop.productPath());
    await expect
      .soft(page.getByRole('heading', { name: 'Related products', exact: true }), 'product page heading')
      .toBeVisible();
  });
});
