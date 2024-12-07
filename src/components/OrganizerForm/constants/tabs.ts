export type TabId = 'basic-info' | 'contact-info' | 'organization' | 'social-links';

export const tabs = [
  { id: 'basic-info', label: 'Basic Info' },
  { id: 'contact-info', label: 'Contact Info' },
  { id: 'organization', label: 'Organization' },
  { id: 'social-links', label: 'Social Links' },
] as const; 