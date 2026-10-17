import type { APIRoute } from 'astro';
import { allPages } from '../content/site';

const origin = (import.meta.env.PUBLIC_SITE_URL || 'https://rainfer.org').replace(/\/$/, '');
const canonicalSpanish = new Set(allPages.map((page) => page.path.replace(/^\/+|\/+$/g, '')));
const legacyAliases = allPages.flatMap((page) => {
  if (!page.sourceFile) return [];
  const alias = page.sourceFile
    .replace(/\/index\.html$/i, '')
    .replace(/\.html$/i, '')
    .replace(/^\/+|\/+$/g, '');
  const isNonPageEndpoint = /(^|\/)(wp-content|wp-admin|wp-json|author|comments|feed)(\/|$)/i.test(alias) || /(^|\/)feed$/i.test(alias);
  return alias && !/[?#]/.test(alias) && alias !== 'index.html' && !isNonPageEndpoint && !canonicalSpanish.has(alias) ? [`/es/${alias}`] : [];
});
const paths = ['/', '/es', '/en', ...allPages.map((page) => `/es/${page.path}`), ...allPages.filter((page) => page.enPath).map((page) => `/en/${page.enPath}`), ...legacyAliases];
const unique = [...new Set(paths)];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${unique.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
