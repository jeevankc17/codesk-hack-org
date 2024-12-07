import { ProjectFormData } from '../../types';

export interface MediaLinksFormProps {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
}

export type FileUploadType = 'coverImage' | 'logo' | 'pictures'; 