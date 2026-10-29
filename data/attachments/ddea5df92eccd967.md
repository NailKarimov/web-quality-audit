# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/spelling.spec.ts >> Content >> interface labels are spelled correctly
- Location: tests/content/spelling.spec.ts:5:7

# Error details

```
Error: menu item

expect(locator).toHaveText(expected) failed

Locator: locator('[data-test=nav-contact]')
Expected pattern: /^\s*Contact\s*$/
Received string:  "Contakt"
Timeout: 15000ms

Call log:
  - menu item locator('[data-test=nav-contact]') with timeout 15000ms
  - waiting for locator('[data-test=nav-contact]')
    34 × locator resolved to <a class="nav-link" href="#/contact" routerlink="/contact" data-test="nav-contact" _ngcontent-ng-c2781432996="">Contakt</a>
       - unexpected value "Contakt"

```

```yaml
- link "Contakt":
  - /url: "#/contact"
```

```
Error: search button

expect(locator).toHaveText(expected) failed

Locator: locator('[data-test=search-submit]')
Expected pattern: /^\s*Search\s*$/
Received string:  " Serch"
Timeout: 15000ms

Call log:
  - search button locator('[data-test=search-submit]') with timeout 15000ms
  - waiting for locator('[data-test=search-submit]')
    34 × locator resolved to <button type="submit" data-test="search-submit" class="btn btn-secondary" _ngcontent-ng-c3849666243=""> Serch</button>
       - unexpected value " Serch"

```

```yaml
- button "Serch"
```

```
Error: filter heading

expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Sort', exact: true })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - filter heading getByRole('heading', { name: 'Sort', exact: true }) with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Sort', exact: true })

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. 🐛 Bug Hunting Mode - Find & Report Bugs!
- button "Bug Hunting Guide"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: "#/contact"
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contakt":
      - link "Contakt":
        - /url: "#/contact"
    - menuitem "Sign in":
      - link "Sign in":
        - /url: "#/auth/login"
- paragraph:
  - img
- separator
- heading " Sorth" [level=4]
- separator
- combobox:
  - option [selected]
  - option "Name (A - Z)"
  - option "Name (Z - A)"
  - option "Price (High - Low)"
  - option "Price (Low - High)"
  - option "CO₂ Rating (Best First)"
  - option "CO₂ Rating (Worst First)"
- heading " Price Range" [level=4]
- separator
- slider "ngx-slider"
- slider "ngx-slider-max"
- text: 0 200 1 100
- heading "Search" [level=4]:
  - img
  - text: Search
- separator
- textbox
- button "X"
- button "Serch"
- heading " Filters" [level=4]
- separator
- heading "By category:" [level=4]
- text: Hand Tools
- list:
  - checkbox "Hammer"
  - text: Hammer
  - checkbox "Hand Saw"
  - text: Hand Saw
  - checkbox "Wrench"
  - text: Wrench
  - checkbox "Screwdriver"
  - text: Screwdriver
  - checkbox "Pliers"
  - text: Pliers
- text: Power Tools
- list:
  - checkbox "Grinder"
  - text: Grinder
  - checkbox "Sander"
  - text: Sander
  - checkbox "Saw"
  - text: Saw
  - checkbox "Drill"
  - text: Drill
- checkbox "Other"
- text: Other
- heading "By brand:" [level=4]
- checkbox "Brand name 1"
- text: Brand name 1
- checkbox "Brand name 2"
- text: Brand name 2
- checkbox "Brand name 3"
- text: Brand name 3
- checkbox "Brand name 4"
- text: Brand name 4
- checkbox "Brand name 5"
- text: Brand name 5
- checkbox "Brand name 6"
- text: Brand name 6
- checkbox "Brand name 7"
- text: Brand name 7
- checkbox "Brand name 8"
- text: Brand name 8
- checkbox "Brand name 9"
- text: Brand name 9
- checkbox "Brand name 10"
- text: Brand name 10
- heading "Sustainability:" [level=4]
- checkbox "Show only eco-friendly products"
- text: Show only eco-friendly products
- 'link "ECO Combination Pliers CO₂: A B C D E $14.15"':
  - /url: "#/product/1"
  - img
  - text: ECO
  - heading "Combination Pliers" [level=5]
  - text: "CO₂: A B C D E $14.15"
- 'link "ECO Pliers CO₂: A B C D E $12.01"':
  - /url: "#/product/2"
  - img
  - text: ECO
  - heading "Pliers" [level=5]
  - text: "CO₂: A B C D E $12.01"
- 'link "ECO Bolt Cutters CO₂: A B C D E $48.41"':
  - /url: "#/product/3"
  - img
  - text: ECO
  - heading "Bolt Cutters" [level=5]
  - text: "CO₂: A B C D E $48.41"
- 'link "ECO Long Nose Pliers CO₂: A B C D E Out of stock $14.24"':
  - /url: "#/product/4"
  - img
  - text: ECO
  - heading "Long Nose Pliers" [level=5]
  - text: "CO₂: A B C D E Out of stock $14.24"
- 'link "ECO Slip Joint Pliers CO₂: A B C D E $9.17"':
  - /url: "#/product/5"
  - text: ECO
  - heading "Slip Joint Pliers" [level=5]
  - text: "CO₂: A B C D E $9.17"
- 'link "ECO Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41"':
  - /url: "#/product/6"
  - img
  - text: ECO
  - heading "Claw Hammer with Shock Reduction Grip" [level=5]
  - text: "CO₂: A B C D E $13.41"
- 'link "ECO Hammer CO₂: A B C D E $12.58"':
  - /url: "#/product/7"
  - img
  - text: ECO
  - heading "Hammer" [level=5]
  - text: "CO₂: A B C D E $12.58"
- 'link "ECO Claw Hammer CO₂: A B C D E $11.48"':
  - /url: "#/product/8"
  - img
  - text: ECO
  - heading "Claw Hammer" [level=5]
  - text: "CO₂: A B C D E $11.48"
- 'link "ECO Thor Hammer CO₂: A B C D E $11.14"':
  - /url: "#/product/9"
  - img
  - text: ECO
  - heading "Thor Hammer" [level=5]
  - text: "CO₂: A B C D E $11.14"
- navigation "Pagination":
  - list:
    - listitem: « Previous page
    - listitem: You're on page 1
    - listitem: page 2
    - listitem: page 3
    - listitem: Next page »
- contentinfo:
  - text: Learn & Explore
  - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more":
    - /url: https://onlinecourses.testsmith.io
  - link "API Spector Open-source API testing, mocking and contract testing":
    - /url: https://api-spector.dev
  - link "GitHub Source code, issues and contributions":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - paragraph:
    - text: This is a DEMO application, used for software testing training purpose. | Banner photo by
    - link "Barn Images":
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash":
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
- button "Open chat":
  - img
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test=add-to-cart]')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('[data-test=add-to-cart]') with timeout 15000ms
  - waiting for locator('[data-test=add-to-cart]')

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. 🐛 Bug Hunting Mode - Find & Report Bugs!
- button "Bug Hunting Guide"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: "#/contact"
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contakt":
      - link "Contakt":
        - /url: "#/contact"
    - menuitem "Sign in":
      - link "Sign in":
        - /url: "#/auth/login"
- separator
- heading "Reltded products" [level=1]
- contentinfo:
  - text: Learn & Explore
  - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more":
    - /url: https://onlinecourses.testsmith.io
  - link "API Spector Open-source API testing, mocking and contract testing":
    - /url: https://api-spector.dev
  - link "GitHub Source code, issues and contributions":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - paragraph:
    - text: This is a DEMO application, used for software testing training purpose. | Banner photo by
    - link "Barn Images":
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash":
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
- button "Open chat":
  - img
```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from '@playwright/test';
  2   | import type { Build } from './builds';
  3   | 
  4   | const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  5   | 
  6   | /**
  7   |  * The shop as a user sees it.
  8   |  *
  9   |  * The hosted builds sit behind a Cloudflare check that passes for the first page load of a browser
  10  |  * context and challenges later full reloads. So a test loads the shop once with `open()` and then moves
  11  |  * around inside the single-page app with `go()`, the way a user clicking links does: no further document
  12  |  * requests are made.
  13  |  */
  14  | export class Toolshop {
  15  |   readonly products: Locator;
  16  |   readonly productNames: Locator;
  17  |   readonly productPrices: Locator;
  18  |   readonly search: Locator;
  19  |   readonly searchSubmit: Locator;
  20  |   readonly sort: Locator;
  21  |   readonly nav: Locator;
  22  | 
  23  |   constructor(
  24  |     readonly page: Page,
  25  |     readonly build: Build,
  26  |   ) {
  27  |     this.products = page.locator('a.card[data-test^="product-"], a[data-test^="product-"]');
  28  |     this.productNames = page.locator('[data-test=product-name]');
  29  |     this.productPrices = page.locator('[data-test=product-price]');
  30  |     this.search = page.locator('[data-test=search-query]');
  31  |     this.searchSubmit = page.locator('[data-test=search-submit]');
  32  |     this.sort = page.locator('[data-test=sort]');
  33  |     this.nav = page.getByRole('navigation').first();
  34  |   }
  35  | 
  36  |   /** Loads the shop, waits out the Cloudflare check and the first product grid. */
  37  |   async open(): Promise<void> {
  38  |     // The hosted site sometimes does not answer in time, or keeps the Cloudflare check up for a while:
  39  |     // wait up to a minute, then load once more.
  40  |     for (let attempt = 1; ; attempt++) {
  41  |       try {
  42  |         await this.page.goto(this.build.app + '/', { waitUntil: 'domcontentloaded', timeout: 60_000 });
  43  |         for (let i = 0; i < 60 && /just a moment/i.test(await this.page.title()); i++) await sleep(1_000);
  44  |         if (!/just a moment/i.test(await this.page.title())) break;
  45  |         if (attempt === 2) throw new Error('the Cloudflare check did not clear');
  46  |       } catch (error) {
  47  |         if (attempt === 2) throw error;
  48  |       }
  49  |       await sleep(10_000);
  50  |     }
  51  |     await expect(this.productNames.first(), 'the product grid did not appear').toBeVisible({
  52  |       timeout: 30_000,
  53  |     });
  54  |   }
  55  | 
  56  |   /** Moves to a page inside the app without reloading it. */
  57  |   async go(path: string): Promise<void> {
  58  |     await this.page.evaluate(
  59  |       ({ path, router }) => {
  60  |         if (router === 'hash') {
  61  |           location.hash = '#' + path;
  62  |         } else {
  63  |           history.pushState({}, '', path);
  64  |           dispatchEvent(new PopStateEvent('popstate', { state: {} }));
  65  |         }
  66  |       },
  67  |       { path, router: this.build.router },
  68  |     );
  69  |     await this.page.waitForLoadState('networkidle').catch(() => {});
  70  |     await expect.poll(() => this.currentPath(), { message: `did not reach ${path}` }).toBe(path);
  71  |   }
  72  | 
  73  |   /** The app path, the same for both routers: `/contact`. */
  74  |   async currentPath(): Promise<string> {
  75  |     return this.page.evaluate(() =>
  76  |       location.hash.startsWith('#/') ? location.hash.slice(1).split('?')[0] : location.pathname,
  77  |     );
  78  |   }
  79  | 
  80  |   /** Opens the first product of the grid the way a user does: by clicking its card. */
  81  |   async openFirstProduct(): Promise<string> {
  82  |     if ((await this.currentPath()) !== '/') await this.go('/');
  83  |     const name = (await this.productNames.first().innerText()).trim();
  84  |     await this.productNames.first().click();
  85  |     await expect.poll(() => this.currentPath()).toMatch(/^\/product\//);
> 86  |     await expect(this.page.locator('[data-test=add-to-cart]')).toBeVisible();
      |                                                                ^ Error: expect(locator).toBeVisible() failed
  87  |     await expect(this.page.locator('[data-test=product-name]')).toHaveText(name);
  88  |     return name;
  89  |   }
  90  | 
  91  |   /** Prices of the products on the current grid, as numbers. */
  92  |   async prices(): Promise<number[]> {
  93  |     const texts = await this.productPrices.allInnerTexts();
  94  |     return texts.map((t) => Number(t.replace(/[^0-9.]/g, '')));
  95  |   }
  96  | 
  97  |   /** Waits until the product grid shows a different first product than `before`. */
  98  |   async waitForGridChange(before: string): Promise<void> {
  99  |     await expect
  100 |       .poll(
  101 |         async () =>
  102 |           (await this.productNames
  103 |             .first()
  104 |             .innerText()
  105 |             .catch(() => before)) !== before,
  106 |         {
  107 |           timeout: 15_000,
  108 |         },
  109 |       )
  110 |       .toBe(true);
  111 |     await sleep(500);
  112 |   }
  113 | }
  114 | 
```