import type { APIRoute } from 'astro';
import { IS_PRODUCTION, SITE } from '../data/site';

// Preview and development builds block all crawlers; production allows them and lists the sitemap.
export const GET: APIRoute = () => {
  const body = IS_PRODUCTION
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
