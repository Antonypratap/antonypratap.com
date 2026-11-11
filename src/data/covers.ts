/** Cover illustration kinds, one per type of work. Used on cards, page heads and sharing images. */
export type CoverKind =
  | 'integration'
  | 'automation'
  | 'ai'
  | 'software'
  | 'ecommerce'
  | 'websites'
  | 'operations'
  | 'migration'
  | 'consulting';

export const COVER_KINDS: CoverKind[] = [
  'integration',
  'automation',
  'ai',
  'software',
  'ecommerce',
  'websites',
  'operations',
  'migration',
  'consulting',
];

const BY_TOPIC: Record<string, CoverKind> = {
  'Systems integration': 'integration',
  'Process automation': 'automation',
  'AI implementation': 'ai',
  'Custom software': 'software',
  'Ecommerce integration': 'ecommerce',
  Websites: 'websites',
  Operations: 'operations',
};

const BY_SERVICE: Record<string, CoverKind> = {
  'business-systems-integration': 'integration',
  'business-process-automation': 'automation',
  'ai-automation': 'ai',
  'custom-software-development': 'software',
  'ecommerce-integration': 'ecommerce',
  'technology-consulting': 'consulting',
  'website-migration-recovery': 'migration',
};

export const coverForTopic = (topic: string): CoverKind => BY_TOPIC[topic] ?? 'integration';
export const coverForService = (id: string): CoverKind => BY_SERVICE[id] ?? 'integration';
