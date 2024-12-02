export interface Partner {
  id: string;
  name: string;
  logo: File | null;
  website: string;
  type: 'title' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'other';
}

export interface PartnersFormData {
  partners: Partner[];
  addLater: boolean;
}

export interface PartnersFormProps {
  data: PartnersFormData;
  onChange: (data: Partial<PartnersFormData>) => void;
}