# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/search-sort.spec.ts >> Search and sorting >> a search without results says so
- Location: tests/functional/search-sort.spec.ts:15:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/no (products|results)|nothing (was )?found|there are no/i).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/no (products|results)|nothing (was )?found|there are no/i).first() with timeout 15000ms
  - waiting for getByText(/no (products|results)|nothing (was )?found|there are no/i).first()

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
- 'heading "Searched for: zzqx-no-such-tool" [level=3]'
- paragraph: 0 products found for 'zzqx-no-such-tool'
- navigation "Pagination"
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
  1  | import { test, expect } from '../../src/fixtures';
  2  | import { knownBug } from '../../src/support/known-bugs';
  3  | 
  4  | test.describe('Search and sorting', () => {
  5  |   test('search returns only matching products', async ({ shop }) => {
  6  |     const before = await shop.productNames.first().innerText();
  7  |     await shop.search.fill('pliers');
  8  |     await shop.searchSubmit.click();
  9  |     await shop.waitForGridChange(before).catch(() => {});
  10 |     const names = await shop.productNames.allInnerTexts();
  11 |     expect(names.length).toBeGreaterThan(0);
  12 |     for (const n of names) expect(n, 'every result mentions pliers').toMatch(/plier/i);
  13 |   });
  14 | 
  15 |   test('a search without results says so', async ({ shop, page }) => {
  16 |     knownBug('WQA-17');
  17 |     await shop.search.fill('zzqx-no-such-tool');
  18 |     await shop.searchSubmit.click();
  19 |     await expect(shop.productNames).toHaveCount(0);
  20 |     await expect(
  21 |       page.getByText(/no (products|results)|nothing (was )?found|there are no/i).first(),
> 22 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  23 |   });
  24 | 
  25 |   test('"Price (Low - High)" sorts by price, cheapest first', async ({ shop }) => {
  26 |     knownBug('WQA-3');
  27 |     const before = await shop.productNames.first().innerText();
  28 |     await shop.sort.selectOption({ label: 'Price (Low - High)' });
  29 |     await shop.waitForGridChange(before);
  30 |     const prices = await shop.prices();
  31 |     expect(prices.length).toBeGreaterThan(3);
  32 |     expect(prices).toEqual([...prices].sort((a, b) => a - b));
  33 |   });
  34 | 
  35 |   test('"Price (High - Low)" sorts by price, most expensive first', async ({ shop }) => {
  36 |     knownBug('WQA-3');
  37 |     const before = await shop.productNames.first().innerText();
  38 |     await shop.sort.selectOption({ label: 'Price (High - Low)' });
  39 |     await shop.waitForGridChange(before);
  40 |     const prices = await shop.prices();
  41 |     expect(prices).toEqual([...prices].sort((a, b) => b - a));
  42 |   });
  43 | 
  44 |   test('"Name (A - Z)" sorts alphabetically', async ({ shop }) => {
  45 |     knownBug('WQA-3');
  46 |     const before = await shop.productNames.first().innerText();
  47 |     await shop.sort.selectOption({ label: 'Name (A - Z)' });
  48 |     await shop.waitForGridChange(before);
  49 |     const names = (await shop.productNames.allInnerTexts()).map((n) => n.trim());
  50 |     expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  51 |   });
  52 | });
  53 | 
```