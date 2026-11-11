import { SITE } from './site';

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    jobTitle: SITE.jobTitle,
    homeLocation: {
      '@type': 'Place',
      name: 'Bangalore, India',
      address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
    },
    description: SITE.description,
    knowsAbout: [
      'Business systems integration',
      'ERP integration',
      'E-invoicing integration',
      'Website migration',
      'Business process automation',
      'AI implementation',
      'Custom software development',
      'Ecommerce integration',
      'ERP integration',
    ],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: SITE.locale,
    publisher: { '@id': PERSON_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}

export function serviceSchema(s: { name: string; description: string; path: string }) {
  return {
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: new URL(s.path, SITE.url).href,
    provider: { '@id': PERSON_ID },
    areaServed: SITE.markets.map((name) => ({ '@type': 'Country', name })),
  };
}

/** Questions and answers as shown on the page, for search engines and AI assistants. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  answer?: string;
  topic?: string;
  image?: string;
}) {
  return {
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    ...(a.answer ? { abstract: a.answer } : {}),
    ...(a.image ? { image: new URL(a.image, SITE.url).href } : {}),
    ...(a.topic ? { about: a.topic } : {}),
    url: new URL(a.path, SITE.url).href,
    mainEntityOfPage: new URL(a.path, SITE.url).href,
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    inLanguage: SITE.locale,
  };
}
