// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://antonypratap.com';

/**
 * Last-modified dates for articles, read from their front matter (updated, else published), so the
 * sitemap tells search engines when an article is new or changed. Other pages carry no date rather
 * than an invented one.
 */
function articleDates() {
  const dir = new URL('./src/content/insights/', import.meta.url);
  /** @type {Map<string, string>} */
  const dates = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const text = readFileSync(new URL(file, dir), 'utf8');
    const front = text.split('---')[1] ?? '';
    if (/^draft:\s*true/m.test(front)) continue;
    const date = (front.match(/^updated:\s*(\S+)/m) ?? front.match(/^published:\s*(\S+)/m))?.[1];
    if (date) dates.set(`${SITE}/insights/${file.replace(/\.md$/, '')}/`, new Date(date).toISOString());
  }
  return dates;
}
const lastmod = articleDates();

export default defineConfig({
  site: SITE,
  // Every page is served as /path/ (a folder with index.html): one URL per page.
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory', assets: 'assets' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thanks/') && !page.includes('/404'),
      serialize: (item) => (lastmod.has(item.url) ? { ...item, lastmod: lastmod.get(item.url) } : item),
    }),
  ],
});
