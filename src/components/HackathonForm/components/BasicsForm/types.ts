import { HackathonFormData } from '../../types';

export interface BasicsFormProps {
  data: Pick<HackathonFormData, 'name' | 'tagline' | 'about' | 'themes' | 'approxParticipants' | 'minTeamSize' | 'maxTeamSize' | 'venue'>;
  onChange: (data: Partial<HackathonFormData>) => void;
} 