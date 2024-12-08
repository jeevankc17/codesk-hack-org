import React from 'react';
import { BuilderFormData } from '../../types';

interface AdditionalInfoSectionProps {
  data: BuilderFormData;
}

export function AdditionalInfoSection({ data }: AdditionalInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-500">Interests</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {data.interests.map((interest) => (
            <span 
              key={interest}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {data.dietaryRestrictions && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Dietary Restrictions</label>
          <p className="mt-1">{data.dietaryRestrictions}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-500">Emergency Contact</label>
        <div className="mt-2 space-y-2">
          <p>Name: {data.emergencyContact.name || 'Not provided'}</p>
          <p>Relationship: {data.emergencyContact.relationship || 'Not provided'}</p>
          <p>Phone: {data.emergencyContact.phone || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
} 