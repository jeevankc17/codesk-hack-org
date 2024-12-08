import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { BuilderFormData } from '../../types';

interface SocialLinksSectionProps {
  data: BuilderFormData;
}

export function SocialLinksSection({ data }: SocialLinksSectionProps) {
  const socialLinks = [
    { icon: Github, link: data.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, link: data.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, link: data.socialLinks.twitter, label: 'Twitter' },
    { icon: Globe, link: data.socialLinks.website, label: 'Website' },
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