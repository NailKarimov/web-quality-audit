import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('SEO', () => {
  test('the home page has a meta description and a canonical link', async ({ shop, page }) => {
    knownBug('WQA-11');
    void shop;
    const description = await page
      .locator('meta[name=description]')
      .getAttribute('content')
      .catch(() => null);
    expect(description ?? '', 'meta description').toMatch(/\S{3,}/);
    expect(description!.length).toBeLessThanOrEqual(160);
    await expect(page.locator('link[rel=canonical]'), 'canonical link').toHaveAttribute(
      'href',
      /^https:\/\//,
    );
  });

  test('the home and product pages each have exactly one <h1>', async ({ shop, page }) => {
    knownBug('WQA-12');
    await expect.soft(page.locator('h1'), 'home page').toHaveCount(1);
    await shop.go(shop.productPath());
    await expect.soft(page.locator('h1'), 'product page').toHaveCount(1);
  });

  test('pages have their own titles', async ({ shop, page }) => {
    knownBug('WQA-13');
    const titles: string[] = [await page.title()];
    for (const path of ['/contact', '/auth/login', shop.productPath()]) {
      await shop.go(path);
      await expect.poll(() => page.title()).not.toBe(titles.at(-1));
      titles.push(await page.title());
    }
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('the page language is declared', async ({ shop, page }) => {
    void shop;
    await expect(page.locator('html')).toHaveAttribute('lang', /^en/);
  });

  test('robots.txt is served and addresses all crawlers', async ({ shop, page }) => {
    void shop;
    const robots = await page.evaluate(async () => {
      const r = await fetch('/robots.txt', { cache: 'no-store' });
      return { status: r.status, body: await r.text() };
    });
    expect(robots.status).toBe(200);
    expect(robots.body).toMatch(/User-agent:\s*\*/i);
  });
});
