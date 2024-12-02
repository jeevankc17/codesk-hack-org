import React from 'react';

const predefinedColors = [
  '#FF0000', '#FF8000', '#00FF00', '#00FFFF', '#0080FF', '#0000FF', '#8080FF',
  '#FF0080', '#FF00FF', '#8000FF', '#808080',
];

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="space-y-3">
      <div className="h-12 w-full bg-white border border-gray-300 rounded-md overflow-hidden">
        <div
          className="h-full w-full"
          style={{ backgroundColor: value || '#FFFFFF' }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {predefinedColors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className="w-8 h-8 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            style={{ backgroundColor: color }}
          />
        ))}
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}