import { test, expect } from '../../src/fixtures';

test.describe('Performance', () => {
  test('the home page answers and renders quickly', async ({ shop, page }) => {
    void shop;
    const t = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const bytes = performance
        .getEntriesByType('resource')
        .reduce((n, r) => n + ((r as PerformanceResourceTiming).transferSize || 0), nav.transferSize || 0);
      return { ttfb: nav.responseStart, domContentLoaded: nav.domContentLoadedEventEnd, bytes };
    });
    test.info().annotations.push({
      type: 'timing',
      description: `TTFB ${Math.round(t.ttfb)} ms, DOMContentLoaded ${Math.round(t.domContentLoaded)} ms, ${Math.round(t.bytes / 1024)} KB`,
    });
    // Google's "good" TTFB is under 800 ms; 1.8 s is its "poor" line. The page renders in the browser.
    expect(t.ttfb).toBeLessThan(1_800);
    expect(t.domContentLoaded).toBeLessThan(4_000);
  });

  test('a product page opens within 3 seconds of the click', async ({ shop, page }) => {
    const started = Date.now();
    await shop.productNames.first().click();
    await expect(page.locator('[data-test=add-to-cart]')).toBeVisible();
    expect(Date.now() - started).toBeLessThan(3_000);
  });
});
