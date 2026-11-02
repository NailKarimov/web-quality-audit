# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y/keyboard.spec.ts >> Keyboard >> the login form can be filled and sent with the keyboard only
- Location: tests/a11y/keyboard.spec.ts:11:7

# Error details

```
Error: focus after Tab from the e-mail field

expect(received).toBe(expected) // Object.is equality

Expected: "password"
Received: "login-submit"
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
  - generic [ref=e28]:
    - heading "Login" [level=3] [ref=e29]
    - generic [ref=e30]:
      - textbox "Your E-mail *" [ref=e32]: nobody@example.com
      - generic [ref=e35]:
        - textbox "Your password *" [ref=e36]
        - button "" [ref=e38] [cursor=pointer]
      - button "Login" [active] [ref=e41] [cursor=pointer]
      - paragraph [ref=e43]:
        - text: Not yet an account?
        - link "Register your account" [ref=e44] [cursor=pointer]:
          - /url: "#/auth/register"
        - link "Forgot your Password?" [ref=e45] [cursor=pointer]:
          - /url: "#/auth/forgot-password"
  - contentinfo [ref=e47]:
    - generic [ref=e49]:
      - generic [ref=e50]: Learn & Explore
      - generic [ref=e51]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e53] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e56]:
            - generic [ref=e57]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e59] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e62]:
            - generic [ref=e63]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e65] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e68]:
            - generic [ref=e69]: GitHub
            - text: Source code, issues and contributions
    - paragraph [ref=e71]:
      - text: This is a DEMO application, used for software testing training purpose. | Banner photo by
      - link "Barn Images" [ref=e72] [cursor=pointer]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e73] [cursor=pointer]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
  - button "Open chat" [ref=e75] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures';
  2  | import { knownBug } from '../../src/support/known-bugs';
  3  | 
  4  | const focused = (page: import('@playwright/test').Page) =>
  5  |   page.evaluate(() => {
  6  |     const e = document.activeElement;
  7  |     return e?.getAttribute('data-test') || e?.id || e?.tagName || 'none';
  8  |   });
  9  | 
  10 | test.describe('Keyboard', () => {
  11 |   test('the login form can be filled and sent with the keyboard only', async ({ shop, page }) => {
  12 |     knownBug('WQA-16');
  13 |     await shop.go('/auth/login');
  14 |     await page.locator('[data-test=email]').focus();
  15 |     await page.keyboard.type('nobody@example.com');
  16 |     await page.keyboard.press('Tab');
> 17 |     expect(await focused(page), 'focus after Tab from the e-mail field').toBe('password');
     |                                                                          ^ Error: focus after Tab from the e-mail field
  18 |     await page.keyboard.type('Wrong-password-1');
  19 |     await page.keyboard.press('Enter');
  20 |     await expect(page.locator('[data-test=login-error]')).toBeVisible();
  21 |   });
  22 | 
  23 |   test('the search can be used with the keyboard only', async ({ shop, page }) => {
  24 |     await shop.search.focus();
  25 |     await page.keyboard.type('hammer');
  26 |     await page.keyboard.press('Enter');
  27 |     await expect
  28 |       .poll(async () => (await shop.productNames.allInnerTexts()).every((n) => /hammer/i.test(n)))
  29 |       .toBe(true);
  30 |   });
  31 | });
  32 | 
```