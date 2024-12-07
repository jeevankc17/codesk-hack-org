import { HackathonFormData } from '../../types';

export interface DatesFormProps {
  data: Pick<HackathonFormData, 'timezone' | 'applicationOpen' | 'applicationClose' | 'rsvpWithin' | 'hackathonBegins' | 'submissionDeadline'>;
  onChange: (data: Partial<HackathonFormData>) => void;
}
