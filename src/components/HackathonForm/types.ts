import { Partner } from './components/PartnersForm/types';
import { Track } from './components/PrizesForm/types';
import { ScheduleEvent } from './components/ScheduleForm/types';
import { FAQ } from './components/FAQsForm/types';
import { Speaker } from './components/SpeakersForm/types';

export interface DateTimeConfig {
  date: string;
  time: string;
}

export interface DatesConfig {
  timezone: string;
  applicationOpen: DateTimeConfig;
  applicationClose: DateTimeConfig;
  rsvpWithin: number;
  hackathonBegins: DateTimeConfig;
  submissionDeadline: DateTimeConfig;
}

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
  dates: DatesConfig;

  // Application form data
  selectedFields: string[];

  // Links form data
  websiteUrl: string;
  codeskUrl?: string;
  contactEmail: string;
  codeOfConductUrl: string;
  useCodeOfConductUrl: boolean;
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

  // Brand form data
  brandColor: string;
  logo: File | null;
  favicon: File | null;
  coverImage: File | null;

  // Partners form data
  partners: Partner[];
  addLater: boolean;

  // Tracks and prizes
  tracks: Track[];

  // Speakers
  speakers: Speaker[];

  // Schedule events
  events: ScheduleEvent[];

  // FAQs
  faqs: FAQ[];
}

export interface HackathonFormProps {
  onSubmit: (data: HackathonFormData) => void;
} 