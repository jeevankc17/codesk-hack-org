import React from 'react';
import { InfoTooltip } from '../InfoTooltip';
import { ColorPicker } from './ColorPicker';
import { FileUpload } from './FileUpload';
import { BrandFormProps } from './types';

export function BrandForm({ data, onChange }: BrandFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            BRAND COLOR
          </label>
          <InfoTooltip text="Choose a color that best represents your hackathon. It will be used stylistically wherever your hackathon is shown." />
        </div>
        <ColorPicker
          value={data.brandColor}
          onChange={(color) => onChange({ brandColor: color })}
        />
      </div>

      <div className="space-y-8">
        <FileUpload
          id="logo"
          label="Hackathon Logo"
          description="Provide a png or jpeg files in the given sizes."
          dimensions="500x334 .png or .jpeg (5 MB max)"
          maxSize="5MB"
          onChange={(file) => onChange({ logo: file })}
        />

        <FileUpload
          id="favicon"
          label="Hackathon Favicon"
          description="Provide a png or jpeg files in the given sizes."
          dimensions="500x334 .png or .jpeg (5 MB max)"
          maxSize="5MB"
          onChange={(file) => onChange({ favicon: file })}
        />

        <FileUpload
          id="coverImage"
          label="Cover Image"
          description="This image will be shown on your hackathon's Devfolio microsite. Make sure you include some relevant information like dates, venue, logo, etc."
          dimensions="770x437 .png or .jpeg (5 MB max)"
          maxSize="5MB"
          onChange={(file) => onChange({ coverImage: file })}
        />
      </div>
    </div>
  );
}
