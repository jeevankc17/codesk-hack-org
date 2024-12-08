export interface LinksFormData {
  websiteUrl: string;
  codeskUrl?: string;
  contactEmail: string;
  codeOfConductUrl: string;
  useCodeOfConductUrl: boolean;
  socialLinks: {
    twitter: string;
    linkedin: string;
    discord: string;
    slack: string;
    hashnode: string;
    telegram: string;
    facebook: string;
    instagram: string;
  };
}

export interface LinksFormProps {
  data: LinksFormData;
  onChange: (data: Partial<LinksFormData>) => void;
}