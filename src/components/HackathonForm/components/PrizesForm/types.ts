export interface Prize {
  id: string;
  name: string;
  description: string;
  value: string;
}

export interface Track {
  id: string;
  name: string;
  description: string;
  prizes: Prize[];
}

export interface PrizesFormData {
  tracks: Track[];
}
