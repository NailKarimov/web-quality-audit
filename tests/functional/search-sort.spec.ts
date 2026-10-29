import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('Search and sorting', () => {
  test('search returns only matching products', async ({ shop }) => {
    const before = await shop.productNames.first().innerText();
    await shop.search.fill('pliers');
    await shop.searchSubmit.click();
    await shop.waitForGridChange(before).catch(() => {});
    const names = await shop.productNames.allInnerTexts();
    expect(names.length).toBeGreaterThan(0);
    for (const n of names) expect(n, 'every result mentions pliers').toMatch(/plier/i);
  });

  test('a search without results says so', async ({ shop, page }) => {
    knownBug('WQA-17');
    await shop.search.fill('zzqx-no-such-tool');
    await shop.searchSubmit.click();
    await expect(shop.productNames).toHaveCount(0);
    await expect(
      page.getByText(/no (products|results)|nothing (was )?found|there are no/i).first(),
    ).toBeVisible();
  });

  test('"Price (Low - High)" sorts by price, cheapest first', async ({ shop }) => {
    knownBug('WQA-3');
    const before = await shop.productNames.first().innerText();
    await shop.sort.selectOption({ label: 'Price (Low - High)' });
    await shop.waitForGridChange(before);
    const prices = await shop.prices();
    expect(prices.length).toBeGreaterThan(3);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('"Price (High - Low)" sorts by price, most expensive first', async ({ shop }) => {
    knownBug('WQA-3');
    const before = await shop.productNames.first().innerText();
    await shop.sort.selectOption({ label: 'Price (High - Low)' });
    await shop.waitForGridChange(before);
    const prices = await shop.prices();
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  });

  test('"Name (A - Z)" sorts alphabetically', async ({ shop }) => {
    knownBug('WQA-3');
    const before = await shop.productNames.first().innerText();
    await shop.sort.selectOption({ label: 'Name (A - Z)' });
    await shop.waitForGridChange(before);
    const names = (await shop.productNames.allInnerTexts()).map((n) => n.trim());
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });
});
