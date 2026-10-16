import type { APIRoute } from 'astro';
import { allPages } from '../content/site';

const origin = (import.meta.env.PUBLIC_SITE_URL || 'https://rainfer.org').replace(/\/$/, '');
const paths = ['/', '/es', '/en', ...allPages.map((page) => `/es/${page.path}`), ...allPages.filter((page) => page.enPath).map((page) => `/en/${page.enPath}`)];
const unique = [...new Set(paths)];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${unique.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
