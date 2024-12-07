export interface BuilderFormData {
  // Basic Info
  name: string;
  email: string;
  phone: string;
  avatar: File | null;
  bio: string;
  gender: 'male' | 'female' | 'other';
  tShirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';

  // Education
  education: {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    graduationYear: number;
  };

  // Skills & Experience
  skills: string[];
  experience: string;
  resume: File | null;
  portfolioUrl: string;

  // Social Links
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };

  // Additional Info
  interests: string[];
  dietaryRestrictions: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface BuilderFormProps {
  initialData?: Partial<BuilderFormData>;
  onSubmit: (data: BuilderFormData) => void;
} 