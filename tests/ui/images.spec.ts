import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';

/** Status of every image on the page, requested again from inside the page (same cookies as the user). */
async function imageStatuses(page: import('@playwright/test').Page) {
  return page.evaluate(async () => {
    const srcs = [...new Set([...document.images].map((i) => i.currentSrc || i.src).filter(Boolean))];
    return Promise.all(
      srcs.map(async (src) => {
        try {
          return { src, status: (await fetch(src, { cache: 'no-store' })).status };
        } catch {
          return { src, status: 0 };
        }
      }),
    );
  });
}

test.describe('Images', () => {
  test('no image on the home and product pages is missing (404)', async ({ shop, page }) => {
    knownBug('WQA-5');
    const missing = (await imageStatuses(page)).filter((i) => i.status === 404);
    await shop.openFirstProduct();
    missing.push(...(await imageStatuses(page)).filter((i) => i.status === 404));
    // 403 answers are Cloudflare refusing automated image requests on the hosted site, not missing files.
    expect(missing).toEqual([]);
  });
});
