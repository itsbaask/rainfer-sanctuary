import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, relative, extname, join, sep } from 'node:path';

const root = resolve('dist');
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else files.push(path);
  }
}
await walk(root);
const htmlFiles = files.filter((file) => extname(file) === '.html');
const references = [];
for (const file of files.filter((file) => ['.html', '.css', '.js', '.webmanifest'].includes(extname(file)))) {
  const source = await readFile(file, 'utf8');
  const attrPattern = /\b(?:href|src|action)\s*=\s*["']([^"']+)["']/gi;
  for (const match of source.matchAll(attrPattern)) references.push({ from: file, value: match[1] });
  if (extname(file) === '.css') {
    for (const match of source.matchAll(/url\(\s*["']?([^)"']+)["']?\s*\)/gi)) references.push({ from: file, value: match[1] });
  }
}
const missing = [];
for (const ref of references) {
  const value = ref.value.trim();
  if (!value.startsWith('/') || value.startsWith('//')) continue;
  const clean = decodeURIComponent(value.split(/[?#]/, 1)[0]);
  const target = resolve(root, '.' + clean);
  if (!target.startsWith(root + sep) && target !== root) continue;
  const candidates = [target, join(target, 'index.html'), target + '.html'];
  let exists = false;
  for (const candidate of candidates) {
    try { if ((await stat(candidate)).isFile()) { exists = true; break; } } catch {}
  }
  if (!exists) missing.push({ from: relative(root, ref.from), target: clean });
}
if (missing.length) {
  console.error('Missing local build targets:');
  for (const item of missing.slice(0, 80)) console.error(`- ${item.from} -> ${item.target}`);
  console.error(`Found ${missing.length} missing references across ${htmlFiles.length} HTML pages.`);
  process.exit(1);
}
console.log(`Build link audit passed: ${htmlFiles.length} HTML pages, ${references.length} local references checked.`);
