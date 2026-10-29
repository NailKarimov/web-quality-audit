import { test, expect } from '../../src/fixtures';
import { knownBug } from '../../src/support/known-bugs';
import { axeRules } from '../../src/support/axe';

test.describe('Accessibility (axe-core, WCAG 2.2 AA)', () => {
  test('images have alt text and form controls have labels', async ({ shop, page }) => {
    knownBug('WQA-6');
    const found = [];
    const rules = ['image-alt', 'label', 'select-name'];
    for (const v of await axeRules(page, rules)) found.push({ page: 'home', ...v });
    await shop.go('/auth/login');
    for (const v of await axeRules(page, rules)) found.push({ page: 'login', ...v });
    await shop.openFirstProduct();
    for (const v of await axeRules(page, rules)) found.push({ page: 'product', ...v });
    expect(found).toEqual([]);
  });

  test('buttons have accessible names', async ({ shop, page }) => {
    knownBug('WQA-7');
    const found = [];
    await shop.go('/auth/login');
    for (const v of await axeRules(page, ['button-name'])) found.push({ page: 'login', ...v });
    await shop.openFirstProduct();
    for (const v of await axeRules(page, ['button-name'])) found.push({ page: 'product', ...v });
    expect(found).toEqual([]);
  });

  test('lists contain only list items', async ({ shop, page }) => {
    knownBug('WQA-8');
    void shop;
    expect(await axeRules(page, ['list', 'listitem'])).toEqual([]);
  });

  test('text has enough contrast', async ({ shop, page }) => {
    knownBug('WQA-9');
    void shop;
    expect(await axeRules(page, ['color-contrast'])).toEqual([]);
  });
});
