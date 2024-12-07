import { OrganizerFormData } from '../../types';

export interface BasicInfoFormProps {
  data: Pick<OrganizerFormData, 'name' | 'email' | 'phone' | 'role'>;
  onChange: (data: Partial<OrganizerFormData>) => void;
} 