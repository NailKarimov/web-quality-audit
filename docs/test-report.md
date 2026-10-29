# Test summary report: Practice Software Testing web quality audit (web-quality-audit)

The structure follows ISO/IEC/IEEE 29119-3 (test completion report), shortened.

- **Period:** 28.10.2026
- **Builds:** Practice Software Testing v5.0 with bugs and v5.0 clean (API `/status` reports 5.0 on both)
- **Environment:** GitHub Actions, ubuntu-24.04, Chrome stable (headed, xvfb), 1366 × 900 unless a test sets
  another size
- **Allure report:** https://nailkarimov.github.io/web-quality-audit/

## 1. Summary

The bug build has **17 defects**: 6 major, 10 minor, 1 trivial. The most serious ones break basic use: the
"Home" link opens the contact page, every sort order is reversed, the registration form labels two fields with
each other's names, and a keyboard user cannot reach the password field with Tab. Every defect check fails on the
bug build and passes on the clean build, except two accessibility defects that both builds share (WQA-7, WQA-8).

## 2. Results

| Metric                              | bugs                       | clean               |
| ----------------------------------- | -------------------------- | ------------------- |
| Tests run                           | 43                         | 43                  |
| Passed as regular checks            | 24                         | 41                  |
| Failed as expected (pinned defects) | 19 (17 defects; WQA-3 × 3) | 2 (WQA-7, WQA-8)    |
| Unexpected results / flaky          | 0 / 0                      | 0 / 0               |
| Home page TTFB / DOMContentLoaded   | 1,098 ms / 1,739 ms        | 1,264 ms / 2,179 ms |
| Home page transferred               | 1,065 KB                   | 346 KB              |

All 86 runs took 9 minutes with one worker. Transfer sizes are not compared: on the clean build Cloudflare
refuses product images to automated browsers (403), so fewer bytes arrive.

## 3. Defects

All 17, with steps, expected and actual results, are in [`findings.md`](findings.md) and in Issues.

| ID     | Severity | Summary                                                    | Status       |
| ------ | -------- | ---------------------------------------------------------- | ------------ |
| WQA-1  | major    | the "Home" menu link opens the contact page                | open, pinned |
| WQA-3  | major    | sort directions are reversed for price and name            | open, pinned |
| WQA-6  | major    | images without alt text, search and sort without labels    | open, pinned |
| WQA-7  | major    | icon-only buttons without an accessible name (both builds) | open, pinned |
| WQA-10 | major    | registration: "Country" and "State" labels swapped         | open, pinned |
| WQA-16 | major    | login: Tab from e-mail jumps over the password field       | open, pinned |

The other eleven (WQA-2, 4, 5, 8, 9, 11–15, 17) are minor or trivial: content, links, SEO, contrast and missing
messages.

## 4. Deviations from the plan

- Ordering and payment are not tested: they write to a database other people use.
- The clean build's 404 page is not checked: an unknown address needs a full page load, which Cloudflare
  challenges. On the bug build the 404 page appeared during exploration and works.
- Only Chrome: Cloudflare lets headed Chrome through; other browsers would need a local copy of the shop.

## 5. Recommendations

1. Fix the four defects that block tasks: WQA-1 (Home link), WQA-3 (sort), WQA-10 (labels), WQA-16 (focus
   order).
2. Give every image an `alt` and every control a label (WQA-6, WQA-7): together they make the grid, the search
   and the product page usable with a screen reader.
3. WQA-7 and WQA-8 exist on the clean build too: they are worth reporting to the shop's authors.
