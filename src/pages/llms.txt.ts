import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { services, projects, articles } from '../data/content';

/**
 * /llms.txt: a plain-language map of the site for AI assistants (llmstxt.org convention).
 * Generated from the same content as the pages, so it never drifts from them.
 */
export const GET: APIRoute = async () => {
  const url = (path: string) => new URL(path, SITE.url).href;
  const allServices = await services();
  const allProjects = await projects();
  const allArticles = (await articles()).filter((a) => !a.data.draft);
  const markets = (await getCollection('markets')).sort((a, b) => a.data.order - b.data.order);

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Antony Pratap is a technology entrepreneur and implementation partner based in Bangalore, India.',
    'He works hybrid: delivery happens remotely day to day, with site visits when a project needs them.',
    'He works with businesses in India, the United Arab Emirates, New Zealand and other countries,',
    'acting as one accountable partner from requirements to a working system, using business analysis,',
    'solution architecture, AI-assisted development, and developers and specialists as the work requires.',
    'Confidential clients are described under clearly marked pseudonyms; no results are claimed that',
    'have not been measured.',
    '',
    '## Services',
    '',
    ...allServices.map((s) => `- [${s.data.title}](${url(`/services/${s.id}/`)}): ${s.data.summary}`),
    '',
    '## Countries',
    '',
    ...markets.map((m) => `- [${m.data.title}](${url(`/${m.id}/`)}): ${m.data.summary}`),
    '',
    '## Projects and products',
    '',
    ...allProjects.map(
      (p) =>
        `- [${p.data.title}](${url(`/projects/${p.id}/`)}): ${p.data.ownershipLabel}${p.data.status ? `, ${p.data.status.toLowerCase()}` : ''}. ${p.data.summary}`,
    ),
    '',
    '## Articles',
    '',
    ...allArticles.map((a) => `- [${a.data.title}](${url(`/insights/${a.id}/`)}): ${a.data.description}`),
    '',
    '## Contact',
    '',
    `- [Discuss a project](${url('/contact/')}): describe the business problem; no technical specification is needed.`,
    `- [About Antony Pratap](${url('/about/')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
