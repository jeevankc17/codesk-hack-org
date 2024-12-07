import React from 'react';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { SocialLinkInput } from './SocialLinkInput';
import { SocialLinksFormProps } from './types';

export function SocialLinksForm({ data, onChange }: SocialLinksFormProps) {
  const handleSocialLinkChange = (
    platform: keyof typeof data.socialLinks,
    value: string
  ) => {
    onChange({
      socialLinks: {
        ...data.socialLinks,
        [platform]: value,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium text-gray-700">SOCIAL MEDIA PROFILES</h3>
        <InfoTooltip text="Add your organization's social media profiles to increase visibility and credibility." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SocialLinkInput
          id="linkedin"
          value={data.socialLinks.linkedin}
          onChange={(value) => handleSocialLinkChange('linkedin', value)}
        />
        <SocialLinkInput
          id="twitter"
          value={data.socialLinks.twitter}
          onChange={(value) => handleSocialLinkChange('twitter', value)}
        />
        <SocialLinkInput
          id="github"
          value={data.socialLinks.github}
          onChange={(value) => handleSocialLinkChange('github', value)}
        />
        <SocialLinkInput
          id="facebook"
          value={data.socialLinks.facebook}
          onChange={(value) => handleSocialLinkChange('facebook', value)}
        />
        <SocialLinkInput
          id="instagram"
          value={data.socialLinks.instagram}
          onChange={(value) => handleSocialLinkChange('instagram', value)}
        />
      </div>

      <div className="text-sm text-gray-500">
        <p>Note: Social media profiles are optional but recommended. They help establish your organization's presence and make it easier for participants to connect with you.</p>
      </div>
    </div>
  );
} 