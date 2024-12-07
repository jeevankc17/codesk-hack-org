import { ProjectFormData } from '../../types';

export interface DetailsFormProps {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
} 