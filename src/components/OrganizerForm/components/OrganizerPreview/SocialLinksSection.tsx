import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { OrganizerFormData } from '../../types';

interface SocialLinksSectionProps {
  data: OrganizerFormData;
}

export function SocialLinksSection({ data }: SocialLinksSectionProps) {
  const socialLinks = [
    { icon: Linkedin, link: data.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, link: data.socialLinks.twitter, label: 'Twitter' },
    { icon: Github, link: data.socialLinks.github, label: 'GitHub' },
    { icon: Facebook, link: data.socialLinks.facebook, label: 'Facebook' },
    { icon: Instagram, link: data.socialLinks.instagram, label: 'Instagram' },
  ];

  const activeSocialLinks = socialLinks.filter(link => link.link);

  if (activeSocialLinks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Social Links</h3>
      <div className="flex flex-wrap gap-4">
        {activeSocialLinks.map(({ icon: Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
} 