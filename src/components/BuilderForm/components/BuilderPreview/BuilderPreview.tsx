import React from 'react';
import { Box } from '@mui/material';
import { BasicInfoSection } from './BasicInfoSection';
import EducationSection from './EducationSection';

import { SkillsSection } from './SkillsSection';
import { SocialLinksSection } from './SocialLinksSection';
import { AdditionalInfoSection } from './AdditionalInfoSection';
import { BuilderFormData } from '../../types';

interface BuilderPreviewProps {
  data: BuilderFormData;
}

export function BuilderPreview({ data }: BuilderPreviewProps) {
  return (
    <Box className="max-w-4xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6 space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Builder Profile Preview</h2>
          <p className="text-gray-500">Preview how your profile will appear to hackathon organizers</p>
        </div>

        <BasicInfoSection data={data} />
        <EducationSection data={data} />
        <SkillsSection data={data} />
        <SocialLinksSection data={data} />
        <AdditionalInfoSection data={data} />
      </div>
    </Box>
  );
} 