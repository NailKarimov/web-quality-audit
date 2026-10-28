import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';

/** WCAG 2.2 A and AA rules, the level EN 301 549 requires. */
export const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

export type Violation = { id: string; impact: string | null | undefined; nodes: string[] };

/** Runs axe-core (all WCAG A/AA rules, or only the given ones) and returns their violations with up to five targets each. */
export async function axeRules(page: Page, rules: string[]): Promise<Violation[]> {
  const builder = new AxeBuilder({ page }).withTags(WCAG_TAGS);
  const result = await (rules.length ? builder.withRules(rules) : builder).analyze();
  return result.violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.slice(0, 5).map((n) => n.target.join(' ')),
  }));
}
