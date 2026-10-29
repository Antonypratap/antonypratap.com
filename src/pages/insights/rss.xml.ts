import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articles } from '../../data/content';
import { SITE } from '../../data/site';

export async function GET(context: APIContext) {
  const items = (await articles()).filter((a) => !a.data.draft);
  return rss({
    title: `${SITE.name}: Insights`,
    description: 'Practical guidance on systems integration, process automation and software decisions.',
    site: context.site ?? SITE.url,
    items: items.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.published,
      link: `/insights/${a.id}/`,
    })),
  });
}
