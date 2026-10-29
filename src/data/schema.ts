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
    description: SITE.description,
    knowsAbout: [
      'Business systems integration',
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
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
}) {
  return {
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: new URL(a.path, SITE.url).href,
    mainEntityOfPage: new URL(a.path, SITE.url).href,
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    inLanguage: SITE.locale,
  };
}
