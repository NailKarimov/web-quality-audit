import { test, expect } from '../../src/fixtures';

test.describe('Smoke', () => {
  test('the home page shows the product grid', async ({ shop, page }) => {
    await expect(page).toHaveTitle(/Toolshop/);
    expect(await shop.productNames.count(), 'products on the first page').toBeGreaterThanOrEqual(9);
    await expect(shop.productPrices.first()).toHaveText(/^\$\d+\.\d{2}$/);
  });

  test('the API is up and reports version 5.0', async ({ api }) => {
    const res = await api.get('/status');
    expect(res.status()).toBe(200);
    expect(await res.json()).toMatchObject({ version: '5.0', app_name: 'Toolshop' });
  });
});
