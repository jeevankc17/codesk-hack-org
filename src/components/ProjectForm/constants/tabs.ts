export const PROJECT_FORM_TABS = {
  BASIC_INFO: 'Basic Info',
  DETAILS: 'Details',
  MEDIA: 'Media & Links',
  PREVIEW: 'Preview'
} as const;

export type ProjectFormTabs = typeof PROJECT_FORM_TABS[keyof typeof PROJECT_FORM_TABS]; 