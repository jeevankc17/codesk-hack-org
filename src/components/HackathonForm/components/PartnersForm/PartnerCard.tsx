import React from 'react';
import { X } from 'lucide-react';
import { Partner } from './types';

interface PartnerCardProps {
  partner: Partner;
  onRemove: () => void;
  onEdit: (updates: Partial<Partner>) => void;
}

export function PartnerCard({ partner, onRemove, onEdit }: PartnerCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <input
            type="text"
            value={partner.name}
            onChange={(e) => onEdit({ name: e.target.value })}
            placeholder="Partner Name"
            className="text-sm font-medium text-gray-900 border-none p-0 focus:ring-0"
          />
          <input
            type="url"
            value={partner.website}
            onChange={(e) => onEdit({ website: e.target.value })}
            placeholder="Website URL"
            className="text-sm text-gray-500 border-none p-0 focus:ring-0"
          />
        </div>
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        <select
          value={partner.type}
          onChange={(e) => onEdit({ type: e.target.value as Partner['type'] })}
          className="block w-full border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="title">Title Sponsor</option>
          <option value="platinum">Platinum Sponsor</option>
          <option value="gold">Gold Sponsor</option>
          <option value="silver">Silver Sponsor</option>
          <option value="bronze">Bronze Sponsor</option>
          <option value="other">Other Sponsor</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">
          Logo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            onEdit({ logo: file });
          }}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
    </div>
  );
}