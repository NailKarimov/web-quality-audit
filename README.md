# web-quality-audit

[![Tests](https://github.com/NailKarimov/web-quality-audit/actions/workflows/tests.yml/badge.svg)](https://github.com/NailKarimov/web-quality-audit/actions/workflows/tests.yml)
[![Allure report](https://img.shields.io/badge/report-Allure-orange)](https://nailkarimov.github.io/web-quality-audit/)
[![Release](https://img.shields.io/github/v/release/NailKarimov/web-quality-audit)](https://github.com/NailKarimov/web-quality-audit/releases)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/NailKarimov/web-quality-audit?quickstart=1)

### ▶ Open online

| Page                                                                                               | What it is        |
| -------------------------------------------------------------------------------------------------- | ----------------- |
| **[Allure test report](https://nailkarimov.github.io/web-quality-audit/)**                         | latest CI run     |
| [Web audit with a reference build](https://nailkarimov.github.io/web-quality-audit/web-audit.html) | interactive guide |

Click these links: opening an `.html` file in the file list shows its source code, GitHub does not run it.

A web quality audit of **[Practice Software Testing](https://practicesoftwaretesting.com) (Toolshop) v5.0**, a
training web shop by Testsmith, automated with **Playwright** and **TypeScript**. The shop is published twice:
clean, and with defects planted by its authors. The same suite runs against both builds, so every defect it
reports on the bug build is confirmed by the same check passing on the clean one.

|                        |                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **System under test**  | Practice Software Testing v5.0 with bugs (third-party training site, hosted); the clean build as the reference                                                          |
| **Language and tools** | TypeScript · Playwright Test (headed Chrome) · axe-core · Allure                                                                                                        |
| **Types of testing**   | functional UI, content, accessibility (WCAG 2.2 AA), SEO, responsive UI, web performance, REST API                                                                      |
| **Tests**              | 43 tests × 2 builds = 86 runs                                                                                                                                           |
| **Test quality**       | differential: all 17 defect checks fail on the build that has the defect and pass on the other; 15 of them pass on the clean build, 2 defects are shared by both builds |
| **Reports**            | [Allure](https://nailkarimov.github.io/web-quality-audit/) · [bug reports](docs/findings.md) · [guide](https://nailkarimov.github.io/web-quality-audit/web-audit.html)  |

## What is tested

| Suite               | Tool           | What it proves                                                                                                                                         |
| ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tests/smoke`       | Playwright     | the home page shows the product grid; the API is up and reports v5.0                                                                                   |
| `tests/functional`  | Playwright     | menu links, product page, search with and without results, three sort orders, contact / login / registration with invalid input, the language switcher |
| `tests/content`     | Playwright     | interface labels are spelled correctly                                                                                                                 |
| `tests/a11y`        | axe-core       | alt text, labels, button names, list structure, contrast (WCAG 2.2 A/AA); the login form and search with the keyboard only                             |
| `tests/seo`         | Playwright     | meta description, canonical link, one `<h1>`, a title per page, `lang`, robots.txt                                                                     |
| `tests/ui`          | Playwright     | no horizontal scrolling at 375 / 768 / 1366 px, the mobile menu, no missing (404) images                                                               |
| `tests/performance` | Playwright     | TTFB and DOMContentLoaded of the home page, time to open a product                                                                                     |
| `tests/api`         | Playwright API | status, pagination without overlap, search, the 404 body, the category tree, 401 without a login                                                       |

## Findings

**17 defects:** 6 major, 10 minor and 1 trivial. 15 are on the bug build only, 2 (WQA-7, WQA-8) on both builds.
Each one is a bug report in [`docs/findings.md`](docs/findings.md) and in
[Issues](https://github.com/NailKarimov/web-quality-audit/issues?q=is%3Aissue+label%3Abug).

| ID     | Severity | Area          | Summary                                                              |
| ------ | -------- | ------------- | -------------------------------------------------------------------- |
| WQA-1  | major    | Navigation    | the "Home" menu link opens the contact page                          |
| WQA-3  | major    | Functional    | sort directions are reversed for price and name                      |
| WQA-6  | major    | Accessibility | images without alt text, search and sort controls without labels     |
| WQA-7  | major    | Accessibility | icon-only buttons without an accessible name (both builds)           |
| WQA-10 | major    | Forms         | registration: the labels "Country" and "State" are swapped           |
| WQA-16 | major    | Accessibility | login: Tab from the e-mail field jumps over the password field       |
| WQA-4  | minor    | Links         | a category link points to `#/category/undefined`                     |
| WQA-5  | minor    | Images        | the shop logo `broken.png` answers 404 on every page                 |
| WQA-8  | minor    | Accessibility | filter lists put other elements directly inside `<ul>` (both builds) |
| WQA-9  | minor    | Accessibility | "Out of stock" labels and footer links below the AA contrast ratio   |
| WQA-11 | minor    | SEO           | no meta description and no canonical link                            |
| WQA-12 | minor    | SEO           | no `<h1>` on the home page, two on a product page                    |
| WQA-13 | minor    | SEO           | every page has the same `<title>`                                    |
| WQA-14 | minor    | Content       | contact subjects include "Error 101: Subject not found"              |
| WQA-15 | minor    | Functional    | the language switcher is missing                                     |
| WQA-17 | minor    | Functional    | a search without results shows an empty grid and no message          |
| WQA-2  | trivial  | Content       | spelling: Contakt, Serch, Sorth, Reltded products                    |

## Running it

No local setup: the **Open in GitHub Codespaces** badge starts a browser VS Code with this repository; the
container runs `npm ci && npx playwright install --with-deps chrome` on creation.

Requirements: Node.js 22+, Google Chrome, Java 17+ for a local Allure report. On Linux without a display, start
the tests with `xvfb-run -a`: the site's Cloudflare check stops headless browsers.

```bash
npm ci
npx playwright install --with-deps chrome
npm test                 # both builds
npm run test:bugs        # the bug build only
npm run test:clean       # the clean build only
npm run test:api         # the REST API only, no browser
npm run allure:gen && npm run report
```

## Project structure

```
src/
  builds.ts            the two builds: app and API addresses, router type
  toolshop.ts          the shop as a page object: open once, then move inside the app
  fixtures.ts          `shop` (opened), `api` (request context for the build's API)
  support/             knownBug(), axe-core helper, keyboard helper
tests/                 smoke, functional, content, a11y, seo, ui, performance, api
docs/                  test plan, test report, bug reports, the guide
scripts/summary.mjs    run summary for GitHub Actions
```

## Design decisions

- **A reference build instead of a mutation check.** On a third-party site bugs cannot be planted, but this site
  ships a clean twin. Running every check on both turns "the test says so" into "the clean build passes the same
  check".
- **One page load per test.** Cloudflare challenges repeated reloads, so a test opens the shop once and then
  navigates inside the Angular app, which is also what a user does.
- **Properties, not data.** The site is shared and its data changes; checks assert order, matching and
  structure, never a fixed list of products.
- **No writes.** No orders, accounts or messages are created on a public training site.

## CI

`.github/workflows/tests.yml` runs on push to `main`, every Monday and by hand (choose `both`, `bugs` or `clean`).
It checks formatting and types, runs headed Chrome in `xvfb`, publishes the Allure report with history to
GitHub Pages and writes a summary of the run per build. `release.yml` publishes a release from
`.github/releases/<tag>.md`.

## Documentation

| File                                                                                                                | What it is                                                           |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`docs/test-plan.md`](docs/test-plan.md)                                                                            | test plan (ISO/IEC/IEEE 29119-3)                                     |
| [`docs/test-report.md`](docs/test-report.md)                                                                        | test summary report: latest run, defects, recommendations            |
| [`docs/findings.md`](docs/findings.md)                                                                              | all 17 bug reports with steps, expected and actual results           |
| [`docs/web-audit.md`](docs/web-audit.md) · [visual](https://nailkarimov.github.io/web-quality-audit/web-audit.html) | the approach: two builds, pinned defects, getting past the bot check |

The shop is © Testsmith and is used as published for practice; this repository contains only tests.

## Part of a portfolio

One of 13 test automation projects by [Nail Karimov](https://github.com/NailKarimov):
[all projects](https://github.com/NailKarimov) ·
[testing map](https://nailkarimov.github.io/api-test-automation/testing-map.html) ·
[toolbox](https://nailkarimov.github.io/api-test-automation/toolbox.html).
