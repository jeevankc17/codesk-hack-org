export type TabId =
  | 'basics'
  | 'application'
  | 'dates'
  | 'links'
  | 'brand'
  | 'partners'
  | 'prizes'
  | 'speakers'
  | 'schedule'
  | 'faqs';

export const tabs = [
  { id: 'basics', label: 'Basics' },
  { id: 'application', label: 'Application' },
  { id: 'dates', label: 'Dates' },
  { id: 'links', label: 'Links' },
  { id: 'brand', label: 'Brand' },
  { id: 'partners', label: 'Partners' },
  { id: 'prizes', label: 'Prizes' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'faqs', label: 'FAQs' },
] as const; 