import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram,
  LucideIcon 
} from 'lucide-react';
import { OrganizerFormData } from '../../types';

type SocialPlatform = keyof OrganizerFormData['socialLinks'];

interface SocialLinkInputProps {
  id: SocialPlatform;
  value: string;
  onChange: (value: string) => void;
}

const socialIcons: Record<SocialPlatform, LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
};

const socialLabels: Record<SocialPlatform, string> = {
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  github: 'GitHub',
  facebook: 'Facebook',
  instagram: 'Instagram',
};

export function SocialLinkInput({ id, value, onChange }: SocialLinkInputProps) {
  const Icon = socialIcons[id];
  const label = socialLabels[id];

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="url"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder={`https://${id}.com/username`}
        />
      </div>
    </div>
  );
} 