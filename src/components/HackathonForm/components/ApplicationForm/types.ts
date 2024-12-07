export interface FormField {
  id: string;
  label: string;
  section: 'about' | 'education' | 'experience' | 'online_profiles' | 'contact';
  required?: boolean;
}

export interface ApplicationFormData {
  selectedFields: string[];
}

export interface ApplicationFormProps {
  data: ApplicationFormData;
  onChange: (data: Partial<ApplicationFormData>) => void;
}