import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

test.describe('SEO', () => {
  test('the home page has a meta description and a canonical link', async ({ shop, page }) => {
    knownBug('WQA-11');
    void shop;
    const head = await page.evaluate(() => ({
      description: document.querySelector('meta[name=description]')?.getAttribute('content') ?? '',
      canonical: document.querySelector('link[rel=canonical]')?.getAttribute('href') ?? '',
    }));
    expect.soft(head.description, 'meta description').toMatch(/\S{3,}/);
    expect.soft(head.description.length, 'meta description length').toBeLessThanOrEqual(160);
    expect.soft(head.canonical, 'canonical link').toMatch(/^https:\/\//);
  });

  test('the home and product pages each have exactly one <h1>', async ({ shop, page }) => {
    knownBug('WQA-12');
    await expect.soft(page.locator('h1'), 'home page').toHaveCount(1);
    await shop.openFirstProduct();
    await expect.soft(page.locator('h1'), 'product page').toHaveCount(1);
  });

  test('pages have their own titles', async ({ shop, page }) => {
    knownBug('WQA-13');
    const titles: string[] = [await page.title()];
    for (const path of ['/contact', '/auth/login']) {
      await shop.go(path);
      await expect.poll(() => page.title()).not.toBe(titles.at(-1));
      titles.push(await page.title());
    }
    await shop.go('/');
    await shop.openFirstProduct();
    await expect.poll(() => page.title()).not.toBe(titles[0]);
    titles.push(await page.title());
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('the page language is declared', async ({ shop, page }) => {
    void shop;
    await expect(page.locator('html')).toHaveAttribute('lang', /^en/);
  });

  test('robots.txt is served', async ({ shop, page }) => {
    void shop;
    const robots = await page.evaluate(async () => {
      const r = await fetch('/robots.txt', { cache: 'no-store' });
      return { status: r.status, body: await r.text() };
    });
    expect(robots.status).toBe(200);
    // The text differs: Cloudflare manages robots.txt on the bug build, so only the answer is checked.
    expect(robots.body.length).toBeGreaterThan(0);
  });
});
