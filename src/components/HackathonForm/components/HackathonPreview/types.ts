import { HackathonFormData } from '../../types';

export interface HackathonPreviewProps {
  formData: HackathonFormData;
  onSubmit: (data: HackathonFormData) => void;
  onBack: () => void;
} 