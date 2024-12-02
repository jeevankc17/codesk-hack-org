export interface BasicsFormData {
  name: string;
  tagline: string;
  about: string;
  themes: string[];
  approxParticipants: number;
  minTeamSize: number;
  maxTeamSize: number;
  venue: string;
}

export interface BasicsFormProps {
  data: BasicsFormData;
  onChange: (data: Partial<BasicsFormData>) => void;
}
