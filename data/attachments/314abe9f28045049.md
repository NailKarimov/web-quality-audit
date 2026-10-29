# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/search-sort.spec.ts >> Search and sorting >> "Price (High - Low)" sorts by price, most expensive first
- Location: tests/functional/search-sort.spec.ts:35:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 8
+ Received  + 8

  Array [
-   13.96,
-   13.41,
-   12.58,
-   12.18,
-   12.01,
-   11.48,
-   11.14,
-   9.17,
    4.92,
+   9.17,
+   11.14,
+   11.48,
+   12.01,
+   12.18,
+   12.58,
+   13.41,
+   13.96,
  ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: 🐛 Bug Hunting Mode - Find & Report Bugs!
      - button "Bug Hunting Guide" [ref=e9] [cursor=pointer]
    - navigation [ref=e10]:
      - generic [ref=e11]:
        - link "Practice Software Testing - Toolshop" [ref=e12] [cursor=pointer]:
          - /url: /
        - menubar "Main menu" [ref=e15]:
          - menuitem [ref=e16]:
            - link "Home" [ref=e17] [cursor=pointer]:
              - /url: "#/contact"
          - menuitem [ref=e18]:
            - button "Categories" [ref=e19] [cursor=pointer]
          - menuitem [ref=e20]:
            - link "Contakt" [ref=e21] [cursor=pointer]:
              - /url: "#/contact"
          - menuitem [ref=e22]:
            - link "Sign in" [ref=e23] [cursor=pointer]:
              - /url: "#/auth/login"
  - generic [ref=e25]:
    - generic [ref=e26]:
      - paragraph [ref=e27]
      - separator [ref=e29]
    - generic [ref=e30]:
      - generic [ref=e31]:
        - heading " Sorth" [level=4] [ref=e32]:
          - generic [ref=e33]: 
          - text: Sorth
        - separator [ref=e34]
        - combobox [ref=e37]:
          - option
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)" [selected]
          - option "Price (Low - High)"
          - option "CO₂ Rating (Best First)"
          - option "CO₂ Rating (Worst First)"
        - heading " Price Range" [level=4] [ref=e38]:
          - generic [ref=e39]: 
          - text: Price Range
        - separator [ref=e40]
        - generic "ngx-slider" [ref=e42]:
          - slider "ngx-slider" [ref=e47] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e48] [cursor=pointer]
          - generic [ref=e49]: "0"
          - generic [ref=e50]: "200"
          - generic [ref=e51]: "1"
          - generic [ref=e52]: "100"
        - heading "Search" [level=4] [ref=e54]
        - separator [ref=e56]
        - generic [ref=e58]:
          - textbox [ref=e59]
          - button "X" [ref=e60] [cursor=pointer]
          - button "Serch" [ref=e61] [cursor=pointer]
        - heading " Filters" [level=4] [ref=e62]:
          - generic [ref=e63]: 
          - text: Filters
        - separator [ref=e64]
        - heading "By category:" [level=4] [ref=e65]
        - generic [ref=e66]:
          - generic [ref=e67]: Hand Tools
          - list [ref=e68]:
            - generic [ref=e70]:
              - checkbox "Hammer" [ref=e71]
              - text: Hammer
            - generic [ref=e73]:
              - checkbox "Hand Saw" [ref=e74]
              - text: Hand Saw
            - generic [ref=e76]:
              - checkbox "Wrench" [ref=e77]
              - text: Wrench
            - generic [ref=e79]:
              - checkbox "Screwdriver" [ref=e80]
              - text: Screwdriver
            - generic [ref=e82]:
              - checkbox "Pliers" [ref=e83]
              - text: Pliers
        - generic [ref=e84]:
          - generic [ref=e85]: Power Tools
          - list [ref=e86]:
            - generic [ref=e88]:
              - checkbox "Grinder" [ref=e89]
              - text: Grinder
            - generic [ref=e91]:
              - checkbox "Sander" [ref=e92]
              - text: Sander
            - generic [ref=e94]:
              - checkbox "Saw" [ref=e95]
              - text: Saw
            - generic [ref=e97]:
              - checkbox "Drill" [ref=e98]
              - text: Drill
        - generic [ref=e100]:
          - checkbox "Other" [ref=e101]
          - text: Other
        - heading "By brand:" [level=4] [ref=e103]
        - generic [ref=e105]:
          - checkbox "Brand name 1" [ref=e106]
          - text: Brand name 1
        - generic [ref=e108]:
          - checkbox "Brand name 2" [ref=e109]
          - text: Brand name 2
        - generic [ref=e111]:
          - checkbox "Brand name 3" [ref=e112]
          - text: Brand name 3
        - generic [ref=e114]:
          - checkbox "Brand name 4" [ref=e115]
          - text: Brand name 4
        - generic [ref=e117]:
          - checkbox "Brand name 5" [ref=e118]
          - text: Brand name 5
        - generic [ref=e120]:
          - checkbox "Brand name 6" [ref=e121]
          - text: Brand name 6
        - generic [ref=e123]:
          - checkbox "Brand name 7" [ref=e124]
          - text: Brand name 7
        - generic [ref=e126]:
          - checkbox "Brand name 8" [ref=e127]
          - text: Brand name 8
        - generic [ref=e129]:
          - checkbox "Brand name 9" [ref=e130]
          - text: Brand name 9
        - generic [ref=e132]:
          - checkbox "Brand name 10" [ref=e133]
          - text: Brand name 10
        - heading "Sustainability:" [level=4] [ref=e135]
        - generic [ref=e137]:
          - checkbox "Show only eco-friendly products" [ref=e138]
          - text: Show only eco-friendly products
      - generic [ref=e139]:
        - text: 
        - generic [ref=e140]:
          - 'link "Phillips Screwdriver CO₂: A B C D E $4.92" [ref=e141] [cursor=pointer]':
            - /url: "#/product/17"
            - generic [ref=e144]:
              - heading "Phillips Screwdriver" [level=5] [ref=e145]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e146]:
                - text: "CO₂:"
                - generic [ref=e147]: A
                - generic [ref=e148]: B
                - generic [ref=e149]: C
                - generic [ref=e150]: D
                - generic [ref=e151]: E
            - generic [ref=e152]: $4.92
          - 'link "ECO Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e154] [cursor=pointer]':
            - /url: "#/product/5"
            - generic [ref=e155]: ECO
            - generic [ref=e157]:
              - heading "Slip Joint Pliers" [level=5] [ref=e158]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e159]:
                - text: "CO₂:"
                - generic [ref=e160]: A
                - generic [ref=e161]: B
                - generic [ref=e162]: C
                - generic [ref=e163]: D
                - generic [ref=e164]: E
            - generic [ref=e165]: $9.17
          - 'link "ECO Thor Hammer CO₂: A B C D E $11.14" [ref=e167] [cursor=pointer]':
            - /url: "#/product/9"
            - generic [ref=e168]: ECO
            - generic [ref=e171]:
              - heading "Thor Hammer" [level=5] [ref=e172]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e173]:
                - text: "CO₂:"
                - generic [ref=e174]: A
                - generic [ref=e175]: B
                - generic [ref=e176]: C
                - generic [ref=e177]: D
                - generic [ref=e178]: E
            - generic [ref=e179]: $11.14
          - 'link "ECO Claw Hammer CO₂: A B C D E $11.48" [ref=e181] [cursor=pointer]':
            - /url: "#/product/8"
            - generic [ref=e182]: ECO
            - generic [ref=e185]:
              - heading "Claw Hammer" [level=5] [ref=e186]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e187]:
                - text: "CO₂:"
                - generic [ref=e188]: A
                - generic [ref=e189]: B
                - generic [ref=e190]: C
                - generic [ref=e191]: D
                - generic [ref=e192]: E
            - generic [ref=e193]: $11.48
          - 'link "ECO Pliers CO₂: A B C D E $12.01" [ref=e195] [cursor=pointer]':
            - /url: "#/product/2"
            - generic [ref=e196]: ECO
            - generic [ref=e199]:
              - heading "Pliers" [level=5] [ref=e200]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e201]:
                - text: "CO₂:"
                - generic [ref=e202]: A
                - generic [ref=e203]: B
                - generic [ref=e204]: C
                - generic [ref=e205]: D
                - generic [ref=e206]: E
            - generic [ref=e207]: $12.01
          - 'link "Wood Saw CO₂: A B C D E $12.18" [ref=e209] [cursor=pointer]':
            - /url: "#/product/13"
            - generic [ref=e211]:
              - heading "Wood Saw" [level=5] [ref=e212]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e213]:
                - text: "CO₂:"
                - generic [ref=e214]: A
                - generic [ref=e215]: B
                - generic [ref=e216]: C
                - generic [ref=e217]: D
                - generic [ref=e218]: E
            - generic [ref=e219]: $12.18
          - 'link "ECO Hammer CO₂: A B C D E $12.58" [ref=e221] [cursor=pointer]':
            - /url: "#/product/7"
            - generic [ref=e222]: ECO
            - generic [ref=e225]:
              - heading "Hammer" [level=5] [ref=e226]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e227]:
                - text: "CO₂:"
                - generic [ref=e228]: A
                - generic [ref=e229]: B
                - generic [ref=e230]: C
                - generic [ref=e231]: D
                - generic [ref=e232]: E
            - generic [ref=e233]: $12.58
          - 'link "ECO Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e235] [cursor=pointer]':
            - /url: "#/product/6"
            - generic [ref=e236]: ECO
            - generic [ref=e239]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e240]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e241]:
                - text: "CO₂:"
                - generic [ref=e242]: A
                - generic [ref=e243]: B
                - generic [ref=e244]: C
                - generic [ref=e245]: D
                - generic [ref=e246]: E
            - generic [ref=e247]: $13.41
          - 'link "Mini Screwdriver CO₂: A B C D E $13.96" [ref=e249] [cursor=pointer]':
            - /url: "#/product/18"
            - generic [ref=e252]:
              - heading "Mini Screwdriver" [level=5] [ref=e253]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e254]:
                - text: "CO₂:"
                - generic [ref=e255]: A
                - generic [ref=e256]: B
                - generic [ref=e257]: C
                - generic [ref=e258]: D
                - generic [ref=e259]: E
            - generic [ref=e260]: $13.96
        - navigation "Pagination" [ref=e265]:
          - list [ref=e266]:
            - listitem [ref=e267]:
              - text: «
              - generic [ref=e268]:
                - text: Previous
                - generic [ref=e269]: page
            - listitem [ref=e270]:
              - generic [ref=e271]:
                - generic [ref=e272]: You're on page
                - text: "1"
            - listitem [ref=e273]:
              - generic [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: page
                - text: "2"
            - listitem [ref=e276]:
              - generic [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: page
                - text: "3"
            - listitem [ref=e279]:
              - generic [ref=e280] [cursor=pointer]:
                - text: Next
                - generic [ref=e281]: page
                - text: »
  - contentinfo [ref=e283]:
    - generic [ref=e285]:
      - generic [ref=e286]: Learn & Explore
      - generic [ref=e287]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e289] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e292]:
            - generic [ref=e293]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e295] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e298]:
            - generic [ref=e299]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e301] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e304]:
            - generic [ref=e305]: GitHub
            - text: Source code, issues and contributions
    - paragraph [ref=e307]:
      - text: This is a DEMO application, used for software testing training purpose. | Banner photo by
      - link "Barn Images" [ref=e308] [cursor=pointer]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e309] [cursor=pointer]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
  - button "Open chat" [ref=e311] [cursor=pointer]
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
  22 |     ).toBeVisible();
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
> 41 |     expect(prices).toEqual([...prices].sort((a, b) => b - a));
     |                    ^ Error: expect(received).toEqual(expected) // deep equality
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