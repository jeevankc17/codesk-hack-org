import React from 'react';
import { OrganizerFormData } from '../../types';

interface BasicInfoSectionProps {
  data: OrganizerFormData;
}

export function BasicInfoSection({ data }: BasicInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-500">Full Name</label>
          <p className="mt-1">{data.name || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Role</label>
          <p className="mt-1">{data.role || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Email</label>
          <p className="mt-1">{data.email || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Phone</label>
          <p className="mt-1">{data.phone || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
} 