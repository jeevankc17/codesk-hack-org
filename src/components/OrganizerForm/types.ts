export interface OrganizerFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  organizationName: string;
  organizationType: 'educational' | 'corporate' | 'nonprofit' | 'other';
  description: string;
  website: string;
  logo: File | null;
  establishedYear: number;
  teamSize: number;
  previousHackathons: number;
  requiredSkills: string[];
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}

export interface OrganizerFormProps {
  initialData?: Partial<OrganizerFormData>;
  onSubmit: (data: OrganizerFormData) => void;
} 