import React from 'react';
import { OrganizerFormData } from '../../types';

interface ContactInfoSectionProps {
  data: OrganizerFormData;
}

export function ContactInfoSection({ data }: ContactInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-500">Address</label>
          <p className="mt-1">
            {data.address.street}<br />
            {data.address.city}, {data.address.state} {data.address.zipCode}<br />
            {data.address.country}
          </p>
        </div>
      </div>
    </div>
  );
} 