export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization?: string;
  bio?: string;
  photo: File | null;
  linkedin?: string;
  twitter?: string;
  website?: string;
  socialLinks: {
    twitter?: string;
    farcaster?: string;
    linkedin?: string;
    instagram?: string;
  };
  isFeatured?: boolean;
}

export interface SpeakersFormProps {
  initialData: Speaker[];
  onChange: (speakers: Speaker[]) => void;
  onPrevious: () => void;
  onNext: () => void;
}
