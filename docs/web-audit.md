# Guide: a web quality audit with a reference build

How this repository audits a public website with Playwright, and why each check is trusted. Interactive
version: [web-audit.html](https://nailkarimov.github.io/web-quality-audit/web-audit.html).

## 1. Two builds, one suite

Practice Software Testing publishes the same shop twice: a clean build and a build with defects planted by its
authors. The suite runs as two Playwright projects:

```ts
projects: [
  { name: 'bugs', use: { buildName: 'bugs' } },   // with-bugs.practicesoftwaretesting.com
  { name: 'clean', use: { buildName: 'clean' } }, // practicesoftwaretesting.com
],
```

Every test runs on both. That gives each check an oracle that is not the tester's opinion: if a check fails on
the bug build and passes on the clean build, the difference is in the shop, not in the test.

| Result on `bugs` | Result on `clean` | Meaning                                                         |
| ---------------- | ----------------- | --------------------------------------------------------------- |
| passes           | passes            | a regular check: the feature works                              |
| fails            | passes            | a defect of the bug build, pinned with `knownBug(id)`           |
| fails            | fails             | a defect of both builds (WQA-7, WQA-8) or a mistake in the test |
| passes           | fails             | a mistake in the test or an outage of the clean build           |

## 2. Pinning a defect

```ts
test('"Price (Low - High)" sorts by price, cheapest first', async ({ shop }) => {
  knownBug('WQA-3');
  await shop.sort.selectOption({ label: 'Price (Low - High)' });
  const prices = await shop.prices();
  expect(prices).toEqual([...prices].sort((a, b) => a - b));
});
```

`knownBug` (in `src/support/known-bugs.ts`) knows which builds have the defect. On those it calls
`test.fail()`: the test must fail, and the report shows the id. On the other builds it does nothing, so the same
assertion must pass. When the authors fix a defect, the test passes unexpectedly, the run turns red, and the bug
is closed.

The assertion always states the correct behaviour. A reader sees what the shop should do, and the failure
message shows what it does: `Expected "password", Received "login-submit"`.

## 3. Checks that describe properties, not data

The site is shared: other people add brands, lock accounts and change data all day. So the checks avoid exact
lists:

- **Sorting:** the whole list must equal itself sorted, whatever products are on page 1.
- **Search:** every result mentions the term; an unknown term gives zero results and a message.
- **Labels:** each label belongs to its own field (`getByLabel('State')` must be the state input).
- **API:** pagination has no overlap between pages; every product has an id, a name and a positive price.

## 4. Getting past the bot check, politely

Both builds sit behind Cloudflare. It stops headless browsers and challenges repeated full page loads. The suite:

1. runs real Chrome with a window inside a virtual display (`xvfb-run`);
2. loads the shop once per test (`shop.open()`), then moves inside the Angular app like a user, without new
   document requests (`shop.go('/contact')` changes the route through `history.pushState` or the URL hash);
3. runs with one worker, on push to `main`, weekly and by hand, and never writes data.

Images on the clean build are refused with 403 to automated browsers. The image check therefore looks for 404
(a file that does not exist), not for any error.

## 5. What each area checks

| Area          | Checks                                                                                  |
| ------------- | --------------------------------------------------------------------------------------- |
| Functional    | menu links, product page, search, three sort orders, forms with invalid input, language |
| Content       | spelling of labels, subjects of the contact form                                        |
| Accessibility | axe-core rules for alt text, labels, button names, lists, contrast; keyboard-only use   |
| SEO           | meta description, canonical link, one `<h1>`, distinct titles, `lang`, robots.txt       |
| UI            | no horizontal scrolling at 375, 768 and 1366 px; the mobile menu; missing images        |
| Performance   | TTFB and DOMContentLoaded of the home page; time to open a product                      |
| API           | status, pagination, search, 404 body, category tree, 401 without login                  |

## 6. Questions for an interview

- **Why two builds?** Because a failing check on a third-party site can always be the test's fault. A reference
  build that passes the same check removes the doubt for every single defect.
- **What did the clean build find?** Two real accessibility defects that both builds share (WQA-7, WQA-8):
  the reference is not perfect, and the suite says so instead of hiding it.
- **Why not run the shop in Docker?** Its licence allows private, non-commercial use only; the hosted builds are
  published for practice. The suite is written so that a local copy would only need another `BUILDS` entry.
