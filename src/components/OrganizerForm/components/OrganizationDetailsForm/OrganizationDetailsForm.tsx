import React, { useRef } from 'react';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { Upload } from 'lucide-react';
import { OrganizationDetailsFormProps } from './types';

export function OrganizationDetailsForm({ data, onChange }: OrganizationDetailsFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange({ logo: file });
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
            ORGANIZATION NAME
          </label>
          <InfoTooltip text="The official name of your organization." />
        </div>
        <input
          type="text"
          id="organizationName"
          value={data.organizationName}
          onChange={(e) => onChange({ organizationName: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Tech University"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700">
            ORGANIZATION TYPE
          </label>
          <InfoTooltip text="Select the type that best describes your organization." />
        </div>
        <select
          id="organizationType"
          value={data.organizationType}
          onChange={(e) => onChange({ organizationType: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="educational">Educational Institution</option>
          <option value="corporate">Corporate Organization</option>
          <option value="nonprofit">Non-Profit Organization</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            DESCRIPTION
          </label>
          <InfoTooltip text="Brief description of your organization and its mission." />
        </div>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your organization..."
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            WEBSITE
          </label>
          <InfoTooltip text="Your organization's official website." />
        </div>
        <input
          type="url"
          id="website"
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://www.example.com"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            ORGANIZATION LOGO
          </label>
          <InfoTooltip text="Upload your organization's logo. Recommended size: 512x512px" />
        </div>
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
        >
          {data.logo ? (
            <div className="flex items-center space-x-2">
              <img
                src={URL.createObjectURL(data.logo)}
                alt="Preview"
                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-gray-600">{data.logo.name}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-600">Click to upload logo</span>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="establishedYear" className="block text-sm font-medium text-gray-700">
              ESTABLISHED YEAR
            </label>
            <InfoTooltip text="Year when your organization was established." />
          </div>
          <input
            type="number"
            id="establishedYear"
            value={data.establishedYear}
            onChange={(e) => onChange({ establishedYear: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
              TEAM SIZE
            </label>
            <InfoTooltip text="Number of people in your organizing team." />
          </div>
          <input
            type="number"
            id="teamSize"
            value={data.teamSize}
            onChange={(e) => onChange({ teamSize: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="previousHackathons" className="block text-sm font-medium text-gray-700">
              PREVIOUS HACKATHONS
            </label>
            <InfoTooltip text="Number of hackathons organized previously." />
          </div>
          <input
            type="number"
            id="previousHackathons"
            value={data.previousHackathons}
            onChange={(e) => onChange({ previousHackathons: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            min="0"
          />
        </div>
      </div>
    </div>
  );
} 