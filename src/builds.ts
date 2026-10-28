/**
 * The two hosted builds of Practice Software Testing (Toolshop) v5.0 that the suite runs against.
 *
 * - `bugs` is the system under test: the same shop with defects planted by its authors for bug hunting.
 * - `clean` is the reference: the same checks must pass here, which proves that a failing check on `bugs`
 *   points at a defect of the shop and not at a mistake in the test.
 */
export type BuildName = 'bugs' | 'clean';

export type Build = {
  name: BuildName;
  /** Web application. */
  app: string;
  /** REST API behind it. */
  api: string;
  /** How the Angular router addresses pages: `/#/contact` or `/contact`. */
  router: 'hash' | 'path';
  /** Id of one product, used to open a product page. */
  productId: string;
};

export const BUILDS: Record<BuildName, Build> = {
  bugs: {
    name: 'bugs',
    app: 'https://with-bugs.practicesoftwaretesting.com',
    api: 'https://api-with-bugs.practicesoftwaretesting.com',
    router: 'hash',
    productId: '1',
  },
  clean: {
    name: 'clean',
    app: 'https://practicesoftwaretesting.com',
    api: 'https://api.practicesoftwaretesting.com',
    router: 'path',
    productId: '01M61CZS9TBGWXS11FAWMM91Z0',
  },
};
