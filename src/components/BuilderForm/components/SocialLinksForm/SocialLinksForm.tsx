import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { SocialLinksFormProps, SocialPlatform } from './types';

interface SocialInputProps {
  platform: SocialPlatform;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
  placeholder: string;
}

const SocialInput: React.FC<SocialInputProps> = ({
  platform,
  value,
  onChange,
  icon,
  placeholder
}) => (
  <div className="space-y-2">
    <Typography variant="h6" className="capitalize">
      {platform}
    </Typography>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        InputProps={{
          sx: { paddingLeft: '2.5rem' }
        }}
      />
    </div>
  </div>
);

const SocialLinksForm: React.FC<SocialLinksFormProps> = ({ formData, setFormData }) => {
  const handleSocialLinkChange = (platform: SocialPlatform, value: string) => {
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [platform]: value
      }
    });
  };

  return (
    <Box className="space-y-6">
      <SocialInput
        platform="github"
        value={formData.socialLinks.github}
        onChange={(value) => handleSocialLinkChange('github', value)}
        icon={<Github className="h-5 w-5 text-gray-400" />}
        placeholder="https://github.com/username"
      />

      <SocialInput
        platform="linkedin"
        value={formData.socialLinks.linkedin}
        onChange={(value) => handleSocialLinkChange('linkedin', value)}
        icon={<Linkedin className="h-5 w-5 text-gray-400" />}
        placeholder="https://linkedin.com/in/username"
      />

      <SocialInput
        platform="twitter"
        value={formData.socialLinks.twitter}
        onChange={(value) => handleSocialLinkChange('twitter', value)}
        icon={<Twitter className="h-5 w-5 text-gray-400" />}
        placeholder="https://twitter.com/username"
      />

      <SocialInput
        platform="website"
        value={formData.socialLinks.website}
        onChange={(value) => handleSocialLinkChange('website', value)}
        icon={<Globe className="h-5 w-5 text-gray-400" />}
        placeholder="https://your-website.com"
      />
    </Box>
  );
};

export default SocialLinksForm; 