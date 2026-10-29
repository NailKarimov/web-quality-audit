# Test plan: Practice Software Testing web quality audit (web-quality-audit)

The structure follows ISO/IEC/IEEE 29119-3 (test plan), shortened for one project.

## 1. Context

- **System under test:** Practice Software Testing (Toolshop) v5.0 by Testsmith, an Angular web shop with a
  Laravel REST API, built for practising testing. Two hosted builds are used:
  - `with-bugs.practicesoftwaretesting.com`, the build with defects planted by its authors (the system under
    test);
  - `practicesoftwaretesting.com`, the clean build (the reference).
- **Goal:** audit the public shop the way a quality engineer audits a website before release: functions,
  content, accessibility, SEO, responsive layout, speed and the API. Report every defect with an id and pin it with
  a test, and prove that each check is right by running it against the clean build too.
- **References:**
  - WCAG 2.2 AA and EN 301 549;
  - ISO/IEC 25010 quality characteristics;
  - Google's TTFB guidance (web.dev);
  - ISTQB test design techniques.

## 2. Scope

| In scope                                                                      | Out of scope                                                |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| home page, product grid, search, sorting, product page, navigation            | ordering and payment: they write to a shared database       |
| contact, login and registration forms, with invalid input only                | creating accounts, sending real messages                    |
| accessibility with axe-core (WCAG 2.2 A/AA) and keyboard use                  | a manual screen-reader audit                                |
| SEO basics, spelling of interface labels, images                              | load testing: the site is shared, see microservices-testing |
| layout at 375, 768 and 1366 px; the mobile menu                               | real devices and other browsers than Chrome                 |
| the REST API: products, pagination, search, categories, authentication errors | API writes                                                  |

## 3. Quality characteristics (ISO/IEC 25010)

| Characteristic         | Covered by                                                                |
| ---------------------- | ------------------------------------------------------------------------- |
| Functional suitability | navigation, search, sorting, forms, API                                   |
| Usability              | accessibility (axe, keyboard), spelling, error messages, language switch  |
| Compatibility          | responsive layout at three widths                                         |
| Performance efficiency | TTFB, DOMContentLoaded, time to open a product                            |
| Security               | API refuses unauthenticated access and leaks no details on a failed login |

## 4. Approach

- **Differential testing:** the same suite runs as two Playwright projects, `bugs` and `clean`. A check that
  finds a defect calls `knownBug(id)`: it is expected to fail on the build that has the defect and must pass on
  the build that does not. A check that fails on both builds is either a defect of both (marked so) or a mistake
  in the test.
- **Techniques:** equivalence classes for search terms and login errors; sort order as a property of the whole
  list; checks of every visible label against its field; oracles from the clean build instead of guesses.
- **Locators:** the shop's `data-test` attributes, roles and labels; no fixed sleeps.
- **Being gentle with a shared site:** one worker in CI; runs on push to `main`, weekly and by hand, never for
  every pull request; no writes; the shop is loaded once per test and then used inside the single-page app.

## 5. Risks

| Risk                                                          | Mitigation                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Cloudflare challenges automated browsers                      | headed Chrome in a virtual display; one full page load per test; a retry             |
| The shared demo data changes (other people use the site)      | checks of properties (sorted, matching, non-empty) instead of exact products         |
| The site authors change or fix a planted bug                  | the pinned test turns red: the defect is closed and the test becomes a regular check |
| Automated accessibility checks find only part of the problems | keyboard tests; findings are a starting point for a manual audit                     |

## 6. Entry and exit criteria

- **Entry:** both builds answer; formatting and type check pass.
- **Exit:** no unexpected result in either project: every defect check fails on its builds and passes on the
  others, every other test passes on both.

## 7. Deliverables

The test suite, the Allure report on GitHub Pages, [`test-report.md`](test-report.md), the bug reports in
[`findings.md`](findings.md) and in Issues, and the guide [`web-audit.md`](web-audit.md).
