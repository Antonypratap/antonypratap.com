import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** Short name for cards and navigation. */
    shortTitle: z.string(),
    metaTitle: z.string().max(65),
    description: z.string().min(70).max(165),
    summary: z.string(),
    order: z.number(),
    problems: z.array(z.string()).min(3),
    scenarios: z.array(z.object({ title: z.string(), text: z.string() })).min(3),
    audiences: z.array(z.string()).min(2),
    relatedServices: z.array(reference('services')).default([]),
    faqs: z.array(faq).default([]),
    /** The engagement process, shown as numbered steps. */
    process: z.object({
      heading: z.string(),
      intro: z.string().optional(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })).min(3),
    }),
    ctaLabel: z.string().default('Discuss a project'),
  }),
});

const projects = defineCollection({
  // Files starting with "_" (such as _template.md) are not published.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    metaTitle: z.string().max(65),
    description: z.string().min(70).max(165),
    summary: z.string(),
    /** Optional outcome-led heading used where the project is featured. */
    headline: z.string().optional(),
    order: z.number(),
    /** Who owns it. Shown on every card and page; never inferred. */
    ownership: z.enum(['own-product', 'client', 'client-confidential']),
    ownershipLabel: z.string(),
    /** Only shown when confirmed. */
    status: z.string().optional(),
    pseudonym: z.boolean().default(false),
    /** Featured projects lead on the home page, service pages and footer. Keep it to the strongest few. */
    featured: z.boolean().default(false),
    /** The services this project is evidence for. Service pages list their projects from this. */
    services: z.array(reference('services')).min(1),
    /** Country pages this project is evidence for, by market file name (e.g. "uae"). Listed first there. */
    markets: z.array(reference('markets')).default([]),
    /** Industries the project belongs to, in plain words (e.g. "Fresh produce", "Hospitality"). */
    industries: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    /**
     * Client logo, shown in the home page "Worked with" strip and on the project page. Only with the
     * client's permission; never for confidential (pseudonym) clients.
     */
    logo: z.object({ src: image(), alt: z.string() }).optional(),
    /** Real screenshots only. Caption must say when the data shown is demo data. */
    screenshots: z.array(z.object({ src: image(), alt: z.string().min(20), caption: z.string() })).default([]),
  }),
});

const insights = defineCollection({
  // Files starting with "_" (such as _template.md) are not published.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(65).optional(),
    description: z.string().min(70).max(165),
    topic: z.enum([
      'Systems integration',
      'Process automation',
      'AI implementation',
      'Custom software',
      'Ecommerce integration',
      'Websites',
      'Operations',
    ]),
    /** Countries the article is written for, by market file name. Shown as a label and linked. */
    markets: z.array(reference('markets')).default([]),
    /**
     * A direct answer to the article's main question in 40-70 words, shown first as "In short".
     * Search engines and AI assistants quote passages like this, so make it complete on its own.
     */
    answer: z.string().min(150).max(520).optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Drafts are built only in development (npm run dev) and never published. */
    draft: z.boolean().default(false),
    relatedServices: z.array(reference('services')).default([]),
    relatedProjects: z.array(reference('projects')).default([]),
  }),
});

/**
 * Country pages (/uae/, /new-zealand/). Each must be genuinely useful to a business in that country:
 * local systems, rules and how the work runs from there. Never imply a local office or local clients
 * that do not exist.
 */
const markets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/markets' }),
  schema: z.object({
    country: z.string(),
    /** ISO 3166-1 alpha-2, for structured data. */
    countryCode: z.string().length(2),
    title: z.string(),
    metaTitle: z.string().max(65),
    description: z.string().min(70).max(165),
    summary: z.string(),
    order: z.number(),
    /** Business systems commonly used in this market, grouped. Names only, no claims of partnership. */
    systems: z.array(z.object({ group: z.string(), names: z.array(z.string()) })).default([]),
    /** Typical local projects, in the visitor's words. */
    needs: z.array(z.object({ title: z.string(), text: z.string() })).min(3),
    services: z.array(reference('services')).min(1),
    faqs: z.array(faq).default([]),
  }),
});

export const collections = { services, projects, insights, markets };
