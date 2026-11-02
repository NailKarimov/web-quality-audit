# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/search-sort.spec.ts >> Search and sorting >> "Name (A - Z)" sorts alphabetically
- Location: tests/functional/search-sort.spec.ts:44:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 8
+ Received  + 8

  Array [
-   "Open-end Spanners (Set)",
-   "Phillips Screwdriver",
-   "Pliers",
-   "Random Orbit Sander",
-   "Sheet Sander",
-   "Sledgehammer",
-   "Slip Joint Pliers",
-   "Thor Hammer",
    "Wood Saw",
+   "Thor Hammer",
+   "Slip Joint Pliers",
+   "Sledgehammer",
+   "Sheet Sander",
+   "Random Orbit Sander",
+   "Pliers",
+   "Phillips Screwdriver",
+   "Open-end Spanners (Set)",
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
          - option "Name (A - Z)" [selected]
          - option "Name (Z - A)"
          - option "Price (High - Low)"
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
          - 'link "Wood Saw CO₂: A B C D E $12.18" [ref=e141] [cursor=pointer]':
            - /url: "#/product/13"
            - generic [ref=e143]:
              - heading "Wood Saw" [level=5] [ref=e144]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e145]:
                - text: "CO₂:"
                - generic [ref=e146]: A
                - generic [ref=e147]: B
                - generic [ref=e148]: C
                - generic [ref=e149]: D
                - generic [ref=e150]: E
            - generic [ref=e151]: $12.18
          - 'link "ECO Thor Hammer CO₂: A B C D E $11.14" [ref=e153] [cursor=pointer]':
            - /url: "#/product/9"
            - generic [ref=e154]: ECO
            - generic [ref=e157]:
              - heading "Thor Hammer" [level=5] [ref=e158]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e159]:
                - text: "CO₂:"
                - generic [ref=e160]: A
                - generic [ref=e161]: B
                - generic [ref=e162]: C
                - generic [ref=e163]: D
                - generic [ref=e164]: E
            - generic [ref=e165]: $11.14
          - 'link "ECO Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e167] [cursor=pointer]':
            - /url: "#/product/5"
            - generic [ref=e168]: ECO
            - generic [ref=e170]:
              - heading "Slip Joint Pliers" [level=5] [ref=e171]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e172]:
                - text: "CO₂:"
                - generic [ref=e173]: A
                - generic [ref=e174]: B
                - generic [ref=e175]: C
                - generic [ref=e176]: D
                - generic [ref=e177]: E
            - generic [ref=e178]: $9.17
          - 'link "ECO Sledgehammer CO₂: A B C D E $17.75" [ref=e180] [cursor=pointer]':
            - /url: "#/product/10"
            - generic [ref=e181]: ECO
            - generic [ref=e184]:
              - heading "Sledgehammer" [level=5] [ref=e185]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e186]:
                - text: "CO₂:"
                - generic [ref=e187]: A
                - generic [ref=e188]: B
                - generic [ref=e189]: C
                - generic [ref=e190]: D
                - generic [ref=e191]: E
            - generic [ref=e192]: $17.75
          - 'link "ECO Sheet Sander CO₂: A B C D E $58.48" [ref=e194] [cursor=pointer]':
            - /url: "#/product/19"
            - generic [ref=e195]: ECO
            - generic [ref=e198]:
              - heading "Sheet Sander" [level=5] [ref=e199]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e200]:
                - text: "CO₂:"
                - generic [ref=e201]: A
                - generic [ref=e202]: B
                - generic [ref=e203]: C
                - generic [ref=e204]: D
                - generic [ref=e205]: E
            - generic [ref=e206]: $58.48
          - 'link "ECO Random Orbit Sander CO₂: A B C D E $100.79" [ref=e208] [cursor=pointer]':
            - /url: "#/product/22"
            - generic [ref=e209]: ECO
            - generic [ref=e212]:
              - heading "Random Orbit Sander" [level=5] [ref=e213]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e214]:
                - text: "CO₂:"
                - generic [ref=e215]: A
                - generic [ref=e216]: B
                - generic [ref=e217]: C
                - generic [ref=e218]: D
                - generic [ref=e219]: E
            - generic [ref=e220]: $100.79
          - 'link "ECO Pliers CO₂: A B C D E $12.01" [ref=e222] [cursor=pointer]':
            - /url: "#/product/2"
            - generic [ref=e223]: ECO
            - generic [ref=e226]:
              - heading "Pliers" [level=5] [ref=e227]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e228]:
                - text: "CO₂:"
                - generic [ref=e229]: A
                - generic [ref=e230]: B
                - generic [ref=e231]: C
                - generic [ref=e232]: D
                - generic [ref=e233]: E
            - generic [ref=e234]: $12.01
          - 'link "Phillips Screwdriver CO₂: A B C D E $4.92" [ref=e236] [cursor=pointer]':
            - /url: "#/product/17"
            - generic [ref=e239]:
              - heading "Phillips Screwdriver" [level=5] [ref=e240]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e241]:
                - text: "CO₂:"
                - generic [ref=e242]: A
                - generic [ref=e243]: B
                - generic [ref=e244]: C
                - generic [ref=e245]: D
                - generic [ref=e246]: E
            - generic [ref=e247]: $4.92
          - 'link "ECO Open-end Spanners (Set) CO₂: A B C D E $38.51" [ref=e249] [cursor=pointer]':
            - /url: "#/product/16"
            - generic [ref=e250]: ECO
            - generic [ref=e253]:
              - heading "Open-end Spanners (Set)" [level=5] [ref=e254]
              - generic "Environmental impact rating (A=lowest, E=highest)" [ref=e255]:
                - text: "CO₂:"
                - generic [ref=e256]: A
                - generic [ref=e257]: B
                - generic [ref=e258]: C
                - generic [ref=e259]: D
                - generic [ref=e260]: E
            - generic [ref=e261]: $38.51
        - navigation "Pagination" [ref=e266]:
          - list [ref=e267]:
            - listitem [ref=e268]:
              - text: «
              - generic [ref=e269]:
                - text: Previous
                - generic [ref=e270]: page
            - listitem [ref=e271]:
              - generic [ref=e272]:
                - generic [ref=e273]: You're on page
                - text: "1"
            - listitem [ref=e274]:
              - generic [ref=e275] [cursor=pointer]:
                - generic [ref=e276]: page
                - text: "2"
            - listitem [ref=e277]:
              - generic [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: page
                - text: "3"
            - listitem [ref=e280]:
              - generic [ref=e281] [cursor=pointer]:
                - text: Next
                - generic [ref=e282]: page
                - text: »
  - contentinfo [ref=e284]:
    - generic [ref=e286]:
      - generic [ref=e287]: Learn & Explore
      - generic [ref=e288]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e290] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e293]:
            - generic [ref=e294]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e296] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e299]:
            - generic [ref=e300]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e302] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e305]:
            - generic [ref=e306]: GitHub
            - text: Source code, issues and contributions
    - paragraph [ref=e308]:
      - text: This is a DEMO application, used for software testing training purpose. | Banner photo by
      - link "Barn Images" [ref=e309] [cursor=pointer]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e310] [cursor=pointer]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
  - button "Open chat" [ref=e312] [cursor=pointer]
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
  41 |     expect(prices).toEqual([...prices].sort((a, b) => b - a));
  42 |   });
  43 | 
  44 |   test('"Name (A - Z)" sorts alphabetically', async ({ shop }) => {
  45 |     knownBug('WQA-3');
  46 |     const before = await shop.productNames.first().innerText();
  47 |     await shop.sort.selectOption({ label: 'Name (A - Z)' });
  48 |     await shop.waitForGridChange(before);
  49 |     const names = (await shop.productNames.allInnerTexts()).map((n) => n.trim());
> 50 |     expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
     |                   ^ Error: expect(received).toEqual(expected) // deep equality
  51 |   });
  52 | });
  53 | 
```