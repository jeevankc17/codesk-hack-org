import { BuilderFormData } from '../../types';

export interface SocialLinksFormProps {
  formData: BuilderFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuilderFormData>>;
}

export type SocialPlatform = keyof BuilderFormData['socialLinks']; 