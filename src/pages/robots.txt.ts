import type { APIRoute } from 'astro';

const origin = (import.meta.env.PUBLIC_SITE_URL || 'https://rainfer.org').replace(/\/$/, '');
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
