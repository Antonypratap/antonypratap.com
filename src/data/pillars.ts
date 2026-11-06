/**
 * The home page's "what I do" summary: four plain-language verbs a visitor can take in at a glance.
 * Each links to the full service pages (by id) and, where useful, to the wider capabilities list.
 */
export const PILLARS = [
  {
    icon: 'connect',
    title: 'Connect',
    text: 'Make the systems you already use work together, so data is entered once and flows everywhere it is needed.',
    services: ['business-systems-integration', 'ecommerce-integration'],
    extra: [],
  },
  {
    icon: 'automate',
    title: 'Automate',
    text: 'Take repetitive checking, copying and chasing off your team, with people kept in control of decisions.',
    services: ['business-process-automation', 'ai-automation'],
    extra: [],
  },
  {
    icon: 'build',
    title: 'Build',
    text: 'Custom software, web and mobile apps, portals and platforms for the work off-the-shelf tools cannot do.',
    services: ['custom-software-development', 'website-migration-recovery'],
    extra: [{ label: 'Apps, websites and more', href: '/services/#capabilities' }],
  },
  {
    icon: 'advise',
    title: 'Advise',
    text: 'Clear requirements, the right technology choices and a delivery plan, before serious money is spent.',
    services: ['technology-consulting'],
    extra: [],
  },
] as const;

/** Things businesses typically ask for, in their own words. Shown in the hero. */
export const REQUESTS = [
  'Connect our website to our inventory',
  'Stop re-typing orders into the ERP',
  'Automate supplier invoice checks',
  'Build a customer or supplier portal',
  'Replace our spreadsheets with a real system',
  'A mobile app for our field team',
  'One reliable view of our numbers',
];
