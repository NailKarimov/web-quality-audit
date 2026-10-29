# Findings: bug reports

Found by the suite on 28.10.2026 in GitHub Actions (ubuntu-24.04, Chrome stable, 1366 × 900 unless noted).
Every defect is pinned by a test that calls `knownBug(id)`: it fails on the build that has the defect and passes
on the build that does not. Each defect is also an issue in this repository.

- **Bug build:** Practice Software Testing v5.0 with bugs, https://with-bugs.practicesoftwaretesting.com
- **Clean build:** Practice Software Testing v5.0, https://practicesoftwaretesting.com

| ID     | Severity | Area          | Builds      | Summary                                                            |
| ------ | -------- | ------------- | ----------- | ------------------------------------------------------------------ |
| WQA-1  | major    | Navigation    | bugs        | the "Home" menu link opens the contact page                        |
| WQA-3  | major    | Functional    | bugs        | sort directions are reversed for price and name                    |
| WQA-6  | major    | Accessibility | bugs        | images without alt text, form controls without labels              |
| WQA-7  | major    | Accessibility | bugs, clean | icon-only buttons without an accessible name                       |
| WQA-10 | major    | Forms         | bugs        | registration: the labels "Country" and "State" are swapped         |
| WQA-16 | major    | Accessibility | bugs        | login: Tab from the e-mail field jumps over the password field     |
| WQA-4  | minor    | Links         | bugs        | a category link points to `#/category/undefined`                   |
| WQA-5  | minor    | Images        | bugs        | the shop logo `broken.png` answers 404 on every page               |
| WQA-8  | minor    | Accessibility | bugs, clean | category filter lists put other elements directly inside `<ul>`    |
| WQA-9  | minor    | Accessibility | bugs        | "Out of stock" labels and footer links below the AA contrast ratio |
| WQA-11 | minor    | SEO           | bugs        | no meta description and no canonical link                          |
| WQA-12 | minor    | SEO           | bugs        | no `<h1>` on the home page, two on a product page                  |
| WQA-13 | minor    | SEO           | bugs        | every page has the same `<title>`                                  |
| WQA-14 | minor    | Content       | bugs        | contact subjects include "Error 101: Subject not found"            |
| WQA-15 | minor    | Functional    | bugs        | the language switcher is missing                                   |
| WQA-17 | minor    | Functional    | bugs        | a search without results shows an empty grid and no message        |
| WQA-2  | trivial  | Content       | bugs        | spelling: Contakt, Serch, Sorth, Reltded products                  |

Severity follows the issue form: **major** — a feature is wrong or unusable for a group of users; **minor** —
wrong, with a workaround or little impact; **trivial** — cosmetic or wording.

---

## WQA-1 · major · The "Home" menu link opens the contact page

- **Steps:** open the shop; go to Contact; click **Home** in the menu.
- **Expected:** the home page with the product grid (the clean build links "Home" to `/`).
- **Actual:** the link is `href="#/contact"`; the browser stays on `/contact`.
- **Test:** `tests/functional/navigation.spec.ts` › the "Home" menu link leads to the home page

## WQA-2 · trivial · Spelling mistakes in the interface

- **Steps:** open the home page and a product page; read the menu, the search button and the headings.
- **Expected:** Contact, Search, Sort, Related products.
- **Actual:** "Contakt" (menu), " Serch" (search button), " Sorth" (filter heading), "Reltded products" (product
  page). The checkout page also shows "Blliling Adress" and the contact message placeholder "Massage".
- **Test:** `tests/content/spelling.spec.ts` › interface labels are spelled correctly

## WQA-3 · major · Sort directions are reversed

- **Steps:** on the home page choose **Price (Low - High)**; then **Price (High - Low)**; then **Name (A - Z)**.
- **Expected:** cheapest first; most expensive first; A first.
- **Actual:** Low - High lists 125.23, 119.24, 100.79 … 46.50; High - Low lists 4.92, 9.17, 11.14 … 13.96; A - Z
  starts with "Wood Saw" and ends with "Open-end Spanners (Set)".
- **Tests:** `tests/functional/search-sort.spec.ts`, three sort tests

## WQA-4 · minor · A category link points to `#/category/undefined`

- **Steps:** open the **Categories** menu; read the link targets.
- **Expected:** every link has a real category slug.
- **Actual:** one link is `#/category/undefined`.
- **Test:** `tests/functional/navigation.spec.ts` › no link on the page points to an "undefined" address

## WQA-5 · minor · The shop logo is missing on every page

- **Steps:** open any page; look at the brand logo in the menu bar.
- **Expected:** the Toolshop logo.
- **Actual:** the image is `broken.png`, which answers **404**; the same file is used on the product page.
- **Test:** `tests/ui/images.spec.ts` › no image on the home and product pages is missing (404)

## WQA-6 · major · Images without alt text and form controls without labels

- **Standard:** WCAG 2.2 SC 1.1.1 Non-text Content, SC 4.1.2 Name, Role, Value (axe rules `image-alt`, `label`,
  `select-name`, impact "critical").
- **Actual:** the logo and every product image have no `alt` (11 images on the home page); the search box and
  the sort select have no label. A screen reader announces them only as "image", "edit text" and "combo box".
- **Test:** `tests/a11y/axe.spec.ts` › images have alt text and form controls have labels

## WQA-7 · major · Icon-only buttons without an accessible name (both builds)

- **Standard:** WCAG 2.2 SC 4.1.2 (axe rule `button-name`, impact "critical").
- **Actual:** on the login page an icon button in the form (`.btn-outline-secondary` on the clean build, `.btn` on
  the bug build) has no name; on the bug build's product page the quantity buttons `#btn-decrease-quantity` and
  `#btn-increase-quantity` have none either. The clean build names them "Decrease quantity" and "Increase
  quantity".
- **Test:** `tests/a11y/axe.spec.ts` › buttons have accessible names

## WQA-8 · minor · Category filter lists contain other elements than `<li>` (both builds)

- **Standard:** WCAG 2.2 SC 1.3.1 Info and Relationships (axe rule `list`, impact "serious").
- **Actual:** the nested category lists in the filter (`.checkbox > ul`, two on the bug build, three on the clean
  build) hold elements other than `<li>` directly; screen readers may announce a wrong number of items.
- **Test:** `tests/a11y/axe.spec.ts` › lists contain only list items

## WQA-9 · minor · Text below the AA contrast ratio

- **Standard:** WCAG 2.2 SC 1.4.3 Contrast (Minimum), 4.5:1 for normal text.
- **Actual:** the red "Out of stock" labels on product cards and the footer links fail the ratio.
- **Test:** `tests/a11y/axe.spec.ts` › text has enough contrast

## WQA-10 · major · Registration: the labels "Country" and "State" are swapped

- **Steps:** open **Sign in** › **Register your account**; read the labels next to the state and country fields.
- **Expected:** "State" labels the state text field, "Country" labels the country select.
- **Actual:** the label "Country" belongs to the state field (`#state`), "State" to the country select. Users
  type the country into the state field; screen readers read the wrong names.
- **Test:** `tests/functional/forms.spec.ts` › registration: "Country" and "State" labels belong to their own fields

## WQA-11 · minor · No meta description and no canonical link

- **Expected:** a meta description of up to 160 characters and `<link rel="canonical">` (the clean build has both).
- **Actual:** neither exists on the bug build.
- **Test:** `tests/seo/seo.spec.ts` › the home page has a meta description and a canonical link

## WQA-12 · minor · Heading structure

- **Expected:** one `<h1>` per page: the shop name on the home page, the product name on a product page.
- **Actual:** the home page has no `<h1>`; a product page has two ("Combination Pliers" and "Reltded products").
- **Test:** `tests/seo/seo.spec.ts` › the home and product pages each have exactly one `<h1>`

## WQA-13 · minor · Every page has the same title

- **Expected:** the page title names the page ("Contact Us - …", "Login - …", the product name), as on the clean
  build.
- **Actual:** every page is "Practice Software Testing - Toolshop - v5.0 with bugs": browser tabs, bookmarks and
  search results cannot tell pages apart.
- **Test:** `tests/seo/seo.spec.ts` › pages have their own titles

## WQA-14 · minor · Contact subjects include error messages

- **Steps:** open Contact; open the **Subject** list.
- **Actual:** among real subjects are "Error 101: Subject not found" and "Error 202: Translation error".
- **Test:** `tests/functional/forms.spec.ts` › the contact form subjects are real topics, not error messages

## WQA-15 · minor · The language switcher is missing

- **Expected:** a language menu (the clean build offers EN, DE, ES, FR, NL, TR, EL and switches `lang`).
- **Actual:** no language switcher on the bug build.
- **Test:** `tests/functional/language.spec.ts` › the language switcher changes the interface to German and back

## WQA-16 · major · Login: Tab from the e-mail field jumps over the password field

- **Standard:** WCAG 2.2 SC 2.4.3 Focus Order.
- **Steps:** open the login page; click the e-mail field; type an address; press **Tab**.
- **Expected:** focus moves to the password field.
- **Actual:** focus moves to the **Login** button (`login-submit`). Keyboard users send the form without a
  password and have to go back with Shift+Tab.
- **Test:** `tests/a11y/keyboard.spec.ts` › the login form can be filled and sent with the keyboard only

## WQA-17 · minor · A search without results shows nothing

- **Steps:** search for `zzqx-no-such-tool`.
- **Expected:** a message that nothing was found (the clean build says so).
- **Actual:** an empty grid without any message; users cannot tell a failed search from a slow one.
- **Test:** `tests/functional/search-sort.spec.ts` › a search without results says so
