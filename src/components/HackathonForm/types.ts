import { FAQ } from './components/FAQsForm/types';
import { Track } from './components/PrizesForm/types';
import { ScheduleEvent } from './components/ScheduleForm/types';
import { Partner } from './components/PartnersForm/types';

export interface HackathonFormData {
  // Basics
  name: string;
  tagline: string;
  about: string;
  themes: string[];
  approxParticipants: number;
  minTeamSize: number;
  maxTeamSize: number;
  venue: string;

  // Dates
  timezone: string;
  applicationOpen: {
    date: string;
    time: string;
  };
  applicationClose: {
    date: string;
    time: string;
  };
  rsvpWithin: number;
  hackathonBegins: {
    date: string;
    time: string;
  };
  submissionDeadline: {
    date: string;
    time: string;
  };

  // Brand
  brandColor: string;
  logo: File | null;
  favicon: File | null;
  coverImage: File | null;

  // Links
  websiteUrl: string;
  devfolioUrl: string;
  contactEmail: string;
  codeOfConductUrl: string;
  useDevfolioCodeOfConduct: boolean;
  socialLinks: {
    twitter: string;
    linkedin: string;
    discord: string;
    slack: string;
    hashnode: string;
    telegram: string;
    facebook: string;
    instagram: string;
  };

  // Application
  selectedFields: string[];

  // Schedule
  events: ScheduleEvent[];

  // Prizes
  tracks: Track[];

  // FAQs
  faqs: FAQ[];

  // Partners
  partners: Partner[];
  addLater: boolean;
}

export interface HackathonFormProps {
  initialData?: Partial<HackathonFormData>;
  onSubmit: (data: HackathonFormData) => void;
} 