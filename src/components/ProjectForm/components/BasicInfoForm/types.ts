import { ProjectFormData } from '../../types';

export interface BasicInfoFormProps {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
} 