// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://antonypratap.com',
  // Every page is served as /path/ (a folder with index.html): one URL per page.
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thanks/') && !page.includes('/404'),
    }),
  ],
});
