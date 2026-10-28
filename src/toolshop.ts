import { expect, type Locator, type Page } from '@playwright/test';
import type { Build } from './builds';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * The shop as a user sees it.
 *
 * The hosted builds sit behind a Cloudflare check that passes for the first page load of a browser
 * context and challenges later full reloads. So a test loads the shop once with `open()` and then moves
 * around inside the single-page app with `go()`, the way a user clicking links does: no further document
 * requests are made.
 */
export class Toolshop {
  readonly products: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;
  readonly search: Locator;
  readonly searchSubmit: Locator;
  readonly sort: Locator;
  readonly nav: Locator;

  constructor(
    readonly page: Page,
    readonly build: Build,
  ) {
    this.products = page.locator('a.card[data-test^="product-"], a[data-test^="product-"]');
    this.productNames = page.locator('[data-test=product-name]');
    this.productPrices = page.locator('[data-test=product-price]');
    this.search = page.locator('[data-test=search-query]');
    this.searchSubmit = page.locator('[data-test=search-submit]');
    this.sort = page.locator('[data-test=sort]');
    this.nav = page.getByRole('navigation').first();
  }

  /** Loads the shop, waits out the Cloudflare check and the first product grid. */
  async open(): Promise<void> {
    await this.page.goto(this.build.app + '/', { waitUntil: 'domcontentloaded', timeout: 60_000 });
    for (let i = 0; i < 45 && /just a moment/i.test(await this.page.title()); i++) await sleep(1_000);
    await expect(this.productNames.first(), 'the product grid did not appear').toBeVisible({
      timeout: 30_000,
    });
  }

  /** Moves to a page inside the app without reloading it. */
  async go(path: string): Promise<void> {
    await this.page.evaluate(
      ({ path, router }) => {
        if (router === 'hash') {
          location.hash = '#' + path;
        } else {
          history.pushState({}, '', path);
          dispatchEvent(new PopStateEvent('popstate', { state: {} }));
        }
      },
      { path, router: this.build.router },
    );
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await expect.poll(() => this.currentPath(), { message: `did not reach ${path}` }).toBe(path);
  }

  /** The app path, the same for both routers: `/contact`. */
  async currentPath(): Promise<string> {
    return this.page.evaluate(() =>
      location.hash.startsWith('#/') ? location.hash.slice(1).split('?')[0] : location.pathname,
    );
  }

  productPath(id = this.build.productId): string {
    return `/product/${id}`;
  }

  /** Prices of the products on the current grid, as numbers. */
  async prices(): Promise<number[]> {
    const texts = await this.productPrices.allInnerTexts();
    return texts.map((t) => Number(t.replace(/[^0-9.]/g, '')));
  }

  /** Waits until the product grid shows a different first product than `before`. */
  async waitForGridChange(before: string): Promise<void> {
    await expect
      .poll(
        async () =>
          (await this.productNames
            .first()
            .innerText()
            .catch(() => before)) !== before,
        {
          timeout: 15_000,
        },
      )
      .toBe(true);
    await sleep(500);
  }
}
