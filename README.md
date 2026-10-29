# antonypratap.com

Personal business website and blog of Antony Pratap: business systems integration, process
automation, AI implementation and custom software for businesses in India and the UAE.

**Stack:** [Astro](https://astro.build) 7, static output, no client framework. Content is Markdown
in `src/content/`, validated against schemas in `src/content.config.ts`. One stylesheet
(`src/styles/global.css`), system fonts, no web fonts or images that block rendering.

## Develop

Requires Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321, drafts visible
npm test         # type check → build → verify the built site
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server; draft articles are shown with a "Draft" flag |
| `npm run check` | Astro and TypeScript checks, including content schemas (title and description lengths, references) |
| `npm run build` | Static site in `dist/` |
| `npm run verify` | Checks `dist/`: one H1 per page, unique titles and descriptions, canonicals, JSON-LD, internal links, alt text, sitemap coverage, blocked terms |
| `npm run preview` | Serves `dist/` locally |

## Content

| What | Where | URL |
|---|---|---|
| Services | `src/content/services/*.md` | `/services/<file-name>/` |
| Projects | `src/content/projects/*.md` | `/projects/<file-name>/` |
| Articles | `src/content/insights/*.md` | `/insights/<file-name>/` |
| Fixed pages | `src/pages/*.astro` | by file path |

**Publishing an article:** add a Markdown file to `src/content/insights/` with `draft: true`,
review it with `npm run dev`, then set `draft: false` and push. Published articles appear in the
index, the sitemap and the RSS feed (`/insights/rss.xml`). A file name becomes the URL, so do not
rename published files; if one must change, add a redirect in `public/_redirects`.

**Adding a project:** copy `src/content/projects/_template.md` to a new file and fill it in.
Nothing else needs editing. The project then appears automatically:

- on `/projects/` (grouped as own products or client work; service filters appear at 6+ projects);
- on every service page it lists under `services:` (featured first, up to 4, then a link to the rest);
- on the home page if it is among the strongest (`featured: true`; the first featured project with
  screenshots leads, followed by up to 4 others and a link to all projects);
- in the footer if featured (up to 4), and in the About page counts.

Keep `featured: true` for the few projects that best represent the work you want more of.

**Project rules** (enforced by the schema where possible): every project states its ownership
(`own-product`, `client`, `client-confidential`); status is shown only when confirmed; a
pseudonym is labelled as one. See `CONTENT-REVIEW.md` for facts awaiting confirmation.

## Hosting and previews

Built for Cloudflare Pages (Vercel also works with no changes):

- Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=24`.
- Pushes to `main` deploy production; every other branch and pull request gets a preview URL.
- Preview builds are automatically `noindex` with a blocking `robots.txt` (`IS_PRODUCTION` in
  `src/data/site.ts`), so previews never compete with the real site in search.

Configuration (public values, set in the hosting dashboard; see `.env.example`):
`PUBLIC_FORM_ENDPOINT` (enquiry form; the form is disabled until it is set),
`PUBLIC_FORM_ACCESS_KEY`, `PUBLIC_PLAUSIBLE_DOMAIN` or `PUBLIC_GA4_ID`, `PUBLIC_GSC_VERIFICATION`.

**Conversion tracking:** `cta_click` (every call-to-action, with its location) and
`enquiry_submitted` (successful form submission, with country) are sent to whichever analytics
provider is configured.

## SEO foundations

Unique titles and descriptions per page, canonical URLs with trailing slashes, XML sitemap
(`/sitemap-index.xml`), `robots.txt`, Open Graph and Twitter cards, JSON-LD (Person, WebSite,
BreadcrumbList, Service, BlogPosting), RSS, accessible navigation (skip link, keyboard focus,
works without JavaScript).
