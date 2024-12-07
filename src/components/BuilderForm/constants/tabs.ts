export const BUILDER_FORM_TABS = {
  BASIC_INFO: 'Basic Info',
  EDUCATION: 'Education',
  SKILLS: 'Skills & Experience',
  SOCIAL: 'Social Links',
  ADDITIONAL: 'Additional Info'
} as const;

export type BuilderFormTabs = typeof BUILDER_FORM_TABS[keyof typeof BUILDER_FORM_TABS]; 