import React from 'react';
import { OrganizerFormData } from '../../types';

interface OrganizationSectionProps {
  data: OrganizerFormData;
}

export function OrganizationSection({ data }: OrganizationSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Organization Details</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          {data.logo && (
            <img 
              src={URL.createObjectURL(data.logo)} 
              alt="Organization Logo" 
              className="w-16 h-16 object-contain"
            />
          )}
          <div>
            <h4 className="text-xl font-medium">{data.organizationName}</h4>
            <p className="text-gray-500">{data.organizationType}</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">Description</label>
          <p className="mt-1">{data.description || 'No description provided'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Established</label>
            <p className="mt-1">{data.establishedYear}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Team Size</label>
            <p className="mt-1">{data.teamSize} members</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Previous Hackathons</label>
            <p className="mt-1">{data.previousHackathons}</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">Required Skills</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.requiredSkills.map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 