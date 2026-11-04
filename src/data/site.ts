export const SITE = {
  name: 'Antony Pratap',
  url: 'https://antonypratap.com',
  title: 'Antony Pratap: Business Systems Integration and Automation',
  description:
    'I help businesses streamline operations by connecting systems, automating manual work and building software and apps. For the UAE, New Zealand and beyond.',
  jobTitle: 'Business systems integration and implementation partner',
  locale: 'en',
  // Countries the site is written for (structured data areaServed). Not office locations.
  markets: ['United Arab Emirates', 'New Zealand', 'Australia', 'Saudi Arabia', 'Singapore', 'India'],
  // Add profile URLs here once confirmed (LinkedIn, GitHub). Used in the footer and structured data.
  sameAs: [] as string[],
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/insights/', label: 'Insights' },
  { href: '/about/', label: 'About' },
];

export const CTA = { href: '/contact/', label: 'Discuss a project' };

/**
 * Set at build time. Only production builds may be indexed: Vercel sets VERCEL_ENV, Cloudflare
 * Pages sets CF_PAGES_BRANCH. Elsewhere a production build is assumed indexable.
 */
const PRODUCTION_BRANCH = 'main';
export const IS_PRODUCTION =
  import.meta.env.PROD &&
  (process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === 'production'
    : process.env.CF_PAGES_BRANCH
      ? process.env.CF_PAGES_BRANCH === PRODUCTION_BRANCH
      : true);

export const ENV = {
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  formAccessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY || '',
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || '',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
};
