import { test as base, expect, type APIRequestContext } from '@playwright/test';
import { BUILDS, type Build, type BuildName } from './builds';
import { Toolshop } from './toolshop';

type Options = { buildName: BuildName };
type Fixtures = {
  build: Build;
  /** The shop, already open on its home page. */
  shop: Toolshop;
  /** Requests to the build's REST API. */
  api: APIRequestContext;
};

export const test = base.extend<Options & Fixtures>({
  buildName: ['bugs', { option: true }],
  build: async ({ buildName }, use) => use(BUILDS[buildName]),
  shop: async ({ page, build }, use) => {
    const shop = new Toolshop(page, build);
    await shop.open();
    await use(shop);
  },
  api: async ({ playwright, build }, use) => {
    const ctx = await playwright.request.newContext({
      baseURL: build.api,
      extraHTTPHeaders: { Accept: 'application/json' },
    });
    await use(ctx);
    await ctx.dispose();
  },
});

export { expect };
