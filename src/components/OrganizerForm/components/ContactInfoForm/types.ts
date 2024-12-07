import { OrganizerFormData } from '../../types';

export interface ContactInfoFormProps {
  data: Pick<OrganizerFormData, 'address'>;
  onChange: (data: Partial<OrganizerFormData>) => void;
} 