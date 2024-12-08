import { OrganizerFormData } from '../../types';

export type OrganizationType = OrganizerFormData['organizationType'];

export interface OrganizationDetailsFormProps {
  data: Pick<OrganizerFormData, 
    'organizationName' | 
    'organizationType' | 
    'description' | 
    'website' | 
    'logo' | 
    'establishedYear' | 
    'teamSize' | 
    'previousHackathons' |
    'requiredSkills'
  >;
  onChange: (data: Partial<OrganizerFormData>) => void;
} 