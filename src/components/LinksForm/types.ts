export interface LinksFormData {
  websiteUrl: string;
  devfolioUrl: string;
  contactEmail: string;
  codeOfConductUrl: string;
  useDevfolioCodeOfConduct: boolean;
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