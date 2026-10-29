# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/language.spec.ts >> Language >> the language switcher changes the interface to German and back
- Location: tests/functional/language.spec.ts:5:7

# Error details

```
Error: language switcher

expect(locator).toBeVisible() failed

Locator: locator('[data-test=language-select]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - language switcher locator('[data-test=language-select]') with timeout 5000ms
  - waiting for locator('[data-test=language-select]')

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

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures';
  2  | import { knownBug } from '../../src/support/known-bugs';
  3  | 
  4  | test.describe('Language', () => {
  5  |   test('the language switcher changes the interface to German and back', async ({ shop, page }) => {
  6  |     knownBug('WQA-15');
  7  |     const select = page.locator('[data-test=language-select]');
> 8  |     await expect(select, 'language switcher').toBeVisible({ timeout: 5_000 });
     |                                               ^ Error: language switcher
  9  |     await select.click();
  10 |     await page.locator('[data-test=lang-de]').click();
  11 |     await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  12 |     await expect(select).toHaveText(/DE/);
  13 |     await select.click();
  14 |     await page.locator('[data-test=lang-en]').click();
  15 |     await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  16 |     await expect(shop.productNames.first()).toBeVisible();
  17 |   });
  18 | });
  19 | 
```