import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const html = await readFile(join(process.cwd(), 'public/manus-routes.json'), 'utf8');
const data = JSON.parse(html);
/** @type {Array<{path: string}>} */
const routes = data.routes;
const bad = routes.filter((route) => !route.path.startsWith('/') || route.path.includes(' '));
if (bad.length) { console.error('Invalid route manifest entries:', bad); process.exit(1); }
console.log(`Route manifest OK: ${routes.length} routes`);
