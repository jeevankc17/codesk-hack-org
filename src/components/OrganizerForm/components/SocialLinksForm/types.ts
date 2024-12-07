import { OrganizerFormData } from '../../types';

export interface SocialLinksFormProps {
  data: Pick<OrganizerFormData, 'socialLinks'>;
  onChange: (data: Partial<OrganizerFormData>) => void;
} 