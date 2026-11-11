import type { APIRoute } from 'astro';
import { IS_PRODUCTION, SITE } from '../data/site';

/**
 * Search and AI assistants that may read and cite the site. Allowed explicitly, so a stricter default
 * elsewhere (for example a hosting provider's AI-bot setting) is easy to spot as the cause of a block.
 */
const AI_AGENTS = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'DuckAssistBot',
  'meta-externalagent',
  'MistralAI-User',
  'CCBot',
];

// Preview and development builds block all crawlers; production allows them and lists the sitemap.
export const GET: APIRoute = () => {
  const body = IS_PRODUCTION
    ? [
        '# Search engines and AI assistants are welcome to read and cite this site.',
        `# A plain-text summary for language models: ${SITE.url}/llms.txt`,
        '',
        ...AI_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${SITE.url}/sitemap-index.xml`,
        '',
      ].join('\n')
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
