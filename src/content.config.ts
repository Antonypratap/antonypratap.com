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
    relatedProjects: z.array(reference('projects')).default([]),
    relatedServices: z.array(reference('services')).default([]),
    faqs: z.array(faq).default([]),
    ctaLabel: z.string().default('Discuss a project'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    metaTitle: z.string().max(65),
    description: z.string().min(70).max(165),
    summary: z.string(),
    order: z.number(),
    /** Who owns it. Shown on every card and page; never inferred. */
    ownership: z.enum(['own-product', 'client', 'client-confidential']),
    ownershipLabel: z.string(),
    /** Only shown when confirmed. */
    status: z.string().optional(),
    pseudonym: z.boolean().default(false),
    services: z.array(reference('services')).default([]),
    tags: z.array(z.string()).default([]),
    /** Real screenshots only. Caption must say when the data shown is demo data. */
    screenshots: z.array(z.object({ src: image(), alt: z.string().min(20), caption: z.string() })).default([]),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
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
      'Operations',
    ]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Drafts are built only in development (npm run dev) and never published. */
    draft: z.boolean().default(false),
    relatedServices: z.array(reference('services')).default([]),
    relatedProjects: z.array(reference('projects')).default([]),
  }),
});

export const collections = { services, projects, insights };
