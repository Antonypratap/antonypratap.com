# Being found and cited by search engines and AI assistants

How the site is set up for traditional search and for AI answers (Google AI Overviews, ChatGPT
search, Perplexity, Claude, Copilot, Gemini), and what has to happen outside the site.

## Built into the site

| What | Where | Why it matters |
|---|---|---|
| AI crawlers explicitly allowed | `/robots.txt` (`src/pages/robots.txt.ts`) | Assistants can only cite pages they are allowed to read |
| Plain-text site summary | `/llms.txt` (`src/pages/llms.txt.ts`), generated from the content | A clean, current map of services, projects and articles for language models |
| Direct answers first | `answer:` in each article, shown as "In short" | Assistants quote short, self-contained answers |
| Question-and-answer data | `FAQPage` JSON-LD on service and country pages | Machine-readable answers to the questions buyers ask |
| Entity data | `Person` (Bangalore, India; areas of expertise), `Service`, `BlogPosting`, `BreadcrumbList` JSON-LD | Helps engines understand who offers what, where |
| Fast, static HTML | Astro static build on Cloudflare | Crawlers read full content without running JavaScript |
| Sitemap with article dates | `/sitemap-index.xml`, `/sitemap.xml` | Discovery and freshness |

**Writing rule for new articles:** fill in `answer:` (40 to 70 words that fully answer the title's
question), use question-style headings where natural, and state facts plainly with sources.

## Settings to check (owner)

1. **Cloudflare AI bot blocking.** Cloudflare can block AI crawlers by default. In Cloudflare:
   antonypratap.com → **AI Crawl Control** (or Security → Bots): make sure AI crawlers are
   **allowed**, "Block AI bots" is **off**, and Cloudflare's **managed robots.txt** is **off** (it would
   add Disallow rules for AI crawlers).
2. **Crawler Hints** (Caching → Configuration): turn **on**. It notifies search engines (IndexNow)
   when pages change.
3. **Google Search Console**: verify the domain and submit `sitemap-index.xml`.
4. **Bing Webmaster Tools** (bing.com/webmasters): import from Google Search Console. ChatGPT search
   and Copilot draw on Bing's index.

## Outside the site (owner; the biggest factor for AI recommendations)

AI assistants recommend businesses that other sources mention consistently.

- **Google Business Profile** for Antony Pratap, Bangalore (service-area business, no public address
  needed): category such as "Software company" or "Business management consultant", website link,
  services, photos.
- **LinkedIn**: profile headline and About section matching the site's positioning; post articles
  from the site. Add the profile URL to `SITE.sameAs` in `src/data/site.ts`.
- **Directories**: Clutch, GoodFirms, DesignRush (UAE and India categories), with the same name,
  description and website.
- **Third-party mentions**: guest articles, podcast or event appearances, answers on relevant
  communities that link to the site's guides.
- **Consistency**: same name, one-line description and website everywhere.

## Measuring

In analytics, watch referrals from `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`,
`gemini.google.com` and `claude.ai`, and ask enquirers how they found the site (the contact form's
free text).
