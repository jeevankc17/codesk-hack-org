import { BuilderFormData } from '../../types';

export interface BasicInfoFormProps {
  formData: BuilderFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuilderFormData>>;
} 