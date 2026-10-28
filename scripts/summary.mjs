// Prints a Markdown summary of the run from allure-results: per build, the outcome of the last attempt
// of every test, and the first line of every failure.
import fs from 'node:fs';

const dir = 'allure-results';
const results = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('-result.json'))
  .map((f) => JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8')));

const latest = new Map();
for (const r of results) {
  const build = r.labels?.find((l) => l.name === 'parentSuite')?.value ?? '?';
  const key = `${build}|${r.fullName}`;
  if (!latest.has(key) || latest.get(key).stop < r.stop) latest.set(key, { ...r, build });
}

const rows = {};
const problems = [];
for (const r of latest.values()) {
  const row = (rows[r.build] ??= { passed: 0, failed: 0, skipped: 0 });
  if (r.status === 'passed') row.passed++;
  else if (r.status === 'skipped') row.skipped++;
  else {
    row.failed++;
    problems.push(`- **${r.build}** ${r.name}: ${(r.statusDetails?.message ?? '').split('\n')[0].slice(0, 200)}`);
  }
}

console.log('## Test run\n');
console.log('| Build | Passed | Failed | Skipped |');
console.log('| --- | --- | --- | --- |');
for (const [b, r] of Object.entries(rows)) console.log(`| ${b} | ${r.passed} | ${r.failed} | ${r.skipped} |`);
if (problems.length) console.log('\n### Failures\n\n' + problems.join('\n'));
