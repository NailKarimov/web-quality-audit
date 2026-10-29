import { test } from '@playwright/test';
import type { BuildName } from '../builds';

/**
 * Defects found by this audit. Full bug reports: docs/findings.md and the repository Issues.
 *
 * A test that detects a defect calls `knownBug(id)`. On a build that has the defect, Playwright then
 * expects the test to fail: the run stays green and the report shows the defect id. If the defect is
 * fixed, the test passes unexpectedly and the run turns red, which is the signal to close the bug.
 * On a build without the defect (usually `clean`), the same test runs as a normal test and must pass.
 */
export const KNOWN_BUGS = {
  'WQA-1': { summary: 'The "Home" menu link opens the contact page', builds: ['bugs'] },
  'WQA-2': {
    summary: 'Spelling mistakes in the interface: Contakt, Serch, Sorth, Reltded products',
    builds: ['bugs'],
  },
  'WQA-3': {
    summary:
      'Sort directions are reversed: "Price (Low - High)" lists the most expensive first, "Name (A - Z)" starts at Z',
    builds: ['bugs'],
  },
  'WQA-4': { summary: 'A category link in the menu points to /category/undefined', builds: ['bugs'] },
  'WQA-5': { summary: 'The shop logo is missing on every page: broken.png answers 404', builds: ['bugs'] },
  'WQA-6': {
    summary: 'Images without alt text and form controls without labels (WCAG 1.1.1, 4.1.2)',
    builds: ['bugs'],
  },
  'WQA-7': {
    summary: 'Icon-only buttons without an accessible name (WCAG 4.1.2)',
    builds: ['bugs', 'clean'],
  },
  'WQA-8': {
    summary: 'Category filter lists put elements other than <li> directly inside <ul> (WCAG 1.3.1)',
    builds: ['bugs', 'clean'],
  },
  'WQA-9': {
    summary: 'Text below the AA contrast ratio: "Out of stock" labels and footer links (WCAG 1.4.3)',
    builds: ['bugs'],
  },
  'WQA-10': { summary: 'Registration form: the labels "Country" and "State" are swapped', builds: ['bugs'] },
  'WQA-11': { summary: 'No meta description and no canonical link', builds: ['bugs'] },
  'WQA-12': {
    summary: 'Heading structure: no <h1> on the home page, two on a product page',
    builds: ['bugs'],
  },
  'WQA-13': { summary: 'Every page has the same <title>', builds: ['bugs'] },
  'WQA-14': {
    summary:
      'Contact form subjects include "Error 101: Subject not found" and "Error 202: Translation error"',
    builds: ['bugs'],
  },
  'WQA-15': { summary: 'The language switcher is missing', builds: ['bugs'] },
  'WQA-16': {
    summary: 'Login form: Tab from the e-mail field does not move to the password field (WCAG 2.4.3)',
    builds: ['bugs'],
  },
  'WQA-17': { summary: 'A search without results shows an empty grid and no message', builds: ['bugs'] },
} as const satisfies Record<string, { summary: string; builds: readonly BuildName[] }>;

export type KnownBugId = keyof typeof KNOWN_BUGS;

/** Marks the current test as expected to fail on the builds that have this defect. */
export function knownBug(id: KnownBugId): void {
  const bug = KNOWN_BUGS[id];
  const build = test.info().project.name as BuildName;
  const description = `${id}: ${bug.summary}`;
  test.info().annotations.push({ type: 'defect', description });
  if ((bug.builds as readonly string[]).includes(build)) test.fail(true, description);
}
