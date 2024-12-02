export const tabs = [
  { id: 'basics', label: 'BASICS' },
  { id: 'application', label: 'APPLICATION' },
  { id: 'links', label: 'LINKS' },
  { id: 'brand', label: 'BRAND' },
  { id: 'dates', label: 'DATES' },
  { id: 'partners', label: 'PARTNERS' },
  { id: 'prizes', label: 'PRIZES' },
  { id: 'speakers', label: 'SPEAKERS & JUDGES' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'faqs', label: 'FAQS' },
] as const;

export type TabId = (typeof tabs)[number]['id'];
