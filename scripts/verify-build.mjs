// Checks the built site in dist/: one H1 per page, unique titles and descriptions, canonical
// URLs, valid JSON-LD, internal links that resolve, alt text on images, sitemap coverage and
// (optionally) terms that must never be published, such as a confidential client's real name.
//
// BLOCKED_TERMS: comma-separated, set in the CI or hosting environment, never committed.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://antonypratap.com';
const blocked = (process.env.BLOCKED_TERMS ?? '')
  .split(',')
  .map((t) => t.trim().toLowerCase())
  .filter(Boolean);

const errors = [];
const fail = (file, message) => errors.push(`${file}: ${message}`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
// Text files for machines (llms.txt, robots.txt, sitemaps, RSS) must not leak blocked terms either.
for (const file of files.filter((f) => /\.(txt|xml)$/.test(f))) {
  const text = readFileSync(file, 'utf8').toLowerCase();
  for (const term of blocked) if (text.includes(term)) fail(relative(DIST, file), 'contains a blocked term');
}
const titles = new Map();
const descriptions = new Map();

const attr = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const urlPathFor = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '');

function resolves(href) {
  const path = decodeURI(href.split('#')[0].split('?')[0]);
  if (path === '') return true;
  const target = join(DIST, path);
  return (
    (path.endsWith('/') && existsSync(join(target, 'index.html'))) ||
    (!path.endsWith('/') && existsSync(target) && statSync(target).isFile())
  );
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(DIST, file);
  const path = urlPathFor(file);
  const noindex = /<meta name="robots" content="noindex/.test(html);

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(rel, `expected one <h1>, found ${h1s.length}`);

  const title = attr(html, /<title>([^<]*)<\/title>/g)[0];
  const description = attr(html, /<meta name="description" content="([^"]*)"/g)[0];
  if (!title) fail(rel, 'missing <title>');
  if (!description) fail(rel, 'missing meta description');
  if (title && title.length > 70) fail(rel, `title is ${title.length} characters (max 70)`);
  if (!noindex) {
    if (titles.has(title)) fail(rel, `duplicate title with ${titles.get(title)}`);
    if (descriptions.has(description)) fail(rel, `duplicate description with ${descriptions.get(description)}`);
    titles.set(title, rel);
    descriptions.set(description, rel);
  }

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/g)[0];
  if (rel !== '404.html' && canonical !== SITE + path) fail(rel, `canonical ${canonical} should be ${SITE + path}`);

  for (const json of attr(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch {
      fail(rel, 'invalid JSON-LD');
    }
  }

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt="/.test(img)) fail(rel, `image without alt text: ${img.slice(0, 80)}`);
  }

  for (const href of attr(html, /<a\b[^>]*\bhref="([^"]*)"/g)) {
    if (href.startsWith(SITE)) fail(rel, `absolute link to own site (use a relative path): ${href}`);
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (!resolves(href)) fail(rel, `broken internal link: ${href}`);
    const page = href.split('#')[0].split('?')[0];
    if (page && !page.endsWith('/') && !/\.[a-z0-9]+$/i.test(page)) fail(rel, `link without trailing slash: ${href}`);
  }

  const text = html.toLowerCase();
  for (const term of blocked) if (text.includes(term)) fail(rel, 'contains a blocked term');
}

const sitemap = readdirSync(DIST)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .map((f) => readFileSync(join(DIST, f), 'utf8'))
  .join('');
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const indexable = !/<meta name="robots" content="noindex/.test(html) && !file.endsWith('404.html');
  const inSitemap = sitemap.includes(`<loc>${SITE}${urlPathFor(file)}</loc>`);
  if (indexable && !inSitemap) fail(relative(DIST, file), 'indexable page missing from sitemap');
  if (!indexable && inSitemap) fail(relative(DIST, file), 'noindex page listed in sitemap');
}

for (const required of ['robots.txt', 'llms.txt', 'sitemap-index.xml', 'og-default.png', 'favicon.svg', 'insights/rss.xml']) {
  if (!existsSync(join(DIST, required))) errors.push(`missing ${required}`);
}

if (errors.length) {
  console.error(`verify-build: ${errors.length} problem(s)\n` + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`verify-build: ${pages.length} pages OK${blocked.length ? `, ${blocked.length} blocked term(s) checked` : ''}`);
