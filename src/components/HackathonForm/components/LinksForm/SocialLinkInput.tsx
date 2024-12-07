import React from 'react';

interface SocialLinkInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function SocialLinkInput({ id, label, value, onChange }: SocialLinkInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 uppercase">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}