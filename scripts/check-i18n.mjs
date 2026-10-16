import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
const source = await readFile(join(process.cwd(), 'src/content/site.ts'), 'utf8');
const mirror = await readFile(join(process.cwd(), 'src/content/mirror.ts'), 'utf8');
const required = ['enTitle', 'enSummary', 'enBody', 'enPath'];
const missing = required.filter((key) => !source.includes(key));
if (missing.length) { console.error(`Missing localization fields: ${missing.join(', ')}`); process.exit(1); }
const es = (source.match(/path:/g) || []).length + (mirror.match(/path:/g) || []).length;
const en = (source.match(/enTitle:/g) || []).length;
console.log(`Localization source present: ${es} Spanish records / ${en} verified English titles; untranslated mirror pages remain Spanish-only.`);
