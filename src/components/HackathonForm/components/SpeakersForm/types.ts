export interface SocialLinks {
  twitter?: string;
  farcaster?: string;
  linkedin?: string;
  instagram?: string;
}

export interface Speaker {
  id: string;
  name: string;
  jobTitle: string;
  company?: string;
  website?: string;
  socialLinks: SocialLinks;
  about?: string;
  isFeatured: boolean;
  picture?: File;
  type: 'speaker' | 'judge';
}

export interface SpeakersFormData {
  speakers: Speaker[];
}
