import React from 'react';
import { BasicInfoSection } from './BasicInfoSection';
import { ContactInfoSection } from './ContactInfoSection';
import { OrganizationSection } from './OrganizationSection';
import { SocialLinksSection } from './SocialLinksSection';
import { OrganizerFormData } from '../../types';

interface OrganizerPreviewProps {
  data: OrganizerFormData;
}

export function OrganizerPreview({ data }: OrganizerPreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6 space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Organization Profile Preview</h2>
          <p className="text-gray-500">Preview how your organization profile will appear to others</p>
        </div>

        <BasicInfoSection data={data} />
        <ContactInfoSection data={data} />
        <OrganizationSection data={data} />
        <SocialLinksSection data={data} />
      </div>
    </div>
  );
} 